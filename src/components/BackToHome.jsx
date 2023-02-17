import { Link } from "react-router-dom";
const BackToHome = () => {
  return (
    <Link
      className="fixed top-0 left-0 z-50 flex p-5 text-lg text-white"
      to="/"
      onClick={() => window.scrollTo(0, 0)}
    >
      <span className="material-symbols-outlined">arrow_back_ios</span>
      Volver
    </Link>
  );
};

export default BackToHome;
