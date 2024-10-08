const KanjiChars = ({kanjis}) => {
    return (
        <div className="kanji-list">
            {kanjis.map(kanji =>
                <div key={kanji.meaning} className="kanji-card">
                    <div className="kanji-reading">
                        <p className="kanji-character">{kanji.character}</p>
                        <div className="on-kun">
                            <p>On'yomi</p>
                            <p className="onyomi">{kanji.onyomi}</p>
                            <p>Kun'yomi</p>
                            <p className="kunyomi">{kanji.kunyomi}</p>
                            <p>({kanji.meaning})</p>
                        </div>
                    </div>
                    <div className="examples-and-stroke">
                        <div className="examples">
                            <ul>
                                {kanji.examples.map(word =>
                                    <li key={word.kanji + '-' + word.kana}>{word.kanji} ({word.kana}) {word.eng}</li>
                                )}
                            </ul>
                        </div>
                        <div className="strokes">
                            <p><em>{kanji.strokes.length} {kanji.strokes.length > 1 ? "strokes" : "stroke"}</em></p>
                            <div className="strokes-img">
                                {kanji.strokes.map(stroke =>
                                    <img src={stroke} key={stroke} className="kanji-stroke" alt={"Step " + stroke.replace(".svg", "").slice(-1) + " of kanji stroke order for " + kanji.character}/>
                                )}
                            </div>
                        </div>
                        <p className="lesson-number">{kanji.lesson}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default KanjiChars