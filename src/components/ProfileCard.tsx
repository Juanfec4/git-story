import { IconBrandGithub, IconLink, IconMapPin } from "@tabler/icons-react";
import { FC } from "react";
import ShareButton from "./ShareButton";

interface ProfileCardProps {
  data: any;
}
const ProfileCard: FC<ProfileCardProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-start gap-1 p-4 bg-zinc-950/30 rounded-md text-slate-200 font-work-sans">
      <img
        src={data.avatar_url}
        className=" rounded-full h-20 w-20 self-center"
      />
      <h2 className="text-2xl font-semibold text-center self-center">
        {data.name}
      </h2>
      <p className="text-xs self-center italic opacity-50">
        Since: {new Date(data.created_at).toLocaleDateString()}
      </p>
      <span className="flex items-center self-center">
        <IconMapPin className="h-4 w-4 text-amber-500/30" />
        <p className="text-sm">{data.location}</p>
      </span>
      <span className="w-full h-[1px] bg-slate-100/20 my-2" />
      <div className="self-center relative">
        <h3 className="font-light text-3xl mb-4 z-10">@{data.login}</h3>
        <span className="absolute left-8 right-0 bg-amber-500/20 h-1 -my-4 -z-10"></span>
      </div>

      <div className="flex gap-2 self-center">
        <a
          href={data.html_url}
          className=" hover:text-amber-500 bg-zinc-600/20 p-2 rounded-md"
          target="_blank"
        >
          <IconBrandGithub />
        </a>
        <a
          href={data.blog}
          className=" hover:text-amber-500 bg-zinc-600/20 p-2 rounded-md"
          target="_blank"
        >
          <IconLink />
        </a>
        <ShareButton />
      </div>
    </div>
  );
};
export default ProfileCard;
