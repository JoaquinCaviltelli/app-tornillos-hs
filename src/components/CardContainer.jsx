import Card from "./Card";

const CardContainer = ({articles, amount, search, editArticle, result}) => {

   

    return (
        <div className="flex w-full flex-wrap justify-center gap-5 py-32 max-w-4xl">
        {result.map((article) => (
          
          <Card key={article.id} article={article} amount={amount} editArticle={editArticle} />
          
        ))}

      </div>
    )
}

export default CardContainer