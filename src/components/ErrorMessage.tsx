import { IconAlertTriangleFilled } from "@tabler/icons-react";
import { FC } from "react";

interface ErrorMessageProps {
  error: any;
}
const ErrorMessage: FC<ErrorMessageProps> = ({ error }) => {
  return (
    <div className="bg-red-500/10 rounded-md text-red-500 p-2 flex gap-2 items-center justify-center">
      <IconAlertTriangleFilled />
      <p>{error.message}</p>
    </div>
  );
};

export default ErrorMessage;
