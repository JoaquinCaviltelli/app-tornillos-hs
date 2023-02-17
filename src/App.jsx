import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import AgregarArticulo from "./pages/AgregarArticulo";
import Inicio from "./pages/Inicio";

import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  addDoc,
} from "firebase/firestore";
import { db } from "./firebaseConfig/firebase.js";

function App() {
  const [articles, setArticles] = useState([]);

  const [user, setUser] = useState(false);

  const navigate = useNavigate();

  const password = 1234;

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  const productsCollection = collection(db, "articulos");

  const getProducts = async () => {
    const data = await getDocs(productsCollection);
    setArticles(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getProducts();
  }, []);

  const [amount, setAmount] = useState(true);
  const [search, setSearch] = useState("");

  let result = [];
  if (!search) {
    result = articles;
  } else {
    result = articles.filter((article) =>
      article.nombre.toLowerCase().includes(search.toLowerCase())
    );
  }

  const addArticle = async (newArticle) => {
    await addDoc(productsCollection, {
      nombre: newArticle.nombre,
      peso: newArticle.peso,
      urlImg: newArticle.img,
    });
    getProducts();
  };

  const deleteProduct = async (id) => {
    const productDoc = doc(db, "articulos", id);
    await deleteDoc(productDoc);
    getProducts();
  };

  return (
    <div
      className={`${
        amount ? "bg-[#eeeeee]" : "bg-[#555555]"
      } flex min-h-screen flex-col items-center gap-10 transition-all`}
    >
      <Routes>
        <Route
          path="/"
          element={
            <Inicio
              setSearch={setSearch}
              search={search}
              articles={articles}
              amount={amount}
              setAmount={setAmount}
              result={result}
              setUser={setUser}
              password={password}
              user={user}
            />
          }
        />
        <Route
          path="/agregar-articulo"
          element={
            <AgregarArticulo
              addArticle={addArticle}
              deleteProduct={deleteProduct}
              getProducts={getProducts}
              result={result}
              setSearch={setSearch}
              search={search}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
