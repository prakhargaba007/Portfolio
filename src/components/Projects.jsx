import React from "react";
import { list } from "./ProjectList";
import "./Projects.css";

export default function Projects() {
  return (
    <div id="projects" className="container2">
      <h1>My Projects</h1>
      <ul className="links">
        {list.map((item) => (
          <li className="list" key={item.key}>
            <div>
              <h2>{item.projectName}</h2>
              <p>
                {/* <strong>Language Used:</strong> {item.langUsed} */}
              </p>{" "}
              {/* Display the language used */}
              <p>{item.projectDesc}</p> {/* Display the project description */}
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
    </div>
  );
}
