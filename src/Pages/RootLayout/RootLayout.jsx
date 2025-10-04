import React from 'react';
import Banner from '../../Components/Banner/Banner';
import GadgetManagement from '../../Components/Gadget/GadgetManagement/GadgetManagement';

const RootLayout = () => {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div className="my-[56px] md:my-[72px] lg:mt-[450px] lg:mb-[100px]">
        <GadgetManagement></GadgetManagement>
      </div>
    </div>
  );
};

export default RootLayout;
