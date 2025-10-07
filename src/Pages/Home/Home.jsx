import Banner from '../../Components/Banner/Banner';
import GadgetManagement from '../../Components/Gadget/GadgetManagement/GadgetManagement';

const Home = () => {
  return (
    <div>
      <div className="p-[12px] md:p-[30px]">
        <Banner />
      </div>
      <div className="my-[56px] md:my-[72px] lg:mt-[450px] lg:mb-[100px]">
        <GadgetManagement></GadgetManagement>
      </div>
    </div>
  );
};

export default Home;
