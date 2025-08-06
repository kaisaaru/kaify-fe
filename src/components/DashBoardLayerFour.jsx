import UnitCountThree from "./molecule/statistic/UnitCountThree";
import CoinAnalyticsOne from "./molecule/statistic/CoinAnalyticsOne";
import CoinAnalyticsTwo from "./molecule/statistic/CoinAnalyticsTwo";
import MyOrdersOne from "./molecule/statistic/MyOrdersOne";
import RecentTransactionOne from "./molecule/statistic/RecentTransactionOne";
import MyCardsOne from "./molecule/statistic/MyCardsOne";
import TotalBalanceOne from "./molecule/statistic/TotalBalanceOne";
import UserActivatesOne from "./child/UserActivatesOne";

const DashBoardLayerFour = () => {
  return (
    <>
      {/* UnitCountThree */}
      <UnitCountThree />

      <section>
        <div className='row gy-4 mt-4'>
          {/* Crypto Home Widgets Start */}
          <div className='col-xxl-8'>
            <div className='row gy-4'>
              {/* CoinAnalyticsOne */}
              <CoinAnalyticsOne />

              {/* CoinAnalyticsTwo */}
              <CoinAnalyticsTwo />

              {/* MyOrdersOne */}
              <MyOrdersOne />

              {/* RecentTransactionOne */}
              <RecentTransactionOne />
            </div>
          </div>

          {/* Crypto Home Widgets End */}

          <div className='col-xxl-4'>
            <div className='row gy-4'>
              {/* MyCardsOne */}
              <MyCardsOne />

              {/* TotalBalanceOne */}
              <TotalBalanceOne />

              {/* UserActivatesOne */}
              <UserActivatesOne />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashBoardLayerFour;
