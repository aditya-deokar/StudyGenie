-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "clerkUserId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "imageUrl" TEXT,
    "industry" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "bio" TEXT,
    "experience" INTEGER,
    "skills" TEXT[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

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
CREATE TABLE "IndustryInsights" (
    "id" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "industryData" JSONB NOT NULL,
    "lastUpdated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nextUpdate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IndustryInsights_pkey" PRIMARY KEY ("id")
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

-- CreateTable
CREATE TABLE "Chapters" (
    "id" SERIAL NOT NULL,
    "courseId" TEXT NOT NULL,
    "chapterId" INTEGER NOT NULL,
    "content" JSONB NOT NULL,
    "videoId" TEXT NOT NULL,

    CONSTRAINT "Chapters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CourseListToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_CourseListToUser_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkUserId_key" ON "User"("clerkUserId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "Assessment_userId_idx" ON "Assessment"("userId");

-- CreateIndex
CREATE INDEX "Assessment_courseListId_idx" ON "Assessment"("courseListId");

-- CreateIndex
CREATE UNIQUE INDEX "IndustryInsights_industry_key" ON "IndustryInsights"("industry");

-- CreateIndex
CREATE INDEX "IndustryInsights_industry_idx" ON "IndustryInsights"("industry");

-- CreateIndex
CREATE UNIQUE INDEX "CourseList_courseId_key" ON "CourseList"("courseId");

-- CreateIndex
CREATE INDEX "Chapters_courseId_idx" ON "Chapters"("courseId");

-- CreateIndex
CREATE UNIQUE INDEX "Chapters_courseId_chapterId_key" ON "Chapters"("courseId", "chapterId");

-- CreateIndex
CREATE INDEX "_CourseListToUser_B_index" ON "_CourseListToUser"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_industry_fkey" FOREIGN KEY ("industry") REFERENCES "IndustryInsights"("industry") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assessment" ADD CONSTRAINT "Assessment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assessment" ADD CONSTRAINT "Assessment_courseListId_fkey" FOREIGN KEY ("courseListId") REFERENCES "CourseList"("courseId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chapters" ADD CONSTRAINT "Chapters_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "CourseList"("courseId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourseListToUser" ADD CONSTRAINT "_CourseListToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "CourseList"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourseListToUser" ADD CONSTRAINT "_CourseListToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
