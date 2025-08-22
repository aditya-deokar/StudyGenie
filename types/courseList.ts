export type CourseListType = {
    id: string;  // Assuming UUID
    courseId: string; // Assuming UUID
    name: string;
    category: string;
    level: string;
    includeVideo: string;
    courseOutput: {
      level: string;
      category: string;
      chapters: ChapterType[];
      duration: string;
      courseName: string;
      description: string;
      topic: string;
      noOfChapters: number;
    };
    createdBy: string;
    publish: boolean;
    userName: string | null;
    userProfileImage: string | null;
    courseBanner: string;
  
  };
  
  export type ChapterType = {
    ChapterName: string;
    About: string;
    duration: string;
  }




  