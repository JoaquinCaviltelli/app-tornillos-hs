import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import FormArticle from "../components/FormArticle";
import PreviewCard from "../components/PreviewCard";
import { getDoc, doc, updateDoc } from "firebase/firestore";

import { db } from "../firebaseConfig/firebase.js";
import InputSearch from "../components/InputSearch";
import ViewTable from "../components/ViewTable";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

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

  const modal = async () => {
    const { value: result } = await Swal.fire({
      title: "Cantidad",
      input: "number",
      inputPlaceholder: "Ingrese cantidad",
      showCancelButton: true,
      confirmButtonColor: "#002954",
      cancelButtonColor: "grey",
    });

    if (result) {
      Swal.fire({
        title: `${result} ${inputData.nombre} son: ${Math.round(
          result * inputData.peso
        )} gr.`,

        confirmButtonColor: "#002954",
      });
    }
  };

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
      console.log("El producto no existe");
    }
  };

  const update = async (id) => {
    Swal.fire({
      title: "Seguro queres editarlo?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#002954",
      cancelButtonColor: "grey",
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
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#002954",
      cancelButtonColor: "grey",
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
      <div className=" fixed top-0 z-50 flex h-[70px] w-full bg-[#002954] px-5 text-white">
        <div className="m-auto flex w-full max-w-4xl items-center justify-between">
          <h1 className="text-xl">
            <Link to="/">
              <i className="fa-solid fa-arrow-left pr-5 text-xl hover:scale-105"></i>
              Volver
            </Link>
          </h1>
          <InputSearch setSearch={setSearch} search={search} />
        </div>
      </div>
      <div className="mt-36 flex w-full max-w-lg flex-col items-center justify-between gap-10 px-5 md:flex-row">
        <FormArticle
          inputData={inputData}
          setInputData={setInputData}
          addArticle={addArticle}
          editArticle={editArticle}
          update={update}
        />
        <PreviewCard inputData={inputData} modal={modal} />
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
