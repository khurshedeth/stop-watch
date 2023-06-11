import React, { useState, useRef } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRuning, setIsRuning] = useState(false);
  let intervalRef = useRef(null);
  const startTimer = () => {
    if (isRuning) return;
    setIsRuning(true);
    intervalRef.current = setInterval(() => {
      setTime((prv) => prv + 1);
    }, 1000);
  };

  const pauseTimer = () => {
    setIsRuning(false);
    clearInterval(intervalRef.current);
  };
  const resetTimer = () => {
    setIsRuning(false);
    setTime(0);
    clearInterval(intervalRef.current);

  };
  const timeFormat = () => {
    const hour = Math.floor(time / 3600)
      .toString()
      .padStart(2, "0");
    const minute = (time % 60).toString().padStart(2, "0");
    const second = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");

    return `${hour}:${minute}:${second}`;
  };

  return (
    <div className=" bg-white h-3/4 w-96 mx-auto rounded-2xl mt-12">
      <header className=" text-white flex justify-center items-center h-full">
        <div className=" overflow-hidden h-52 w-3/4 rounded-2xl shadow-2xl">
          <h1 className=" text-center py-3 text-3xl tracking-widest text-black font-bold font-serif">
            Stopwatch
          </h1>
          <div>
            <p className=" text-center text-2xl text-teal-400">{timeFormat(time)}</p>
          </div>
          <div className=" flex justify-between px-2 mt-4">
            <button
              onClick={startTimer}
              disabled={isRuning}
              className="w-[30%] bg-sky-600 rounded-xl py-2 hover:ring-2 font-semibold"
            >
              Start
            </button>
            <button
              onClick={pauseTimer}
              disabled={!isRuning}
              className="w-[30%] bg-sky-600 rounded-xl py-2 hover:ring-2 font-semibold"
            >
              Pause
            </button>
            <button
              onClick={resetTimer}
              className="w-[30%] bg-sky-600 rounded-xl py-2 hover:ring-2 font-semibold"
            >
              Reset
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Stopwatch;
