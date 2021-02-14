import React from "react"
import Link from "./components/Link"

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm Nicholas Mackey</h1>
      <p>A Software Developer from Dallas, TX</p>
      <Link address="https://www.github.com/nikmackey" title="Github" />
      <Link address="https://www.linkedin.com/in/nicholasadammackey" title="LinkedIn" />
    </div>
  )
}

export default App
