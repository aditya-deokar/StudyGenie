"use server";

import { getVideo } from "@/configs/service";
import prisma from "@/lib/prisma";
import chapterSchema from "@/types/zodChapterSchema";
import { google } from "@ai-sdk/google";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { generateObject } from "ai";
import { revalidatePath } from "next/cache";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });


export const GenerateChapterContentLayout = async (
  courseName: string,
  chapter: { ChapterName: string; About: string; }
) => {
  try {
    

    const { object } = await generateObject({
      model: google("gemini-2.0-flash-001", {
        structuredOutputs: false,
      }),
      schema: chapterSchema,
      prompt: `Explain the concept in detail on Topic: ${courseName}, specific in Chapter: ${chapter.ChapterName}, cover all the chapter points like ${chapter.About} and add more. Ensure content is properly formatted, Format the response in a structured JSON format similar to the following example:
      {
      "chapterId": "CH008",
      "title": "Collections Framework: Working with Lists, Sets, and Maps",
      "description": "Explore the Java Collections Framework, understanding the different types of collections, their properties, and when to use each one.  Learn about Lists, Sets, Maps, and their common implementations. Also, dive into advanced concepts like iterators, comparators, and custom collection implementations.",
      "estimatedDuration": 120,
      "contentSections": [
        {
          "sectionId": "CS008-1",
          "heading": "Introduction to the Java Collections Framework",
          "content": [
            {
              "textContent": "The Java Collections Framework (JCF) provides a unified architecture for representing and manipulating groups of objects. It reduces programming effort while increasing performance and provides interoperability between unrelated APIs. Key interfaces include Collection, List, Set, and Map."
            },
            {
              "codeSnippet": "import java.util.*; // Import the entire Collections Framework"
            }
          ],
          "examples": [
            {
              "exampleId": "EX008-1-1",
              "exampleDescription": "Illustrate the basic structure of a collection.",
              "exampleCode": "// Example of creating a Collection (using ArrayList)\nCollection<String> myCollection = new ArrayList<>();"
            }
          ],
          "exercises": [
            {
              "exerciseId": "EX008-1-2",
              "exerciseText": "Define the difference between the Collection interface and the Collections class.",
              "bloomLevel": "Remembering"
            },
            {
              "exerciseId": "EX008-1-3",
              "exerciseText": "Explain in your own words why Java needs a Collections Framework.",
              "bloomLevel": "Understanding"
            }
          ],
          "estimatedDuration": 15
        },
        {
          "sectionId": "CS008-2",
          "heading": "Lists: Ordered Collections with Duplicates Allowed",
          "content": [
            {
              "textContent": "Lists are ordered collections that allow duplicate elements. Common implementations include ArrayList and LinkedList. ArrayList provides fast random access, while LinkedList offers efficient insertion and deletion. Learn about adding, removing, accessing, and iterating through list elements."
            }
          ],
          "examples": [
            {
              "exampleId": "EX008-2-1",
              "exampleDescription": "Demonstrate creating an ArrayList and adding elements.",
              "exampleCode": "// Creating an ArrayList\nList<String> names = new ArrayList<>();\nnames.add(\"Alice\");\nnames.add(\"Bob\");\nnames.add(\"Alice\"); // Duplicates allowed"
            },
            {
              "exampleId": "EX008-2-2",
              "exampleDescription": "Demonstrate creating an LinkedList and adding elements.",
              "exampleCode": "// Creating a LinkedList\nList<String> linkedNames = new LinkedList<>();\nlinkedNames.add(\"Alice\");\nlinkedNames.add(\"Bob\");\nlinkedNames.add(\"Alice\");"
            }
          ],
          "exercises": [
            {
              "exerciseId": "EX008-2-3",
              "exerciseText": "Implement a method to remove duplicates from an ArrayList while preserving the original order.",
              "bloomLevel": "Applying",
              "exerciseCode": "// Given: ArrayList<String> names\n// Implement: removeDuplicates(names)"
            },
            {
              "exerciseId": "EX008-2-4",
              "exerciseText": "Explain the performance differences between ArrayList and LinkedList for insertion and retrieval operations.  When is each most appropriate?",
              "bloomLevel": "Analyzing"
            }
          ],
          "estimatedDuration": 25
        },
        {
          "sectionId": "CS008-3",
          "heading": "Sets: Unordered Collections with No Duplicates Allowed",
          "content": [
            {
              "textContent": "Sets are unordered collections that do not allow duplicate elements. Common implementations include HashSet, LinkedHashSet, and TreeSet. HashSet offers fast lookups, LinkedHashSet maintains insertion order, and TreeSet provides elements in sorted order. Learn about adding, removing, checking for membership, and iterating through set elements."
            }
          ],
          "examples": [
            {
              "exampleId": "EX008-3-1",
              "exampleDescription": "Demonstrate creating a HashSet and adding elements.",
              "exampleCode": "// Creating a HashSet\nSet<String> uniqueNames = new HashSet<>();\nuniqueNames.add(\"Alice\");\nuniqueNames.add(\"Bob\");\nuniqueNames.add(\"Alice\"); // Duplicate is ignored"
            },
            {
              "exampleId": "EX008-3-2",
              "exampleDescription": "Demonstrate creating a TreeSet to store elements in sorted order.",
              "exampleCode": "// Creating a TreeSet\nSet<String> sortedNames = new TreeSet<>();\nsortedNames.add(\"Charlie\");\nsortedNames.add(\"Alice\");\nsortedNames.add(\"Bob\");"
            }
          ],
          "exercises": [
            {
              "exerciseId": "EX008-3-3",
              "exerciseText": "Implement a method to find the intersection of two sets.",
              "bloomLevel": "Applying",
              "exerciseCode": "// Given: Set<Integer> set1, Set<Integer> set2\n// Implement: findIntersection(set1, set2)"
            },
            {
              "exerciseId": "EX008-3-4",
              "exerciseText": "Explain when you would choose a HashSet, LinkedHashSet, or TreeSet, considering their performance characteristics and ordering properties.",
              "bloomLevel": "Analyzing"
            }
          ],
          "estimatedDuration": 30
        },
        {
          "sectionId": "CS008-4",
          "heading": "Maps: Key-Value Pair Collections",
          "content": [
            {
              "textContent": "Maps store data in key-value pairs, where each key is unique. Common implementations include HashMap, LinkedHashMap, and TreeMap. HashMap provides fast lookups based on keys, LinkedHashMap maintains insertion order, and TreeMap provides entries in sorted order based on keys. Learn about adding, retrieving, removing, and iterating through map entries."
            }
          ],
          "examples": [
            {
              "exampleId": "EX008-4-1",
              "exampleDescription": "Demonstrate creating a HashMap and adding key-value pairs.",
              "exampleCode": "// Creating a HashMap\nMap<String, Integer> ageMap = new HashMap<>();\nageMap.put(\"Alice\", 30);\nageMap.put(\"Bob\", 25);"
            },
            {
              "exampleId": "EX008-4-2",
              "exampleDescription": "Demonstrate using a TreeMap to store elements in sorted order based on keys.",
              "exampleCode": "// Creating a TreeMap\nMap<String, Integer> sortedAgeMap = new TreeMap<>();\nsortedAgeMap.put(\"Charlie\", 35);\nsortedAgeMap.put(\"Alice\", 30);\nsortedAgeMap.put(\"Bob\", 25);"
            }
          ],
          "exercises": [
            {
              "exerciseId": "EX008-4-3",
              "exerciseText": "Implement a method to count the frequency of each word in a given string using a Map.",
              "bloomLevel": "Applying",
              "exerciseCode": "// Given: String text\n// Implement: countWordFrequencies(text)"
            },
            {
              "exerciseId": "EX008-4-4",
              "exerciseText": "Compare and contrast HashMap, LinkedHashMap, and TreeMap. When would you use each one?",
              "bloomLevel": "Analyzing"
            }
          ],
          "estimatedDuration": 30
        },
        {
          "sectionId": "CS008-5",
          "heading": "Iterators: Accessing Collection Elements",
          "content": [
            {
              "textContent": "Iterators are used to traverse elements in a collection. They provide a standard way to access elements sequentially without exposing the underlying implementation. Learn how to use iterators for Lists, Sets, and Maps, including removing elements during iteration."
            }
          ],
          "examples": [
            {
              "exampleId": "EX008-5-1",
              "exampleDescription": "Demonstrate using an iterator to traverse an ArrayList.",
              "exampleCode": "// Iterating through an ArrayList using an Iterator\nList<String> names = new ArrayList<>();\nnames.add(\"Alice\");\nnames.add(\"Bob\");\nIterator<String> iterator = names.iterator();\nwhile (iterator.hasNext()) {\n  String name = iterator.next();\n  System.out.println(name);\n}"
            }
          ],
          "exercises": [
            {
              "exerciseId": "EX008-5-2",
              "exerciseText": "Write a method to iterate through a List and remove elements that satisfy a given condition.",
              "bloomLevel": "Applying",
              "exerciseCode": "// Given: List<Integer> numbers, Predicate<Integer> condition\n// Implement: removeIf(numbers, condition)"
            },
            {
              "exerciseId": "EX008-5-3",
              "exerciseText": "Explain the advantages of using an Iterator over a traditional for loop when traversing collections.",
              "bloomLevel": "Understanding"
            }
          ],
          "estimatedDuration": 10
        },
            {
          "sectionId": "CS008-6",
          "heading": "Comparators and Comparable: Custom Sorting",
          "content": [
            {
              "textContent": "Learn to define custom sorting logic using Comparators and the Comparable interface. Understand how to sort collections based on specific criteria, such as sorting objects by name, age, or any other attribute."
            },
            {
              "codeSnippet": "//Example using Collections.sort with a Comparator\n Collections.sort(myList, new MyObjectComparator());"
            }
          ],
          "examples": [
            {
              "exampleId": "EX008-6-1",
              "exampleDescription": "Sort a list of Person objects by age using a Comparator.",
              "exampleCode": "// Sample code demonstrating a Person Comparator"
            }
          ],
          "exercises": [
            {
              "exerciseId": "EX008-6-2",
              "exerciseText": "Create a class that implements the Comparable interface. Then, sort a collection with these objects.",
              "bloomLevel": "Creating"
            },
            {
              "exerciseId": "EX008-6-3",
              "exerciseText": "Differentiate between Comparable and Comparator interfaces, and explain when to use each one.",
              "bloomLevel": "Understanding"
            }
          ],
          "estimatedDuration": 10
        },
          {
          "sectionId": "CS008-7",
          "heading": "Custom Collection Implementations (Advanced)",
          "content": [
            {
              "textContent": "Explore building your own custom Collection classes to suit specific needs. Learn about tradeoffs between performance, memory usage, and functionality. Understand internal mechanics of collection classes."
            }
          ],
          "examples": [
            {
              "exampleId": "EX008-7-1",
              "exampleDescription": "Implement a simple fixed-size list with limited operations.",
              "exampleCode": "// Sample code of a simple fixed-size list"
            }
          ],
          "exercises": [
            {
              "exerciseId": "EX008-7-2",
              "exerciseText": "Create a custom collection that supports O(1) average-case complexity for insert, delete, and getRandom operations.",
              "bloomLevel": "Creating"
            },
            {
              "exerciseId": "EX008-7-3",
              "exerciseText": "Discuss when you might consider building your own custom collection instead of using Java's built-in collections.",
              "bloomLevel": "Analyzing"
            }
          ],
          "estimatedDuration": 10
        }
      ],
      "learningObjectives": [
        {
          "objectiveText": "Understand the purpose and benefits of the Java Collections Framework.",
          "bloomLevel": "Understanding"
        },
        {
          "objectiveText": "Differentiate between Lists, Sets, and Maps and choose appropriate implementations for specific use cases.",
          "bloomLevel": "Analyzing"
        },
        {
          "objectiveText": "Implement common collection operations, such as adding, removing, and retrieving elements.",
          "bloomLevel": "Applying"
        },
        {
          "objectiveText": "Use iterators to traverse and manipulate collection elements.",
          "bloomLevel": "Applying"
        },
        {
          "objectiveText": "Implement custom sorting using Comparators and the Comparable interface.",
          "bloomLevel": "Creating"
        } ,
          {
          "objectiveText": "Design and implement custom Collection classes.",
          "bloomLevel": "Creating"
        }
      ],
      "assessmentQuestions": [
        {
          "questionId": "AQ008-1",
          "questionText": "Which collection type guarantees uniqueness of elements?",
          "options": ["List", "Set", "Map", "Queue"],
          "correctAnswerIndex": 1,
          "bloomLevel": "Remembering"
        },
        {
          "questionId": "AQ008-2",
          "questionText": "Which collection type provides key-value pair storage?",
          "options": ["List", "Set", "Map", "Queue"],
          "correctAnswerIndex": 2,
          "bloomLevel": "Remembering"
        }
      ],
      "learningResources": [
        {
          "resourceId": "LR008-1",
          "resourceName": "Java Collections Framework Tutorial",
          "resourceLink": "https://docs.oracle.com/javase/8/docs/technotes/guides/collections/index.html",
          "resourceDescription": "Official Oracle tutorial on the Java Collections Framework."
        },
        {
          "resourceId": "LR008-2",
          "resourceName": "Java Collections - Tutorialspoint",
          "resourceLink": "https://www.tutorialspoint.com/java/java_collections.htm",
          "resourceDescription": "A tutorial explaining various aspects of Java collections with examples."
        }
      ]
}
        `
             });


    return object ;


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
        content, 
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
    const chapters = course?.courseOutput?.chapters!;

    for (let i = 0; i < chapters.length; i++) {
      const chapter = chapters[i];
      let videoId = "";
      
      // Check if chapter already exists in the database
      const existingChapter = await prisma.chapters.findFirst({
        where: {
          chapterId: i + 1,
          courseId: course?.courseId
        }
      });

      // If chapter exists, skip generation
      if (existingChapter) {
        console.log(`Chapter ${i + 1} already exists for course ID: ${course.id}. Skipping generation.`);
        continue;
      }
      
      // Add error handling around content generation
      try {
        let content = await GenerateChapterContentLayout(courseName, chapter);
        
        // Ensure content is properly formatted
        if (typeof content === "string") {
          content = JSON.parse(content); // Validate stringified JSON
        }
        
        const videoResp = await getVideo(`${course.name}:${chapter.ChapterName}`);
        videoId = videoResp[0]?.id?.videoId || "";

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

    // Mark course as published
    await prisma.courseList.update({
      where: { id: course.id },
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
