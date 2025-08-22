import { ReactNode, Suspense } from "react";
import { BarLoader } from "react-spinners";
import CourseHeader from "./_component/CourseHeader";
import { Metadata } from "next";


interface LayoutProps {
    children: ReactNode;
}
export const metadata: Metadata = {
    title: "NeoLearn",
    description: "Generate instant course",
  };


const CourseLayout: React.FC<LayoutProps> = ({ children }) => {
    return (


        <div className="space-y-6">
            <CourseHeader/>

            <Suspense fallback={<BarLoader className="mt-4" width={"100%"} color="gray" />}>
                {children}
            </Suspense>

        </div>



    );
};

export default CourseLayout;
