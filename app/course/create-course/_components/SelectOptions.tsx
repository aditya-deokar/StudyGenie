"use client";


import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useContext } from "react";
import { UserInputContext } from "../../_context/userInputContext";

const SelectOptions = () => {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

  const handleInputChange = (filedName: string, value: string | number) => {
    setUserCourseInput(prev => ({
      ...prev,
      [filedName]: value
    }));
  };


  return (
    <div className="px-10 md:px-20 lg:px-44">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium" htmlFor="">Difficulty Level</label>
          <Select
            defaultValue={userCourseInput?.level}
            onValueChange={(value) => handleInputChange("level", value)}>
            <SelectTrigger className="">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advance">Advance</SelectItem>
              <SelectItem value="BeginnerToAdvance">Beginner to Advance</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium" htmlFor="">Course Duration</label>
          <Select
            defaultValue={userCourseInput?.duration}
            onValueChange={(value) => handleInputChange("duration", value)}>
            <SelectTrigger className="">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2 Hours">2 Hours</SelectItem>
              <SelectItem value="3 Hours">3 Hours</SelectItem>
              <SelectItem value="more than 3 Hours">more than 3 Hours</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium" htmlFor="">Add Videos</label>
          <Select
            defaultValue={userCourseInput?.video}
            onValueChange={(value) => handleInputChange("video", value)}>
            <SelectTrigger className="">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">Yes</SelectItem>
              <SelectItem value="no">No</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* <div>
          <label className="text-sm font-medium" htmlFor="">No of chapters</label>
          <Input
            defaultValue={userCourseInput?.noOfChapter}
            onChange={(e) => handleInputChange("noOfChapter", Number(e.target.value))}
            className="h-14 text-lg" type="number"></Input>
        </div> */}

      </div>
    </div>
  )
}

export default SelectOptions
