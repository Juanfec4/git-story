import axios from "axios";

export const getUserDetails = async (user: string) => {
  try {
    let res = await axios.get("https://api.github.com/users/" + user);
    return res.data;
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) throw new Error(e.message);

    throw new Error("Unknown error.");
  }
};

export const getRepos = async (user: string) => {
  try {
    let res = await axios.get(
      "https://api.github.com/users/" + user + "/repos"
    );
    return res.data;
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) throw new Error(e.message);

    throw new Error("Unknown error.");
  }
};

export const getRepoLanguages = async (url: string) => {
  try {
    let res = await axios.get(url);
    return res.data;
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) throw new Error(e.message);

    throw new Error("Unknown error.");
  }
};
