import { ElementType } from "react";
import { Clapperboard, Home, Library, Repeat } from "lucide-react";
import { buttonStyles } from "./Button";
import { twMerge } from "tailwind-merge";

type SmallSideBarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
};

const Sidebar = () => {
  return (
    <aside className="sticky top-0  scrollbar-hidden  hidden md:flex flex-col  w-16 flex-shrink-0  ml-1">
      <SmallSideBarItem Icon={Home} title="Home" url="/"></SmallSideBarItem>
      <SmallSideBarItem Icon={Repeat} title="Shorts" url="/"></SmallSideBarItem>
      <SmallSideBarItem
        Icon={Clapperboard}
        title="Subs"
        url="/"
      ></SmallSideBarItem>
      <SmallSideBarItem
        Icon={Library}
        title="Library"
        url="/"
      ></SmallSideBarItem>
    </aside>
  );
};

function SmallSideBarItem({ Icon, title, url }: SmallSideBarItemProps) {
  return (
    <div className="flex p-3 justify-center ">
      <a
        href={url}
        className={twMerge(buttonStyles({ variant: "ghost" }), "px-2 py-0 ")}
      >
        <div className="flex justify-center w-full">
          <Icon className="w-7 h-7 flex items-center"></Icon>
        </div>
        <div className="text-sm text-center  ">{title}</div>
      </a>
    </div>
  );
}

export default Sidebar;
