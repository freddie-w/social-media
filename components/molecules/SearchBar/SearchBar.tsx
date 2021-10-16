import Input from "@/components/atoms/Input";
import { SearchIcon } from "@heroicons/react/solid";

interface Props {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<Props> = ({ input, setInput }) => {
  return (
    <div className="w-full">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
          <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <Input
          input={input}
          setInput={setInput}
          label="search"
          placeholder="Search"
          icon
        />
      </div>
    </div>
  );
};

export default SearchBar;
