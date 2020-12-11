import React from "react"
import { NativeCSS } from "./components/native-css"
import { SASS } from "./components/sass"
import { CSSModule } from "./components/css-module"
import { CSSinJS } from "./components/css-in-js"
import { AtomicCSS } from "./components/atomic-css"
import { DesignSystem } from "./components/design-system"
import { ChakraProvider } from "@chakra-ui/react"
function App() {
  return (
    <ChakraProvider>
      <h1 className="title">NativeCSS</h1>
      <NativeCSS />
      <h1 className="title">SASS</h1>
      <SASS />
      <h1 className="title">CSS Module</h1>
      <CSSModule />
      <h1 className="title">AtomicCSS (tailwindcss)</h1>
      <AtomicCSS />
      <h1 className="title">CSS in JS (emotion)</h1>
      <CSSinJS />
      <h1 className="title">Design System (chakra UI)</h1>
      <DesignSystem />
    </ChakraProvider>
  )
}

export default App
