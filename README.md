# NeoPrep 🚀

**Navigate Your Tech Career with AI-Powered Insights & Preparation.**

NeoPrep is a modern web platform designed to empower students and professionals entering or navigating the tech industry. It provides data-driven insights, accelerates learning through AI-generated course outlines, and builds interview confidence with AI-powered practice sessions.

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://example.com/build) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

*   [Overview](#overview)
*   [Key Features](#key-features)
*   [Tech Stack](#tech-stack)
*   [Getting Started](#getting-started)
    *   [Prerequisites](#prerequisites)
    *   [Installation](#installation)
*   [Running the Project](#running-the-project)
*   [Environment Variables](#environment-variables)
*   [Project Structure](#project-structure)
*   [Contributing](#contributing)
*   [License](#license)

## Overview

The tech job market is dynamic and competitive. Choosing a path, understanding market demands, structuring learning, and preparing for interviews can be overwhelming. NeoPrep aims to solve these challenges by offering a unified platform featuring:

1.  **Industry Clarity:** Up-to-date data on salaries, demand, skills, and trends for various tech roles and locations (initially focusing on regions like India).
2.  **Structured Learning:** AI tool to instantly create comprehensive course outlines from just a title, helping users plan their learning journey.
3.  **Interview Readiness:** AI-driven mock interviews tailored to specific job roles, providing practice and feedback.

Built with Next.js 15 and React Server Components, NeoPrep leverages modern web technologies for a fast and interactive user experience.

## Key Features

*   **📊 Deep Industry Insights:**
    *   Access real-time* data on salary ranges (location/currency specific).
    *   View industry growth rates and demand levels (High, Medium, Low).
    *   Identify top skills, key market trends, and recommended skills to learn.
    *   Visualize data with interactive charts (using client components).
    *   *(Note: "Real-time" depends on the data sourcing and update frequency implemented)*
*   **💡 AI Course Generator:**
    *   Input any course title (e.g., "Introduction to Cloud Security", "Advanced React Patterns").
    *   Instantly receive a structured, detailed course outline with modules and topics.
    *   Save and manage generated course outlines.
*   **🤖 AI Interview Practice:**
    *   Select a target job role (e.g., "Software Engineer", "Cloud Engineer").
    *   Engage in a simulated interview session with an AI interviewer.
    *   Receive questions relevant to the role.
    *   (Future Scope: Get feedback on answers, track progress).

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) 15 (App Router, React Server Components)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **UI Library:** [React](https://reactjs.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) 
*   **UI Components:** [shadcn/ui](https://ui.shadcn.com/) 
*   **Icons:** [Lucide React](https://lucide.dev/) (or `react-icons`, etc.)
*   **Charting:** [Recharts](https://recharts.org/) 
*   **AI Integration:** Backend API interacting with Large Language Models (e.g., OpenAI API, Google Gemini) 
*   **Database:** PostgreSQL
*   **Authentication:**  Clerk
*   **State Management:** Zustand 
