import AverageDailySales from "./molecule/statistic/AverageDailySales";
import MonthlyCampaignState from "./molecule/statistic/MonthlyCampaignState";
import RecentActivityOne from "./molecule/statistic/RecentActivityOne";
import RevenueStatisticOne from "./molecule/statistic/RevenueStatisticOne";
import SalesByCountries from "./molecule/statistic/SalesByCountries";
import SourceVisitors from "./molecule/statistic/SourceVisitors";
import SupportTracker from "./molecule/statistic/SupportTracker";
import TransactionsTwo from "./molecule/statistic/TransactionsTwo";
import UpgradeYourPlan from "./child/UpgradeYourPlan";

const DashBoardLayerNine = () => {
  return (
    <div className='row gy-4'>
      {/* UpgradeYourPlan */}
      <UpgradeYourPlan />

      {/* RevenueStatisticOne */}
      <RevenueStatisticOne />

      {/* SupportTracker */}
      <SupportTracker />

      {/* AverageDailySales */}
      <AverageDailySales />

      {/* TransactionsTwo */}
      <TransactionsTwo />

      {/* SalesByCountries */}
      <SalesByCountries />

      {/* SourceVisitors */}
      <SourceVisitors />

      {/* MonthlyCampaignState */}
      <MonthlyCampaignState />

      {/* RecentActivityOne */}
      <RecentActivityOne />
    </div>
  );
};

export default DashBoardLayerNine;
