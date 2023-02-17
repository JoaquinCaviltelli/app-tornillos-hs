import Card from "./Card";

const CardContainer = ({ amount, result }) => {
  return (
    <div className="flex w-full max-w-4xl flex-wrap justify-center gap-5 py-32">
      {result.map((article) => (
        <Card key={article.id} article={article} amount={amount} />
      ))}
    </div>
  );
};

export default CardContainer;
