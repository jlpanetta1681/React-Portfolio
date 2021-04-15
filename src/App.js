import { BrowserRouter, Route, Switch, } from "react-router-dom"
import Home from "./components/Home.js"
import About from "./components/About.js"
import SinglePost from "./components/SinglePost.js"
import Post from "./components/Post.js"
import Project from "./components/Project.js"
import NavBar from "./components/NavBar.js"


function App() {
  return (

    <BrowserRouter>
      <NavBar />

      <Switch>
        <Route components={About} path='/about'>

        </Route>
        <Route components={Post} path='/post'>
          <Post />
        </Route>
        <Route components={SinglePost} path='/post/:slug'>
          <SinglePost />
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
