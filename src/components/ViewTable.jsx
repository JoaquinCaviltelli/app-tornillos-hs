const ViewTable = ({result, getUpdateArticle, deleteArticle}) => {
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
            <tr className="hover:bg-slate-300" key={article.id}>
              <td className="p-2">{article.nombre}</td>
              <td className="p-2">{article.peso}</td>
              <td className="text-center">
                <button
                  className="p-1"
                  onClick={() => getUpdateArticle(article.id)}
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button
                  className="p-1"
                  onClick={() => deleteArticle(article.id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}
export default ViewTable