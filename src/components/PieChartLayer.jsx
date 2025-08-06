import BasicPieChart from './molecule/chart/BasicPieChart'
import DonutChart from './molecule/chart/DonutChart'
import RadarChart from './molecule/chart/RadarChart'
import MultipleSeries from './molecule/chart/MultipleSeries'

const PieChartLayer = () => {
    return (
        <div className="row gy-4">

            {/* BasicPieChart */}
            <BasicPieChart />

            {/* DonutChart */}
            <DonutChart />

            {/* RadarChart */}
            <RadarChart />

            {/* MultipleSeries */}
            <MultipleSeries />

        </div>

    )
}

export default PieChartLayer