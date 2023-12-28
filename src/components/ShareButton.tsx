import { FC } from "react";
import useCopyToClipboard from "../hooks/useCopyToClipboard";

interface ShareButtonProps {
  username?: string;
}
const ShareButton: FC<ShareButtonProps> = ({ username }) => {
  const [copyToClipboard, result] = useCopyToClipboard();

  const { origin } = window.location;
  return (
    <button
      className="bg-amber-500 text-zinc-950 rounded-md py-2 w-28 hover:bg-slate-200 transition duration-200"
      onClick={() => copyToClipboard(origin + "/view/" + username)}
    >
      {!result ? "Share" : "Copied!"}
    </button>
  );
};
export default ShareButton;
