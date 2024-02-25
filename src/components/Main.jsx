import Flower1 from "../assets/images/flower-1.jpg";
import Video from "../../public/video/IGDownloader.App_3281478362405073657.mp4";

const Main = () => {
  return (
    <div className="min-h-screen grid place-content-center items-center md:grid md:grid-cols-2">
      <div className="relative w-screen">
        <video
          controls
          autoPlay
          loop
          className="w-[600px] h-[800px]"
          src={Video}
        >
          <source src={Video} />
        </video>
        <div className="grid place-content-center absolute top-[30%] left-[7%] md:left-20">
          <h1 className="text-2xl font-bold text-yellow-400 md:text-4xl lg:text-6xl relative">
            <span className="text-5xl sm:text-8xl">R</span>esistance in blom
          </h1>
          <h1 className="text-2xl md:text-4xl lg:text-6xl text-orange-600 font-bold absolute top-0 animate-pulse">
            <span className="text-5xl sm:text-8xl">R</span>esistance in blom
          </h1>
          <div className="my-8 relative z-[9999] ">
            <p className="text-sm lg:text-xl text-white ">JOIN OUR STORY.</p>
            <p className="text-sm lg:text-xl text-white">
              BLOOM YOUR INNER SPIRITS
            </p>
            <p className="text-sm lg:text-xl text-white">
              AND EXPERIENCE THE MOST PRESTIGIOUS
            </p>
            <p className="text-white">
              INTERNSHIP EXPERIENCE AT{" "}
              <span className="font-bold text-white">CRETIVOX</span>
            </p>
          </div>

          <span>
            <span className="text-white">Batch S.E</span>
            <p className="text-white">Special Edition</p>
          </span>
        </div>
      </div>
      <div className="absolute right-4 bottom-[35%] lg:bottom-[8%] lg:right-10">
        <img
          src={Flower1}
          alt={Flower1}
          className="p-2 shadow-sm shadow-slate-700 rounded-sm ml-32 bg-black/10 hidden md:inline-block md:w-80 md:ml-10 lg:ml-40 "
        />
        <p className="absolute md:top-[-30px] lg:ml-[370px] md:ml-[210px] font-bold text-orange-500 whitespace-nowrap lg:left-[-40px] hidden md:flex bg-white p-1 rounded-md shadow-sm shadow-black">
          Resistance in blom
        </p>
        <p className="md:absolute md:top-[305px] md:ml-[-50px] ml-9  text-orange-500 font-bold md:-rotate-90 md:flex hidden lg:ml-16  lg:top-[310px] bg-white p-1 rounded-md shadow-sm shadow-black ">
          Resistance in blom
        </p>
        <p className="md:absolute md:top-[60px] md:ml-[-50px] ml-9 text-orange-500 font-bold  md:rotate-90 md:flex hidden lg:ml-16 lg:top-16 bg-white p-1 rounded-md shadow-black shadow-sm ">
          Resistance in blom
        </p>
      </div>
    </div>
  );
};

export default Main;
