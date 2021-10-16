import { classNames } from "@/lib/classNames";

interface Props {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  label: string;
  placeholder: string;
  avatar: boolean;
}

const Textarea: React.FC<Props> = ({
  input,
  setInput,
  label,
  placeholder,
  avatar = false,
}) => {
  return (
    <textarea
      value={input}
      onChange={(e) => setInput(e.target.value)}
      id={label}
      name={label}
      placeholder={placeholder}
      className={classNames(
        avatar ? "pl-[48px]" : "pl-3",
        "block relative w-full h-36 bg-white border border-gray-300 rounded-md py-3 pr-3 text-sm placeholder-gray-500 focus:outline-none pl-10 focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
      )}
    />
  );
};

export default Textarea;
