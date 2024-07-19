import Resource from "./components/Resource";
import SimpleHeader from "./components/SimpleHeader";

export default function About() {
    return (
        <div>
            <SimpleHeader />
            <div className="about-body">
                <div className="intro-section">
                    <div className="left-img">
                        <img src="src/assets/img/kikokushijo_boy.png" alt="" />
                    </div>
                    <section className="text">
                        <h1>Welcome to the Genki Kanji Lookup App!</h1>
                        <p>
                        This app is designed to help students of Japanese conveniently
                        look up kanji and related information from the Genki 1 textbook.
                        Whether you're studying for a test or forgot which kanji you're
                        expected to know while doing homework, this app has you covered. 
                        </p> 
                        <p>At the same time, for all the Japanese teachers, this app is a quick
                        and convenient way to ensure your lesson materials contain the kanji
                        your students should know!
                        </p>
                        <h2>How to Use the App</h2>
                        <ul>
                            <li>Select the lesson to filter the kanji list.</li>
                            <li>Use the search bar to find specific kanji by character, On'yomi, or Kun'yomi readings.</li>
                        </ul>
                    </section>
                </div>
                <h1>Useful Resources</h1>
                <div className="resources">
                    <Resource name={"Jisho"} link={"https://jisho.org"} description={"Powerful Japanese-English dictionary I use all the time!"} image={"src/assets/img/jisho-icon-filled-256.png"}/>
                    <Resource name={"Seth Clydesdale's Genki Study Resources"} link={"https://sethclydesdale.github.io/genki-study-resources/lessons-3rd/"} description={"One stop shop for a bunch of exercises from each lesson. Covers both Genki 1/Genki 2 and even has premade anki decks for you to download."} image={"src/assets/img/seth.png"}/>
                    <Resource name={"NIHONGO eな"} link={"https://nihongo-e-na.com/eng/"} description={"A collection of various websites and online tools and apps managed by The Japan Foundation. Recommended by my Japanese teacher!"} image={"src/assets/img/ena-bannar-160-60.png"}/>
                </div>
                <h1>Acknowledgements</h1>
                <p>Special thanks to the creators of Kanji Alive for their kanji stroke images!</p>
                <ul>
                    <li><a href="https://github.com/kanjialive/kanji-data-media">Kanji alive language data and media files</a> by the <a href="Kanji alive team"></a> is licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a></li>
                    <li><a href="https://www.irasutoya.com/">Irasutoya</a> illustrations by Takashi Mifune</li>
                </ul>
            </div>
        </div>
    )
}