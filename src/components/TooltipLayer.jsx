import DefaultTooltip from "@/components/atom/tooltip/DefaultTooltip";
import DefaultTooltipTwo from "@/components/atom/tooltip/DefaultTooltipTwo";
import DefaultTooltipThree from "@/components/atom/tooltip/DefaultTooltipThree";
import TooltipPopoverPositions from "@/components/atom/tooltip/TooltipPopoverPositions";
import TooltipTextPopup from "@/components/atom/tooltip/TooltipTextPopup";
import TooltipTextWithIconPopup from "@/components/atom/tooltip/TooltipTextWithIconPopup";
const TooltipLayer = () => {
  return (
    <div className='row gy-4'>
      {/* DefaultTooltip */}
      <DefaultTooltip />

      {/* DefaultTooltipTwo */}
      <DefaultTooltipTwo />

      {/* DefaultTooltipThree */}
      <DefaultTooltipThree />

      {/* TooltipPopoverPositions */}
      <TooltipPopoverPositions />

      {/* TooltipTextPopup */}
      <TooltipTextPopup />

      {/* TooltipTextWithIconPopup */}
      <TooltipTextWithIconPopup />
    </div>
  );
};

export default TooltipLayer;
