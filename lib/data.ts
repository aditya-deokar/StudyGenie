import { type IndustryData, IndustryDataSchema } from "./types"

// Raw data


const rawIndustryData1 ={
  "industryName": "Cyber Security (India)",
  "overview": "The cyber security industry in India is experiencing rapid growth, driven by increasing digitization, rising cyber threats, and government initiatives to strengthen digital infrastructure. The industry is crucial for protecting businesses, governments, and individuals from cyber attacks.",
  "salaryRange": [
    {
      "role": "Security Analyst",
      "min": 500000,
      "max": 1500000,
      "median": 900000,
      "location": "Major Cities"
    },
    {
      "role": "Penetration Tester",
      "min": 600000,
      "max": 2000000,
      "median": 1200000,
      "location": "Major Cities"
    },
    {
      "role": "Security Engineer",
      "min": 700000,
      "max": 2500000,
      "median": 1500000,
      "location": "Major Cities"
    },
    {
      "role": "Security Architect",
      "min": 1500000,
      "max": 4000000,
      "median": 2500000,
      "location": "Major Cities"
    },
    {
      "role": "Chief Information Security Officer (CISO)",
      "min": 3000000,
      "max": 10000000,
      "median": 6000000,
      "location": "Major Cities"
    }
  ],
  "salaryFactors": {
    "description": "Several key factors influence salary ranges in this industry:",
    "factors": [
      {
        "factorName": "Experience Level",
        "factorDescription": "Entry-level positions have lower salaries, with significant increases for experienced professionals with specialized skills."
      },
      {
        "factorName": "Location",
        "factorDescription": "Salaries in major metropolitan areas like Bengaluru, Mumbai, and Delhi-NCR are typically higher due to the concentration of IT companies."
      },
      {
        "factorName": "Certifications",
        "factorDescription": "Industry-recognized certifications like CISSP, CISM, CEH, and OSCP can significantly increase earning potential."
      },
      {
        "factorName": "Company Type",
        "factorDescription": "MNCs and large enterprises tend to offer higher salaries compared to smaller companies or startups."
      },
      {
        "factorName": "Skill Specialization",
        "factorDescription": "Specialized skills like cloud security, application security, and threat intelligence command higher salaries due to their high demand."
      }
    ]
  },
  "growthRate": 15.0,
  "keyGrowthDrivers": {
    "description": "The industry's expansion is fueled by several key drivers:",
    "drivers": [
      {
        "driverName": "Digital India Initiatives",
        "driverDescription": "Government focus on digitizing services and infrastructure creates vast opportunities for the tech sector, increasing the need for cybersecurity."
      },
      {
        "driverName": "Remote Work Acceleration",
        "driverDescription": "The shift towards remote and hybrid work models has boosted demand for cybersecurity solutions to protect distributed networks and devices."
      },
      {
        "driverName": "Data Localization Policies",
        "driverDescription": "Regulations requiring data storage within India drive investment in local data centers and cloud infrastructure, enhancing the importance of data security."
      },
      {
        "driverName": "Startup Ecosystem Boom",
        "driverDescription": "A vibrant startup culture fosters innovation, creates jobs, and increases demand for cybersecurity solutions to protect their intellectual property and customer data."
      },
      {
        "driverName": "Increased Cloud Adoption",
        "driverDescription": "Migration to cloud-based services and infrastructure requires robust security measures to protect data and applications."
      },
      {
         "driverName": "Government Support & PLI Schemes",
         "driverDescription": "Government initiatives and production-linked incentive (PLI) schemes are encouraging investments in cybersecurity and related technologies."
      }
    ]
  },
  "demandLevel": "HIGH",
  "topSkills": [
    "Network Security",
    "Cloud Security",
    "Application Security",
    "Penetration Testing",
    "Incident Response",
    "Threat Intelligence",
    "Security Information and Event Management (SIEM)",
    "Vulnerability Management",
    "Data Loss Prevention (DLP)",
    "Security Auditing"
  ],
  "marketOutlook": "POSITIVE",
  "keyTrends": [
    "Growing adoption of cloud security solutions.",
    "Increasing focus on application security.",
    "Rise of ransomware attacks and data breaches.",
    "Implementation of stricter data privacy regulations.",
    "Adoption of AI and machine learning in cybersecurity."
  ],
  "recommendedSkills": [
    "Ethical Hacking",
    "Cloud Security (AWS, Azure, GCP)",
    "DevSecOps",
    "Security Automation",
    "Threat Hunting",
    "Reverse Engineering",
    "Cryptography",
    "Linux Administration",
    "Scripting (Python, Bash)",
    "Networking Concepts"
  ],
  "entryLevelOutlook": {
    "prospects": "Entry-level prospects are excellent, with a growing demand for skilled cybersecurity professionals. Internships and certifications can significantly enhance job opportunities.",
    "commonRoles": [
      "Security Analyst",
      "Junior Security Engineer",
      "Vulnerability Assessment Analyst",
      "Security Operations Center (SOC) Analyst",
      "Cybersecurity Intern"
    ],
    "advice": "Focus on developing a strong foundation in networking, operating systems, and security principles. Obtain relevant certifications and gain practical experience through internships or personal projects."
  },
  "educationalPathways": {
    "degrees": [
      "Computer Science",
      "Information Security",
      "Cyber Security",
      "Information Technology",
      "Electronics and Communication Engineering"
    ],
    "certifications": [
      "Certified Ethical Hacker (CEH)",
      "CompTIA Security+",
      "Certified Information Systems Security Professional (CISSP)",
      "Certified Information Security Manager (CISM)",
      "Offensive Security Certified Professional (OSCP)"
    ],
    "alternativeRoutes": [
      "Online Cybersecurity Courses (Coursera, Udemy, SANS Institute)",
      "Cybersecurity Bootcamps",
      "Self-Study and Capture the Flag (CTF) competitions"
    ]
  },
  "internshipOpportunities": {
    "availability": "MEDIUM",
    "commonAreas": [
      "Security Operations Center (SOC)",
      "Vulnerability Management",
      "Penetration Testing",
      "Incident Response",
      "Security Engineering"
    ],
    "timing": "Summer, Winter, and Year-round"
  },
  "tipsForSecuringInternships": [
    "Build a strong portfolio showcasing relevant projects (e.g., on GitHub).",
    "Tailor your resume and cover letter for each application.",
    "Network actively online (LinkedIn) and attend virtual or in-person career fairs.",
    "Practice coding challenges and technical fundamentals.",
    "Gain relevant certifications or complete online courses.",
    "Prepare for behavioral interview questions using the STAR method.",
    "Participate in Capture the Flag (CTF) competitions.",
    "Contribute to open-source security projects."
  ],
  "challenges": [
    "Intense competition for talent, especially in specialized areas.",
    "Rapid technological obsolescence requiring continuous upskilling.",
    "Infrastructure gaps in smaller cities and rural areas.",
    "Data privacy and cybersecurity concerns.",
    "Global economic uncertainty impacting IT spending.",
    "Skill gap between academic curricula and industry demands.",
    "Evolving threat landscape requiring constant adaptation.",
    "Complexity of security solutions."
  ],
  "marketGrowthProjections": {
    "description": "Projected market size and job openings growth over the next few years.",
    "data": [
      {
        "year": 2022,
        "market": 3.5,
        "jobs": 4.2
      },
      {
        "year": 2023,
        "market": 4.2,
        "jobs": 5.0
      },
      {
        "year": 2024,
        "market": 5.0,
        "jobs": 5.9
      },
      {
        "year": 2025,
        "market": 6.0,
        "jobs": 7.0
      },
      {
        "year": 2026,
        "market": 7.2,
        "jobs": 8.4
      },
      {
        "year": 2027,
        "market": 8.6,
        "jobs": 10.1
      }
    ],
    "chartConfig": {
      "market": {
        "label": "Market Size ($ Billion)",
        "color": "hsl(var(--chart-1))"
      },
      "jobs": {
        "label": "Job Openings (100K)",
        "color": "hsl(var(--chart-2))"
      }
    }
  },
  "careerProgressionExamples": [
    "Security Analyst -> Senior Security Analyst -> Security Team Lead -> Security Manager",
    "Penetration Tester -> Senior Penetration Tester -> Security Consultant",
    "Security Engineer -> Senior Security Engineer -> Security Architect"
  ],
  "keyCompaniesHiring": [
    "Tata Consultancy Services",
    "Infosys",
    "Wipro",
    "HCL Technologies",
    "Accenture",
    "IBM",
    "Cisco",
    "Microsoft",
    "Deloitte",
    "Ernst & Young",
    "KPMG",
    "PwC",
    "Quick Heal Technologies",
    "TAC Security"
  ]
}




const rawIndustryData ={
  "industryName": "Data Science (India)",
  "overview": "The Data Science industry in India is booming, driven by the increasing availability of data and the need for organizations to extract actionable insights. It encompasses data analysis, machine learning, and artificial intelligence, playing a crucial role in decision-making across various sectors.",
  "salaryRange": [
    {
      "role": "Data Analyst",
      "min": 400000,
      "max": 1200000,
      "median": 700000,
      "location": "Major Cities"
    },
    {
      "role": "Data Scientist",
      "min": 700000,
      "max": 2500000,
      "median": 1500000,
      "location": "Major Cities"
    },
    {
      "role": "Machine Learning Engineer",
      "min": 800000,
      "max": 3000000,
      "median": 1800000,
      "location": "Major Cities"
    },
    {
      "role": "Business Intelligence Analyst",
      "min": 500000,
      "max": 1500000,
      "median": 900000,
      "location": "Major Cities"
    },
    {
      "role": "Data Engineer",
      "min": 600000,
      "max": 2000000,
      "median": 1200000,
      "location": "Major Cities"
    }
  ],
  "salaryFactors": {
    "description": "Several key factors influence salary ranges in this industry:",
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
    ]
  },
  "growthRate": 25.0,
  "keyGrowthDrivers": {
    "description": "The industry's expansion is fueled by several key drivers:",
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
    ]
  },
  "demandLevel": "HIGH",
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
  "marketOutlook": "POSITIVE",
  "keyTrends": [
    "Growing adoption of AI and machine learning across industries.",
    "Increasing use of cloud-based data science platforms.",
    "Rising demand for data scientists with specialized skills.",
    "Focus on ethical and responsible AI.",
    "Integration of data science with business intelligence."
  ],
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
  "entryLevelOutlook": {
    "prospects": "Entry-level prospects are promising, but require a strong foundation in mathematics, statistics, and programming. Internships and projects are essential.",
    "commonRoles": [
      "Data Analyst",
      "Junior Data Scientist",
      "Business Intelligence Analyst",
      "Data Science Intern"
    ],
    "advice": "Focus on building a strong portfolio of data science projects, contributing to open-source projects, and networking with industry professionals."
  },
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
    "availability": "MEDIUM",
    "commonAreas": [
      "Data Analysis",
      "Machine Learning",
      "Business Intelligence",
      "Data Engineering",
      "Research"
    ],
    "timing": "Summer, Winter, and Year-round"
  },
  "tipsForSecuringInternships": [
    "Build a strong portfolio showcasing relevant projects (e.g., on GitHub).",
    "Tailor your resume and cover letter for each application.",
    "Network actively online (LinkedIn) and attend virtual or in-person career fairs.",
    "Practice coding challenges and technical fundamentals.",
    "Gain relevant certifications or complete online courses.",
    "Prepare for behavioral interview questions using the STAR method.",
    "Participate in Kaggle competitions.",
    "Contribute to open-source data science projects."
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
  "marketGrowthProjections": {
    "description": "Projected market size and job openings growth over the next few years.",
    "data": [
      {
        "year": 2022,
        "market": 2.8,
        "jobs": 3.5
      },
      {
        "year": 2023,
        "market": 3.5,
        "jobs": 4.4
      },
      {
        "year": 2024,
        "market": 4.4,
        "jobs": 5.5
      },
      {
        "year": 2025,
        "market": 5.5,
        "jobs": 6.9
      },
      {
        "year": 2026,
        "market": 6.9,
        "jobs": 8.6
      },
      {
        "year": 2027,
        "market": 8.6,
        "jobs": 10.8
      }
    ],
    "chartConfig": {
      "market": {
        "label": "Market Size ($ Billion)",
        "color": "hsl(var(--chart-1))"
      },
      "jobs": {
        "label": "Job Openings (100K)",
        "color": "hsl(var(--chart-2))"
      }
    }
  },
  "careerProgressionExamples": [
    "Data Analyst -> Senior Data Analyst -> Data Science Manager",
    "Data Scientist -> Senior Data Scientist -> Lead Data Scientist",
    "Machine Learning Engineer -> Senior Machine Learning Engineer -> AI Architect"
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
  ]
}

// Validate data with Zod schema
export const industryData: IndustryData = IndustryDataSchema.parse(rawIndustryData)
