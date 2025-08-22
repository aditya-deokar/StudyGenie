import { currentUser } from "@clerk/nextjs/server";
import Agent from "@/components/Agent";

const Page = async () => {
  const user = await currentUser();
 
  // if (!user) {
  //   return <div>Please log in to continue.</div>;
  // }
  console.log(user?.imageUrl)
  return (
    <>
      <h3>Interview generation</h3>

      <Agent
        userName={user?.firstName || "Guest"}
        userId={user?.id}
        profileImage={user?.imageUrl}
        type="generate"
      />
    </>
  );
};

export default Page;
