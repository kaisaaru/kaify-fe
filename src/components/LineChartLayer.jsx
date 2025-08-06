import DefaultLineChart from "./molecule/chart/DefaultLineChart";
import ZoomAbleLineChart from "./molecule/chart/ZoomAbleLineChart";
import LineDataLabel from "./molecule/chart/LineDataLabel";
import DoubleLineChart from "./molecule/chart/DoubleLineChart";
import StepLineChart from "./molecule/chart/StepLineChart";
import GradientLineChart from "./molecule/chart/GradientLineChart";

const LineChartLayer = () => {
  return (
    <div className='row gy-4'>
      {/* DefaultLineChart */}
      <DefaultLineChart />

      {/* ZoomAbleLineChart */}
      <ZoomAbleLineChart />

      {/* LineDataLabel */}
      <LineDataLabel />

      {/* DoubleLineChart */}
      <DoubleLineChart />

      {/* StepLineChart */}
      <StepLineChart />

      {/* GradientLineChart */}
      <GradientLineChart />
    </div>
  );
};

export default LineChartLayer;
