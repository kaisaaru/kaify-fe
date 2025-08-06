import React from "react";
import UnitCountSix from "./molecule/statistic/UnitCountSix";
import EarningStatistic from "./molecule/statistic/EarningStatistic";
import PatientVisitedDepartment from "./molecule/statistic/PatientVisitedbyDepartment";
import PatientVisitByGender from "./molecule/statistic/PatientVisitByGender";
import TopPerformanceTwo from "./molecule/statistic/TopPerformanceTwo";
import LatestAppointmentsOne from "./molecule/statistic/LatestAppointmentsOne";
import TotalIncome from "./molecule/statistic/TotalIncome";
import AvailableTreatments from "./child/AvailableTreatments";
import HealthReportsDocument from "./child/HealthReportsDocument";

const DashBoardLayerEight = () => {
  return (
    <>
      <div className='row gy-4'>
        <div className='col-xxxl-9'>
          <div className='row gy-4'>
            {/* UnitCountSix */}
            <UnitCountSix />
            {/* Earning Statistic */}
            <EarningStatistic />

            {/* PatientVisitedDepartment */}
            <PatientVisitedDepartment />

            {/* PatientVisitByGender */}
            <PatientVisitByGender />

            {/* TopPerformanceTwo */}
            <TopPerformanceTwo />

            {/* LatestAppointmentsOne */}
            <LatestAppointmentsOne />
          </div>
        </div>
        <div className='col-xxxl-3'>
          <div className='row gy-4'>
            {/* TotalIncome */}
            <TotalIncome />

            {/* AvailableTreatments */}
            <AvailableTreatments />

            {/* HealthReportsDocument */}
            <HealthReportsDocument />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardLayerEight;
