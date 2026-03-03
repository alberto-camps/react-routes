import { Link } from "react-router-dom"
import RoutesPages from "./routes/RoutesPages"

const App = () => {
  return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/resume">Resume</Link>
    </nav>
    <RoutesPages />
    </>
  )
}

export default App