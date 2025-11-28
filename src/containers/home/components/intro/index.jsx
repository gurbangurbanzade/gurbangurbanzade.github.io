import "./intro.scss";

const Intro = () => {
  const sentence = "My name is Gurban";

  return (
    <div className="intro">
      <div className="animate__animated animate__slideInUp intro-part">
        <div className="left">
          <h1 className="intro-content">
            <div className="word">
              {sentence.split("").map((letter, i) => {
                return (
                  <h1
                    key={i}
                    className={letter === " " ? "bounce marginRight" : "bounce"}
                  >
                    {letter}
                  </h1>
                );
              })}
            </div>
          </h1>
          <p className="skillList">Front End Developer / Mobile Developer</p>
        </div>
        <div className="right">
          <p>
            Problem solver, well-organised person, loyal employee with high
            attention to detail. Fan of Formula 1, outdoor activities, take
            pictures and videos, and coding of course.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
