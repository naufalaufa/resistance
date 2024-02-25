import { Button, Modal, Watermark, message } from "antd";
import { dataCharacter } from "../data/dataCharacter";
import { GoPersonFill } from "react-icons/go";
import { useState } from "react";

const ResistanceDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOpen = (id) => {
    setIsModalOpen(true);
  };
  return (
    <>
      <div className="bg-white">
        <h1 className="text-3xl p-4 mt-20 font-bold text-center underline">
          Choose Your Character
        </h1>
        <div>
          <div className="grid place-items-center grid-cols-1 sm:grid sm:grid-cols-2 sm:place-content-center sm:place-items-center md:grid-cols-3 md:place-content-center md:place-items-center lg:grid-cols-4 gap-4 p-4 lg:place-content-center lg:place-items-center  lg:span">
            {dataCharacter.map((item) => {
              const { Role, image, name, hobby, id } = item;
              return (
                <>
                  <div className="p-2 bg-white shadow-sm shadow-slate-600 rounded-sm  m-auto grid place-content-center duration-100 place-items-center hover:bg-black hover:text-white hover:cursor-pointer relative  ">
                    <img src={image} alt={image} />
                    <div className="absolute top-2 hover:bg-black/70 w-full h-full grid place-content-center ">
                      <div className="bg-white p-2 rounded-md text-black mt-24 shadow-sm shadow-slate-700">
                        <p className="text-sm font-semibold">Name : {name}</p>
                        <p className="text-xs">Role : {Role}</p>
                        <p className="text-xs">Hobby : {hobby}</p>
                      </div>
                    </div>
                    <div className="m-4">
                      <Button
                        onClick={() => handleOpen(`${id}`)}
                        className="mt-5 bg-black text-white flex items-center gap-2"
                      >
                        <p key={id}>Select Character</p>
                        <span>
                          <GoPersonFill />
                        </span>
                      </Button>
                      <Modal open={isModalOpen} onCancel={handleCancel}>
                        <img src={image} alt="" />
                      </Modal>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ResistanceDetail;
