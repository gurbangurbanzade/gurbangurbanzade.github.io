"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackBtn from "../../components/backBtn";
import axios from "axios";

function SendReview() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const sendFeedback = (e) => {
    e.preventDefault();
    console.log("salam");
    axios.post("https://6548ba0edd8ebcd4ab23782e.mockapi.io/revies", {
      name: name,
      text: text,
      image: JSON.parse(localStorage.getItem("user")).photoURL,
    });
    router.push("/");
  };
  return (
    <>
      <BackBtn />
      <div className="contactPage">
        <h1 className="animated animatedFadeInUp fadeInUp headerContact">
          Mənimlə bağlı fikirlərini aşağıda bölüş
        </h1>

        <form
          onSubmit={sendFeedback}
          className="animated animatedFadeInUp fadeInUp formContact"
        >
          <input
            className="input"
            type="text"
            placeholder="Your name"
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            className="input"
            id="message"
            name="message"
            rows="4"
            cols="50"
            placeholder="Leave a message"
            onChange={(e) => setText(e.target.value)}
            required
          />
          <button type="submit">Send</button>
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

export default SendReview;
