import { z } from "zod";

// Zod schemas for data validation

// --- Reusable Detail Schema ---
export const DetailItemSchema = z.object({
  name: z.string(), 
  description: z.string(),
});

// --- Salary Factors Schemas ---
export const SalaryFactorDetailSchema = z.object({
  factorName: z.string(), 
  factorDescription: z.string(),
});

export const SalaryFactorsSchema = z.object({
  description: z.string(),
  factors: z.array(SalaryFactorDetailSchema).min(1),
});

// --- Key Growth Drivers Schemas ---
export const KeyGrowthDriverDetailSchema = z.object({
  driverName: z.string(), 
  driverDescription: z.string(),
});

export const KeyGrowthDriversSchema = z.object({
  description: z.string(),
  drivers: z.array(KeyGrowthDriverDetailSchema).min(1),
});

// --- Market Growth Projections Schemas ---
export const MarketGrowthDataPointSchema = z.object({
  year: z.number().int(),
  market: z.number(),
  jobs: z.number(),
}).catchall(z.number());

export const ChartConfigItemSchema = z.object({
  label: z.string(),
  color: z.string(),
});

export const MarketGrowthProjectionsSchema = z.object({
  description: z.string(),
  data: z.array(MarketGrowthDataPointSchema).min(1),
  chartConfig: z.record(z.string(), ChartConfigItemSchema),
});

// --- Core Schemas ---
export const SalaryRangeSchema = z.object({
  role: z.string(),
  min: z.number().nonnegative(),
  max: z.number().nonnegative(),
  median: z.number().nonnegative(),
  location: z.string(),
});

export const EntryLevelOutlookSchema = z.object({
  prospects: z.string(),
  commonRoles: z.array(z.string()),
  advice: z.string(),
});

export const EducationalPathwaysSchema = z.object({
  degrees: z.array(z.string()),
  certifications: z.array(z.string()),
  alternativeRoutes: z.array(z.string()),
});

export const InternshipOpportunitiesSchema = z.object({
  availability: z.enum(["HIGH", "MEDIUM", "LOW"]),
  commonAreas: z.array(z.string()),
  timing: z.string(),
});

// --- Main Industry Data Schema ---
export const IndustryDataSchema = z.object({
  industryName: z.string(),
  overview: z.string(),
  salaryRange: z.array(SalaryRangeSchema),
  salaryFactors: SalaryFactorsSchema,
  growthRate: z.number(),
  keyGrowthDrivers: KeyGrowthDriversSchema, 
  demandLevel: z.enum(["HIGH", "MEDIUM", "LOW"]),
  topSkills: z.array(z.string()).min(1),
  marketOutlook: z.enum(["POSITIVE", "NEUTRAL", "NEGATIVE"]),
  keyTrends: z.array(z.string()).min(1),
  recommendedSkills: z.array(z.string()).min(1),
  entryLevelOutlook: EntryLevelOutlookSchema,
  educationalPathways: EducationalPathwaysSchema,
  internshipOpportunities: InternshipOpportunitiesSchema,
  tipsForSecuringInternships: z.array(z.string()).min(1),
  challenges: z.array(z.string()).min(1),
  marketGrowthProjections: MarketGrowthProjectionsSchema, 
  careerProgressionExamples: z.array(z.string()),
  keyCompaniesHiring: z.array(z.string()),
});



// TypeScript types derived from Zod schemas
export type DetailItem = z.infer<typeof DetailItemSchema>;
export type SalaryFactorDetail = z.infer<typeof SalaryFactorDetailSchema>;
export type SalaryFactors = z.infer<typeof SalaryFactorsSchema>;
export type KeyGrowthDriverDetail = z.infer<typeof KeyGrowthDriverDetailSchema>;
export type KeyGrowthDrivers = z.infer<typeof KeyGrowthDriversSchema>;
export type MarketGrowthDataPoint = z.infer<typeof MarketGrowthDataPointSchema>;
export type ChartConfigItem = z.infer<typeof ChartConfigItemSchema>;
export type MarketGrowthProjections = z.infer<
  typeof MarketGrowthProjectionsSchema
>;
export type SalaryRange = z.infer<typeof SalaryRangeSchema>;
export type EntryLevelOutlook = z.infer<typeof EntryLevelOutlookSchema>;
export type EducationalPathways = z.infer<typeof EducationalPathwaysSchema>;
export type InternshipOpportunities = z.infer<
  typeof InternshipOpportunitiesSchema
>;


export type IndustryData = z.infer<typeof IndustryDataSchema>; // This type now includes all nested types





export interface ActivityDay {
  date: string
  activityLevel: 0 | 1 | 2 | 3 | 4
}


export type ActivityHeatmapData = ActivityDay[]
