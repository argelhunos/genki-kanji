import Header from "./components/Header.jsx"
import KanjiChars from "./components/KanjiChar.jsx"

function App() {
  const testKanjis = [
    { character: "一", meaning: "one", onyomi: "いち　いっ", kunyomi: "ひと", 
      examples: [
        {kanji: "一", kana: "いち", eng: "one"},
        {kanji: "一時", kana: "いちじ", eng: "one o'clock"},
        {kanji: "一年生", kana: "いちねんせい", eng: "first year student"},
        {kanji: "一分", kana: "いっぷん", eng: "one minute"},
        {kanji: "一つ", kana: "ひとつ", eng: "one"}
      ],
      strokes: ["src/assets/lesson3/one/1_1.svg"],
      lesson: 3
    },
    { character: "二", meaning: "two", onyomi: "に", kunyomi: "ふた", 
      examples: [
        {kanji: "二", kana: "に", eng: "two"},
        {kanji: "二時", kana: "にじ", eng: "two o'clock"},
        {kanji: "二年生", kana: "にねんせい", eng: "second year student"},
        {kanji: "二つ", kana: "ふたつ", eng: "two"},
        {kanji: "二日間", kana: "ふつかかん", eng: "two days"}
      ],
      strokes: ["src/assets/lesson3/two/2_1.svg", "src/assets/lesson3/two/2_2.svg"],
      lesson: 3
    },
    { character: "三", meaning: "three", onyomi: "さん", kunyomi: "みっ", 
      examples: [
        {kanji: "三", kana: "さん", eng: "three"},
        {kanji: "三時", kana: "さんじ", eng: "three o'clock"},
        {kanji: "三年生", kana: "さんねんせい", eng: "third year student"},
        {kanji: "三月", kana: "さんがつ", eng: "March"},
        {kanji: "三つ", kana: "みっつ", eng: "three"}
      ],
      strokes: ["src/assets/lesson3/three/3_1.svg", "src/assets/lesson3/three/3_2.svg", "src/assets/lesson3/three/3_3.svg"],
      lesson: 3
    },
    { character: "四", meaning: "four", onyomi: "し", kunyomi: "よん　よ", 
      examples: [
        {kanji: "四", kana: "し", eng: "four"},
        {kanji: "四時", kana: "よじ", eng: "four o'clock"},
        {kanji: "四年生", kana: "よねんせい", eng: "fourth year student"},
        {kanji: "四月", kana: "しがつ", eng: "April"},
        {kanji: "四つ", kana: "よっつ", eng: "four"}
      ],
      strokes: ["src/assets/lesson3/four/4_1.svg", "src/assets/lesson3/four/4_2.svg", "src/assets/lesson3/four/4_3.svg", "src/assets/lesson3/four/4_4.svg"],
      lesson: 3
    },
    { character: "五", meaning: "five", onyomi: "ご", kunyomi: "いつ", 
      examples: [
        {kanji: "五", kana: "ご", eng: "five"},
        {kanji: "五時", kana: "ごじ", eng: "five o'clock"},
        {kanji: "五月", kana: "ごがつ", eng: "May"},
        {kanji: "五歳", kana: "ごさい", eng: "five years old"},
        {kanji: "五つ", kana: "いつつ", eng: "five"}
      ],
      strokes: ["src/assets/lesson3/five/5_1.svg", "src/assets/lesson3/five/5_2.svg", "src/assets/lesson3/five/5_3.svg", "src/assets/lesson3/five/5_4.svg"],
      lesson: 3
    },
    { character: "六", meaning: "six", onyomi: "ろく　ろっ", kunyomi: "むっ", 
      examples: [
        {kanji: "六", kana: "ろく", eng: "six"},
        {kanji: "六時", kana: "ろくじ", eng: "six o'clock"},
        {kanji: "六百", kana: "ろっぴゃく", eng: "six hundred"},
        {kanji: "六分", kana: "ろっぷん", eng: "six minutes"},
        {kanji: "六つ", kana: "むっつ", eng: "six"}
      ],
      strokes: ["src/assets/lesson3/six/6_1.svg", "src/assets/lesson3/six/6_2.svg", "src/assets/lesson3/six/6_3.svg", "src/assets/lesson3/six/6_4.svg"],
      lesson: 3
    },
    { character: "七", meaning: "seven", onyomi: "しち", kunyomi: "なな", 
      examples: [
        {kanji: "七", kana: "しち", eng: "seven"},
        {kanji: "七時", kana: "しちじ", eng: "seven o'clock"},
        {kanji: "七月", kana: "しちがつ", eng: "July"},
        {kanji: "七つ", kana: "ななつ", eng: "seven"},
        {kanji: "七人", kana: "ななにん　しちにん", eng: "seven people"}
      ],
      strokes: ["src/assets/lesson3/seven/7_1.svg", "src/assets/lesson3/seven/7_2.svg"],
      lesson: 3
    },
    { character: "八", meaning: "eight", onyomi: "はち　はっ", kunyomi: "やっ", 
      examples: [
        {kanji: "八", kana: "はち", eng: "eight"},
        {kanji: "八時", kana: "はちじ", eng: "eight o'clock"},
        {kanji: "八百", kana: "はっぴゃく", eng: "eight hundred"},
        {kanji: "八歳", kana: "はっさい", eng: "eight years old"},
        {kanji: "八つ", kana: "やっつ", eng: "eight"}
      ],
      strokes: ["src/assets/lesson3/eight/8_1.svg", "src/assets/lesson3/eight/8_2.svg"],
      lesson: 3
    },
    { character: "九", meaning: "nine", onyomi: "きゅう く", kunyomi: "ここの", 
      examples: [
        {kanji: "九", kana: "きゅう", eng: "nine"},
        {kanji: "九時", kana: "くじ", eng: "nine o'clock"},
        {kanji: "九月", kana: "くがつ", eng: "September"},
        {kanji: "九歳", kana: "きゅうさい", eng: "nine years old"},
        {kanji: "九つ", kana: "ここのつ", eng: "nine"}
      ],
      strokes: ["src/assets/lesson3/nine/9_1.svg", "src/assets/lesson3/nine/9_2.svg"],
      lesson: 3
    },
    { character: "十", meaning: "ten", onyomi: "じゅう じっ", kunyomi: "とお", 
      examples: [
        {kanji: "十", kana: "じゅう", eng: "ten"},
        {kanji: "十時", kana: "じゅうじ", eng: "ten o'clock"},
        {kanji: "十月", kana: "じゅうがつ", eng: "October"},
        {kanji: "十歳", kana: "じゅっさい", eng: "ten years old"},
        {kanji: "十", kana: "とお", eng: "ten"}
      ],
      strokes: ["src/assets/lesson3/ten/10_1.svg", "src/assets/lesson3/ten/10_2.svg"],
      lesson: 3
    },
    { character: "百", meaning: "hundred", onyomi: "ひゃく", kunyomi: "", 
      examples: [
        {kanji: "百", kana: "ひゃく", eng: "hundred"},
        {kanji: "三百", kana: "さんびゃく", eng: "three hundred"},
        {kanji: "六百", kana: "ろっぴゃく", eng: "six hundred"},
        {kanji: "八百", kana: "はっぴゃく", eng: "eight hundred"},
        {kanji: "百円", kana: "ひゃくえん", eng: "one hundred yen"}
      ],
      strokes: ["src/assets/lesson3/hundred/hyaku-momo_1.svg", "src/assets/lesson3/hundred/hyaku-momo_2.svg","src/assets/lesson3/hundred/hyaku-momo_3.svg","src/assets/lesson3/hundred/hyaku-momo_4.svg","src/assets/lesson3/hundred/hyaku-momo_5.svg","src/assets/lesson3/hundred/hyaku-momo_6.svg",],
      lesson: 3
    },
    { character: "千", meaning: "thousand", onyomi: "せん ぜん", kunyomi: "", 
      examples: [
        {kanji: "千", kana: "せん", eng: "thousand"},
        {kanji: "三千", kana: "さんぜん", eng: "three thousand"},
        {kanji: "八千", kana: "はっせん", eng: "eight thousand"},
        {kanji: "千円", kana: "せんえん", eng: "one thousand yen"}
      ],
      strokes: ["src/assets/lesson3/thousand/sen-chi_1.svg", "src/assets/lesson3/thousand/sen-chi_2.svg", "src/assets/lesson3/thousand/sen-chi_3.svg"],
      lesson: 3
    },
    { character: "万", meaning: "ten thousand", onyomi: "まん", kunyomi: "", 
      examples: [
        {kanji: "一万", kana: "いちまん", eng: "ten thousand"},
        {kanji: "十万", kana: "じゅうまん", eng: "one hundred thousand"},
        {kanji: "百万", kana: "ひゃくまん", eng: "one million"}
      ],
      strokes: ["src/assets/lesson3/tenthousand/(nan)man_1.svg", "src/assets/lesson3/tenthousand/(nan)man_2.svg", "src/assets/lesson3/tenthousand/(nan)man_3.svg"],
      lesson: 3
    },
    { character: "円", meaning: "yen; circle", onyomi: "えん", kunyomi: "まる", 
      examples: [
        {kanji: "百円", kana: "ひゃくえん", eng: "one hundred yen"},
        {kanji: "千円", kana: "せんえん", eng: "one thousand yen"},
        {kanji: "円", kana: "えん", eng: "circle"},
        {kanji: "円高", kana: "えんだか", eng: "strong yen"},
        {kanji: "円い", kana: "まるい", eng: "round"}
      ],
      strokes: ["src/assets/lesson3/yen/en-maru_1.svg", "src/assets/lesson3/yen/en-maru_2.svg", "src/assets/lesson3/yen/en-maru_3.svg", "src/assets/lesson3/yen/en-maru_4.svg"],
      lesson: 3
    },
    { character: "時", meaning: "time", onyomi: "じ", kunyomi: "とき", 
      examples: [
        {kanji: "一時", kana: "いちじ", eng: "one o'clock"},
        {kanji: "時間", kana: "じかん", eng: "time"},
        {kanji: "子どもの時", kana: "こどものとき", eng: "in one's childhood"},
        {kanji: "時々", kana: "ときどき", eng: "sometimes"},
        {kanji: "時計", kana: "とけい", eng: "watch; clock"}
      ],
      strokes: ["src/assets/lesson3/time/ji-toki_1.svg", "src/assets/lesson3/time/ji-toki_2.svg","src/assets/lesson3/time/ji-toki_3.svg","src/assets/lesson3/time/ji-toki_4.svg","src/assets/lesson3/time/ji-toki_5.svg","src/assets/lesson3/time/ji-toki_6.svg","src/assets/lesson3/time/ji-toki_7.svg","src/assets/lesson3/time/ji-toki_8.svg","src/assets/lesson3/time/ji-toki_9.svg","src/assets/lesson3/time/ji-toki_10.svg"],
      lesson: 3
    }
]

  return (
    <>
      <div>
        <Header />
        <KanjiChars kanjis={testKanjis} />
      </div>
    </>
  )
}

export default App
