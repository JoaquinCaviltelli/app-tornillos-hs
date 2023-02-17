import { useState } from "react";
import Swal from "sweetalert2";
import FormArticle from "../components/FormArticle";
import PreviewCard from "../components/PreviewCard";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase.js";
import ViewTable from "../components/ViewTable";
import Toast from "../components/modalToast";
import Header from "../components/Header";
import BackToHome from "../components/BackToHome";

const AgregarArticulo = ({
  addArticle,
  deleteProduct,
  getProducts,
  result,
  setSearch,
  search,
}) => {
  const [inputData, setInputData] = useState({
    id: "",
    nombre: "",
    peso: "",
    img: "",
  });

  const [editArticle, setEditArticle] = useState(false);

  const getUpdateArticle = async (id) => {
    window.scrollTo(0, 0);
    const product = await getDoc(doc(db, "articulos", id));

    if (product.exists()) {
      setEditArticle(true);
      setInputData({
        id: id,
        nombre: product.data().nombre,
        peso: product.data().peso,
        img: product.data().urlImg,
      });
    } else {
      Toast.fire({
        icon: "error",
        title: "El articulo no existe",
      });
    }
  };

  const update = async (id) => {
    Swal.fire({
      title: "Seguro queres editarlo?",
      showCancelButton: true,
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        Toast.fire({
          icon: "success",
          title: "Articulo editado correctamente",
        });

        const product = doc(db, "articulos", id);
        const data = {
          nombre: inputData.nombre,
          peso: inputData.peso,
          urlImg: inputData.img,
        };

        updateDoc(product, data);

        getProducts();

        setInputData({
          id: "",
          nombre: "",
          peso: "",
          img: "",
        });
        setEditArticle(false);
      }
    });
  };

  const deleteArticle = (id) => {
    Swal.fire({
      title: "Seguro queres eliminarlo?",
      showCancelButton: true,
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        Toast.fire({
          icon: "success",
          title: "Articulo eliminado correctamente",
        });

        deleteProduct(id);
        setInputData({
          id: "",
          nombre: "",
          peso: "",
          img: "",
        });
        setEditArticle(false);
      }
    });
  };

  return (
    <>
      <Header setSearch={setSearch} search={search} />
      <BackToHome />
      <div className="mt-32 flex w-5/6 max-w-2xl flex-row flex-wrap items-center justify-center gap-16 px-5 ">
        <FormArticle
          inputData={inputData}
          setInputData={setInputData}
          addArticle={addArticle}
          editArticle={editArticle}
          update={update}
        />
        <PreviewCard inputData={inputData} />
      </div>

      <ViewTable
        getUpdateArticle={getUpdateArticle}
        deleteArticle={deleteArticle}
        result={result}
      />
    </>
  );
};

export default AgregarArticulo;
