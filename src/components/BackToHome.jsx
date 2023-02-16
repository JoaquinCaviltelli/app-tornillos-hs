import { Link } from "react-router-dom";
const BackToHome = () => {
    return (
        <p className="text-lg fixed top-5 left-5 z-50 text-white">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <i className="fa-solid fa-arrow-left pr-3 text-lg hover:scale-105"></i>
              Volver
            </Link>
          </p>
    )
}

export default BackToHome