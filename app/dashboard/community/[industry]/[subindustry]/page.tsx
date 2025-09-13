// File: app/dashboard/community/[industry]/[subindustry]/page.tsx
import Chat from "@/components/Chat";
import { industries } from "@/data/OnboardingForm";

interface ChatPageProps {
  params: {
    industry: string;
    subindustry: string;
  };
}

export default async function ChatPage({ params }: ChatPageProps) {
  const { industry: industryId, subindustry: subindustryId } = await params;

  const industry = industries.find((i) => i.id === industryId);

  if (!industry) {
    return <div className="p-6">Industry not found.</div>;
  }
  
  const subindustry = industry.subIndustries.find(sub => 
    sub.replace(/[\s&/]/g, '-').toLowerCase() === subindustryId
  );
  
  if (!subindustry) {
    return <div className="p-6">Sub-industry not found.</div>;
  }

  const room = `${industry.id}-${subindustryId}`;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Chat Room:{" "}
        <span className="text-blue-600 capitalize">
          {industry.name}
        </span>{" "}
        -{" "}
        <span className="text-green-600 capitalize">
          {subindustry}
        </span>
      </h1>
      <Chat room={room} /> 
    </div>
  );
}