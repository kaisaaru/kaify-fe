import DefaultAlerts from "@/components/atom/alert/DefaultAlerts";
import OutlineAlerts from "@/components/atom/alert/OutlineAlerts";
import SolidAlerts from "@/components/atom/alert/SolidAlerts";
import OutlineAlertsTwo from "@/components/atom/alert/OutlineAlertsTwo";
import LeftBorderAlerts from "@/components/atom/alert/LeftBorderAlerts";
import DefaultAlertsTwo from "@/components/atom/alert/DefaultAlertsTwo";
import DefaultAlertsThree from "@/components/atom/alert/DefaultAlertsThree";

const AlertLayer = () => {
  return (
    <div className='row gy-4'>
      {/* DefaultAlerts */}
      <DefaultAlerts />

      {/* OutlineAlerts */}
      <OutlineAlerts />

      {/* SolidAlerts */}
      <SolidAlerts />

      {/* OutlineAlertsTwo */}
      <OutlineAlertsTwo />

      {/* LeftBorderAlerts */}
      <LeftBorderAlerts />

      {/* DefaultAlertsTwo */}
      <DefaultAlertsTwo />

      {/* DefaultAlertsThree */}
      <DefaultAlertsThree />
    </div>
  );
};

export default AlertLayer;
