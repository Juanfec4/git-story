import { FC } from "react";
import gitHubColors from "../gitHubLangColors.json";
import CopyButton from "./CopyButton";

export interface Repo {
  node_id: string;
  name: string;
  pushed_at: string;
  clone_url: string;
  ssh_url: string;
  language: string;
}

export interface GitHubLangColors {
  [key: string]: { color: string | null; url: string };
}

interface TimelineProps {
  repos: Repo[];
}

const Timeline: FC<TimelineProps> = ({ repos }) => {
  if (!repos) return null;

  if (repos) {
    repos = repos.sort((a: Repo, b: Repo) => {
      const dateA = new Date(a.pushed_at).getTime();
      const dateB = new Date(b.pushed_at).getTime();

      return dateB - dateA;
    });
  }

  const gitHubLangColors: GitHubLangColors = gitHubColors;

  return (
    <div>
      <h2 className="text-3xl font-light pt-4 pb-3 text-center text-slate-200">
        Repositories
      </h2>
      <div className=" text-slate-200 font-work-sans flex flex-col gap-2">
        {repos.map((repo: Repo) => {
          return (
            <div key={repo.node_id} className=" bg-zinc-950/30 p-4 rounded-md">
              <div className="flex  justify-between items-center">
                <h3 className=" text-lg sm:text-xl md:text-2xl font-light max-w-64 truncate">
                  <span className="pr-1 text-amber-500/20">/</span>
                  {repo.name}
                </h3>
                <p className="rounded-sm bg-amber-500/20 max-w-min px-2  text-xs md:text-sm min-w-max">
                  {new Date(repo.pushed_at).toLocaleDateString()}
                </p>
              </div>

              <span className="flex gap-1 items-center text-slate-200">
                <a
                  href={repo.clone_url}
                  target="_blank"
                  className="cursor-pointer border-b  text-amber-500/50 border-transparent hover:border-amber-500/50 
                  hover:text-amber-500 transition duration-200 text-xs sm:text-sm italic"
                >
                  {repo.clone_url}
                </a>
              </span>
              <span className="bg-zinc-800/30 rounded-md p-2 text-xs my-2 flex gap-1 cursor-pointer group text-slate-200 relative">
                <p className="opacity-50 ">
                  <span className="italic">SSH:</span>{" "}
                  <span>{repo.ssh_url}</span>
                </p>
                <div className="invisible group-hover:visible absolute right-2 top-1/2 -translate-y-1/2 transition duration-200">
                  <CopyButton copyText={repo.ssh_url} />
                </div>
              </span>
              {repo.language ? (
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <div
                    style={{
                      backgroundColor:
                        gitHubLangColors[repo?.language]?.color || "",
                    }}
                    className="h-3 w-3 rounded-full"
                  ></div>
                  <p className="">{repo.language}</p>
                </span>
              ) : (
                <span className="flex items-center gap-1 text-xs text-slate-400 animate-pulse">
                  <div className="h-3 w-3 rounded-full bg-slate-400"></div>
                  <p>Loading...</p>
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Timeline;
