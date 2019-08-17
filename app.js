window.onload = () => {
  const hourHand = document.querySelector(".hourhand");
  const minHand = document.querySelector(".minhand");
  const secondHand = document.querySelector(".secondhand");
  const clock = document.querySelector(".clock");
  const time = document.querySelector(".time");

  const setDate = () => {
    const today = new Date();

    const seconds = today.getSeconds();
    const secondsDeg = (seconds / 60) * 360 + 360;
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;

    const min = today.getMinutes();
    const mindeg = (min / 60) * 360;
    minHand.style.transform = `rotate(${mindeg}deg)`;

    const hour = today.getHours();
    const hourDeg = (hour / 12) * 360;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;

    time.innerHTML =
      "<span>" +
      "<strong>" +
      hour +
      "</strong>" +
      " : " +
      min +
      " : " +
      "<small>" +
      seconds +
      "</small>" +
      "</span>";
  };

  setInterval(setDate, 1000);
};
