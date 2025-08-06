import UnitCountFour from "./molecule/statistic/UnitCountFour";
import RevenueStatisticsOne from "./molecule/statistic/RevenueStatisticsOne";
import SalesStatisticTwo from "./molecule/statistic/SalesStatisticTwo";
import TopCountriesTwo from "./molecule/statistic/TopCountriesTwo";
import UserActivatesTwo from "./child/UserActivatesTwo";
import LatestInvestmentsOne from "./molecule/statistic/LatestInvestmentsOne";
import NoticeBoardOne from "./molecule/statistic/NoticeBoardOne";
import TotalTransactionsOne from "./molecule/statistic/TotalTransactionsOne";
import ProjectStatusOne from "./molecule/statistic/ProjectStatusOne";

const DashBoardLayerFive = () => {
  return (
    <>
      <div className='row gy-4'>
        {/* UnitCountFour */}
        <UnitCountFour />

        {/* RevenueStatisticsOne */}
        <RevenueStatisticsOne />

        {/* SalesStatisticTwo */}
        <SalesStatisticTwo />

        {/* TopCountriesTwo */}
        <TopCountriesTwo />

        {/* UserActivatesTwo */}
        <UserActivatesTwo />

        {/* LatestInvestmentsOne */}
        <LatestInvestmentsOne />

        {/* NoticeBoardOne */}
        <NoticeBoardOne />

        {/* TotalTransactionsOne */}
        <TotalTransactionsOne />

        {/* ProjectStatusOne */}
        <ProjectStatusOne />
      </div>
    </>
  );
};

export default DashBoardLayerFive;
