export type IndustryInsightsType = {
    industryName: string;
    overview: string;
    salaryRange: {
      role: string;
      min: number;
      max: number;
      median: number;
      location: string;
    }[];
    salaryFactors: {
      description: string;
      factors: {
        factorName: string;
        factorDescription: string;
      }[];
    };
    growthRate: number;
    keyGrowthDrivers: {
      description: string;
      drivers: {
        driverName: string;
        driverDescription: string;
      }[];
    };
    demandLevel: "HIGH" | "MEDIUM" | "LOW";
    topSkills: string[];
    marketOutlook: "POSITIVE" | "NEUTRAL" | "NEGATIVE";
    keyTrends: string[];
    recommendedSkills: string[];
    entryLevelOutlook: {
      prospects: string;
      commonRoles: string[];
      advice: string;
    };
    educationalPathways: {
      degrees: string[];
      certifications: string[];
      alternativeRoutes: string[];
    };
    internshipOpportunities: {
      availability: "HIGH" | "MEDIUM" | "LOW";
      commonAreas: string[];
      timing: string;
    };
    tipsForSecuringInternships: string[];
    challenges: string[];
    marketGrowthProjections: {
      description: string;
      data: {
        year: number;
        market: number;
        jobs: number;
      }[];
      chartConfig: {
        market: {
          label: string;
          color: string;
        };
        jobs: {
          label: string;
          color: string;
        };
      };
    };
    careerProgressionExamples: string[];
    keyCompaniesHiring: string[];
  };
  