'use client';

import { BarChart3, BookOpen, Clock3, VideoIcon } from 'lucide-react';
import React from 'react';
import { Course } from '@/types/types';
import { CourseListType } from '@/types/courseList';

interface CourseDetailProps {
  course: CourseListType | null;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ course }) => {
    
  

  return course ? (
    <div className="border p-6 rounded-xl shadow-sm mt-3">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <div className="flex gap-2 items-center">
          <BarChart3 className="text-4xl text-primary" />
          <div>
            <h2 className="text-xs text-secondary-foreground">Skill Level</h2>
            <h2 className="font-medium text-lg">{course?.level}</h2>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <Clock3 className="text-4xl text-primary" />
          <div>
            <h2 className="text-xs text-secondary-foreground">Duration</h2>
            <h2 className="font-medium text-lg">{course?.courseOutput?.duration}</h2>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <BookOpen className="text-4xl text-primary" />
          <div>
            <h2 className="text-xs text-secondary-foreground">Chapters</h2>
            <h2 className="font-medium text-lg">{course?.courseOutput?.noOfChapters}</h2>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <VideoIcon className="text-4xl text-primary" />
          <div>
            <h2 className="text-xs text-secondary-foreground">Video Included</h2>
            <h2 className="font-medium text-lg">{course?.includeVideo}</h2>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full bg-slate-200 animate-pulse rounded-lg h-[70px] mt-5" />
  );
};

export default CourseDetail;
