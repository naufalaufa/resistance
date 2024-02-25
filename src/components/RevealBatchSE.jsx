import RevealImage from "../assets/images/reveal.jpg";
import RevealImage2 from "../assets/images/reveal-2.jpg";

const RevealBatchSE = () => {
  return (
    <div>
      <h1 className="font-bold text-xl mt-20 p-5 sm:text-3xl">
        Reveal Batch SE
      </h1>
      <div className="grid grid-cols-2">
        <img
          src={RevealImage}
          alt={RevealBatchSE}
          className="w-[300px] object-cover rounded lg:w-[300px]"
        />
        <img src={RevealImage2} alt={RevealImage2} className="ml-40" />
      </div>
    </div>
  );
};

export default RevealBatchSE;
