/*
  Warnings:

  - You are about to drop the column `insights` on the `IndustryInsights` table. All the data in the column will be lost.
  - You are about to drop the `Course` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `videoId` on table `Chapters` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `demandLevel` to the `IndustryInsights` table without a default value. This is not possible if the table is not empty.
  - Added the required column `growthRate` to the `IndustryInsights` table without a default value. This is not possible if the table is not empty.
  - Added the required column `marketOutlook` to the `IndustryInsights` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salaryRange` to the `IndustryInsights` table without a default value. This is not possible if the table is not empty.
  - Made the column `nextUpdate` on table `IndustryInsights` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "DemandLevel" AS ENUM ('HIGH', 'MEDIUM', 'NEGATIVE');

-- CreateEnum
CREATE TYPE "MarketOutlook" AS ENUM ('POSITIVE', 'NEUTRAL', 'NEGATIVE');

-- DropForeignKey
ALTER TABLE "Chapters" DROP CONSTRAINT "Chapters_courseId_fkey";

-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_creatorId_fkey";

-- DropIndex
DROP INDEX "Chapters_courseId_idx";

-- AlterTable
ALTER TABLE "Chapters" ALTER COLUMN "videoId" SET NOT NULL;

-- AlterTable
ALTER TABLE "IndustryInsights" DROP COLUMN "insights",
ADD COLUMN     "demandLevel" "DemandLevel" NOT NULL,
ADD COLUMN     "growthRate" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "keyTrends" TEXT[],
ADD COLUMN     "marketOutlook" "MarketOutlook" NOT NULL,
ADD COLUMN     "recommendedSkills" TEXT[],
ADD COLUMN     "salaryRange" JSONB NOT NULL,
ADD COLUMN     "topSkills" TEXT[],
ALTER COLUMN "nextUpdate" SET NOT NULL;

-- DropTable
DROP TABLE "Course";

-- CreateTable
CREATE TABLE "Assessment" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "quizScore" DOUBLE PRECISION NOT NULL,
    "questions" JSONB[],
    "category" TEXT NOT NULL,
    "improvementTip" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "courseListId" TEXT,

    CONSTRAINT "Assessment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseList" (
    "id" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "includeVideo" TEXT NOT NULL DEFAULT 'Yes',
    "courseOutput" JSONB NOT NULL,
    "createdBy" TEXT NOT NULL,
    "userName" TEXT,
    "userProfileImage" TEXT,
    "courseBanner" TEXT NOT NULL DEFAULT '/file.svg',
    "publish" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "CourseList_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Assessment_userId_idx" ON "Assessment"("userId");

-- CreateIndex
CREATE INDEX "Assessment_courseListId_idx" ON "Assessment"("courseListId");

-- CreateIndex
CREATE UNIQUE INDEX "CourseList_courseId_key" ON "CourseList"("courseId");

-- AddForeignKey
ALTER TABLE "Assessment" ADD CONSTRAINT "Assessment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assessment" ADD CONSTRAINT "Assessment_courseListId_fkey" FOREIGN KEY ("courseListId") REFERENCES "CourseList"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chapters" ADD CONSTRAINT "Chapters_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "CourseList"("courseId") ON DELETE RESTRICT ON UPDATE CASCADE;
