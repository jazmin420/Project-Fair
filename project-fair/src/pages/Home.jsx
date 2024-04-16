import React, { useEffect, useState } from "react";
import landingImg from "../assets/landingImage.svg";
import { Link, useNavigate } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getHomeProjectAPI } from "../services/allAPI";
import Header from "../components/Header";

function Home() {
  const [allProjects, setAllProjects] = useState([]);
  const [loginStatus, setLoginStatus] = useState(false);
  const navigate = useNavigate();

  const getHomeProject = async () => {
    try {
      const result = await getHomeProjectAPI();
      if (result.status === 200) {
        setAllProjects(result.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log(allProjects);
  
  useEffect(() => {
    getHomeProject();
    if (sessionStorage.getItem("token")) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
  }, []);

  const handleNavigate = () => {
    if (loginStatus === true) {
      navigate("/projects");
    } else {
      toast.warning("Please login to get full access to our projects!!!");
    }
  };
  return (
    <>
    <Header/>
      {/* landing part */}
      <div
        style={{ minHeight: "100vh" }}
        className="w-100 d-flex justify-content-center align-items-center rounded"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1
                style={{ fontSize: "80px" }}
                className="fw-bolder text-light mb-3"
              >
                <i
                  style={{ height: "85px" }}
                  className="fa-solid fa-hands-holding-circle"
                ></i>{" "}
                Project Fair
              </h1>
              <p style={{ textAlign: "justify" }}>
                One Stop Destination for all Software Development Projects.
                Where User can add and manage their projects. As well as access
                all projects available in our website... What are you waiting
                for!!!
              </p>
              {loginStatus ? (
                <Link className="btn btn-warning mt-3" to={"/dashboard"}>
                  {" "}
                  manage your Porjects{" "}
                  <i className="fa-solid fa-arrow-right"></i>{" "}
                </Link>
              ) : (
                <Link className="btn btn-warning mt-3" to={"/login"}>
                  {" "}
                  Starts to Explore <i className="fa-solid fa-arrow-right"></i>{" "}
                </Link>
              )}
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-4">
              <img className="img-fluid" src={landingImg} alt="landing" />
            </div>
          </div>
        </div>
      </div>
      {/* all projects part */}
      <div className="mt-5">
        <h1 className="text-center mb-5">Explore Our Projects</h1>
        <marquee>
          <div className="d-flex">
            {allProjects.length > 0 &&
              allProjects.map((project, index) => (
                <div key={index} className="project me-5">
                  <ProjectCard project={project} />
                </div>
              ))}
          </div>
        </marquee>
        <div className="text-center">
          <button onClick={handleNavigate} className="btn btn-link">
            View More Projects
          </button>
        </div>
      </div>
      <ToastContainer autoClose={3000} theme="colored" />
      </>
  );
}

export default Home;