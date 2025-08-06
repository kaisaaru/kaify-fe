import BalanceStatistic from "./molecule/statistic/BalanceStatistic";
import EarningCategories from "./molecule/statistic/EarningCategories";
import ExpenseStatistics from "./molecule/statistic/ExpenseStatistics";
import Investment from "./molecule/statistic/Investment";
import MonthlyExpenseBreakdown from "./molecule/statistic/MonthlyExpenseBreakdown";
import PaymentHistory from "./molecule/statistic/PaymentHistory";
import PaymentHistoryOne from "./molecule/statistic/PaymentHistoryOne";
import QuickTransfer from "./molecule/statistic/QuickTransfer";
import UnitCountEight from "./molecule/statistic/UnitCountEight";

const DashBoardLayerEleven = () => {
  return (
    <>
      {/* UnitCountEight */}
      <UnitCountEight />

      <div className='mt-24'>
        <div className='row gy-4'>
          <div className='col-xl-8'>
            <div className='row gy-4'>
              {/* BalanceStatistic */}
              <BalanceStatistic />

              {/* EarningCategories */}
              <EarningCategories />

              {/* ExpenseStatistics */}
              <ExpenseStatistics />

              {/* PaymentHistory */}
              <PaymentHistory />

              {/* MonthlyExpenseBreakdown */}
              <MonthlyExpenseBreakdown />
            </div>
          </div>
          {/* Sidebar start */}
          <div className='col-xl-4'>
            {/* QuickTransfer */}
            <QuickTransfer />

            {/* Investment */}
            <Investment />
          </div>
          {/* Sidebar end */}
        </div>
      </div>

      {/* PaymentHistoryOne */}
      <PaymentHistoryOne />
    </>
  );
};

export default DashBoardLayerEleven;
