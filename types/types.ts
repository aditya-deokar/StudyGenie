export interface SalaryRange {
    role: string;
    min: number;
    max: number;
    median: number;
    location: string;
}

export interface Insights {
    id: string;
    industry: string;
    salaryRange: SalaryRange[]; // Ensures salaryRange is properly typed
    growthRate: number;
    demandLevel: string;
    topSkills: string[];
    marketOutlook: string;
    keyTrends: string[];
    recommendedSkills: string[];
    lastUpdated: string; // Ensure it’s in ISO string format
    nextUpdate: string;  // Ensure it’s in ISO string format
}





export interface CourseInput {
    category?: string;
    topic?: string;
    description?: string;
    level?: string;
    duration?: string;
    video?: string;
    noOfChapter?: number;
  }


  export interface CourseLayout {
    CourseName: string;
    Description: string;
    chapters: Chapter[];
  }

  interface Chapter {
    ChapterName: string;
    About: string;
    duration: string;
  }

  export interface CategoryItem {
    id: number;
    name: string;
    icon: string;
    prompt: string;
  }



export interface CourseOutput {
    CourseName: string;
    Description: string;
    Duration: string;
    NoOfChapters: number;
    Chapters: Chapter[];
}

export interface Course {
    id: number;
    courseId: string;
    createdBy: string;
    courseOutput: CourseOutput;
    category: string;
    level: string;
    includeVideo: boolean;
    publish: boolean;
    
}

export interface ChapterContent {
  title: string;
  description: string;
  codeExample?: string; // Optional, as not all chapters might have code examples
}

export interface CourseWithChapters extends Course {
  Chapters: any[] 
}