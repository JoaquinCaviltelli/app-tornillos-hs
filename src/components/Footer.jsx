import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Footer = ({ setAmount, amount, setUser, password, user }) => {
  const navigate = useNavigate();

  const validateUser = async () => {
    if (user) {
      window.scrollTo(0, 0);
      return navigate("/agregar-articulo");
    } else {
      const { value: passwordKey } = await Swal.fire({
        title: "Ingresar contraseña",
        input: "text",
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (value == password) {
              resolve();
            } else {
              resolve("Contraseña incorrecta");
            }
          });
        },
      });

      if (passwordKey == password) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Ingreso correctamente",
        });
        setAmount(true);
        setUser(true);
        navigate("/agregar-articulo");
        window.scrollTo(0, 0);
      }
    }
  };

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[#666666] px-5 py-2 text-white ">
      <div className="m-auto flex max-w-4xl items-center justify-between px-2 text-[14px] font-normal">
        <button className="flex gap-2 items-center" onClick={validateUser}>
          <span className="material-symbols-outlined ">add_to_photos</span>
          Agregar
        </button>

        <button className="flex gap-2 items-center" onClick={() => setAmount(!amount)}>
          {amount ? "Cantidad" : "Gramos"}

          <span className="material-symbols-outlined">
            {amount ? "toggle_on" : "toggle_off"}
          </span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
