import React from "react";
import { Brain, History, Bookmark, Moon } from "lucide-react";
export const Navbar = () => {
  return (
    <div className="navbar shadow-sm text-primary shadow-primary px-[200px] flex items-center justify-between">
      <div className="flex-1 ">
        <a className="btn btn-ghost text-xl text-primary">
          <Brain />
          <h3>LexiMind</h3>
        </a>
      </div>
      <div className="flex p-2 ">
        <a className="btn btn-ghost hover:text-background">
          <History />
        </a>
        <a className="btn btn-ghost hover:text-background">
          <Bookmark />
        </a>
        <a className="btn btn-ghost hover:text-background">
          <Moon />
        </a>
      </div>
    </div>
  );
};
