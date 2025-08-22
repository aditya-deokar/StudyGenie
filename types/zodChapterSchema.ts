import { z } from "zod";

const bloomLevelEnum = z.enum([
  "Remembering",
  "Understanding",
  "Applying",
  "Analyzing",
  "Evaluating",
  "Creating",
]);

const chapterSchema = z.object({
  chapterId: z.string().describe("A unique identifier for the chapter"),
  title: z.string().min(1).describe("The title of the chapter"),
  description: z.string().optional().describe("A brief overview of what the chapter covers"),
  estimatedDuration: z.number().int().min(0).optional().describe("Estimated time to complete the entire chapter (in minutes)"),
  contentSections: z.array(
    z.object({
      sectionId: z.string().describe("Unique identifier for the section"),
      heading: z.string().min(1).describe("The heading of the section"),
      content: z.union([
          z.string(),
          z.array(
              z.union([
                  z.string(),
                  z.object({
                      textContent: z.string().optional().describe("Explain the Topic in simple words in detailed"),
                      codeSnippet: z.string().optional(),
                      imageUrl: z.string().url().optional(),
                  }).optional(),
              ]).optional()
          )
      ]).describe("The main content of the section, which can include text, code snippets, and images"),
      examples: z.array(
        z.object({
          exampleId: z.string(),
          exampleDescription: z.string(),
          exampleCode: z.string().optional(),
        }).required({ exampleId: true, exampleDescription: true })
      ).optional().describe("Examples related to this section"),
      exercises: z.array(
        z.object({
          exerciseId: z.string(),
          exerciseText: z.string(),
          bloomLevel: bloomLevelEnum.describe("Bloom's Taxonomy level for this exercise"),
          exerciseCode: z.string().optional(),
        }).required({ exerciseId: true, exerciseText: true, bloomLevel: true })
      ).optional().describe("Exercises for students to practice, categorized by Bloom's Taxonomy level."),
      estimatedDuration: z.number().int().min(0).optional().describe("Estimated time to complete this section (in minutes)"),
    }).required({ sectionId: true, heading: true, content: true })
  ).describe("An array of sections within the chapter"),
  learningObjectives: z.array(
    z.object({
      objectiveText: z.string(),
      bloomLevel: bloomLevelEnum.describe("Bloom's Taxonomy level for this learning objective"),
    }).required({ objectiveText: true, bloomLevel: true })
  ).optional().describe("Objectives students should achieve after completing the chapter, linked to Bloom's Taxonomy."),
  assessmentQuestions: z.array(
    z.object({
      questionId: z.string(),
      questionText: z.string(),
      options: z.array(z.string()),
      correctAnswerIndex: z.number().int(),
      bloomLevel: bloomLevelEnum.describe("Bloom's Taxonomy level for this assessment question"),
    }).required({ questionId: true, questionText: true, options: true, correctAnswerIndex: true, bloomLevel: true })
  ).optional().describe("Questions to assess understanding of the chapter content, linked to Bloom's Taxonomy."),
  learningResources: z.array(
    z.object({
      resourceId: z.string().describe("Unique identifier for the learning resource"),
      resourceName: z.string().describe("Name of the resource"),
      resourceLink: z.string().url().describe("URL of the resource"),
      resourceDescription: z.string().describe("Short description of the resource"),
    }).required({ resourceId: true, resourceName: true, resourceLink: true, resourceDescription: true })
  ).optional().describe("Links to external resources for further learning."),
}).required({ chapterId: true, title: true, contentSections: true });

export type Chapter = z.infer<typeof chapterSchema>;

export default chapterSchema;