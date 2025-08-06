import VerticalInputForm from "./molecule/form/VerticalInputForm";
import InputFormWithIcons from "./molecule/form/InputFormWithIcons";
import HorizontalInputForm from "./molecule/form/HorizontalInputForm";
import HorizontalInputFormWithIcons from "./molecule/form/HorizontalInputFormWithIcons";

const FormLayoutLayer = () => {
  return (
    <div className='row gy-4'>
      {/* VerticalInputForm */}
      <VerticalInputForm />

      {/* InputFormWithIcons */}
      <InputFormWithIcons />

      {/* HorizontalInputForm */}
      <HorizontalInputForm />

      {/* HorizontalInputFormWithIcons */}
      <HorizontalInputFormWithIcons />
    </div>
  );
};

export default FormLayoutLayer;
