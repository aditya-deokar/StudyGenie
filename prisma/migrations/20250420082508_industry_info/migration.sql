/*
  Warnings:

  - A unique constraint covering the columns `[courseId,chapterId]` on the table `Chapters` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `industryData` to the `IndustryInsights` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Chapters" DROP CONSTRAINT "Chapters_courseId_fkey";

-- AlterTable
ALTER TABLE "IndustryInsights" ADD COLUMN     "industryData" JSONB NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Chapters_courseId_chapterId_key" ON "Chapters"("courseId", "chapterId");

-- AddForeignKey
ALTER TABLE "Chapters" ADD CONSTRAINT "Chapters_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "CourseList"("courseId") ON DELETE RESTRICT ON UPDATE CASCADE;
