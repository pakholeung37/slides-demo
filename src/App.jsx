import React from "react"
import { NativeCSS } from "./components/1native-css"
// import { SASS } from "./components/2sass"
// import { CSSModule } from "./components/3css-module"
// import { CSSinJS } from "./components/4css-in-js"
// import { AtomicCSS } from "./components/5atomic-css"
// import { StyledSystem } from "./components/6styled-system"
function App() {
  return (
    <>
      <h1 className="title">NativeCSS</h1>
      <NativeCSS />
      {/* <h1 className="title">SASS</h1>
      <SASS />
      <h1 className="title">CSS Module</h1>
      <CSSModule />
      <h1 className="title">AtomicCSS (tailwindcss)</h1>
      <AtomicCSS />
      <h1 className="title">CSS in JS (emotion)</h1>
      <CSSinJS />
      <h1 className="title">Design System (chakra UI)</h1>
      <StyledSystem /> */}
    </>
  )
}

export default App
