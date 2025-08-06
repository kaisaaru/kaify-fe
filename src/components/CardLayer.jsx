import DefaultCard from "./molecule/card/DefaultCard";
import CardTextIcon from "./molecule/card/CardTextIcon";
import CardWithImageOverlays from "./molecule/card/CardWithImageOverlays";
import CardHeaderFooter from "./molecule/card/CardHeaderFooter";
import HorizontalCard from "./molecule/card/HorizontalCard";
import CardWithBackgroundColor from "./molecule/card/CardWithBackgroundColor";

const CardLayer = () => {
  return (
    <>
      {/* DefaultCard */}
      <DefaultCard />

      {/* CardTextIcon */}
      <CardTextIcon />

      {/* CardWithImageOverlays */}
      <CardWithImageOverlays />

      {/* CardHeaderFooter */}
      <CardHeaderFooter />

      {/* HorizontalCard */}
      <HorizontalCard />

      {/* CardWithBackgroundColor */}
      <CardWithBackgroundColor />
    </>
  );
};

export default CardLayer;
