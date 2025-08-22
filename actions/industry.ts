"use server";

// import { industryData } from "@/lib/data";
import prisma from "@/lib/prisma";

import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";


const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});


export const generateAIInsights = async (
  industry: string
) : Promise<any>=> {


  const prompt = `
  Analyze the current state of the ${industry} industry and provide insights in ONLY the following JSON format without any additional notes or explanations
  note-Analyze Indian Market State and (Major Cities in India)
  Format the response in a structured JSON format similar to the following example:
  {
  "overview": "The Data Science industry in India is booming, driven by the increasing availability of data and the need for organizations to extract actionable insights. It encompasses data analysis, machine learning, and artificial intelligence, playing a crucial role in decision-making across various sectors.",
  "keyTrends": [
    "Growing adoption of AI and machine learning across industries.",
    "Increasing use of cloud-based data science platforms.",
    "Rising demand for data scientists with specialized skills.",
    "Focus on ethical and responsible AI.",
    "Integration of data science with business intelligence."
  ],
  "topSkills": [
    "Python",
    "R",
    "Machine Learning",
    "Deep Learning",
    "Data Visualization",
    "SQL",
    "Big Data Technologies (Hadoop, Spark)",
    "Data Mining",
    "Statistical Analysis",
    "Natural Language Processing (NLP)"
  ],
  "challenges": [
    "Intense competition for talent, especially in specialized areas.",
    "Rapid technological obsolescence requiring continuous upskilling.",
    "Infrastructure gaps in smaller cities and rural areas.",
    "Data privacy and cybersecurity concerns.",
    "Global economic uncertainty impacting IT spending.",
    "Skill gap between academic curricula and industry demands.",
    "Ensuring data quality and reliability.",
    "Communicating complex insights to non-technical stakeholders."
  ],
  "growthRate": 25,
  "demandLevel": "HIGH",
  "salaryRange": [
    {
      "max": 1200000,
      "min": 400000,
      "role": "Data Analyst",
      "median": 700000,
      "location": "Major Cities"
    },
    {
      "max": 2500000,
      "min": 700000,
      "role": "Data Scientist",
      "median": 1500000,
      "location": "Major Cities"
    },
    {
      "max": 3000000,
      "min": 800000,
      "role": "Machine Learning Engineer",
      "median": 1800000,
      "location": "Major Cities"
    },
    {
      "max": 1500000,
      "min": 500000,
      "role": "Business Intelligence Analyst",
      "median": 900000,
      "location": "Major Cities"
    },
    {
      "max": 2000000,
      "min": 600000,
      "role": "Data Engineer",
      "median": 1200000,
      "location": "Major Cities"
    }
  ],
  "industryName": "Data Science (India)",
  "marketOutlook": "POSITIVE",
  "salaryFactors": {
    "factors": [
      {
        "factorName": "Experience Level",
        "factorDescription": "Salaries increase significantly with experience, particularly for senior data scientists and machine learning engineers."
      },
      {
        "factorName": "Location",
        "factorDescription": "Metropolitan areas like Bengaluru, Mumbai, and Delhi-NCR offer higher salaries due to greater demand and cost of living."
      },
      {
        "factorName": "Certifications",
        "factorDescription": "Relevant certifications in data science, machine learning, or cloud platforms can boost earning potential."
      },
      {
        "factorName": "Company Type",
        "factorDescription": "MNCs and large enterprises generally offer higher salaries compared to startups or smaller companies."
      },
      {
        "factorName": "Skill Specialization",
        "factorDescription": "Expertise in specific areas like deep learning, natural language processing (NLP), or computer vision commands higher salaries."
      }
    ],
    "description": "Several key factors influence salary ranges in this industry:"
  },
  "keyGrowthDrivers": {
    "drivers": [
      {
        "driverName": "Digital India Initiatives",
        "driverDescription": "Government initiatives to promote digitization and data-driven governance are driving demand for data science professionals."
      },
      {
        "driverName": "Remote Work Acceleration",
        "driverDescription": "The shift towards remote work has increased the need for data-driven insights to optimize business operations and employee productivity."
      },
      {
        "driverName": "Data Localization Policies",
        "driverDescription": "Data localization mandates are encouraging companies to invest in data analytics capabilities within India."
      },
      {
        "driverName": "Startup Ecosystem Boom",
        "driverDescription": "A thriving startup ecosystem is generating vast amounts of data, creating demand for data scientists to analyze and leverage this data."
      },
      {
        "driverName": "Increased Cloud Adoption",
        "driverDescription": "The adoption of cloud computing is making it easier and more affordable for organizations to store and process large volumes of data."
      },
      {
        "driverName": "Government Support & PLI Schemes",
        "driverDescription": "Government support and production-linked incentive (PLI) schemes are promoting investment in data science and related technologies."
      }
    ],
    "description": "The industry's expansion is fueled by several key drivers:"
  },
  "entryLevelOutlook": {
    "advice": "Focus on building a strong portfolio of data science projects, contributing to open-source projects, and networking with industry professionals.",
    "prospects": "Entry-level prospects are promising, but require a strong foundation in mathematics, statistics, and programming. Internships and projects are essential.",
    "commonRoles": [
      "Data Analyst",
      "Junior Data Scientist",
      "Business Intelligence Analyst",
      "Data Science Intern"
    ]
  },
  "recommendedSkills": [
    "Deep Learning",
    "Natural Language Processing (NLP)",
    "Computer Vision",
    "Reinforcement Learning",
    "Cloud Computing (AWS, Azure, GCP)",
    "Big Data Technologies (Spark, Hadoop)",
    "Data Engineering",
    "Statistical Modeling",
    "Business Intelligence",
    "Communication and Storytelling"
  ],
  "keyCompaniesHiring": [
    "Tata Consultancy Services",
    "Infosys",
    "Wipro",
    "HCL Technologies",
    "Accenture",
    "IBM",
    "Capgemini",
    "Cognizant",
    "Mu Sigma",
    "Fractal Analytics",
    "Quantiphi",
    "Amazon",
    "Google",
    "Microsoft"
  ],
  "educationalPathways": {
    "degrees": [
      "Computer Science",
      "Statistics",
      "Mathematics",
      "Economics",
      "Engineering"
    ],
    "certifications": [
      "Google Data Analytics Professional Certificate",
      "Microsoft Certified: Azure Data Scientist Associate",
      "IBM Data Science Professional Certificate",
      "DataCamp Certifications",
      "SAS Certified Data Scientist"
    ],
    "alternativeRoutes": [
      "Online Data Science Courses (Coursera, Udemy, edX)",
      "Data Science Bootcamps",
      "Self-Study and Kaggle Competitions"
    ]
  },
  "internshipOpportunities": {
    "timing": "Summer, Winter, and Year-round",
    "commonAreas": [
      "Data Analysis",
      "Machine Learning",
      "Business Intelligence",
      "Data Engineering",
      "Research"
    ],
    "availability": "MEDIUM"
  },
  "marketGrowthProjections": {
    "data": [
      {
        "jobs": 3.5,
        "year": 2022,
        "market": 2.8
      },
      {
        "jobs": 4.4,
        "year": 2023,
        "market": 3.5
      },
      {
        "jobs": 5.5,
        "year": 2024,
        "market": 4.4
      },
      {
        "jobs": 6.9,
        "year": 2025,
        "market": 5.5
      },
      {
        "jobs": 8.6,
        "year": 2026,
        "market": 6.9
      },
      {
        "jobs": 10.8,
        "year": 2027,
        "market": 8.6
      }
    ],
    "chartConfig": {
      "jobs": {
        "color": "hsl(var(--chart-2))",
        "label": "Job Openings (100K)"
      },
      "market": {
        "color": "hsl(var(--chart-1))",
        "label": "Market Size ($ Billion)"
      }
    },
    "description": "Projected market size and job openings growth over the next few years."
  },
  "careerProgressionExamples": [
    "Data Analyst -> Senior Data Analyst -> Data Science Manager",
    "Data Scientist -> Senior Data Scientist -> Lead Data Scientist",
    "Machine Learning Engineer -> Senior Machine Learning Engineer -> AI Architect"
  ],
  "tipsForSecuringInternships": [
    "Build a strong portfolio showcasing relevant projects (e.g., on GitHub).",
    "Tailor your resume and cover letter for each application.",
    "Network actively online (LinkedIn) and attend virtual or in-person career fairs.",
    "Practice coding challenges and technical fundamentals.",
    "Gain relevant certifications or complete online courses.",
    "Prepare for behavioral interview questions using the STAR method.",
    "Participate in Kaggle competitions.",
    "Contribute to open-source data science projects."
  ]
}
`;

  const result = await model.generateContent(prompt);
  
  const response = result.response;
  const text = response.text();
  let cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();

  if (typeof cleanedText === "string") {
    cleanedText = JSON.parse(cleanedText); // Validate stringified JSON
  }
  return cleanedText;
};




export async function getIndustryInsights(){
    const {userId } = await auth();

    if(!userId) throw new Error("Unauthorized");

    const user =await prisma.user.findUnique({
        where:{
            clerkUserId:userId
        },
        include:{
            industryInsights:true,
        },
    });

    if(!user) throw new Error("User Not Found");


    if(!user.industryInsights){



        let industryData= await generateAIInsights(user.industry!);

        if (typeof industryData === "string") {
          industryData = JSON.parse(industryData); // Validate stringified JSON
        }

      try{ 
          JSON.stringify(industryData); 
      } catch (e:any) {
        throw new Error("Invalid JSON content: " + e.message);
      }

        const industryInsight = await prisma.industryInsights.create({
            data:{
                industry:user.industry!,
                industryData,
                nextUpdate: new Date(Date.now() + 7 * 24* 60* 60* 1000),
            }
        })

        return industryInsight?.industryData;
    }

    return user?.industryInsights?.industryData;

}
