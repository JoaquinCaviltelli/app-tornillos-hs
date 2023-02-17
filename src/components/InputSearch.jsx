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

      <span
        onClick={() => setSearch("")}
        className=" material-symbols-outlined absolute cursor-pointer p-2 text-gray-300"
      >
        {!search ? "search" : "close"}
      </span>
    </>
  );
};

export default InputSearch;
