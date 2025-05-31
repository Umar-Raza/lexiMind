import React, { useState } from "react";
import { Brain, CircleUser, Github } from "lucide-react";
export const Navbar = () => {
  const refresh = () => {
    window.location.reload(true);
  };
  return (
    <div className="navbar shadow-sm text-primary bg-background shadow-primary px-[30px] lg:px-[200px] w-full flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center">
        <a className="btn btn-ghost text-xl text-primary" onClick={refresh}>
          <Brain />
          <h3>LexiMind</h3>
        </a>
      </div>
      <div className="flex space-x-2">
        <a
          className="btn btn-ghost hover:text-primary"
          href="https://mu-portfolio.web.app"
          target="_blank"
        >
          <CircleUser />
        </a>
        <a
          className="btn btn-ghost hover:text-primary"
          href="https://github.com/Umar-Raza"
          target="_blank"
        >
          <Github />
        </a>
      </div>
    </div>
  );
};
