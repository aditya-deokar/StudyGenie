import { ReactNode, Suspense } from "react";
import { BarLoader } from "react-spinners";


interface LayoutProps {
    children: ReactNode;
}


const IndustryLayout: React.FC<LayoutProps> = ({ children }) => {
    return (

            <Suspense fallback={<BarLoader className="mt-4" width={"100%"} color="gray" />}>
                {children}
            </Suspense>

    );
};

export default IndustryLayout;
