import Image from "next/image";
import { redirect } from "next/navigation";

import Agent from "@/components/Agent";

import DisplayTechIcons from "@/components/DisplayTechIcons";
import { currentUser } from "@clerk/nextjs/server";
import { getRandomInterviewCover } from "@/interview/lib/utils";
import { getFeedbackByInterviewId, getInterviewById } from "@/interview/lib/actions/general.action";

const InterviewDetails = async ({ params }: RouteParams) => {
  const { id } = await params;
  const user = await currentUser();

  const interview = await getInterviewById(id);
  if (!interview) redirect("/");

  const feedback = await getFeedbackByInterviewId({
    interviewId: id,
    userId: user?.id!,
  });

  return (
    <>
      <div className="flex flex-row gap-4 justify-between mb-4">
        <div className="flex flex-row gap-4 items-center max-sm:flex-col">
          <div className="flex flex-row gap-4 items-center">
            <Image
              src={getRandomInterviewCover()}
              alt="cover-image"
              width={40}
              height={40}
              className="rounded-full object-cover size-[40px]"
            />
            <h3 className="capitalize">{interview.role} Interview</h3>
          </div>

          <DisplayTechIcons techStack={interview.techstack} />
        </div>

        <p className="bg-dark-200 px-4 py-2 rounded-lg h-fit">
          {interview.type}
        </p>
      </div>

      <Agent
        userName={user?.firstName!}
        userId={user?.id}
        interviewId={id}
        type="interview"
        questions={interview.questions}
        feedbackId={feedback?.id}
        profileImage={user?.imageUrl}
      />
    </>
  );
};

export default InterviewDetails;
