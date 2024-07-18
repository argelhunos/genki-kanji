import { useEffect, useState } from "react"
import Header from "./components/Header.jsx"
import KanjiChars from "./components/KanjiChar.jsx"
import Selector from "./components/Selector.jsx"
import kanjidata from "./assets/kanjidata.js"

function App() {
  const [selectedLesson, setSelectedLesson] = useState("All Lessons")
  const [selectedFilter, setSelectedFilter] = useState("Kanji") // default filter
  const [filterOptionOne, setFilterOptionOne] = useState("On'yomi")
  const [filterOptionTwo, setFilterOptionTwo] = useState("Kun'yomi")
  const [searchField, setSearchField] = useState("")
  const [kanjiToDisplay, setKanjiToDisplay] = useState(kanjidata)

  const filterChangeHandler = (event) => {
    switch (event.target.textContent) {
      case "On'yomi":
        setSelectedFilter("On'yomi")
        setFilterOptionOne("Kanji")
        setFilterOptionTwo("Kun'yomi")
        break
      case "Kun'yomi":
        setSelectedFilter("Kun'yomi")
        setFilterOptionOne("On'yomi")
        setFilterOptionTwo("Kanji")
        break
      default:
        setSelectedFilter("Kanji")
        setFilterOptionOne("On'yomi")
        setFilterOptionTwo("Kun'yomi")
    }
  }

  const handleFieldChange = (event) => {
    setSearchField(event.target.value)
  }

  const updateLessonFilter = (lesson) => {
    if (lesson === "All Lessons") {
      setKanjiToDisplay(kanjidata)
    } else {
      setKanjiToDisplay(kanjidata.filter(kanji => kanji.lesson === lesson))
    }
  }

  const handleSearch = () => {
    if (searchField.length == 0) {
      updateLessonFilter(selectedLesson)
    } else {
      switch (selectedFilter) {
        case "Kanji":
          setKanjiToDisplay(kanjiToDisplay.filter(kanji => kanji.character === searchField))
          break
        case "On'yomi":
          setKanjiToDisplay(kanjiToDisplay.filter(kanji => kanji.onyomi.includes(searchField)))
          break
        default:
          setKanjiToDisplay(kanjiToDisplay.filter(kanji => kanji.kunyomi.includes(searchField)))
          break
      }
    }
  }

  const onSelectionChange = (event) => {
    setSelectedLesson(event.target.value)
    updateLessonFilter(event.target.value)
  }

  useEffect(() => handleSearch(), [selectedLesson])

  return (
    <>
      <div>
        <Header searchFilter={selectedFilter} optionOne={filterOptionOne} optionTwo={filterOptionTwo} onOptionClick={filterChangeHandler} onSearchClick={handleSearch} onFieldChange={handleFieldChange}/>
        <Selector onchange={onSelectionChange} />
        <KanjiChars kanjis={kanjiToDisplay} />
      </div>
    </>
  )
}

export default App
