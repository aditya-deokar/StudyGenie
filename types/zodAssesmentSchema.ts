import { z } from "zod"

// Define a schema for an individual option within a question.
export const OptionSchema = z.object({
  id: z.string().describe("Unique identifier for this option (e.g., 'A', 'B', '1')."),
  text: z.string().describe("The text content of this answer option."),
})

// Define a schema for a single MCQ.
export const QuestionSchema = z.object({
  id: z.string().describe("A unique identifier for the question (e.g., 'py-basics-001')."),
  topic: z
    .string()
    .describe("The general topic the question relates to (e.g., 'Basic Types', 'Generics', 'Interfaces').")
    .optional(),
  difficulty: z.enum(["Easy", "Medium", "Hard"]).describe("Estimated difficulty level of the question.").optional(),
  questionText: z.string().describe("The text content of the multiple-choice question."),
  options: z.array(OptionSchema).min(2).describe("An array containing the possible answer choices."),
  correctAnswerId: z
    .string()
    .describe("The 'id' of the option object within the 'options' array that represents the correct answer."),
  explanation: z
    .string()
    .describe("An optional explanation for why the correct answer is right, often shown after submission.")
    .optional(),
})

// Define a schema for the entire assessment, which is an array of questions.
export const AssessmentSchema = z.array(QuestionSchema)

// Certificate data schema
export const CertificateDataSchema = z.object({
  userName: z.string().describe("The name of the user to display on the certificate"),
  quizTitle: z.string().describe("The title of the quiz or assessment"),
  score: z.object({
    percentage: z.number().describe("The percentage score achieved"),
    correct: z.number().describe("The number of correct answers"),
    total: z.number().describe("The total number of questions"),
  }),
  completionDate: z.date().describe("The date when the quiz was completed"),
  template: z.string().optional().describe("The certificate template to use"),
})

// Export the types for use elsewhere in your application.
export type Option = z.infer<typeof OptionSchema>
export type Question = z.infer<typeof QuestionSchema>
export type Assessment = z.infer<typeof AssessmentSchema>
export type CertificateData = z.infer<typeof CertificateDataSchema>
