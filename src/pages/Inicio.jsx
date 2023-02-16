import CardContainer from "../components/CardContainer";

import Footer from "../components/Footer";
import Header from "../components/Header";

const Inicio = ({ setSearch, search, amount, setAmount, result, setUser, password, user}) => {
  return (
    <>
    

      <Header setSearch={setSearch} search={search}/>

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
