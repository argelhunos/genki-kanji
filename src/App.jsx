import { useState } from "react"
import Header from "./components/Header.jsx"
import KanjiChars from "./components/KanjiChar.jsx"
import Selector from "./components/Selector.jsx"
import kanjidata from "./assets/kanjidata.js"

function App() {
  const [selectedLesson, setSelectedLesson] = useState("All Lessons")

  const kanjisToShow = selectedLesson === "All Lessons" ?
    kanjidata : kanjidata.filter(kanji => kanji.lesson === selectedLesson)

  const onSelectionChange = (event) => {
    setSelectedLesson(event.target.value)
    console.log(event.target.value)
  }

  return (
    <>
      <div>
        <Header />
        <Selector onchange={onSelectionChange} />
        <KanjiChars kanjis={kanjisToShow} />
      </div>
    </>
  )
}

export default App
