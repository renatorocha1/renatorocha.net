import React from "react"
import { Link } from "gatsby"

const ProjectPage = () => (
  <>
    <h1>Project X</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/project" activeStyle={{ color: 'red' }}>Project</Link>
      </li>
    </ul>
  </>
)

export default ProjectPage