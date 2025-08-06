import IncomeVsExpense from "./molecule/statistic/IncomeVsExpense";
import OverallReport from "./molecule/statistic/OverallReport";
import PurchaseAndSales from "./molecule/statistic/PurchaseAndSales";
import RecentTransactions from "./molecule/statistic/RecentTransactions";
import TopCustomer from "./molecule/statistic/TopCustomer";
import TopSuppliers from "./molecule/statistic/TopSuppliers";
import UnitCountSeven from "./molecule/statistic/UnitCountSeven";
import UsersChart from "./molecule/chart/UsersChart";

const DashBoardLayerTen = () => {
  return (
    <div className='row gy-4'>
      {/* UnitCountSeven */}
      <UnitCountSeven />

      {/* IncomeVsExpense */}
      <IncomeVsExpense />

      {/* UsersChart */}
      <UsersChart />

      {/* TopSuppliers */}
      <TopSuppliers />

      {/* TopCustomer */}
      <TopCustomer />

      {/* OverallReport */}
      <OverallReport />

      {/* PurchaseAndSales */}
      <PurchaseAndSales />

      {/* RecentTransactions */}
      <RecentTransactions />
    </div>
  );
};

export default DashBoardLayerTen;
