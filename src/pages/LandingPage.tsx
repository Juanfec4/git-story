import { IconSearch } from "@tabler/icons-react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import DesktopApp from "../assets/mockups/desktopApp.png";
import PhoneApp from "../assets/mockups/phone.png";
const LandingPage: FC = () => {
  const navigator = useNavigate();
  return (
    <div className="w-screen min-h-screen h-full bg-zinc-950 font-work-sans text-slate-200 overflow-x-hidden background-grid">
      <div className="max-w-screen-lg mx-auto">
        <header className="p-6 flex flex-col gap-6">
          <div className="flex w-full bg-zinc-900 items-center justify-between p-6 rounded-md">
            <h1 className="font-work-sans text-center text-slate-200 font-light text-4xl tracking-tighter rounded-md">
              Git<span className="text-amber-500 font-normal">Story</span>
            </h1>
            <button
              className="bg-amber-500 text-zinc-950 rounded-md p-2 font-semibold hover:bg-slate-200 transition duration-200 flex gap-2"
              onClick={() => navigator("/details")}
            >
              <IconSearch />
              <p className="font-normal">Search</p>
            </button>
          </div>
          <div className="py-16 md:grid grid-cols-6">
            <div className="col-start-1 col-end-4 flex flex-col gap-4">
              <h1 className="text-6xl font-bold max-w-xl z-10 md:w-xl ">
                Share all of your latest GitHub repos with one simple link.
              </h1>
              <button
                className="bg-amber-500 text-zinc-950 rounded-md py-4 px-12 hover:bg-slate-200 transition duration-200 self-start w-full sm:w-max"
                onClick={() => navigator("/details")}
              >
                Start now
              </button>
            </div>
            <img
              src={PhoneApp}
              alt="Mobile app mockups"
              className="hidden col-start-4 col-end-7 md:block scale-125"
            />
          </div>
        </header>
        <main className="my-12 p-6">
          <section>
            <h2 className="text-5xl font-light text-center">
              Simple 3 step process
            </h2>
            <div className="max-w-max mx-auto mt-12 flex flex-col md:flex-row md:justify-between">
              <div className="flex gap-2 items-center p-6">
                <h3 className="text-7xl font-bold opacity-50">1.</h3>
                <p className="max-w-xs">Search a GitHub username.</p>
              </div>
              <div className="flex gap-2 items-center p-6">
                <h3 className="text-7xl font-bold opacity-50">2.</h3>
                <p className="max-w-xs">
                  View the GitHub profile details, and repositories.
                </p>
              </div>
              <div className="flex gap-2 items-center p-6">
                <h3 className="text-7xl font-bold opacity-50">3.</h3>
                <p className="max-w-xs">Share the profile link with others.</p>
              </div>
            </div>
          </section>
          <section>
            <img
              src={DesktopApp}
              alt="Desktop app mockup"
              className="md:-mt-24"
            />
          </section>
        </main>
        <footer className="grid px-6 pb-6 grid-cols-8 h-full max-w-screen-lg mx-auto gap-2">
          <div className="bg-zinc-900 col-start-1 col-end-9 sm:col-start-2 sm:col-end-8  md:col-start-1 md:col-end-9 rounded-md p-6 text-slate-200 font-sm text-center flex justify-start gap-4">
            <p>
              Made by{" "}
              <a
                href="https://github.com/Juanfec4"
                target="_blank"
                className="cursor-pointer border-b  text-amber-500/50 border-transparent hover:border-amber-500/50 hover:text-amber-500 transition duration-200 italic"
              >
                @Juanfec4
              </a>
            </p>
            {" | "}
            <a
              href="https://github.com/Juanfec4/git-story"
              target="_blank"
              className="cursor-pointer border-b  text-amber-500/50 border-transparent hover:border-amber-500/50 hover:text-amber-500 transition duration-200 italic"
            >
              Project repository
            </a>
            {" | "}
            <a
              onClick={() => navigator("/details")}
              className="cursor-pointer border-b  text-amber-500/50 border-transparent hover:border-amber-500/50 hover:text-amber-500 transition duration-200 italic"
            >
              Details Page
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
