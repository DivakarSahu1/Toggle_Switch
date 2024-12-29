import { useState } from "react";
import "./ToggleSwitch.css";
export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };
  const CheckIsOn = isOn ? "on" : "off";
  const toggleBgcolor = { backgroundColor: isOn ? "#4caf50" : "#f44336" };
  return (
    <div
      className="toggle-switch"
      style={toggleBgcolor}
      onClick={handleToggleSwitch}
    >
      <div className={`switch ${CheckIsOn}`}>
        <span className="switch-state">{CheckIsOn}</span>
      </div>
    </div>
  );
};
