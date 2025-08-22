
import OnboardingForm from "./_components/OnboardingForm"
import { redirect } from "next/navigation";

import { industries } from "@/data/OnboardingForm";
import { getUserOnboardingStatus } from "@/actions/user";


const OnboardingPage = async() => {

// check if user is already onboarded
const { isOnboarded }= await getUserOnboardingStatus();
if(isOnboarded){
  redirect("/industry");
}

  return (
    <main>
      <OnboardingForm industries={industries}/>
    </main>
  )
}

export default OnboardingPage