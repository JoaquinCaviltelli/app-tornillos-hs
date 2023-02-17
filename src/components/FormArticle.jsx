import Swal from "sweetalert2";
import Toast from "../components/modalToast";

const FormArticle = ({
  inputData,
  setInputData,
  addArticle,
  editArticle,
  update,
}) => {
  const { id, nombre, peso, img } = inputData;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre.trim()) {
      return Toast.fire({
        icon: "error",
        title: "Debe completar el nombre",
      });
    }

    if (!peso) {
      return Toast.fire({
        icon: "error",
        title: "Debe completar el peso",
      });
    }

    if (editArticle) {
      return update(id);
    }

    Swal.fire({
      title: "Seguro queres guardarlo?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        Toast.fire({
          icon: "success",
          title: "Articulo guardado correctamente",
        });

        addArticle(inputData);

        e.target.reset();

        setInputData({
          id: "",
          nombre: "",
          peso: "",
          img: "",
        });
      }
    });
  };

  const handleChange = (e) => {
    setInputData((inputData) => ({
      ...inputData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-grow flex-col gap-3">
      <input
        className="rounded bg-white py-2 px-5 text-gray-500 outline-none"
        type="text"
        placeholder="Nombre"
        name="nombre"
        onChange={handleChange}
        value={nombre}
      />
      <input
        className="rounded bg-white py-2 px-5 text-gray-500 outline-none"
        type="number"
        placeholder="Peso por unidad"
        name="peso"
        onChange={handleChange}
        value={peso}
      />
      <input
        className="rounded bg-white py-2 px-5 text-gray-500 outline-none"
        type="url"
        placeholder="Url Imagen"
        name="img"
        onChange={handleChange}
        value={img}
      />
      <button
        className={`${
          editArticle
            ? " mt-3 rounded bg-[#666666] py-2 px-5 text-white"
            : " mt-3 rounded bg-[#ffbf00] py-2 px-5 text-white"
        } `}
        type="submit"
      >
        {editArticle ? "Editar" : "Guardar"}
      </button>
    </form>
  );
};

export default FormArticle;
