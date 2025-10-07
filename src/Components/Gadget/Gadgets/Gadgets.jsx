import Gadget from './Gadget';

const Gadgets = ({ gadgetData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {gadgetData &&
        gadgetData.map(gadget => (
          <Gadget key={gadget.product_id} gadget={gadget}></Gadget>
        ))}
    </div>
  );
};

export default Gadgets;
