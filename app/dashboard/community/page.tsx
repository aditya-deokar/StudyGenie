import Link from "next/link";
import Image from "next/image";
import { industries } from "@/data/OnboardingForm";

export default function CommunityPage() {
  return (
    <div className="p-6 md:p-12 lg:p-16 bg-gray-50 min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Find Your Community
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Choose an industry to connect with like-minded individuals, share knowledge, and collaborate on projects.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {industries.map((industry) => (
          <Link
            key={industry.id}
            href={`/dashboard/community/${industry.id}`}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* You'll need to add an image or icon for each industry here */}
            {/* Example: a placeholder image */}
            <div className="w-16 h-16 mb-4 relative">
              <Image 
                src={`/images/icons/${industry.id}.svg`} 
                alt={`${industry.name} icon`}
                layout="fill"
                objectFit="contain"
              />
            </div>
            
            <h2 className="text-lg font-bold text-gray-800 text-center">
              {industry.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}