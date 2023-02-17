const ViewTable = ({ result, getUpdateArticle, deleteArticle }) => {
  return (
    <table className="mt-5 mb-20 w-5/6 max-w-2xl overflow-hidden rounded text-left">
      <thead className="bg-[#666666]  text-white">
        <tr>
          <th className="p-2">Nombre</th>
          <th className="p-2">Peso</th>
          <th className="p-2 text-right">Accion</th>
        </tr>
      </thead>
      <tbody>
        {result.map((article) => (
          <tr className="hover:bg-gray-200 " key={article.id}>
            <td className="p-2">{article.nombre}</td>
            <td className="p-2">{article.peso}</td>
            <td className="text-right">
              <button
                className="p-1 text-gray-700 hover:text-[#ffbf00]"
                onClick={() => getUpdateArticle(article.id)}
              >
                <span className="material-symbols-outlined">edit</span>
              </button>
              <button
                className="p-1 text-gray-700 hover:text-[#ffbf00]"
                onClick={() => deleteArticle(article.id)}
              >
                <span className="material-symbols-outlined">delete</span>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default ViewTable;
