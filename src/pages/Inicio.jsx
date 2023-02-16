import CardContainer from "../components/CardContainer";
import InputSearch from "../components/InputSearch";
import Footer from "../components/Footer";

const Inicio = ({ setSearch, search, amount, setAmount, result, setUser, password, user}) => {
  return (
    <>
    <div className="h-[70px]  w-full bg-[#ffbf00] text-white  px-5  fixed top-0 z-50">
    <div className="max-w-2xl flex justify-end items-center h-full m-auto">
      <InputSearch setSearch={setSearch} search={search} />
      </div>
      </div>

      <CardContainer
        amount={amount}
        result={result}
        
      />
      <Footer
        amount={amount}
        setAmount={setAmount}
        setUser={setUser}
        password={password}
      user={user}
        
      />
    </>
  );
};

export default Inicio;
