const ViewTable = ({ result, getUpdateArticle, deleteArticle }) => {
  return (
    <table className="mt-10 mb-20 w-5/6 max-w-2xl overflow-hidden rounded text-left">
      <thead className="bg-[#ffbf00]  text-white">
        <tr>
          <th className="p-2">Nombre</th>
          <th className="p-2">Peso</th>
          <th className="flex justify-center p-2">Accion</th>
        </tr>
      </thead>
      <tbody>
        {result.map((article) => (
          <tr className="hover:bg-gray-200 " key={article.id}>
            <td className="p-2">{article.nombre}</td>
            <td className="p-2">{article.peso}</td>
            <td className="text-center">
              <button
                className="p-1 text-gray-700 hover:text-orange-500"
                onClick={() => getUpdateArticle(article.id)}
              >
               <span class="material-symbols-outlined">
edit
</span>
              </button>
              <button
                className="p-1 text-gray-700 hover:text-orange-500"
                onClick={() => deleteArticle(article.id)}
              >
                <span class="material-symbols-outlined">delete</span>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default ViewTable;
