import type { Metadata } from "next";


import { cn } from "@/lib/utils";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/course/dashboard-sidebar";
import { Header } from "@/components/header";
import { Suspense } from "react";
import { BarLoader } from "react-spinners";




export const metadata: Metadata = {
  title: "NeoPrep",
  description: "Generate Course",
};

export default async function CourseDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
  

<Suspense fallback={<BarLoader className="mt-4" width={"100%"} color="gray" />}>

    <SidebarProvider>
      <div className="flex w-full min-h-screen flex-col">
        

        <Header/>
        <div className="flex flex-1">
          <DashboardSidebar />
          <SidebarInset>
            <main className="flex-1 p-2 md:p-3 lg:p-4"> 
              <SidebarTrigger />
              <div className={cn("mx-auto")}>

                {children}
                
                </div>
            </main>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
    
    
    </Suspense>
  );
}
