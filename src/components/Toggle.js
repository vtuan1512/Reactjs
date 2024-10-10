import React, { useState } from 'react';
import '../Toggle.css';

function Toggle() {
    const [isOn, setIsOn] = useState(false);
    const toggleSwitch = () => {
        setIsOn(!isOn);
    };

    return (
        <div className="toggle-container">
            <label className="toggle-switch">
                <input type="checkbox" checked={isOn} onChange={toggleSwitch} />
                <span className="slider"></span>
            </label>
            <p>{isOn ? "ON" : "OFF"}</p>
        </div>
    );
}

export default Toggle;
