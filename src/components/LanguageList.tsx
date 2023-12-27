import { FC, useEffect, useState } from "react";
import gitHubColors from "../gitHubLangColors.json";
import { GitHubLangColors, Repo } from "./Timeline";

interface LanguageListProps {
  repos: Repo[];
}

const LanguageList: FC<LanguageListProps> = ({ repos }) => {
  const gitHubLangColors: GitHubLangColors = gitHubColors;

  // Use state to manage the sorted language names
  const [sortedLanguageNames, setSortedLanguageNames] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = () => {
      try {
        // Use a map to track occurrences
        const languageMap = new Map();
        if (repos) {
          for (const repo of repos) {
            if (repo.language) {
              languageMap.set(
                repo.language,
                (languageMap.get(repo.language) || 0) + 1
              );
            }
          }

          // Convert the map to an array of key-value pairs and sort it by occurrence
          const sortedLanguages = Array.from(languageMap.entries()).sort(
            (a, b) => b[1] - a[1]
          );

          // Extract only the language names from the sorted array
          const sortedLanguageNames = sortedLanguages
            .slice(0, 10)
            .map(([language]) => language);

          // Update the state with sorted language names
          setSortedLanguageNames(sortedLanguageNames);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [repos]); // Include repos in the dependency array

  return (
    <div className="font-work-sans text-sm bg-zinc-950/30 p-6 rounded-md">
      <div className="flex flex-wrap gap-6 justify-center">
        <h3 className="w-full text-center text-slate-200 text-lg font-light">
          Top Languages
        </h3>
        {sortedLanguageNames.map((language) => (
          <p
            key={language}
            style={{ color: gitHubLangColors[language]?.color || "" }}
          >
            {language}
          </p>
        ))}
      </div>
    </div>
  );
};

export default LanguageList;
