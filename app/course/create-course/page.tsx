'use client'

import { Button } from '@/components/ui/button';
import { Lightbulb, SquareMenu, SquareStack } from 'lucide-react';
import { useContext, useState } from 'react';
import SelectCategory from './_components/SelectCategory';
import TopicDesc from './_components/TopicDesc';
import SelectOptions from './_components/SelectOptions';
import { UserInputContext } from '../_context/userInputContext';
import LoadingDialog from './_components/LoadingDialog';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import { GenerateCourseLayout, SaveCourseLayoutInDB } from '@/actions/createCourse';



const StepperOptions = [
  { id: 1, name: 'Category', icon: <SquareStack /> },
  { id: 2, name: 'Topic & Desc', icon: <Lightbulb /> },
  { id: 3, name: 'Options', icon: <SquareMenu /> },
];

const CreateCoursePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const { userCourseInput } = useContext(UserInputContext);
  

  const checkStatus = () => {
    if (!userCourseInput) return true;

    if (activeIndex === 0 && !userCourseInput?.category) return true;
    if (activeIndex === 1 && !userCourseInput?.topic) return true;

    if (
      activeIndex === 2 &&
      (!userCourseInput?.level ||
        !userCourseInput?.duration ||
        userCourseInput?.video === undefined 
    )
    ) {
      return true;
    }

    return false;
  };

  const handleGenerate = async () => {
    try {
      setLoading(true);
      const layout = await GenerateCourseLayout(userCourseInput);
      await SaveCourseLayoutInDB( layout);
    } catch (err) {
      console.error('Error:', err);
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Stepper */}
      <div className="flex flex-col justify-center items-center mt-10">
        <h2 className="text-4xl text-primary font-medium">Create Course</h2>

        <div className="flex mt-10">
          {StepperOptions.map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="flex flex-col items-center w-[50px] md:w-[100px]">
                <div className={`p-3 bg-gray-100 rounded-full ${activeIndex >= index ? 'bg-gray-300' : ''}`}>
                  {item.icon}
                </div>
                <h2 className="hidden md:block text-sm font-medium">{item.name}</h2>
              </div>
              {index !== StepperOptions.length - 1 && (
                <div
                  className={`h-1 w-[50px] md:w-[100px] lg:w-[170px] rounded-full bg-gray-200 ${
                    activeIndex - 1 >= index ? 'bg-gray-300' : ''
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Form Area */}
      <div className="px-10 md:px-20 lg:px-44 mt-10">
        {activeIndex === 0 && <SelectCategory />}
        {activeIndex === 1 && <TopicDesc />}
        {activeIndex === 2 && <SelectOptions />}

        <div className="flex justify-between mt-10">
          <Button variant="outline" disabled={activeIndex === 0} onClick={() => setActiveIndex(activeIndex - 1)}>
            Previous
          </Button>

          {activeIndex < 2 && (
            <Button disabled={checkStatus()} onClick={() => setActiveIndex(activeIndex + 1)}>
              Next
            </Button>
          )}
          {activeIndex === 2 && (
            <Button disabled={checkStatus()} onClick={handleGenerate}>
              Generate Course Layout
            </Button>
          )}
        </div>
      </div>

      <LoadingDialog loading={loading} />
    </div>
  );
};

export default CreateCoursePage;

