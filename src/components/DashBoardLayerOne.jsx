import GeneratedContent from "./child/GeneratedContent";
import LatestRegisteredOne from "./molecule/statistic/LatestRegisteredOne";
import SalesStatisticOne from "./molecule/statistic/SalesStatisticOne";
import TopCountries from "./molecule/statistic/TopCountries";
import TopPerformerOne from "./molecule/statistic/TopPerformerOne";
import TotalSubscriberOne from "./molecule/statistic/TotalSubscriberOne";
import UnitCountOne from "./molecule/statistic/UnitCountOne";
import UsersOverviewOne from "./child/UsersOverviewOne";

const DashBoardLayerOne = () => {
  return (
    <>
      {/* UnitCountOne */}
      <UnitCountOne />

      <section className='row gy-4 mt-1'>
        {/* SalesStatisticOne */}
        <SalesStatisticOne />

        {/* TotalSubscriberOne */}
        <TotalSubscriberOne />

        {/* UsersOverviewOne */}
        <UsersOverviewOne />

        {/* LatestRegisteredOne */}
        <LatestRegisteredOne />

        {/* TopPerformerOne */}
        <TopPerformerOne />

        {/* TopCountries */}
        <TopCountries />

        {/* GeneratedContent */}
        <GeneratedContent />
      </section>
    </>
  );
};

export default DashBoardLayerOne;
