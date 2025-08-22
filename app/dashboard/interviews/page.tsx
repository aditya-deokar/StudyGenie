
import InterviewCard from "@/components/InterviewCard";
import { currentUser } from "@clerk/nextjs/server";
import { getInterviewsByUserId, getLatestInterviews } from "@/interview/lib/actions/general.action";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";



async function Home() {
  const user = await currentUser();

  const [userInterviews, allInterview] = await Promise.all([
    getInterviewsByUserId(user?.id!),
    getLatestInterviews({ userId: user?.id! }),
  ]);

  const hasPastInterviews = userInterviews?.length! > 0;
  const hasUpcomingInterviews = allInterview?.length! > 0;

  return (
    <div className="space-y-6 ">

<section className="card-cta dark:dark-gradient light-gradient">
        <div className="flex flex-col gap-6 max-w-xl">
          <h2>"Ace Your Interviews with AI-Powered Mock Sessions & Smart Feedback"</h2>
          <p className="text-lg">
          Tackle real interview questions and receive instant, actionable insights to improve.
          </p>

          <Button asChild variant={"outline"} className=" max-sm:w-full">
            <Link href="/dashboard/interviews/interview">Start an Interview</Link>
          </Button>
        </div>

        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

         

      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>

        <div className="interviews-section">
          {hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user?.id}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
            ))
          ) : (
            <p>You haven&apos;t taken any interviews yet</p>
          )}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take Interviews</h2>

        <div className="interviews-section">
          {hasUpcomingInterviews ? (
            allInterview?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user?.id}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
            ))
          ) : (
            <p>There are no interviews available</p>
          )}
        </div>
      </section>
      </div>
  );
}

export default Home;
