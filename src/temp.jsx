import React, { useEffect, useState } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date(`2022-11-05`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  let days = [];
  let hours = [];
  let minutes = [];
  let seconds = [];

  Object.keys(timeLeft).forEach((interval) => {
    // if (!timeLeft[interval]) {
    //   return;
    // }

    if (timeLeft[interval].toString().length > 1) {
      const strSplit = timeLeft[interval].toString().split("");
      strSplit.forEach((e) => {
        switch (interval) {
          case "days":
            days.push(<span>{e} </span>);
            break;
          case "hours":
            hours.push(<span>{e} </span>);
            break;
          case "minutes":
            minutes.push(<span>{e} </span>);
            break;
          case "seconds":
            seconds.push(<span>{e} </span>);
            break;
          default:
            break;
        }
      });
    } else {
      switch (interval) {
        case "days":
          days.push(<span>0 </span>);
          days.push(<span>{timeLeft[interval]} </span>);
          break;
        case "hours":
          hours.push(<span>0 </span>);
          hours.push(<span>{timeLeft[interval]} </span>);
          break;
        case "minutes":
          minutes.push(<span>0 </span>);
          minutes.push(<span>{timeLeft[interval]} </span>);
          break;
        case "seconds":
          seconds.push(<span>0 </span>);
          seconds.push(<span>{timeLeft[interval]} </span>);
          break;
        default:
          break;
      }
    }
  });

  const timerComponents = [];

  timerComponents.push(<div id="days">{days.map((day) => day)}</div>);

  timerComponents.push(<div id="hours">{hours.map((hour) => hour)}</div>);

  timerComponents.push(<div id="minutes">{minutes.map((minute) => minute)}</div>);

  timerComponents.push(<div id="seconds">{seconds.map((second) => second)}</div>);

  return (
    <div id="countDown">
      {timerComponents.length ? (
        timerComponents.map((e) => {
          return e;
        })
      ) : (
        <span>Time's up!</span>
      )}
    </div>
  );
};

export default Countdown;
