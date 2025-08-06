import BasicUpload from "./molecule/form/BasicUpload";
import ImageUpload from "./molecule/form/ImageUpload";
import UploadWithImagePreview from "./molecule/form/UploadWithImagePreview";
import UploadWithImagePreviewList from "./molecule/form/UploadWithImagePreviewList";

const ImageUploadLayer = () => {
  return (
    <div className='row gy-4'>
      {/* BasicUpload */}
      <BasicUpload />

      {/* ImageUpload */}
      <ImageUpload />

      {/* UploadWithImagePreview */}
      <UploadWithImagePreview />

      {/* UploadWithImagePreviewList */}
      <UploadWithImagePreviewList />
    </div>
  );
};

export default ImageUploadLayer;
