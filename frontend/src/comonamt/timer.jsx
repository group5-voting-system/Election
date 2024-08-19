import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 355,
    hours: 23,
    minutes: 55,
    seconds: 12,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return {
            ...prevTime,
            hours: prevTime.hours - 1,
            minutes: 59,
            seconds: 59,
          };
        } else if (prevTime.days > 0) {
          return {
            ...prevTime,
            days: prevTime.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        } else {
          clearInterval(timer);
          return prevTime;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">
        موعد بدء الانتخابات :
      </h2>
      <div className="flex justify-between">
        {Object.entries(timeLeft).map(([key, value]) => (
          <div
            key={key}
            className="bg-red-500 text-white rounded-lg p-4 w-24 text-center"
          >
            <div className="text-3xl font-bold">
              {value.toString().padStart(3, "0")}
            </div>
            <div className="text-sm capitalize">{key}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
