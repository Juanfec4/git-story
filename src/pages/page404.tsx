import { FC } from "react";
import { Link } from "react-router-dom";

const Page404: FC = () => {
  return (
    <div className="bg-zinc-900 min-h-screen min-w-full font-work-sans text-amber-500 flex items-center justify-center flex-col">
      <div className="relative flex flex-col items-center">
        <div className="md:h-[100px]">
          <h2 className=" text-3xl md:text-[200px] font-extrabold md:text-amber-200 ">
            404
          </h2>
          <h2 className=" text-3xl md:text-[200px] font-extrabold absolute -top-2 text-amber-500  hidden md:block">
            404
          </h2>
        </div>
        <h4 className="text-center text-slate-200 p-6">
          The page you are looking for does not exist.{" "}
          <Link to={"./"} className="cursor-pointer text-amber-500 underline">
            Go back
          </Link>
        </h4>
      </div>
    </div>
  );
};
export default Page404;
