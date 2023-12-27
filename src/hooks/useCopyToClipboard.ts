import { useEffect, useState } from "react";

const useCopyToClipboard = (): [(text: string) => void, boolean] => {
  const [success, setSuccess] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setSuccess(true);
      })
      .catch(() => {
        setSuccess(false);
      });
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (success) {
      timer = setTimeout(() => {
        setSuccess(false);
      }, 1000);
    }
    return () => {
      try {
        clearTimeout(timer);
      } catch (error) {
        console.error("Error clearing timer:", error);
      }
    };
  }, [success]);
  return [copyToClipboard, success];
};
export default useCopyToClipboard;
