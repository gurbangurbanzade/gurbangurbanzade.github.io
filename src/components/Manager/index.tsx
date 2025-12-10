"use client";
import React, { useEffect, useState } from "react";
import "./style.scss";
import axios from "axios";
import { Helmet } from "react-helmet";
import { v4 as uuidv4 } from "uuid";
import { Search } from "@mui/icons-material";
import FeedManager from "../FeedManager";

interface Project {
  id?: string | number;
  name: string;
  url: string;
  image: string | null;
  description?: string;
}

interface Blog {
  id?: string | number;
  name: string;
  news: string;
  img?: string;
  image?: string | null;
}

interface ManagerProps {
  setisLogged?: (value: boolean) => void;
  isLogged?: boolean;
}

function Manager({ setisLogged, isLogged }: ManagerProps = {}) {
  const [proj, setproj] = useState<Project[]>([]);
  const [fakeProj, setFakeProj] = useState<Project[]>([]);
  const [file, setFile] = useState<string | null>(null);
  const [edit, setedit] = useState(false);
  const [editBlog, seteditBlog] = useState(false);
  const [editName, seteditName] = useState("");
  const [editBlogName, seteditBlogName] = useState("");
  const [editUrl, seteditUrl] = useState("");
  const [editBlogUrl, seteditBlogUrl] = useState("");
  const [editImg, seteditImg] = useState("");
  const [editBlogImg, seteditBlogImg] = useState("");
  const [editId, seteditId] = useState<string | number>(0);
  const [editBlogId, seteditBlogId] = useState<string | number>(0);
  const [openAdd, setopenAdd] = useState(false);
  const [openAddBlog, setopenAddBlog] = useState(false);
  const [blog, setBlog] = useState<Blog[]>([]);
  const [blogName, setBlogName] = useState("");
  const [blogUrl, setBlogUrl] = useState("");

  const [searchText, setsearchText] = useState("");
  const [base, setbase] = useState("");
  const [reqs, setreqs] = useState([]);
  const [feeds, setfeeds] = useState([]);

  useEffect(() => {
    axios("https://6565f015eb8bb4b70ef29ee3.mockapi.io/categories").then(
      (res) => {
        setproj(res.data);
        setFakeProj(res.data);
      }
    );
  }, []);

  useEffect(() => {
    axios("https://65707df409586eff66418003.mockapi.io/api/blogs").then(
      (res) => {
        setBlog(res.data);
      }
    );

    axios("https://65707df409586eff66418003.mockapi.io/api/feedbacks/1").then(
      (res) => {
        setreqs(res.data.requests);
        setfeeds(res.data.feedbacks);
      }
    );
  }, []);
  const [click, setClick] = useState("projects");
  const [proName, setproName] = useState("");
  const [proUrl, setproUrl] = useState("");

  return (
    <>
      <div className="manager">
        <Helmet>
          <title>Admin</title>
        </Helmet>
        <h1>Welcome, Admin</h1>
        <div className="container switcher">
          <ul className="namesAdmin">
            <li
              className="projects"
              onClick={() => {
                setClick("projects");
              }}
            >
              <h2> Projects</h2>
            </li>
            <li
              className="blog"
              onClick={() => {
                setClick("blog");
              }}
            >
              <h2> Blog</h2>
            </li>
            <li
              className="feedbacks"
              onClick={() => {
                setClick("feedbacks");
                console.log("feed");
              }}
            >
              <h2> Feedbacks</h2>
            </li>
          </ul>
          <div className="line-wrapper">
            {click == "projects" ? (
              <div className="line projects-active"></div>
            ) : click == "blog" ? (
              <div className=" line blog-active"></div>
            ) : (
              <div className="line feed-active"></div>
            )}
          </div>
        </div>

        {/* projects */}

        {click == "projects" ? (
          <div className="projects projects-active">
            {/* searchBar */}
            <div className="searchBar">
              <input
                type="text"
                className="searchInp"
                placeholder="Search project"
                onKeyUp={(e) => {
                  const target = e.target as HTMLInputElement;
                  let founds = proj;
                  founds = fakeProj.filter((project) =>
                    project.name
                      .toLowerCase()
                      .includes(target.value.toLowerCase())
                  );
                  setsearchText(target.value.toLowerCase());
                  setproj(founds);
                }}
              />
              {/* add new project */}
              <button
                className="openAdd"
                onClick={() => {
                  setopenAdd(!openAdd);
                }}
              >
                <h4>Add project</h4>
              </button>
            </div>

            {openAdd && (
              <>
                <form action="">
                  <input
                    type="text"
                    placeholder="Project Name"
                    onChange={(e) => {
                      setproName(e.target.value);
                    }}
                  />
                  <input
                    type="url"
                    placeholder="Url"
                    onChange={(e) => {
                      setproUrl(e.target.value);
                    }}
                  />
                  {/* <input type="file" placeholder='Upload an image' /> */}
                  <div className="fileInp">
                    <label htmlFor="file">
                      Upload
                      <ion-icon name="cloud-upload-outline"></ion-icon>
                    </label>
                    <input
                      id="file"
                      type="file"
                      onChange={(e) => {
                        e.preventDefault();
                        const target = e.target as HTMLInputElement;
                        const selectedFile = target.files?.[0];
                        if (selectedFile) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setFile(reader.result as string | null);
                          };
                          reader.readAsDataURL(selectedFile);
                        }
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log(proName, proUrl);
                      let obj = {
                        name: proName,
                        url: proUrl,
                        image: file,
                      };
                      axios
                        .post(
                          "https://6565f015eb8bb4b70ef29ee3.mockapi.io/categories",
                          obj
                        )
                        .then(() => {
                          setproName("");
                          setproUrl("");
                          setproj([...proj, obj]);
                          setopenAdd(false);
                        });
                    }}
                  >
                    Submit
                  </button>
                </form>
              </>
            )}

            {/* edit */}
            {edit && (
              <>
                <h2>Edit project</h2>
                <form action="">
                  <input
                    type="text"
                    placeholder="Project Name"
                    value={editName}
                    onChange={(e) => {
                      seteditName(e.target.value);
                    }}
                  />
                  <input
                    type="url"
                    placeholder="Url"
                    value={editUrl}
                    onChange={(e) => {
                      seteditUrl(e.target.value);
                    }}
                  />
                  {/* <input type="file" placeholder='Upload an image' /> */}
                  <div className="fileInp">
                    <label htmlFor="file">
                      Upload
                      <ion-icon name="cloud-upload-outline"></ion-icon>
                    </label>
                    <input
                      id="file"
                      type="file"
                      onChange={(e) => {
                        e.preventDefault();
                        const target = e.target as HTMLInputElement;
                        const selectedFile = target.files?.[0];
                        if (selectedFile) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setFile(reader.result as string | null);
                          };
                          reader.readAsDataURL(selectedFile);
                        }
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log(proName, proUrl);
                      let obj = {
                        name: editName,
                        url: editUrl,
                        description: "description 10",
                        id: editId,
                        image: editImg,
                      };
                      console.log(editId);
                      axios
                        .put(
                          "https://6565f015eb8bb4b70ef29ee3.mockapi.io/categories/" +
                            editId,
                          obj
                        )
                        .then(() => {
                          console.log("sent");
                          const projUpdated = proj.filter(
                            (element) => element.id !== editId
                          );
                          setproj([...projUpdated, obj]);
                          setedit(false);
                        });
                    }}
                  >
                    Edit
                  </button>
                </form>
              </>
            )}

            {/* listing */}
            <h1 id="product-heading">Projects</h1>
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
                    Image
                  </a>
                </div>
                <div className="header__item edit">
                  <a
                    id="losses"
                    className="filter__link filter__link--number"
                    href="#"
                  >
                    Edit
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
                {proj &&
                  proj.map((elem) => {
                    return (
                      <div className="table-row" key={uuidv4()}>
                        <div className="table-data">{elem.id}</div>
                        <div className="table-data">{elem.name}</div>
                        <div className="table-data projImgAdmin">
                          <img src={elem.image || ""} />
                        </div>
                        <div className="table-data ">
                          <button
                            className="editBtnAdmin"
                            onClick={() => {
                              setedit(!edit);
                              seteditId(elem.id || 0);
                              seteditName(elem.name);
                              seteditUrl(elem.url);
                              seteditImg(elem.image || "");
                            }}
                          >
                            Edit
                          </button>
                        </div>
                        <div className="table-data ">
                          <button
                            className="deleteBtnAdmin"
                            onClick={(e) => {
                              e.preventDefault();
                              axios
                                .delete(
                                  "https://6565f015eb8bb4b70ef29ee3.mockapi.io/categories/" +
                                    elem.id
                                )
                                .then(() => {
                                  const projUpdated = proj.filter(
                                    (element) => element.id !== elem.id
                                  );
                                  setproj(projUpdated);
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
        ) : click == "blog" ? (
          // blog starts here
          <div className="blog blog-active">
            <div className="searchBar">
              <button
                className="openAdd"
                onClick={() => {
                  setopenAddBlog(!openAddBlog);
                }}
              >
                <h4>Add blog</h4>
              </button>
            </div>

            {openAddBlog && (
              <>
                <form action="">
                  <input
                    type="text"
                    placeholder="Blog Name"
                    onChange={(e) => {
                      setBlogName(e.target.value);
                    }}
                  />
                  <textarea
                    placeholder="Text"
                    onChange={(e) => {
                      setBlogUrl(e.target.value);
                    }}
                  />
                  {/* <input type="file" placeholder='Upload an image' /> */}
                  <div className="fileInp">
                    <label htmlFor="file">
                      Upload
                      <ion-icon name="cloud-upload-outline"></ion-icon>
                    </label>
                    <input
                      id="file"
                      type="file"
                      onChange={(e) => {
                        e.preventDefault();
                        const target = e.target as HTMLInputElement;
                        const selectedFile = target.files?.[0];
                        if (selectedFile) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setFile(reader.result as string | null);
                          };
                          reader.readAsDataURL(selectedFile);
                        }
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();

                      let obj = {
                        name: blogName,
                        news: blogUrl,
                        image: file,
                      };
                      console.log(obj);
                      setBlog([...blog, obj]);
                      axios
                        .post(
                          "https://65707df409586eff66418003.mockapi.io/api/blogs",
                          obj
                        )
                        .then(() => {
                          setBlogName("");
                          setBlogUrl("");
                          setBlog([...blog, obj]);
                          setopenAddBlog(false);
                        });
                    }}
                  >
                    Submit
                  </button>
                </form>
              </>
            )}

            {/* edit */}
            {editBlog && (
              <>
                <h2>Edit blog</h2>
                <form action="">
                  <input
                    type="text"
                    placeholder="Blog Name"
                    value={editBlogName}
                    onChange={(e) => {
                      seteditBlogName(e.target.value);
                    }}
                  />
                  <input
                    type="url"
                    placeholder="Text"
                    value={editBlogUrl}
                    onChange={(e) => {
                      seteditBlogUrl(e.target.value);
                    }}
                  />
                  {/* <input type="file" placeholder='Upload an image' /> */}
                  <div className="fileInp">
                    <label htmlFor="file">
                      Upload
                      <ion-icon name="cloud-upload-outline"></ion-icon>
                    </label>
                    <input
                      id="file"
                      type="file"
                      onChange={(e) => {
                        e.preventDefault();
                        const target = e.target as HTMLInputElement;
                        const selectedFile = target.files?.[0];
                        if (selectedFile) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setFile(reader.result as string | null);
                          };
                          reader.readAsDataURL(selectedFile);
                        }
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      let obj = {
                        name: editBlogName,
                        news: editBlogUrl,
                        id: editBlogId,
                        img: editBlogImg,
                      };
                      console.log(obj);

                      const editUpdated = blog.filter(
                        (element) => element.id !== editBlogId
                      );
                      editUpdated.push(obj);
                      setBlog(editUpdated);
                      seteditBlog(false);

                      axios
                        .put(
                          "https://65707df409586eff66418003.mockapi.io/api/blogs/" +
                            editBlogId,
                          obj
                        )
                        .then(() => {
                          console.log("sent");
                        });
                    }}
                  >
                    Edit
                  </button>
                </form>
              </>
            )}

            <h1 id="product-heading">Blogs</h1>

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
                    Content
                  </a>
                </div>
                <div className="header__item edit">
                  <a
                    id="losses"
                    className="filter__link filter__link--number"
                    href="#"
                  >
                    Edit
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
                {blog &&
                  blog.map((item) => {
                    return (
                      <div className="table-row" key={item.id}>
                        <div className="table-data">{item.id}</div>
                        <div className="table-data">{item.name}</div>
                        <div className="table-data projImgAdmin">
                          <p>{item.news}</p>
                        </div>
                        <div className="table-data ">
                          <button
                            className="editBtnAdmin"
                            id={String(item.id || "")}
                            onClick={() => {
                              seteditBlog(!editBlog);
                              seteditBlogId(item.id || 0);
                              seteditBlogName(item.name);
                              seteditBlogUrl(item.news);
                              seteditBlogImg(item.img || "");
                            }}
                          >
                            Edit
                          </button>
                        </div>
                        <div className="table-data ">
                          <button
                            className="deleteBtnAdmin"
                            id={String(item.id || "")}
                            onClick={(e) => {
                              const target = e.target as HTMLButtonElement;
                              let newArr = blog.filter(
                                (item) =>
                                  String(item.id) != target.getAttribute("id")
                              );
                              setBlog(newArr);

                              axios.delete(
                                `https://65707df409586eff66418003.mockapi.io/api/blogs/${item.id}`
                              );
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
        ) : (
          <FeedManager />
        )}

        {/* blog */}
      </div>

      {/* </div > */}
    </>
  );
}

export default Manager;
