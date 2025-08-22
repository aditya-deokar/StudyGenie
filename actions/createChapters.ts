"use server";

import { getVideo } from "@/configs/service";
import prisma from "@/lib/prisma";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { revalidatePath } from "next/cache";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });



export const GenerateChapterContentLayout = async (
  courseName: string,
  chapter: { ChapterName: string; About: string; }
) => {
  try {
    const CHAPTER_PROMPT = `Explain the concept in detail on Topic: ${courseName}, specific in Chapter: ${chapter.ChapterName}, cover all the chapter points like ${chapter.About} and add more. Format the response in a structured JSON format similar to the following example:
    {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://example.com/chapter.schema.json",
  "title": "Chapter Content Schema with Bloom's Taxonomy",
  "description": "Schema representing the structure of chapter content for technical courses, incorporating Bloom's Revised Taxonomy, learning resources, and duration estimates.",
  "type": "object",
  "properties": {
    "chapterId": {
      "description": "A unique identifier for the chapter",
      "type": "string"
    },
    "title": {
      "description": "The title of the chapter",
      "type": "string",
      "minLength": 1
    },
    "description": {
      "description": "A brief overview of what the chapter covers",
      "type": "string"
    },
    "estimatedDuration": {
      "description": "Estimated time to complete the entire chapter (in minutes)",
      "type": "integer",
      "minimum": 0
    },
    "contentSections": {
      "description": "An array of sections within the chapter",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "sectionId": {
            "description": "Unique identifier for the section",
            "type": "string"
          },
          "heading": {
            "description": "The heading of the section",
            "type": "string",
            "minLength": 1
          },
          "content": {
            "description": "The main content of the section, which can include text, code snippets, and images",
            "type": ["string", "array"],
            "items": {
              "type": ["string", "object"],
              "properties": {
                "textContent": {
                  "type": "string"
                },
                "codeSnippet": {
                  "type": "string"
                },
                "imageUrl": {
                  "type": "string",
                  "format": "uri"
                }
              }
            }
          },
          "examples": {
            "description": "Examples related to this section",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "exampleId": {
                  "type": "string"
                },
                "exampleDescription": {
                  "type": "string"
                },
                "exampleCode": {
                  "type": "string"
                }
              },
              "required": ["exampleId", "exampleDescription"]
            }
          },
          "exercises": {
            "description": "Exercises for students to practice, categorized by Bloom's Taxonomy level.",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "exerciseId": {
                  "type": "string"
                },
                "exerciseText": {
                  "type": "string"
                },
                "bloomLevel": {
                  "type": "string",
                  "enum": [
                    "Remembering",
                    "Understanding",
                    "Applying",
                    "Analyzing",
                    "Evaluating",
                    "Creating"
                  ],
                  "description": "Bloom's Taxonomy level for this exercise"
                },
                "exerciseCode": {
                  "type": "string"
                }
              },
              "required": ["exerciseId", "exerciseText", "bloomLevel"]
            }
          },
          "estimatedDuration": {
            "description": "Estimated time to complete this section (in minutes)",
            "type": "integer",
            "minimum": 0
          }
        },
        "required": ["sectionId", "heading", "content"]
      }
    },
    "learningObjectives": {
      "description": "Objectives students should achieve after completing the chapter, linked to Bloom's Taxonomy.",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "objectiveText": {
            "type": "string"
          },
          "bloomLevel": {
            "type": "string",
            "enum": [
              "Remembering",
              "Understanding",
              "Applying",
              "Analyzing",
              "Evaluating",
              "Creating"
            ],
            "description": "Bloom's Taxonomy level for this learning objective"
          }
        },
        "required": ["objectiveText", "bloomLevel"]
      }
    },
    "assessmentQuestions": {
      "description": "Questions to assess understanding of the chapter content, linked to Bloom's Taxonomy.",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "questionId": {
            "type": "string"
          },
          "questionText": {
            "type": "string"
          },
          "options": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "correctAnswerIndex": {
            "type": "integer"
          },
          "bloomLevel": {
            "type": "string",
            "enum": [
              "Remembering",
              "Understanding",
              "Applying",
              "Analyzing",
              "Evaluating",
              "Creating"
            ],
            "description": "Bloom's Taxonomy level for this assessment question"
          }
        },
        "required": ["questionId", "questionText", "options", "correctAnswerIndex", "bloomLevel"]
      }
    },
    "learningResources": {
      "description": "Links to external resources for further learning.",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "resourceId": {
            "type": "string",
            "description": "Unique identifier for the learning resource"
          },
          "resourceName": {
            "type": "string",
            "description": "Name of the resource"
          },
          "resourceLink": {
            "type": "string",
            "format": "uri",
            "description": "URL of the resource"
          },
          "resourceDescription": {
            "type": "string",
            "description": "Short description of the resource"
          }
        },
        "required": ["resourceId", "resourceName", "resourceLink", "resourceDescription"]
      }
    }
  },
  "required": ["chapterId", "title", "contentSections"]
}
    `;

    const result = await model.generateContent(CHAPTER_PROMPT);
   

    const response = result.response;
    const text = response.text();
    const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();


    return cleanedText;
  } catch (error: any) {
    console.error("Error generating chapter content:", error);
    throw new Error(error.message || "Failed to generate chapter content.");
  }
};


export const SaveChapterInPrisma = async ({
  courseId,
  chapterId,
  content,
  videoId = "",
}: {
  courseId: string;
  chapterId: number;
  content: any;
  videoId?: string;
}) => {
  try {
    try {
      JSON.stringify(content); 
    } catch (e:any) {
      throw new Error("Invalid JSON content: " + e.message);
    }

    const result = await prisma.chapters.create({
      data: {
        courseId,
        chapterId,
        content, // Prisma will automatically stringify this
        videoId,
      },
    });

    return result;
  } catch (error: any) {
    console.error("Error saving chapter in Prisma:", error);
    throw new Error(error.message || "Failed to save chapter in Prisma.");
  }
};


export const GenerateAndSaveAllChapters = async (course: any) => {
  try {
    const courseName = course?.name;
    const chapters = course?.courseOutput?.chapters !;

    for (let i = 0; i < chapters.length; i++) {
      const chapter = chapters[i];
      let videoId = ""
      // Add error handling around content generation
      try {
        let content = await GenerateChapterContentLayout(courseName, chapter);
        
        // Ensure content is properly formatted
        if (typeof content === "string") {
          content = JSON.parse(content); // Validate stringified JSON
        }
        
        // const videoId = "default-video-id";
        const videoResp = await getVideo(`${course.name}:${chapter.ChapterName}`)
        videoId = videoResp[0]?.id?.videoId || ""

        await SaveChapterInPrisma({
          chapterId: i + 1,
          courseId: course?.courseId,
          content,
          videoId,
        });

        console.log("Creating chapter", i + 1, "for course ID:", course.id);
      } catch (genError) {
        console.error(`Error generating chapter ${i + 1}:`, genError);
        throw new Error(`Chapter ${i + 1} generation failed`);
      }
    }

    // 4. Mark course as published
    await prisma.courseList.update({
      //Change course to courselist
      where: { id: course.id }, //change courseId to id
      data: { publish: true },
    });

    revalidatePath(`/course/create-course/${course.id}/finish`);
  } catch (error: any) {
    console.error("Error generating and saving all chapters:", error);
    throw new Error(
      error.message || "Failed to generate and save all chapters."
    );
  }
};


export async function getChapter(courseId: string, chapterId: number) {
  try {
    const chapter = await prisma.chapters.findFirst({
      where: {
        courseId,
        chapterId,
      },
    });

    if (!chapter) return null;

    
    return {
      ...chapter,
      content: chapter.content, 
    };
  } catch (error) {
    console.error("Error fetching chapter:", error);
    return null;
  }
}
