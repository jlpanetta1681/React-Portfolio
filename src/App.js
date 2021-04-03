import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import SinglePost from "./components/SinglePost"
import Post from "./components/Post.js"
import Project from "./components/Project"
import NavBar from "./components/NavBar"


function App() {
  return (

    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route components={About} path='/about'>
          <About />
        </Route>
        <Route components={SinglePost} path='/post/:slug' />

        <Route components={Post} path='/post'>
          <Post />
        </Route>
        <Route components={Project} path='/project' >
          <Project />
        </Route>
        <Route components={Home} path='/'>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>


  )
}



export default App;
