import DefaultProgress from "@/components/atom/progress/DefaultProgress";
import ProgressWithMultipleColor from "@/components/atom/progress/ProgressWithMultipleColor";
import ProgressWithRightLabel from "@/components/atom/progress/ProgressWithRightLabel";
import StripedProgress from "@/components/atom/progress/StripedProgress";
import AnimatedProgress from "@/components/atom/progress/AnimatedProgress";
import GradientProgress from "@/components/atom/progress/GradientProgress";
import GradientProgressTwo from "@/components/atom/progress/GradientProgressTwo";
import GradientProgressThree from "@/components/atom/progress/GradientProgressThree";
import ProgressCircle from "@/components/atom/progress/ProgressCircle";

const ProgressLayer = () => {
  return (
    <div className='row gy-4'>
      {/* DefaultProgress */}
      <DefaultProgress />

      {/* ProgressWithMultipleColor */}
      <ProgressWithMultipleColor />

      {/* ProgressWithRightLabel */}
      <ProgressWithRightLabel />

      {/* StripedProgress */}
      <StripedProgress />

      {/* AnimatedProgress */}
      <AnimatedProgress />

      {/* GradientProgress */}
      <GradientProgress />

      {/* GradientProgressTwo */}
      <GradientProgressTwo />

      {/* GradientProgressThree */}
      <GradientProgressThree />

      {/* ProgressCircle */}
      <ProgressCircle />
    </div>
  );
};

export default ProgressLayer;
