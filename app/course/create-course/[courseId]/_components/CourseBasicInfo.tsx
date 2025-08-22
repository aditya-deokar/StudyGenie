'use client';

import { Button } from '@/components/ui/button';
import { ChartNoAxesGantt } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { CourseListType } from '@/types/courseList';

type CourseBasicInfoProps = {
  course: CourseListType | null;
  refreshData: (force?: boolean) => void;
  edit?: boolean;
};

const CourseBasicInfo: React.FC<CourseBasicInfoProps> = ({ course, refreshData, edit = true }) => {


  console.log(course);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const onFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSelectedFile(URL.createObjectURL(file));

    const fileName = Date.now() + '.jpg';
    // const storageRef = ref(storage, fileName);
    // TODO: Handle upload logic here if needed
  };

  // const courseMeta = course?.courseOutput?.[0];

  return course ? (
    <div className="p-10 border rounded-xl shadow-sm mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <h2 className="font-bold text-2xl">
            {course?.name}
            
          </h2>
          <p className="text-sm text-gray-400 mt-3">{course?.courseOutput?.description}</p>

          <div className="flex justify-between w-full mt-4">
            <h2 className="flex gap-1 font-medium items-center text-muted-foreground">
              <ChartNoAxesGantt className="w-4 h-4" />
              {course?.category}
            </h2>

            <h2 className="px-3 text-sm text-secondary-foreground border-2 rounded-xl">
              {course?.level}
            </h2>
          </div>

          {!edit && (
            <Link href={`/course/${course.courseId}/start`}>
              <Button className="w-full mt-5">Start</Button>
            </Link>
          )}
        </div>

        <div>
          <label htmlFor="upload-image">
            <Image
              src={selectedFile || '/file.svg'}
              width={300}
              height={300}
              alt="Course banner"
              className="w-full rounded-2xl h-[240px] object-contain cursor-pointer"
            />
            {edit && (
              <input
                type="file"
                id="upload-image"
                className="opacity-0"
                onChange={onFileSelected}
              />
            )}
          </label>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full bg-slate-200 animate-pulse rounded-lg h-[300px]" />
  );
};

export default CourseBasicInfo;
