import Character from "../../components/Character";
import Footer from "../../components/Footer";
import Main from "../../components/Main";
import Navbar from "../../components/Navbar";
import ResistanceDetail from "../../components/ResistanceDetail";

const LandingHome = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Character />
      <ResistanceDetail />
      <Footer />
    </>
  );
};

export default LandingHome;
