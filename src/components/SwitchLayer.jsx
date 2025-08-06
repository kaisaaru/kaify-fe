import DefaultRadioTwo from "./molecule/form/DefaultRadioTwo";
import SwitchDisable from "./molecule/form/SwitchDisable";
import SwitchWithTex from "./molecule/form/SwitchWithTex";
import SwitchHorizontal from "./molecule/form/SwitchHorizontal";

const SwitchLayer = () => {
  return (
    <div className='row gy-4'>
      {/* DefaultRadioTwo */}
      <DefaultRadioTwo />

      {/* SwitchDisable */}
      <SwitchDisable />

      {/* SwitchWithTex */}
      <SwitchWithTex />

      {/* SwitchHorizontal */}
      <SwitchHorizontal />
    </div>
  );
};

export default SwitchLayer;
