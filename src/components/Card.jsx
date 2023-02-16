import modal from "./modal.js";

function Card({ article, amount }) {
  return (
    <div
      onClick={() => modal(amount, article)}
      className="flex h-48 w-40 cursor-pointer flex-col items-center justify-center gap-5 rounded  bg-white p-5 text-center text-gray-500 hover:scale-105 "
    >
      <img className="w-4/6" src={article.urlImg}
      alt="" />
      <h4>{article.nombre} </h4>
    </div>
  );
}

export default Card;
