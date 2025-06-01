import React from "react";

export const Footer = () => {
  return (
    <footer className="footer text-[15px] md:footer-horizontal footer-center bg-background  shadow-primary  p-5">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - Devlop & Design by{" "}
          <a className="text-primary cursor-pointer hover:underline ml-1 mr-1 font-semibold  italic" href="https://mu-portfolio.web.app/" target="_blank">
            
            Muhammad Umar
          </a>{" "}
          All Right Reserved.
        </p>
      </aside>
    </footer>
  );
};
