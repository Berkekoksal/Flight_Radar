import React from "react";
import { IoAirplaneOutline } from "react-icons/io5";
import nullCheck from "../../utils/nullCheck";

const Aircraft = ({ data }) => {
  return (
    <div className="aircraft">
      <div className="iconAircraft">
        <IoAirplaneOutline />
      </div>
      <div>
        <p>
          <span>Uçak Tipi</span>
          <span>{nullCheck(data?.model?.text)}</span>
        </p>
        <div>
          <p>
            <span>Kuyruk Numarası</span>
            <span>{nullCheck(data?.registration)}</span>
          </p>
          <p>
            <span>Ülke</span>
            <span>{nullCheck(data?.countryId)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aircraft;