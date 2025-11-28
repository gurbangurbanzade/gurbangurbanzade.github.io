import { useState, useEffect } from "react";
import BackBtn from "../../components/backBtn/index";
import axios from "axios";
import "./blog.scss";
import "./grid.css";
function Blog() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get("https://65707df409586eff66418003.mockapi.io/api/blogs")
      .then((res) => {
        setNews(res.data);
      });
  }, []);
  console.log(news);
  let count = 0;
  return (
    <>
      <BackBtn />
      <section className="blog-section">
        <div className="containerr">
          <div className="row">
            <div className=" col-sm-12 col-md-12 col-lg-12   col-xl-12 front-end">
              <div className="card-content">
                <h1>Latest news about Front-End Development</h1>
              </div>
            </div>
            {news &&
              news.map((newsBlog, idx) => {
                if (count == 4) {
                  count = 1;
                } else {
                  count++;
                }

                return count == 1 ? (
                  <div
                    style={{
                      backgroundImage: "url(" + newsBlog.img + ")",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                    className=" col-sm-12 col-md-12 col-lg-8  col-xl-8 html"
                    key={idx}
                  >
                    <div className="card-content">
                      <p>{newsBlog.news}</p>
                    </div>
                  </div>
                ) : count == 2 ? (
                  <div
                    style={{
                      backgroundImage: "url(" + newsBlog.img + ")",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                    className=" col-sm-12 col-md-12 col-lg-4  col-xl-4  css"
                    key={idx}
                  >
                    <div className="card-content">
                      <h2>{newsBlog.news}</h2>
                    </div>
                  </div>
                ) : count == 3 ? (
                  <div
                    style={{
                      backgroundImage: "url(" + newsBlog.img + ")",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                    className="col-sm-12 col-md-12 col-lg-4 col-xl-4 javascript"
                  >
                    <div className="card-content">
                      <h2>{newsBlog.news}</h2>
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      backgroundImage: "url(" + newsBlog.img + ")",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                    className="  col-sm-12 col-md-12 col-lg-8  col-xl-8  react"
                  >
                    <div className="card-content">
                      <p>{newsBlog.news}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
