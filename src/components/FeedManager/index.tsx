import React, { useEffect, useState } from "react";
import "./style.scss";
import axios from "axios";

interface FeedItem {
  id: string | number;
  userName: string;
  text: string;
}

interface DataType {
  requests: FeedItem[];
  feedbacks: FeedItem[];
}

function FeedManager() {
  const [reqs, setreqs] = useState<FeedItem[]>([]);
  const [feeds, setfeeds] = useState<FeedItem[]>([]);
  const [data, setdata] = useState<DataType | null>(null);
  const [dataCopy, setdataCopy] = useState<DataType | null>(null);

  useEffect(() => {
    axios("https://65707df409586eff66418003.mockapi.io/api/feedbacks/1")
      .then((res) => {
        console.log(res.data.requests);
        setreqs(res.data.requests);
        setfeeds(res.data.feedbacks);
        setdata(res.data);
        setdataCopy(res.data);
      })
      .then(() => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="blog feedbacks">
        <h1 id="product-heading">Feedbacks</h1>
        <div className="table">
          <div className="table-header">
            <div className="header__item">
              <a id="name" className="filter__link" href="#">
                ID
              </a>
            </div>
            <div className="header__item">
              <a
                id="wins"
                className="filter__link filter__link--number"
                href="#"
              >
                Name
              </a>
            </div>
            <div className="header__item">
              <a
                id="draws"
                className="filter__link filter__link--number"
                href="#"
              >
                Text
              </a>
            </div>
            <div className="header__item delete">
              <a
                id="total"
                className="filter__link filter__link--number"
                href="#"
              >
                Delete
              </a>
            </div>
          </div>

          <div className="table-content">
            {feeds &&
              feeds.map((elem) => {
                return (
                  <div key={elem.id} className="table-row">
                    <div className="table-data">{elem.id}</div>
                    <div className="table-data">{elem.userName}</div>
                    <div className="table-data projImgAdmin">{elem.text}</div>
                    <div className="table-data ">
                      <button
                        className="deleteBtnAdmin"
                        onClick={() => {
                          console.log("delete request");
                          console.log(data);

                          let updatedFeeds = feeds.filter(
                            (item) => item.id != elem.id
                          );

                          setfeeds(updatedFeeds);

                          let updatedObj = {
                            requests: reqs,
                            feedbacks: updatedFeeds,
                          };

                          axios
                            .put(
                              "https://65707df409586eff66418003.mockapi.io/api/feedbacks/1",
                              updatedObj
                            )
                            .then(() => {
                              console.log("sent");
                            })
                            .catch((error) => {
                              console.error("Error:", error);
                            });
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {/* requests table */}
      <div className="blog requests">
        <h1 id="product-heading">Requests</h1>

        <div className="table">
          <div className="table-header">
            <div className="header__item">
              <a id="name" className="filter__link" href="#">
                ID
              </a>
            </div>
            <div className="header__item">
              <a
                id="wins"
                className="filter__link filter__link--number"
                href="#"
              >
                Name
              </a>
            </div>
            <div className="header__item">
              <a
                id="draws"
                className="filter__link filter__link--number"
                href="#"
              >
                Text
              </a>
            </div>
            <div className="header__item edit">
              <a
                id="losses"
                className="filter__link filter__link--number"
                href="#"
              >
                Approve
              </a>
            </div>
            <div className="header__item delete">
              <a
                id="total"
                className="filter__link filter__link--number"
                href="#"
              >
                Deny
              </a>
            </div>
          </div>
          <div className="table-content">
            {reqs.map((elem) => {
              return (
                <div key={elem.id} className="table-row">
                  <div className="table-data">{elem.id}</div>
                  <div className="table-data">{elem.userName}</div>
                  <div className="table-data projImgAdmin">{elem.text}</div>
                  <div className="table-data ">
                    <button
                      className="editBtnAdmin"
                      onClick={() => {
                        let approvedFeed = reqs.find(
                          (item) => item.id == elem.id
                        );

                        if (approvedFeed) {
                          setfeeds([...feeds, approvedFeed]);
                          console.log(feeds);
                          let updatedReqs = reqs.filter(
                            (item) => item.id != elem.id
                          );
                          setreqs(updatedReqs);
                          console.log(approvedFeed);

                          let updatedObj = {
                            requests: updatedReqs,
                            feedbacks: [...feeds, approvedFeed],
                          };
                          axios.put(
                            "https://65707df409586eff66418003.mockapi.io/api/feedbacks/1",
                            updatedObj
                          );
                        }
                      }}
                    >
                      Approve
                    </button>
                  </div>
                  <div className="table-data ">
                    <button
                      className="deleteBtnAdmin"
                      onClick={() => {
                        console.log("delete request");
                        console.log(data);

                        let updatedReqs = reqs.filter(
                          (item) => item.id != elem.id
                        );

                        setreqs(updatedReqs);

                        let updatedObj = {
                          requests: updatedReqs,
                          feedbacks: feeds,
                        };

                        axios
                          .put(
                            "https://65707df409586eff66418003.mockapi.io/api/feedbacks/1",
                            updatedObj
                          )
                          .then(() => {
                            console.log("sent");
                          })
                          .catch((error) => {
                            console.error("Error:", error);
                          });
                      }}
                    >
                      Deny
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default FeedManager;
