// schema.ts
import { z } from "zod";



export const onboardingSchema = z.object({
  industry: z.string({
    required_error: "Please select an industry.",
  }).min(1, "Please select an industry."), 

  subIndustry: z.string({
    required_error: "Please select specialization.",
  }).min(1, "Please select specialization."), 

  bio: z.string().max(500, "Bio cannot exceed 500 characters.").optional(),

  experience: z
    .string({
        required_error: "Please enter your years of experience." 
    })
    .refine((val) => /^\d+$/.test(val), { // Ensure it's a string of digits first
        message: "Experience must be a non-negative number.",
    })
    .transform((val) => parseInt(val, 10))
    .pipe(
      z
        .number({ invalid_type_error: "Experience must be a number." })
        .int("Experience must be a whole number.")
        .min(0, "Experience must be at least 0 years.")
        .max(50, "Experience cannot exceed 50 years.")
    ),

  skills: z
    .string()
    .optional() // Make the base string optional first
    .transform((val) =>
      val // Check if val exists and is not empty
        ? val
            .split(",")
            .map((skill) => skill.trim())
            .filter((skill): skill is string => Boolean(skill)) // Ensure only non-empty strings
        : [] // Default to empty array if input is undefined or empty string
    ).pipe(z.array(z.string()).optional()), // Validate the result is an array of strings (optional)
});

// Type representing the data *after* validation and transformation
export type OnboardingData = z.infer<typeof onboardingSchema>;

// Optional: Type representing the raw input data *before* validation/transformation
// Useful for typing form state directly
export type OnboardingInput = z.input<typeof onboardingSchema>;

