import BannerInnerOne from "./molecule/banner/BannerInnerOne";
import TrendingBidsOne from "./molecule/statistic/TrendingBidsOne";
import TrendingNFTsOne from "./molecule/statistic/TrendingNFTsOne";
import RecentBidOne from "./molecule/statistic/RecentBidOne";
import ETHPriceOne from "./molecule/statistic/ETHPriceOne";
import StatisticsOne from "./molecule/statistic/StatisticsOne";
import FeaturedCreatorsOne from "./child/FeaturedCreatorsOne";
import FeaturedCreatorsTwo from "./child/FeaturedCreatorsTwo";

const DashBoardLayerSeven = () => {
  return (
    <>
      <div className='row gy-4'>
        <div className='col-xxl-8'>
          <div className='row gy-4'>
            {/* BannerInnerOne */}
            <BannerInnerOne />

            {/* TrendingBidsOne */}
            <TrendingBidsOne />

            {/* TrendingNFTsOne */}
            <TrendingNFTsOne />

            {/* RecentBidOne */}
            <RecentBidOne />
          </div>
        </div>

        <div className='col-xxl-4'>
          <div className='row gy-4'>
            {/* ETHPriceOne */}
            <ETHPriceOne />

            {/* StatisticsOne */}
            <StatisticsOne />

            {/* FeaturedCreatorsOne */}
            <FeaturedCreatorsOne />

            {/* FeaturedCreatorsTwo */}
            <FeaturedCreatorsTwo />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardLayerSeven;
