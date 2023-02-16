const InputSearch = ({ setSearch, search }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        value={search}
        className=" w-3/6 max-w-[250px] rounded bg-white py-2 px-5 text-gray-500 outline-none "
        placeholder="Buscar..."
      />
      
      <span onClick={()=> setSearch("")} className=" cursor-pointer material-symbols-outlined text-gray-300 absolute p-2">{!search ? "search" : "close"}</span>
     
    </>
  );
};

export default InputSearch;
