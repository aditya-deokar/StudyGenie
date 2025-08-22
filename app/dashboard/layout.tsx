import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import type { Metadata } from "next";
import { Suspense } from "react";
import { BarLoader } from "react-spinners";

export const metadata: Metadata = {
  title: "NeoPrep",
  description: "Generated Get tailored industry data, generate instant course outlines, and ace interviews with NeoPrep ",
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <Suspense fallback={<BarLoader className="mt-4" width={"100%"} color="gray" />}>
      <div className="flex h-screen bg-background">
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
              <Header />
              <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
                {children}
              </main>
            </div>
          </div>                 
    </Suspense>
  );
}
