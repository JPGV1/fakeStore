import React from 'react';
import bg from '../../../assets/bg.jpg';

export const Main = ({ children }) => {
  return (
    <div
      className="bg-cover bg-center w-full h-screen border border-solid border-[#3a814b]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {children}
    </div>
  );
};
