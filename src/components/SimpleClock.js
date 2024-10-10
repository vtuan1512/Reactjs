import React, { useState, useEffect } from 'react';

const SimpleClock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <p>TIME: {currentTime.toLocaleTimeString()}</p>
        </div>
    );
};

export default SimpleClock;
