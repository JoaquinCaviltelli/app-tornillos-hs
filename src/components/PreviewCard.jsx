import modal from "./modal.js";

const PreviewCard = ({ inputData }) => {
  return (
    <div
      onClick={() => modal(true, inputData)}
      className="relative flex h-48 w-40 cursor-pointer flex-col items-center justify-center gap-5 rounded bg-white p-5 text-center text-gray-500 hover:scale-105"
    >
      {inputData.img && (
        <img className="w-4/6" src={inputData.img} alt="imagen del articulo" />
      )}
      <h4>{inputData.nombre}</h4>
      <p className="absolute bottom-[-30px] text-center italic text-gray-400">
        vista previa
      </p>
    </div>
  );
};

export default PreviewCard;
