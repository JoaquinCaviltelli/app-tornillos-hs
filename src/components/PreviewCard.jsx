import Swal from "sweetalert2"
const PreviewCard = ({ inputData}) => {

    const modal = async () => {
        const { value: result } = await Swal.fire({
          title: "Cantidad",
          input: "number",
          inputPlaceholder: "Ingrese cantidad",
          showCancelButton: true,
          confirmButtonColor: "#002954",
          cancelButtonColor: "grey",
        });
    
        if (result) {
          Swal.fire({
            title: `${result} ${inputData.nombre} son: ${Math.round(
              result * inputData.peso
            )} gr.`,
    
            confirmButtonColor: "orange",
          });
        }
      };


    return (
       
        <div
        onClick={modal}
        className="flex relative h-48 w-40 cursor-pointer flex-col items-center justify-center gap-5 rounded bg-white p-5 text-center text-gray-500 hover:scale-105"
        >
        <img
          className="w-4/6"
          src={`${
            inputData.img ? inputData.img : "../src/assets/imgDefault.png"
          }`}
          alt="imagen del articulo"
          />
        <h4>{inputData.nombre}</h4>
          <p className="text-center text-gray-400 italic absolute bottom-[-30px]">vista previa</p>
      </div>
       
       
    )
}

export default PreviewCard