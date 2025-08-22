import { BookOpen, EllipsisVertical } from "lucide-react";
import Image from "next/image";

import Link from "next/link";

import { CourseList } from "@prisma/client";
import { CourseOutput } from "@/types/courseOutput"; // Ensure this type matches your actual structure
import DropDownOption from "./DropDownOption";

interface CourseCardProps {
  course: CourseList & {
    courseOutput: CourseOutput[] | null; // now it's an array (based on your structure)
  };
  refreshData: () => void;
  displayUser?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, refreshData, displayUser = false }) => {
  const layout = course.courseOutput?.[0]; // Access the first item in courseOutput

  const handleOnDelete = async () => {
    try {
      // Delete logic should happen in server action (not in client component)
      console.warn("Move delete logic to a server action.");
      refreshData();
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  return (
    <Link href={`/course/${course.courseId}`} className="">
      <div className="shadow-md p-2 mt-4 rounded-lg hover:-translate-y-2 border hover:border-2 cursor-pointer transition-all duration-300">
        {course.courseBanner && (
          <Image
            src={course.courseBanner}
            width={300}
            height={200}
            alt="banner"
            className="h-[200px] w-full object-contain rounded-xl"
          />
        )}

        <div className="p-2">
          <h2 className="font-medium text-lg flex justify-between items-center">
            {layout?.CourseName || "Untitled Course"}

            {!displayUser && (
              <DropDownOption handleOnDelete={handleOnDelete}>
                <EllipsisVertical />
              </DropDownOption>
            )}
          </h2>
          <p className="text-primary/50 text-sm my-1">{course.category}</p>

          <div className="flex items-center justify-between">
            <h2 className="flex gap-2 items-center p-1 bg-purple-200 rounded text-primary text-sm">
              <BookOpen />
              {layout?.Chapters?.length || 0} Chapters
            </h2>
            <h2 className="p-1 bg-purple-200 rounded text-primary text-sm">
              {layout?.level || course.level || "N/A"}
            </h2>
          </div>

          {displayUser && (
            <div className="flex gap-2 items-center mt-2">
              {course.userProfileImage && (
                <Image
                  src={course.userProfileImage}
                  width={33}
                  height={33}
                  alt="user image"
                  className="rounded-full"
                />
              )}
              <h2 className="text-sm font-medium">{course.userName}</h2>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
