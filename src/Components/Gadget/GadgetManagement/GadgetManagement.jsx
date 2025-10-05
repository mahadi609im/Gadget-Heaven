import { useLoaderData } from 'react-router';
import Gadgets from '../Gadgets/Gadgets';

const GadgetManagement = () => {
  const gadgetData = useLoaderData();

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-[#0B0B0B] text-center">
        Explore Cutting-Edge Gadgets
      </h2>

      <div className="mt-12">
        <Gadgets gadgetData={gadgetData}></Gadgets>
      </div>
    </div>
  );
};

export default GadgetManagement;
