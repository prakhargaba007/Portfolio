import { list } from "./ProjectList";
import "./Projects.css";
export default function Projects() {
  return (
    <div id="projects" className="container2">
      <h1>My Projects</h1>
      <ul className="links">
        {list.map((list) => (
          <li className="list" key={list.key}>
            <span>
              <h2>{list.projectName}</h2>
            </span>
            <div>
              <a href={list.gitRepoLink} target="_blank">
                Go to Github
              </a>
            </div>
            <div>
              <a href={list.gitPages} target="_blank">
                Demo Website
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
