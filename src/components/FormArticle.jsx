import Swal from "sweetalert2";

const FormArticle = ({
  inputData,
  setInputData,
  addArticle,
  editArticle,
  update
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

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

    if (!inputData.nombre.trim()) {
      return Toast.fire({
        icon: "error",
        title: "Debe completar el nombre",
      });
    }

    if (!inputData.peso) {
      return Toast.fire({
        icon: "error",
        title: "Debe completar el peso",
      });
    }

    if (editArticle) {
      return update(inputData.id)
     
    }

    Swal.fire({
      title: "Seguro queres guardarlo?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#002954",
      cancelButtonColor: "grey",
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
          id:"",
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
    <form onSubmit={handleSubmit} className="flex grow flex-col gap-3">
      <input
        className="rounded bg-white py-2 px-5 text-gray-500 outline-none"
        type="text"
        placeholder="Nombre"
        name="nombre"
        onChange={handleChange}
        value={inputData.nombre}
      />
      <input
        className="rounded bg-white py-2 px-5 text-gray-500 outline-none"
        type="number"
        placeholder="Peso por unidad"
        name="peso"
        onChange={handleChange}
        value={inputData.peso}
      />
      <input
        className="rounded bg-white py-2 px-5 text-gray-500 outline-none"
        type="url"
        placeholder="Url Imagen"
        name="img"
        onChange={handleChange}
        value={inputData.img}
      />
      <button
        className={`${
          editArticle
            ? " mt-3 rounded bg-[#ff8800] py-2 px-5 text-white"
            : " mt-3 rounded bg-[#ffbf00] py-2 px-5 text-white"
        }`}
        type="submit"
      >
        {editArticle ? "Editar" : "Guardar"}
      </button>
    </form>
  );
};

export default FormArticle;
