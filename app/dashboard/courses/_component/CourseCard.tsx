import { BookOpen, BookOpenText, EllipsisVertical } from "lucide-react";
import Image from "next/image";

import Link from "next/link";


import DropDownOption from "./DropDownOption";
import { CourseListType } from "@/types/courseList";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  course: CourseListType | null;
  refreshData: () => void;
  displayUser?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, refreshData, displayUser = false }) => {
  // console.log(course)

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

      <div className="border rounded-bl-xl rounded-tr-xl w-[360px] max-sm:w-full min-h-96">
        <div className="card-interview">
          <div>
            {/* Type Badge */}
            <div
              className={cn(
                "absolute top-0 right-0 w-fit px-4 py-2 border-l border-b rounded-bl-lg bg-background/60",
                // badgeColor
              )}
            >
              <p className="text-sm">{course?.category}</p>
            </div>

            {/* Cover Image */}
            {course?.courseBanner && (
              <Image
                src={course?.courseBanner}
                width={300}
                height={200}
                alt="banner"
                className="h-[200px] w-full object-contain rounded-xl bg-gradient-to-bl "
              />
            )}



            <div className="flex items-center justify-between py-3">

              <Badge variant="secondary" className="dark:dark-gradient light-gradient">
                <BookOpen />
                {course?.courseOutput?.noOfChapters || 0} Chapters
              </Badge>
              <Badge variant="outline">
                {course?.level || "N/A"}
              </Badge>
            </div>

            <h2 className="font-medium text-lg flex justify-between items-center">
              {course?.courseOutput?.courseName || "Untitled Course"}

              {!displayUser && (
                <DropDownOption handleOnDelete={handleOnDelete}>
                  <EllipsisVertical />
                </DropDownOption>
              )}
            </h2>



            {displayUser && (
              <div className="flex gap-2 items-center">
                {course?.userProfileImage && (
                  <Image
                    src={course?.userProfileImage}
                    width={33}
                    height={33}
                    alt="user image"
                    className="rounded-full"
                  />
                )}
                <h2 className="text-sm font-medium">{course?.userName}</h2>
              </div>
            )}

          </div>


          <Link href={`/course/dashboard/${course?.courseId}`} className="w-full ">
            <Button variant="default" className="w-full">
              <BookOpenText className="mr-2 h-4 w-4" />
              View Course
            </Button>
          </Link>

        </div>
      </div>

  );
};

export default CourseCard;
