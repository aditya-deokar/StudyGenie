/*
  Warnings:

  - You are about to drop the column `demandLevel` on the `IndustryInsights` table. All the data in the column will be lost.
  - You are about to drop the column `growthRate` on the `IndustryInsights` table. All the data in the column will be lost.
  - You are about to drop the column `keyTrends` on the `IndustryInsights` table. All the data in the column will be lost.
  - You are about to drop the column `marketOutlook` on the `IndustryInsights` table. All the data in the column will be lost.
  - You are about to drop the column `recommendedSkills` on the `IndustryInsights` table. All the data in the column will be lost.
  - You are about to drop the column `salaryRange` on the `IndustryInsights` table. All the data in the column will be lost.
  - You are about to drop the column `topSkills` on the `IndustryInsights` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "IndustryInsights" DROP COLUMN "demandLevel",
DROP COLUMN "growthRate",
DROP COLUMN "keyTrends",
DROP COLUMN "marketOutlook",
DROP COLUMN "recommendedSkills",
DROP COLUMN "salaryRange",
DROP COLUMN "topSkills";

-- DropEnum
DROP TYPE "DemandLevel";

-- DropEnum
DROP TYPE "MarketOutlook";
