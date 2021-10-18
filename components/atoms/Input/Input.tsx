import { classNames } from "@/lib/classNames";

interface Props {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  label: string;
  placeholder: string;
  icon?: boolean;
}

const Input: React.FC<Props> = ({
  input,
  setInput,
  label,
  placeholder,
  icon,
}) => {
  return (
    <input
      value={input}
      onChange={(e) => setInput(e.target.value)}
      id={label}
      name={label}
      className={classNames(
        icon ? "pl-10" : "pl-4",
        "block w-full bg-white border border-gray-300 rounded-md py-2 pr-4 text-sm placeholder-gray-500 focus:outline-none pl-10 focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
      )}
      placeholder={placeholder}
      type="search"
    />
  );
};

export default Input;
