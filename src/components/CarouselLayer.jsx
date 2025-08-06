import DefaultCarousel from "./molecule/carousel/DefaultCarousel";
import CarouselWithArrows from "./molecule/carousel/CarouselWithArrows";
import CarouselWithPagination from "./molecule/carousel/CarouselWithPagination";
import CarouselWithProgress from "./molecule/carousel/CarouselWithProgress";
import MultipleSlides from "./molecule/gallery/MultipleSlides";

const CarouselLayer = () => {
  return (
    <div className='row gy-4'>
      {/* DefaultCarousel */}
      <DefaultCarousel />

      {/* CarouselWithArrows */}
      <CarouselWithArrows />

      {/* CarouselWithPagination */}
      <CarouselWithPagination />

      {/* CarouselWithProgress */}
      <CarouselWithProgress />

      {/* MultipleSlides */}
      <MultipleSlides />
    </div>
  );
};

export default CarouselLayer;
