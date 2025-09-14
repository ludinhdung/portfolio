import "./Time.css";
function Time() {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Ho_Chi_Minh",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <section className="time-information">
      <div className="time-block">
        <p className="current-time">
          Hello, it is currently {formatter.format(now)} in my time zone
        </p>
      </div>
    </section>
  );
}

export default Time;
