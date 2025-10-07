import Gadgets from '../Gadgets/Gadgets';
import useDataLoader from '../../../hooks/useDataLoader';

const GadgetManagement = () => {
  const { products } = useDataLoader();

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-[#0B0B0B] text-center">
        Explore Cutting-Edge Gadgets
      </h2>

      <div className="mt-12">
        <Gadgets gadgetData={products}></Gadgets>
      </div>
    </div>
  );
};

export default GadgetManagement;
