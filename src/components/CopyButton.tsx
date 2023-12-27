import { IconClipboard, IconClipboardCheck } from "@tabler/icons-react";
import { FC } from "react";
import useCopyToClipboard from "../hooks/useCopyToClipboard";

interface CopyButtonProps {
  copyText: string;
}

const CopyButton: FC<CopyButtonProps> = ({ copyText }) => {
  const [copyToClipboard, result] = useCopyToClipboard();
  return result ? (
    <IconClipboardCheck
      className="h-4 w-4 text-lime-500/50"
      onClick={() => copyToClipboard(copyText)}
    />
  ) : (
    <IconClipboard
      className="h-4 w-4 text-amber-500/50 "
      onClick={() => copyToClipboard(copyText)}
    />
  );
};
export default CopyButton;
