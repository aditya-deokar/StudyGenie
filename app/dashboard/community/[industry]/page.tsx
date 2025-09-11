// This is the correct import statement
import { industries } from "@/data/OnboardingForm";

// Now, adjust the component to use the `industries` array

import Link from "next/link";
import Image from "next/image";

interface IndustryPageProps {
  params: { industry: string };
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { industry: industryId } = await params;

  // The find method now correctly works on the `industries` array
  const industry = industries.find((i) => i.id === industryId);

  if (!industry) {
    return <div className="p-6">Industry not found</div>;
  }
  
  // NOTE: Your `subIndustries` data is an array of strings, not objects with IDs. 
  // You will need to make another adjustment here to correctly create the links.
  
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        {industry.name} Sub-industries
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industry.subIndustries.map((sub, index) => (
          // Creating a simple link with a clean URL segment
          <Link
            key={index}
            href={`/dashboard/community/${industry.id}/${sub.replace(/[\s&/]/g, '-').toLowerCase()}`}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center space-x-4">
              {/* You will need to add a proper image or placeholder here */}
              <Image
                src="/placeholder-avatar.jpg"
                alt={sub}
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-700">
                  {sub}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}