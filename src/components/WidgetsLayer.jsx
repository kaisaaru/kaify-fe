import Metrics from "./molecule/statistic/Metrics";
import SalesStatisticOne from "./molecule/statistic/SalesStatisticOne";
import TopCountries from "./molecule/statistic/TopCountries";
import ClientPaymentOne from "./molecule/statistic/ClientPaymentOne";
import EarningStaticOne from "./molecule/statistic/EarningStaticOne";
import TotalTransactionsOne from "./molecule/statistic/TotalTransactionsOne";
import SalesStatisticTwo from "./molecule/statistic/SalesStatisticTwo";
import UsersOverviewTwo from "./child/UsersOverviewTwo";

const WidgetsLayer = () => {
  return (
    <>
      {/* Metrics */}
      <Metrics />
      <div className='row gy-4 mt-1'>
        {/* SalesStatisticOne */}
        <SalesStatisticOne />

        {/* TopCountries */}
        <TopCountries />

        {/* ClientPaymentOne */}
        <ClientPaymentOne />

        {/* EarningStaticOne */}
        <EarningStaticOne />

        {/* UsersOverviewOne */}
        <UsersOverviewTwo />

        {/* TotalTransactionsOne */}
        <TotalTransactionsOne />

        {/* SalesStatisticTwo */}
        <SalesStatisticTwo />
      </div>
    </>
  );
};

export default WidgetsLayer;
