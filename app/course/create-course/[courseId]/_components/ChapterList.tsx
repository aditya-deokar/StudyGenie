'use client';

import { CheckCircle, Clock } from 'lucide-react';
import React from 'react';

import { CourseListType } from '@/types/courseList';


type ChapterListProps = {
  course: CourseListType | null;
  refreshData: () => void;
  edit?: boolean;
};

const ChapterList: React.FC<ChapterListProps> = ({ course, refreshData, edit = true }) => {
  const chapters = course?.courseOutput?.chapters !;
  // console.log(chapters)

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold">Chapters</h2>

      <div className="mt-5 space-y-4">
        {chapters.length > 0 ? (
          chapters.map((chapter, index) => (
            <div key={index} className="border p-5 rounded-lg flex items-center justify-between shadow-sm">
              <div className="flex gap-5 items-center">
                <div className="bg-primary h-10 w-10 p-2 text-primary-foreground rounded-full text-center flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-lg">
                      {chapter?.ChapterName}
                    </h3>
                   
                   
                  </div>
                  <p className="text-sm mt-1 text-secondary-foreground">
                    {chapter?.About}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                    <Clock className="w-4 h-4" /> {chapter?.duration}
                  </div>
                </div>
              </div>

              <CheckCircle className="text-2xl text-green-500" />
            </div>
          ))
        ) : (
          // Skeletons while loading
          [1, 2, 3].map((_, i) => (
            <div key={i} className="w-full bg-gray-200 animate-pulse rounded-lg h-[100px] mt-3" />
          ))
        )}
      </div>
    </div>
  );
};

export default ChapterList;
