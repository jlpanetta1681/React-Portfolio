import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import SinglePost from "./components/SinglePost"
import Post from "./components/Post.js"
import Project from "./components/Project"
import NavBar from "./components/NavBar"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route components={Home} path='/' />
          <Route components={About} path='/about' />
          <Route components={SinglePost} path='/post/:slug' />
          <Route components={Post} path='/post' />
          <Route components={Project} path='/project' />
        </Switch>
      </BrowserRouter>
      <Home />
    </>
  )

}

export default App;
