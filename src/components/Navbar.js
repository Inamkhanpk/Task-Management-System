import useAOS from "../customHook/customAOS";
const Navbar = () => {
  useAOS();

  return (
    <nav
      className="flex justify-center items-center  rounded-[5rem] mt-[20rem] mb-[5rem] bg-[#f38e3d]"
      data-aos="flip-left"
      data-aos-offset="500"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
      data-aos-delay="1000"
    >
      <div className="text-[10rem] text-bold text-center ">TASK MANAGEMENT</div>
    </nav>
  );
};

export default Navbar;
