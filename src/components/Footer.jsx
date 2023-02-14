import { Link } from "react-router-dom";

const Footer = ({ setAmount, amount }) => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[#002954] px-5 py-2 text-white">
      <div className="justify-between flex max-w-4xl m-auto">
        <Link onClick={() => setAmount((amount = true))} to="/agregar-articulo">
          <i className="fa-sharp fa-solid fa-circle-plus mr-4"></i>
          Agregar / Editar
        </Link>

        <button onClick={() => setAmount(!amount)}>
          {amount ? "Cantidad" : "Gramos"}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
