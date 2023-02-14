import CardContainer from "../components/CardContainer";
import InputSearch from "../components/InputSearch";
import Footer from "../components/Footer";

const Inicio = ({ setSearch, search, articles, amount, setAmount, result}) => {
  return (
    <>
    <div className="h-[70px]  w-full bg-[#002954] text-white  px-5  fixed top-0 z-50">
    <div className="max-w-4xl flex justify-end items-center h-full m-auto">
      <InputSearch setSearch={setSearch} search={search} />
      </div>
      </div>

      <CardContainer
        articles={articles}
        search={search}
        amount={amount}
        setAmount={setAmount}
        result={result}
        
      />
      <Footer
        amount={amount}
        setAmount={setAmount}
        
      />
    </>
  );
};

export default Inicio;
