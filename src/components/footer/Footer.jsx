import React from "react";

export const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-background text-primary shadow-primary lg p-5">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
};
