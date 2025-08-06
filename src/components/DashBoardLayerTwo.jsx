import CampaignStaticOne from "./molecule/statistic/CampaignStaticOne";
import ClientPaymentOne from "./molecule/statistic/ClientPaymentOne";
import CountryStatusOne from "./molecule/statistic/CountryStatusOne";
import EarningStaticOne from "./molecule/statistic/EarningStaticOne";
import LastTransactionOne from "./molecule/statistic/LastTransactionOne";
import LatestPerformanceOne from "./molecule/statistic/LatestPerformanceOne";
import RevenueGrowthOne from "./molecule/statistic/RevenueGrowthOne";
import TopPerformanceOne from "./molecule/statistic/TopperformanceOne";
import UnitCountTwo from "./molecule/statistic/UnitCountTwo";

const DashBoardLayerTwo = () => {
  return (
    <section className='row gy-4'>
      {/* UnitCountTwo */}
      <UnitCountTwo />

      {/* RevenueGrowthOne */}
      <RevenueGrowthOne />

      {/* EarningStaticOne */}
      <EarningStaticOne />

      {/* CampaignStaticOne */}
      <CampaignStaticOne />

      {/* ClientPaymentOne  */}
      <ClientPaymentOne />

      {/* CountryStatusOne */}
      <CountryStatusOne />

      {/* TopPerformanceOne */}
      <TopPerformanceOne />

      {/* LatestPerformanceOne */}
      <LatestPerformanceOne />

      {/* LastTransactionOne */}
      <LastTransactionOne />
    </section>
  );
};

export default DashBoardLayerTwo;
