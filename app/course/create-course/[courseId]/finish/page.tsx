import FinishScreenPage from "../_components/FinishScreenPage";


interface PageProps {
  params: {
    courseId: string;
  };
}

export default function Page({ params }: PageProps) {
  return <FinishScreenPage courseId={params.courseId} />;
}
