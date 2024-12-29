import { useState } from "react";
import { IoIosSwitch } from "react-icons/io";
import "./ToggleSwitch.css";
export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };
  const CheckIsOn = isOn ? "on" : "off";
  const toggleBgcolor = { backgroundColor: isOn ? "#4caf50" : "#f44336" };
  return (
    <>
      <h1 style={{ color: "#000", textAlign: "centre" }}>
        Toggle Switch
        <IoIosSwitch style={{ color: "red", textAlign: "centre" }} />
      </h1>
      <div
        className="toggle-switch"
        style={toggleBgcolor}
        onClick={handleToggleSwitch}
      >
        <div className={`switch ${CheckIsOn}`}>
          <span className="switch-state">{CheckIsOn}</span>
        </div>
      </div>
    </>
  );
};
