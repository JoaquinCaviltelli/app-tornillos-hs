const InputSearch = ({ setSearch, search }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <input
      type="text"
      onChange={handleChange}
      value={search}
      className=" w-4/6 max-w-md rounded bg-white py-2 px-5 text-gray-500 outline-none "
      placeholder="Buscar..."
    />
  );
};

export default InputSearch;
