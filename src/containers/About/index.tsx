import React, { useLayoutEffect } from "react";
import "./style.scss";
import Github from "../../assets/img/github (1).svg";
import Instagram from "../../assets/img/instagram.svg";
import BackBtn from "../../components/backBtn";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

interface FeedbackData {
  requests?: any[];
  feedbacks?: any[];
  [key: string]: any;
}

function About() {
  const [clicked, setclicked] = useState(false);
  const [name, setname] = useState("");
  const [github, setgithub] = useState("");
  const [text, settext] = useState("");
  const [datas, setdatas] = useState<FeedbackData>({});

  useEffect(() => {
    axios("https://65707df409586eff66418003.mockapi.io/api/feedbacks/1").then(
      (res) => {
        setdatas(res.data);
      }
    );
  }, []);
  console.log(datas);
  return (
    <>
      <svg
        preserveAspectRatio="xMidYMid slice"
        viewBox="10 10 80 80"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: 10,
        }}
      >
        <defs>
          <style>
            {`
              @keyframes rotate {
                0% {
                  transform: rotate(0deg);
                }
                100% {
                  transform: rotate(360deg);
                }
              }
              .out-top {
                animation: rotate 20s linear infinite;
                transform-origin: 13px 25px;
              }
              .in-top {
                animation: rotate 10s linear infinite;
                transform-origin: 13px 25px;
              }
              .out-bottom {
                animation: rotate 25s linear infinite;
                transform-origin: 84px 93px;
              }
              .in-bottom {
                animation: rotate 15s linear infinite;
                transform-origin: 84px 93px;
              }
            `}
          </style>
        </defs>
        <path
          fill="#568ea3"
          className="out-top"
          d="M37-5C25.1-14.7,5.7-19.1-9.2-10-28.5,1.8-32.7,31.1-19.8,49c15.5,21.5,52.6,22,67.2,2.3C59.4,35,53.7,8.5,37-5Z"
        />
        <path
          fill="#ff3870"
          className="in-top"
          d="M20.6,4.1C11.6,1.5-1.9,2.5-8,11.2-16.3,23.1-8.2,45.6,7.4,50S42.1,38.9,41,24.5C40.2,14.1,29.4,6.6,20.6,4.1Z"
        />
        <path
          fill="#568ea3"
          className="out-bottom"
          d="M105.9,48.6c-12.4-8.2-29.3-4.8-39.4.8-23.4,12.8-37.7,51.9-19.1,74.1s63.9,15.3,76-5.6c7.6-13.3,1.8-31.1-2.3-43.8C117.6,63.3,114.7,54.3,105.9,48.6Z"
        />
        <path
          fill="#00f5d4"
          className="in-bottom"
          d="M102,67.1c-9.6-6.1-22-3.1-29.5,2-15.4,10.7-19.6,37.5-7.6,47.8s35.9,3.9,44.5-12.5C115.5,92.6,113.9,74.6,102,67.1Z"
        />
      </svg>

      <BackBtn />
      <div className="aboutBody">
        <Helmet>
          <title>About</title>
        </Helmet>

        <div className="content">
          <img
            className="bigImg"
            src="https://i.pinimg.com/564x/ac/27/1d/ac271de883faa03617b212beeda73db3.jpg"
            alt=""
          />

          <div className="texts">
            <div className="name">
              <h1>İsmayıl İsmayılov</h1>
              <h3>Full Stack developer</h3>
            </div>

            <div className="about">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ratione, sint nisi. Molestiae quibusdam quia corporis architecto
                quidem accusamus quam! Doloribus, ?
              </p>
            </div>

            <div className="links">
              <a href="https://github.com/">
                <img src={Github} alt="" />
              </a>
              <a href="https://github.com/">
                <img src={Instagram} alt="" />
              </a>
            </div>

            <div className="sender">
              {clicked ? (
                <form action="" className="inpFeed">
                  <input
                    type="text"
                    placeholder="Your Name"
                    onChange={(e) => {
                      setname(e.target.value);
                      console.log(name);
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Github Username"
                    onChange={(e) => {
                      setgithub(e.target.value);
                      console.log(github);
                    }}
                  />
                  {/* <input type="file" name="" id="" /> */}

                  <textarea
                    placeholder="Write a Feedback"
                    name=""
                    id=""
                    cols={30}
                    rows={10}
                    onChange={(e) => {
                      settext(e.target.value);
                      console.log(text);
                    }}
                  ></textarea>
                  <button
                    type="submit"
                    className="sendFeed"
                    onClick={(e) => {
                      e.preventDefault();
                      setclicked(false);

                      let feed = {
                        userName: name,
                        image: github,
                        text: text,
                        id: uuidv4(),
                      };

                      if (!datas.requests) {
                        datas.requests = [];
                      }
                      datas.requests.push(feed);

                      let obj = {
                        requests: datas.requests,
                        feedbacks: datas.feedbacks || [],
                      };

                      axios
                        .put(
                          "https://65707df409586eff66418003.mockapi.io/api/feedbacks/1",
                          obj
                        )
                        .then(() => console.log("sent"));

                      console.log(obj);
                    }}
                  >
                    Send Feedback
                  </button>
                </form>
              ) : (
                <button
                  className="sendFeed"
                  onClick={() => {
                    setclicked(true);
                  }}
                >
                  Send Feedback
                </button>
              )}
            </div>

            {/* add feedback */}
          </div>
        </div>
      </div>

      {/* feedbacks */}
    </>
  );
}

export default About;
