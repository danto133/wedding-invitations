import { useEffect, useState } from "react";
import Clock from "../components/clock";
import { useAppContext } from "../context/appContext";

export default function We() {
  const { guest } = useAppContext();

  const firstDate = new Date("6/1/2021");
  const today = new Date();
  let years = today.getFullYear() - firstDate.getFullYear();
  let months = today.getMonth() - firstDate.getMonth();
  let days = today.getDate() - firstDate.getDate();
  if (days < 0) {
    months = months - 1;
    days = 31 + days;
  }
  if (months < 0) {
    years = years - 1;
    months = 12 + months;
  }

  // FIXME
  // const targetDate = new Date(
  //   guest?.wedingDate === "20.10.2023" ? "10/20/2023" : "10/30/2023"
  // );
  const targetDate = new Date("11/18/2023")
  const [dayRemains, hours, minutes, seconds] = useCountdown(targetDate);

  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="header-t2u" id="dday">
        We are Getting Married on
      </h1>
      <p className="header-without-border">{guest?.wedingDate}</p>
      <p id="DDayCount">
        {dayRemains}days {hours}hours {minutes}mins {seconds}s
      </p>

      <br />
      <Clock />
      <br />
      <h1 className="header-t2u">This is where our forever begins</h1>
      <p className="header-without-border">01.06.2020</p>
      <h1 className="header-t2u">We have been together for </h1>
      <p>
        {years} years, {months} months and {days} days
      </p>
      <br />
    </div>
  );
}

const useCountdown = (targetDate: Date) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};
