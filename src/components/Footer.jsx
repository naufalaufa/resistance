import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-white shadow-md shadow-slate-800 p-4 grid place-content-center text-center mt-10 lg:grid-cols-4 lg:text-left gap-10   ">
      <div>
        <h1 className="font-bold mb-3">Pages</h1>
        <div>Desember</div>
        <div>January</div>
        <div>Febuary</div>
        <div>Maret</div>
        <div>April</div>
        <div>Cretivox Camping Day</div>
      </div>
      <div>
        <h1 className="font-bold">Sosial Media</h1>
        <div className="flex items-center gap-3">
          <span>
            <FaInstagram />
          </span>
          <a
            className="hover:text-blue-400"
            href="https://www.instagram.com/sdn.mekarwangi03/?hl=id"
            target="_blank"
            rel="noreferrer"
          >
            sdn.mekarwangi03
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
