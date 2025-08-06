import RevenueReportOne from "./molecule/statistic/RevenueReportOne";
import CustomersStatisticsOne from "./molecule/statistic/CustomersStatisticsOne";
import RecentOrdersOne from "./molecule/statistic/RecentOrdersOne";
import TransactionsOne from "./molecule/statistic/TransactionsOne";
import RecentOrdersTwo from "./molecule/statistic/RecentOrdersTwo";
import DistributionMapsOne from "./child/DistributionMapsOne";
import TopCustomersOne from "./molecule/statistic/TopCustomersOne";
import TopSellingProductOne from "./molecule/statistic/TopSellingProductOne";
import StockReportOne from "./molecule/statistic/StockReportOne";

const DashBoardLayerThree = () => {
  return (
    <section className='row gy-4'>
      {/* RevenueReportOne */}
      <RevenueReportOne />

      {/* CustomersStatisticsOne */}
      <CustomersStatisticsOne />

      {/* RecentOrdersOne */}
      <RecentOrdersOne />

      {/* TransactionsOne */}
      <TransactionsOne />

      {/* RecentOrdersTwo */}
      <RecentOrdersTwo />

      {/* DistributionMapsOne */}
      <DistributionMapsOne />

      {/* TopCustomersOne */}
      <TopCustomersOne />

      {/* TopSellingProductOne */}
      <TopSellingProductOne />

      {/* StockReportOne */}
      <StockReportOne />
    </section>
  );
};

export default DashBoardLayerThree;
