import { FC, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import LanguageList from "../components/LanguageList";
import Loader from "../components/Loader";
import ProfileCard from "../components/ProfileCard";
import SearchBox from "../components/SearchBox";
import TextPlaceholder from "../components/TextPlaceholder";
import Timeline from "../components/Timeline";
import { getRepos, getUserDetails } from "../services/api";
const DetailsPage: FC = () => {
  //Username params on url (for sharing purposes)
  const [searchParams, setSearchParams] = useSearchParams();

  //Username
  const [username, setUsername] = useState<string>("");

  //Fetch user data
  const userQuery = useQuery({
    queryFn: () => getUserDetails(username),
    queryKey: ["user", username.toUpperCase()],
    enabled: username.length > 0,
  });

  const reposQuery = useQuery({
    queryFn: () => getRepos(username),
    queryKey: ["repos", username.toUpperCase()],
    enabled: username.length > 0,
  });

  //Update params
  useEffect(() => {
    for (let entry of searchParams.entries()) {
      let [key, value] = entry;
      if (key === "user" && value) {
        setUsername(value);
      }
    }
  }, [searchParams]);

  //Extract data
  let userData = userQuery.data;
  let repos = reposQuery.data;

  return (
    <div className="w-screen min-h-screen h-full bg-zinc-900">
      <header className="grid px-6 pt-6 grid-cols-8 h-full max-w-screen-lg mx-auto gap-2">
        <div className="bg-zinc-950/30 col-start-1 col-end-9 sm:col-start-2 sm:col-end-8  md:col-start-1 md:col-end-9 rounded-md p-6">
          <h1 className=" font-work-sans text-center text-slate-200 font-light text-4xl tracking-tighter">
            Git<span className="text-amber-500 font-normal">Story</span>
          </h1>
          <p className="text-slate-200/50 text-center">
            Easily share GitHub repositories, and account details
          </p>
        </div>
      </header>
      <main className="  p-6 grid grid-cols-8 gap-2 h-full max-w-screen-lg mx-auto">
        <div
          className="col-start-1 col-end-9 sm:col-start-2 sm:col-end-8  md:col-start-1 md:col-end-4
      lg:col-start-1
      lg:col-end-4
       relative md:min-h-screen"
        >
          <div className="flex flex-col gap-2 md:sticky md:top-0">
            <SearchBox
              submitFn={(param) => {
                setSearchParams({ user: param });
              }}
            />
            {userQuery.isLoading && <Loader />}
            {userQuery.isSuccess && <ProfileCard data={userData} />}
            {reposQuery.isSuccess && <LanguageList repos={repos} />}
            {userQuery.isError && <ErrorMessage error={userQuery.error} />}
            {!userQuery.isSuccess && (
              <>
                <div className="p-4 bg-zinc-950/30 rounded-md text-slate-200">
                  <TextPlaceholder />
                </div>
                <div className="p-4 bg-zinc-950/30 rounded-md text-slate-200">
                  <TextPlaceholder />
                </div>
              </>
            )}
          </div>
        </div>
        <div className="col-start-1 col-end-9 sm:col-start-2 sm:col-end-8 md:col-start-4 md:col-end-9">
          {userQuery.isSuccess && <Timeline repos={repos} />}
          {!userQuery.isSuccess && (
            <div className="flex flex-col gap-2">
              <div className="p-4 bg-zinc-950/30 rounded-md text-slate-200">
                <TextPlaceholder />
              </div>
              <div className="p-4 bg-zinc-950/30 rounded-md text-slate-200">
                <TextPlaceholder />
              </div>
              <div className="p-4 bg-zinc-950/30 rounded-md text-slate-200">
                <TextPlaceholder />
              </div>
              <div className="p-4 bg-zinc-950/30 rounded-md text-slate-200">
                <TextPlaceholder />
              </div>
              <div className="p-4 bg-zinc-950/30 rounded-md text-slate-200">
                <TextPlaceholder />
              </div>
            </div>
          )}
        </div>
      </main>
      <footer className="grid px-6 pb-6 grid-cols-8 h-full max-w-screen-lg mx-auto gap-2">
        <div className="bg-zinc-950/30 col-start-1 col-end-9 sm:col-start-2 sm:col-end-8  md:col-start-1 md:col-end-9 rounded-md p-6 text-slate-200 font-sm text-center flex justify-start gap-4">
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
        </div>
      </footer>
    </div>
  );
};

export default DetailsPage;
