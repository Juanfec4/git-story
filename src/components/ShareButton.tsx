import { FC } from "react";
import useCopyToClipboard from "../hooks/useCopyToClipboard";

const ShareButton: FC = () => {
  const [copyToClipboard, result] = useCopyToClipboard();

  return (
    <button
      className="bg-amber-500 text-zinc-950 rounded-md py-2 w-28 hover:bg-slate-200 transition duration-200"
      onClick={() => copyToClipboard(window.location.href)}
    >
      {!result ? "Share" : "Copied!"}
    </button>
  );
};
export default ShareButton;
