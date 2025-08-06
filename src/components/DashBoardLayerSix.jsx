import UnitCountFive from "./molecule/statistic/UnitCountFive";
import TrafficSourcesOne from "./molecule/statistic/TrafficSourcesOne";
import TopCategoriesOne from "./molecule/statistic/TopCategoriesOne";
import TopInstructorsOne from "./molecule/statistic/TopInstructorsOne";
import StudentProgressOne from "./molecule/statistic/StudentProgressOne";
import CoursesOne from "./molecule/statistic/CoursesOne";
import CourseActivityOne from "./molecule/statistic/CourseActivityOne";

const DashBoardLayerSix = () => {
  return (
    <>
      <div className='row gy-4 mb-24'>
        {/* UnitCountFive */}
        <UnitCountFive />

        {/* TrafficSourcesOne */}
        <TrafficSourcesOne />

        {/* TopCategoriesOne */}
        <TopCategoriesOne />

        {/* TopInstructorsOne */}
        <TopInstructorsOne />

        {/* StudentProgressOne */}
        <StudentProgressOne />

        {/* CoursesOne */}
        <CoursesOne />

        {/* CourseActivityOne */}
        <CourseActivityOne />
      </div>
    </>
  );
};

export default DashBoardLayerSix;
