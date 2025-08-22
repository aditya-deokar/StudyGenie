import type { IconType } from "react-icons"
import { FaChartLine, FaRobot, FaGraduationCap, FaSearch, FaUserCheck, FaLightbulb } from "react-icons/fa"

// --- TypeScript Interfaces ---

interface ChartDataPoint {
  [key: string]: string | number
}

interface ChartConfig {
  title: string
  data: ChartDataPoint[]
  xAxisKey: string
  yAxisKeys: { key: string; color: string; name?: string; unit?: string }[]
  chartType: "bar" | "line" | "composed"
  description?: string
}

interface HeroSectionData {
  headline: string
  subHeadline: string
  ctaButtonText: string
  ctaButtonLink: string
  imageUrl?: string
}



interface FAQData {
  title: string
  description: string
  questions: {
    id: string
    question: string
    answer: string
  }[]
}

interface IndustryShowcaseData {
  title: string
  description: string
  exampleIndustry: string
  charts: ChartConfig[]
  keyHighlights: { label: string; value: string | number }[]
}

interface CallToActionData {
  headline: string
  subHeadline?: string
  ctaButtonText: string
  ctaButtonLink: string
}

// --- Main Data Object Structure ---

export interface NeoPrepLandingPageData {
  hero: HeroSectionData
  faq: FAQData
  industryShowcase: IndustryShowcaseData
  callToAction: CallToActionData
}

// --- Example Data Population ---

export const neoPrepLandingData: NeoPrepLandingPageData = {
  hero: {
    headline: "Navigate Your Tech Career with AI-Powered Insights & Preparation",
    subHeadline: "Get tailored industry data, generate instant course outlines, and ace interviews with NeoPrep.",
    ctaButtonText: "Get Started for Free",
    ctaButtonLink: "/signup",
    // imageUrl: "/path/to/hero-image.png" // Optional
  },
  faq: {
    title: "Frequently Asked Questions",
    description: "Find answers to common questions about NeoPrep platform and services",
    questions: [
      {
        id: "faq-1",
        question: "How accurate is the industry data provided by NeoPrep?",
        answer:
          "NeoPrep sources data from multiple trusted industry reports, job boards, and market analyses. Our AI continuously updates this information to ensure you receive the most accurate and current insights. Data is typically refreshed weekly and validated against multiple sources.",
      },
      {
        id: "faq-2",
        question: "Can I customize the AI-generated course outlines?",
        answer:
          "Once the AI generates your initial course outline, you can edit, rearrange, or expand any section. You can also specify the difficulty level, target audience, and preferred learning resources when generating your outline.",
      },
      {
        id: "faq-3",
        question: "How realistic are the AI interview simulations?",
        answer:
          "Our AI interview simulations are designed to closely mimic real-world technical interviews. The system is trained on thousands of actual interview questions and can adapt its difficulty based on your responses. Many users report that our simulations are sometimes more challenging than their actual interviews!",
      },
      {
        id: "faq-4",
        question: "Is there a limit to how many courses I can generate?",
        answer:
          "Free accounts can generate up to 5 course outlines per month. Premium subscribers enjoy unlimited course generation along with additional features like saving course history, exporting to various formats, and receiving personalized learning recommendations.",
      },
      {
        id: "faq-5",
        question: "Can I access NeoPrep on mobile devices?",
        answer:
          "Yes, NeoPrep is fully responsive and works on all devices including smartphones and tablets. We also offer dedicated mobile apps for iOS and Android with offline access to your saved courses and interview practice sessions.",
      },
    ],
  },
  industryShowcase: {
    title: "Stay Ahead with Market Intelligence",
    description:
      "Understand the landscape before you dive in. Here's a snapshot of the Cloud Computing sector in India:",
    exampleIndustry: "Cloud Computing in India",
    charts: [
      {
        title: "Median Annual Salaries (INR Lakhs)",
        data: [
          { role: "Support Assoc.", medianSalary: 6 },
          { role: "Cloud Engineer", medianSalary: 13 },
          { role: "Developer", medianSalary: 11 },
          { role: "Security Eng.", medianSalary: 15 },
          { role: "Architect", medianSalary: 20 },
          { role: "Data Eng.", medianSalary: 14 },
        ],
        xAxisKey: "role",
        yAxisKeys: [{ key: "medianSalary", color: "#8884d8", name: "Median Salary", unit: "L" }],
        chartType: "bar",
        description: "Typical median salaries across common Cloud roles in major Indian tech hubs.",
      },
      {
        title: "Key Skill Demand Trend (Illustrative)",
        data: [
          { name: "Q1", AWS: 80, Azure: 70, Kubernetes: 60 },
          { name: "Q2", AWS: 85, Azure: 75, Kubernetes: 70 },
          { name: "Q3", AWS: 90, Azure: 80, Kubernetes: 78 },
          { name: "Q4", AWS: 92, Azure: 85, Kubernetes: 85 },
        ],
        xAxisKey: "name",
        yAxisKeys: [
          { key: "AWS", color: "#FF9900", name: "AWS Demand" },
          { key: "Azure", color: "#0078D4", name: "Azure Demand" },
          { key: "Kubernetes", color: "#326CE5", name: "K8s Demand" },
        ],
        chartType: "line",
        description: "Illustrative trend showing rising demand for key cloud skills.",
      },
    ],
    keyHighlights: [
      { label: "Projected Growth Rate", value: "25%" },
      { label: "Overall Demand Level", value: "HIGH" },
      { label: "Top Platforms", value: "AWS, Azure, GCP" },
      { label: "Key Trend", value: "Hybrid/Multi-Cloud Adoption" },
    ],
  },
  callToAction: {
    headline: "Ready to Take Control of Your Tech Career?",
    subHeadline: "Join thousands of professionals who are accelerating their career growth with NeoPrep",
    ctaButtonText: "Sign Up & Explore NeoPrep",
    ctaButtonLink: "/signup",
  },
}
