import Swal from "sweetalert2";

const modal = async (amount, article) => {
  const {
    value: result
  } = await Swal.fire({
    title: amount ? "Cantidad" : "Gramos",
    input: "number",
    showCancelButton: true,
    cancelButtonText: "Cancelar",

  });

  if (result) {
    Swal.fire({
      title: amount ?
        `${Math.round(
          result * article.peso
        )} gr.` : `${Math.round(result / article.peso)} u.`,
      text: amount ?
        `${result} ${article.nombre} son: ${Math.round(
              result * article.peso
            )} gr.` : `${result} gr son: ${Math.round(result / article.peso)}  ${
              article.nombre
            }`,


    });
  }
};

export default modal