-- DropForeignKey
ALTER TABLE "Assessment" DROP CONSTRAINT "Assessment_courseListId_fkey";

-- DropForeignKey
ALTER TABLE "Chapters" DROP CONSTRAINT "Chapters_courseId_fkey";

-- CreateIndex
CREATE INDEX "Chapters_courseId_idx" ON "Chapters"("courseId");

-- AddForeignKey
ALTER TABLE "Assessment" ADD CONSTRAINT "Assessment_courseListId_fkey" FOREIGN KEY ("courseListId") REFERENCES "CourseList"("courseId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chapters" ADD CONSTRAINT "Chapters_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "CourseList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
