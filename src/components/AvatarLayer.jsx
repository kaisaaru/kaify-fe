import AvatarSizes from "@/components/atom/avatar/AvatarSizes";
import AvatarWithContent from "@/components/atom/avatar/AvatarWithContent";
import AvatarShapeStyle from "@/components/atom/avatar/AvatarShapeStyle";
import StatusIndicator from "./molecule/statistic/StatusIndicator";
import AvatarGroup from "@/components/atom/avatar/AvatarGroup";
import ImagesWithContent from "./molecule/banner/ImagesWithContent";

const AvatarLayer = () => {
  return (
    <div className='row gy-4'>
      {/* AvatarSizes */}
      <AvatarSizes />

      {/* AvatarWithContent */}
      <AvatarWithContent />

      {/* AvatarShapeStyle */}
      <AvatarShapeStyle />

      {/* StatusIndicator */}
      <StatusIndicator />

      {/* AvatarGroup */}
      <AvatarGroup />

      {/* ImagesWithContent */}
      <ImagesWithContent />
    </div>
  );
};

export default AvatarLayer;
