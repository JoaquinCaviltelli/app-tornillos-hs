import InputSearch from "./InputSearch";

const Header = ({setSearch,search }) => {
  return (
    <div className="fixed  top-0 z-50 h-[70px] w-full bg-[#ffbf00] text-white px-5">
      <div className="m-auto flex h-full max-w-4xl items-center justify-end px-2">
        <InputSearch setSearch={setSearch} search={search} />

      </div>
    </div>
  );
};

export default Header;
