export type ChaptersType = {
    id: number;
    courseId: string;
    chapterId: number;
    content: ContentType;
    videoId: string;
    
};

export type ContentType = {
    chapterId: string;
    title: string;
    description: string;
    estimatedDuration: number;
    contentSections: ContentSectionType[];
    learningObjectives: LearningObjectiveType[];
    assessmentQuestions: AssessmentQuestionType[];
    learningResources: LearningResourceType[];
};

export type ContentSectionType = {
    sectionId: string;
    heading: string;
    content: ( string | { textContent: string; codeSnippet?: string; imageUrl?: string })[];
    examples: ExampleType[];
    exercises: ExerciseType[];
    estimatedDuration: number;
};

export type ExampleType = {
    exampleId: string;
    exampleDescription: string;
    exampleCode: string;
};

export type ExerciseType = {
    exerciseId: string;
    exerciseText: string;
    bloomLevel: "Remembering" | "Understanding" | "Applying" | "Analyzing" | "Evaluating" | "Creating";
    exerciseCode?: string;
};

export type LearningObjectiveType = {
    objectiveText: string;
    bloomLevel: "Remembering" | "Understanding" | "Applying" | "Analyzing" | "Evaluating" | "Creating";
};

export type AssessmentQuestionType = {
    questionId: string;
    questionText: string;
    options: string[];
    correctAnswerIndex: number;
    bloomLevel: "Remembering" | "Understanding" | "Applying" | "Analyzing" | "Evaluating" | "Creating";
};

export type LearningResourceType = {
    resourceId: string;
    resourceName: string;
    resourceLink: string;
    resourceDescription: string;
};



