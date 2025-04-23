import React from "react";
import { Link } from "react-router-dom";
import Buttons from "./Buttons";
import { useSelector } from "react-redux";

const Header = () => {
  const { flights, error, isLoading } = useSelector((store) => store.flight);
  return (
    <header className="bg-white p-2 px-3 d-flex justify-content-between align-items-center shadow">
      <Link className="d-flex gap-2 align-items-center">
        <img src="images.png" alt="logo" width={70} />
        <h4>Flight Radar</h4>
      </Link>
      <Buttons />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>{error.message}</h1>
      ) : (
        <h6 className="text-black info">{flights.length} Flight Bulundu</h6>
      )}
    </header>
  );
};

export default Header;