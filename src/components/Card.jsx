import Swal from "sweetalert2";

function Card({ article, amount }) {
  const modal = async () => {
    const { value: result } = await Swal.fire({
      title: amount ? "Cantidad" : "Gramos",
      input: "number",
      showCancelButton: true,
      customClass: {
        container: 'containerSwall',
        popup: '...',
        header: '...',
        title: 'titleSwal',
        closeButton: '...',
        icon: '...',
        image: '...',
        htmlContainer: '...',
        input: '...',
        inputLabel: '...',
        validationMessage: '...',
        actions: '...',
        confirmButton: '...',
        denyButton: '...',
        cancelButton: '...',
        loader: '...',
        footer: '....',
        timerProgressBar: '....',
      }
    });

    if (result) {
      Swal.fire({
        text: amount
          ? `${result} ${article.nombre} son: ${Math.round(
              result * article.peso
            )} gr.`
          : `${result} gr son: ${Math.round(result / article.peso)}  ${
              article.nombre
            }`,

      });
    }
  };

  return (
    <div
      onClick={modal}
      className="flex h-48 w-40 cursor-pointer flex-col items-center justify-center gap-5 rounded  bg-white p-5 text-center text-gray-500 hover:scale-105"
    >
      <img className="w-4/6" src={article.urlImg} alt="" />
      <h4>{article.nombre} </h4>
    </div>
  );
}

export default Card;
