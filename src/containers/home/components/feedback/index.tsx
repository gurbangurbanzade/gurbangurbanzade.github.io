"use client";
import { useEffect, useState, useRef } from "react";
import "./style.scss";
import { Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import { useRouter } from "next/navigation";
import {
  GithubLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import axios from "axios";
import FeedbackCard from "../../../../components/feedbackCard";
import app from "../../../../firebase/config";
import TestCarousel from "../../../../components/TestCarousel";

interface FeedbackProps {
  activeIndex?: number;
}

function Feedback({ activeIndex }: FeedbackProps = {}) {
  const router = useRouter();

  const [feedBacks, setFeedBacks] = useState([]);

  const URL = process.env.NEXT_PUBLIC_REVIEWS_URL;

  useEffect(() => {
    if (!URL) return;
    axios(URL).then((res) => {
      // while (updatedFeedbacks.length < 20) {
      //   updatedFeedbacks = [...updatedFeedbacks, ...updatedFeedbacks];
      // }

      // updatedFeedbacks = updatedFeedbacks.slice(0, 20);

      setFeedBacks(res.data);
    });
  }, []);

  const sendWithGithub = () => {
    const auth = getAuth(app);
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;

        // The signed-in user info.
        const user = result.user;
        localStorage.setItem("user", JSON.stringify(user));
        router.push("/review");
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
  };
  const sendWithGoogle = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        localStorage.setItem("user", JSON.stringify(user));
        router.push("/review");
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div className="flexer">
      {/* <Carousel
        cols={3}
        rows={2}
        gap={10}
        loop={true}
        autoplay={3000}
        // scrollSnap={true}
        // scroll-snap
      >
        {feedBacks &&
          feedBacks.map((elem) => (
            <Carousel.Item key={elem.id}>
              <FeedbackCard user={elem} className="cardFeed slide" />
            </Carousel.Item>
          ))}
      </Carousel> */}
      <TestCarousel customers={feedBacks} />
      <div className="mediaIconsBox">
        <GithubLoginButton
          className="mediaIconsBoxItem"
          onClick={sendWithGithub}
        >
          <span>Send feedback with Github</span>
        </GithubLoginButton>
        <GoogleLoginButton
          className="mediaIconsBoxItem"
          onClick={sendWithGoogle}
        >
          <span>Send feedback with Google</span>
        </GoogleLoginButton>
      </div>
    </div>
  );
}

export default Feedback;
