// File: components/Logo.js
import React from "react";

const Logo = ({ className }) => {
  return (
    <div className={`font-serif ${className}`}>
      <h1 className="text-2xl font-bold tracking-tight text-emerald-700">
        Phuler
      </h1>
      <p className="text-xs text-gray-500 -mt-1">Floral Boutique</p>
    </div>
  );
};

export default Logo;
