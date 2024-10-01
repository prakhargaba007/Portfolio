import React, { useState } from "react";
import { list } from "./ProjectList";
import "./Projects.css";

export default function Projects() {
  // Number of projects to load initially
  const [visibleProjects, setVisibleProjects] = useState(6); // Change to 6 or 8 as needed

  // Function to load more projects
  const loadMoreProjects = () => {
    setVisibleProjects((prevVisible) => prevVisible + 3); // Increase by 8
  };

  return (
    <div id="projects" className="container2">
      <h1>My Projects</h1>
      <ul className="links">
        {list.slice(0, visibleProjects).map((item) => (
          <li className="list" key={item.key}>
            <div>
              <h2>{item.projectName}</h2>
              <p>{/* <strong>Language Used:</strong> {item.langUsed} */}</p>
              <p>{item.projectDesc}</p>
            </div>
            <div className="project-links">
              <a
                href={item.gitRepoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                Go to Github
              </a>
              <a
                href={item.gitPages}
                target="_blank"
                rel="noopener noreferrer"
                className="demo-link"
              >
                Demo Website
              </a>
            </div>
          </li>
        ))}
      </ul>
      {visibleProjects < list.length && (
        <button className="load-more-button" onClick={loadMoreProjects}>
          Load More
        </button>
      )}
    </div>
  );
}
