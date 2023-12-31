import { IconSearch } from "@tabler/icons-react";
import { FC, useState } from "react";
import useEnter from "../hooks/useEnter";
interface SearchBoxProps {
  submitFn: (param: string) => void;
}

const SearchBox: FC<SearchBoxProps> = ({ submitFn }) => {
  let [param, setParam] = useState("");

  useEnter(() => submitFn(param));
  return (
    <div className="bg-zinc-900 rounded-md text-slate-200 font-work-sans flex p-4 focus-within:ring-1 ring-amber-500/30 justify-between">
      <input
        className="bg-transparent outline-none ring-0 w-full"
        value={param}
        type="text"
        placeholder="Search username"
        onChange={(e) => setParam(e.target.value)}
      />
      <IconSearch
        onClick={() => submitFn(param)}
        className="cursor-pointer hover:text-amber-500"
      />
    </div>
  );
};

export default SearchBox;
