import { useEffect, useState } from "react"
import Header from "./components/Header.jsx"
import KanjiChars from "./components/KanjiChar.jsx"
import Selector from "./components/Selector.jsx"
import kanjidata from "./assets/kanjidata.js"
import NotFound from "./components/NotFound.jsx"

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

  const handleSearch = () => {
    let filteredKanji = selectedLesson === "All Lessons" ? kanjidata : kanjidata.filter(kanji => kanji.lesson === selectedLesson)

    if (searchField.length > 0) {
      switch (selectedFilter) {
        case "Kanji":
          filteredKanji = filteredKanji.filter(kanji => kanji.character === searchField)
          break
        case "On'yomi":
          filteredKanji = filteredKanji.filter(kanji => kanji.onyomi.includes(searchField))
          break
        default:
          filteredKanji = filteredKanji.filter(kanji => kanji.kunyomi.includes(searchField))
          break
      }
    }

    setKanjiToDisplay(filteredKanji)
  }

  const onSelectionChange = (event) => {
    setSelectedLesson(event.target.value)
    
    if (lesson === "All Lessons") {
      setKanjiToDisplay(kanjidata)
    } else {
      setKanjiToDisplay(kanjidata.filter(kanji => kanji.lesson === lesson))
    }
  }

  useEffect(() => handleSearch(), [selectedLesson])

  return (
    <>
      <div>
        <Header searchFilter={selectedFilter} optionOne={filterOptionOne} optionTwo={filterOptionTwo} onOptionClick={filterChangeHandler} onSearchClick={handleSearch} onFieldChange={handleFieldChange}/>
        <Selector onchange={onSelectionChange} />
        {kanjiToDisplay.length != 0 ? <KanjiChars kanjis={kanjiToDisplay} /> : <NotFound/> } 
      </div>
    </>
  )
}

export default App
