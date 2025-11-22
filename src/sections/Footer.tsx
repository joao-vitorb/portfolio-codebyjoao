import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-[#161f30]">
      <div className="h-10 w-full rounded-b-[40px] bg-white" />

      {/* Footer text */}
      <div className="py-4 text-center text-xs font-medium text-white">
        <span>© {year}</span>
        <span className="mx-2">•</span>
        <span>Joao Vitor Borges</span>
        <span className="mx-2">•</span>
        <span>All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
