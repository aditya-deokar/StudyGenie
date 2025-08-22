
import { getUserCourses } from '@/actions/course';
import UserCourseList from './_component/UserCourseList';


const UserCourseListWrapper = async () => {
  const courses = await getUserCourses();
  // console.log(courses)
  
  return <UserCourseList initialCourses={courses} />;
};

export default UserCourseListWrapper;