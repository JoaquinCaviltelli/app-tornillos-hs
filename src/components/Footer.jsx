import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Footer = ({ setAmount, amount, setUser, password, user }) => {
  const navigate = useNavigate();



  const validateUser = async () => {
    if (user) {
      return navigate("/agregar-articulo")
    }else{
      const { value: passwordKey } = await Swal.fire({
        title: "Ingresar contraseña",
        input: "password",
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
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });
        setAmount(true);
        setUser(true);
        navigate("/agregar-articulo");
      }
    }
  };

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[#666666] px-5 py-2 text-white">
      <div className="m-auto flex max-w-4xl justify-between">
        <button onClick={validateUser}>
          <i className="fa-sharp fa-solid fa-circle-plus mr-4"></i>
          Agregar / Editar
        </button>

        <button onClick={() => setAmount(!amount)}>
          {amount ? "Cantidad" : "Gramos"}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
