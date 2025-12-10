"use client";
import React from "react";
import { useRouter } from "next/navigation";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackBtn from "../../components/backBtn";
function Contact() {
  const router = useRouter();
  return (
    <>
      <BackBtn />
      <div className="contactPage">
        <h1 className="animated animatedFadeInUp fadeInUp headerContact">
          Have a question?
        </h1>
        <h2 className="animated animatedFadeInUp fadeInUp supportContact">
          Get in Touch: Let's Connect and Create Together!
        </h2>
        <form
          action=""
          className="animated animatedFadeInUp fadeInUp formContact"
        >
          <input className="input" type="text" placeholder="Your name" />
          <input
            className="input"
            type="email"
            placeholder="Email address"
            required
          />
          <textarea
            className="input"
            id="message"
            name="message"
            rows={4}
            cols={50}
            placeholder="Leave a message"
            required
          />
          <button
            type="submit"
            onClick={() => {
              router.push("/");
            }}
          >
            Send
          </button>
        </form>
      </div>

      {/* // particles */}
      <div className="areaAbout">
        <ul className="circlesAbout">
          <li className="liAbout"></li>
          <li className="liAbout"></li>
          <li className="liAbout"></li>
          <li className="liAbout"></li>
          <li className="liAbout"></li>
          <li className="liAbout"></li>
          <li className="liAbout"></li>
          <li className="liAbout"></li>
          <li className="liAbout"></li>
          <li className="liAbout"></li>
        </ul>
      </div>
    </>
  );
}

export default Contact;
