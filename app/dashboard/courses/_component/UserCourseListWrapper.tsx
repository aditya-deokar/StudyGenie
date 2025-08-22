import { getUserCourses } from '@/actions/course';
import UserCourseList from './UserCourseList';

const UserCourseListWrapper = async () => {
  const courses = await getUserCourses();
  
  return <UserCourseList initialCourses={courses} />;
};

export default UserCourseListWrapper;