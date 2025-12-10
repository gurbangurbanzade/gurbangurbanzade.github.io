import React, { useState, useEffect } from "react";
import axios from "axios";
import "./projectsPage.scss";
import "../../assets/style/grid.css";
import { Helmet } from "react-helmet";
import BackBtn from "../backBtn";
import AccordionX from "../AccordionX";

interface Project {
  id: string | number;
  name: string;
  description: string;
  image?: string;
  url?: string;
}

const ProjectsPage = () => {
  const [click, setClick] = useState("mine");

  const [projects, setProjects] = useState<Project[]>([]);
  let count = 0;

  useEffect(() => {
    axios("https://6565f015eb8bb4b70ef29ee3.mockapi.io/categories").then(
      (res) => {
        setProjects(res.data);
        console.log(res.data);
      }
    );
  }, []);

  return (
    <>
      <section className="projects-page">
        <Helmet>
          <title>Projects</title>
        </Helmet>
        <BackBtn />
        <div className="container">
          <h1 id="product-heading">Projects</h1>
          <ul>
            <li
              className="mine"
              onClick={() => {
                setClick("mine");
              }}
            >
              My projects
            </li>
            <li
              className="students"
              onClick={() => {
                setClick("students");
              }}
            >
              Students projects
            </li>
          </ul>
          <div className="line-wrapper">
            {click == "mine" ? (
              <div className="line mine-active"></div>
            ) : (
              <div className="line students-active"></div>
            )}
          </div>

          {click == "mine" ? (
            <div className="mine-projects">
              {projects &&
                projects.map((project, idx) => {
                  if (count == 2) {
                    count = 1;
                  } else {
                    count++;
                  }

                  return count == 1 ? (
                    <div className="project-box row ">
                      <div className="content col-6 col-sm-12 col-md-12">
                        <h1 className="project-number">Project {idx + 1}</h1>
                        <h3 className="porject-name">{project.name}</h3>
                        <p className="porject-description">
                          {project.description}
                        </p>
                        <div className="accordion">
                          {" "}
                          <AccordionX description={project.description} />
                        </div>
                        <div className="read-more">
                          {" "}
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="19"
                              width="20"
                              viewBox="0 0 512 512"
                            >
                              <path
                                d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
                                fill="white"
                              />
                            </svg>
                            <a
                              href="https://github.com"
                              target="_blank"
                              className="viewCode"
                            >
                              View the Code
                            </a>
                          </div>
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="19"
                              width="20"
                              viewBox="0 0 512 512"
                            >
                              <path
                                d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
                                fill="white"
                              />
                            </svg>
                            <a
                              href="https://ecommercefullwebsite.onrender.com/"
                              target="_blank"
                              className="visitApp"
                            >
                              Visit the App
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="image col-6 col-sm-12 col-md-12">
                        <div className="image-wrapper">
                          <div className="buttons">
                            <a href="https://github.com">
                              {" "}
                              <div className="go-to-code">View the Code</div>
                            </a>
                            <a href="https://ecommercefullwebsite.onrender.com/">
                              {" "}
                              <div className="go-to-app">View the App</div>{" "}
                            </a>
                          </div>
                          <div className="wrapper"></div>
                          <div className="wrap-image">
                            <div className="img img1 "></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="project-box row ">
                      <div className="image col-6 col-sm-12 col-md-12">
                        <div className="image-wrapper">
                          <div className="buttons">
                            <a href="https://github.com">
                              <div className="go-to-code">View the Code</div>
                            </a>
                            <a href="https://startbootstrap-deploy.vercel.app/">
                              <div className="go-to-app">View the App</div>
                            </a>
                          </div>
                          <div className="wrapper"></div>
                          <div className="wrap-image">
                            <div className="img img2"></div>
                          </div>
                        </div>
                      </div>
                      <div className="content col-6 col-sm-12 col-md-12">
                        <h1 className="project-number">Project {idx + 1}</h1>
                        <h3 className="porject-name"> {project.name}</h3>
                        <p className="porject-description">
                          {project.description}
                        </p>
                        <div className="accordion">
                          {" "}
                          <AccordionX description={project.description} />
                        </div>
                        <div className="read-more">
                          <div style={{ marginBottom: " 10px" }}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="19"
                              width="20"
                              viewBox="0 0 512 512"
                            >
                              <path
                                d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
                                fill="white"
                              />
                            </svg>
                            <a
                              href="https://github.com"
                              target="_blank"
                              className="viewCode"
                            >
                              View the Code
                            </a>
                          </div>
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="19"
                              width="20"
                              viewBox="0 0 512 512"
                            >
                              <path
                                d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
                                fill="white"
                              />
                            </svg>
                            <a
                              href="https://startbootstrap-deploy.vercel.app/"
                              target="_blank"
                              className="visitApp"
                            >
                              Visit the App
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          ) : (
            // student projects
            <div className="students-projects">
              {projects &&
                projects.map((project, idx) => {
                  if (count == 2) {
                    count = 1;
                  } else {
                    count++;
                  }

                  return count == 1 ? (
                    <div className="project-box row " key={project.id}>
                      <div className="image col-6 col-sm-12 col-md-12">
                        <div className="image-wrapper">
                          <div className="buttons">
                            <a href="https://github.com">
                              <div className="go-to-code">View the Code</div>
                            </a>
                            <a href="https://ecommercefullwebsite.onrender.com/">
                              <div className="go-to-app">View the App</div>{" "}
                            </a>
                          </div>
                          <div className="wrapper"></div>
                          <div className="wrap-image">
                            <div className="img img1"></div>
                          </div>
                        </div>
                      </div>
                      <div className="content col-6 col-sm-12 col-md-12">
                        <h1 className="project-number">Project {idx + 1}</h1>
                        <h3 className="porject-name">{project.name}</h3>
                        <p className="porject-description">
                          {project.description}
                        </p>
                        <div className="accordion">
                          {" "}
                          <AccordionX description={project.description} />
                        </div>
                        <div className="read-more">
                          {" "}
                          <div style={{ marginBottom: " 10px" }}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="19"
                              width="20"
                              viewBox="0 0 512 512"
                            >
                              <path
                                d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
                                fill="white"
                              />
                            </svg>
                            <a
                              href="https://github.com"
                              target="_blank"
                              className="viewCode"
                            >
                              View the Code
                            </a>
                          </div>
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="19"
                              width="20"
                              viewBox="0 0 512 512"
                            >
                              <path
                                d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
                                fill="white"
                              />
                            </svg>
                            <a
                              href="https://ecommercefullwebsite.onrender.com/"
                              target="_blank"
                              className="visitApp"
                            >
                              Visit the App
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="project-box row ">
                      <div className="content col-6 col-sm-12 col-md-12">
                        <h1 className="project-number">Project {idx + 1}</h1>
                        <h3 className="porject-name"> {project.name}</h3>
                        <p className="porject-description">
                          {project.description}
                        </p>
                        <div className="accordion">
                          {" "}
                          <AccordionX description={project.description} />
                        </div>
                        <div className="read-more">
                          {" "}
                          <div style={{ marginBottom: " 10px" }}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="19"
                              width="20"
                              viewBox="0 0 512 512"
                            >
                              <path
                                d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
                                fill="white"
                              />
                            </svg>
                            <a
                              href="https://github.com"
                              target="_blank"
                              className="viewCode"
                            >
                              View the Code
                            </a>
                          </div>
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="19"
                              width="20"
                              viewBox="0 0 512 512"
                            >
                              <path
                                d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
                                fill="white"
                              />
                            </svg>
                            <a
                              href="https://startbootstrap-deploy.vercel.app/"
                              target="_blank"
                              className="visitApp"
                            >
                              Visit the App
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="image col-6 col-sm-12 col-md-12">
                        <div className="image-wrapper">
                          <div className="buttons">
                            <a href="https://github.com">
                              <div className="go-to-code">View the Code</div>
                            </a>
                            <div className="go-to-app">
                              <a href="https://startbootstrap-deploy.vercel.app/">
                                View the App
                              </a>
                            </div>
                          </div>
                          <div className="wrapper"></div>
                          <div className="wrap-image">
                            <div className="img img2"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
