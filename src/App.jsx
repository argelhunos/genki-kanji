import { useState } from "react"
import Header from "./components/Header.jsx"
import KanjiChars from "./components/KanjiChar.jsx"
import Selector from "./components/Selector.jsx"

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
      lesson: "Lesson 3"
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
      lesson: "Lesson 3"
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
      lesson: "Lesson 3"
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
      lesson: "Lesson 3"
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
      lesson: "Lesson 3"
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
      lesson: "Lesson 3"
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
      lesson: "Lesson 3"
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
      lesson: "Lesson 3"
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
      lesson: "Lesson 3"
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
      lesson: "Lesson 3"
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
      lesson: "Lesson 3"
    },
    { character: "千", meaning: "thousand", onyomi: "せん ぜん", kunyomi: "", 
      examples: [
        {kanji: "千", kana: "せん", eng: "thousand"},
        {kanji: "三千", kana: "さんぜん", eng: "three thousand"},
        {kanji: "八千", kana: "はっせん", eng: "eight thousand"},
        {kanji: "千円", kana: "せんえん", eng: "one thousand yen"}
      ],
      strokes: ["src/assets/lesson3/thousand/sen-chi_1.svg", "src/assets/lesson3/thousand/sen-chi_2.svg", "src/assets/lesson3/thousand/sen-chi_3.svg"],
      lesson: "Lesson 3"
    },
    { character: "万", meaning: "ten thousand", onyomi: "まん", kunyomi: "", 
      examples: [
        {kanji: "一万", kana: "いちまん", eng: "ten thousand"},
        {kanji: "十万", kana: "じゅうまん", eng: "one hundred thousand"},
        {kanji: "百万", kana: "ひゃくまん", eng: "one million"}
      ],
      strokes: ["src/assets/lesson3/tenthousand/(nan)man_1.svg", "src/assets/lesson3/tenthousand/(nan)man_2.svg", "src/assets/lesson3/tenthousand/(nan)man_3.svg"],
      lesson: "Lesson 3"
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
      lesson: "Lesson 3"
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
      lesson: "Lesson 3"
    },
    {
      character: "日", meaning: "day", onyomi: "に　にち　にっ", kunyomi: "び　ひ　か",
      examples: [
        {kanji: "日曜日", kana: "にちようび", eng: "Sunday"},
        {kanji: "日本", kana: "にほん", eng: "Japan"},
        {kanji: "毎日", kana: "まいにち", eng: "every day"},
        {kanji: "母の日", kana: "ははのひ", eng: "Mother's Day"},
        {kanji: "日記", kana: "にっき", eng: "diary"},
        {kanji: "三日", kana: "みっか", eng: "three days"}
      ],
      strokes: ["src/assets/lesson4/day/nichi-hi_1.svg", "src/assets/lesson4/day/nichi-hi_2.svg", "src/assets/lesson4/day/nichi-hi_3.svg", "src/assets/lesson4/day/nichi-hi_4.svg"],
      lesson: "Lesson 4"
    },
    {
      character: "本", meaning: "book", onyomi: "ほん", kunyomi: "もと",
      examples: [
        {kanji: "本", kana: "ほん", eng: "book"},
        {kanji: "日本", kana: "にほん", eng: "Japan"},
        {kanji: "日本語", kana: "にほんご", eng: "Japanese language"},
        {kanji: "山本さん", kana: "やまもとさん", eng: "Mr./Ms. Yamamoto"}
      ],
      strokes: ["src/assets/lesson4/book/hon-moto_1.svg", "src/assets/lesson4/book/hon-moto_2.svg", "src/assets/lesson4/book/hon-moto_3.svg", "src/assets/lesson4/book/hon-moto_4.svg", "src/assets/lesson4/book/hon-moto_5.svg"],
      lesson: "Lesson 4"
    },
    {
      character: "人", meaning: "person", onyomi: "じん　にん", kunyomi: "ひと",
      examples: [
        {kanji: "日本人", kana: "にほんじん", eng: "Japanese people"},
        {kanji: "一人で", kana: "ひとりで", eng: "alone"},
        {kanji: "この人", kana: "このひと", eng: "this person"},
        {kanji: "三人", kana: "さんにん", eng: "three people"}
      ],
      strokes: ["src/assets/lesson4/person/nin-hito_1.svg", "src/assets/lesson4/person/nin-hito_2.svg"],
      lesson: "Lesson 4"
    },
    {
      character: "月", meaning: "moon; month", onyomi: "げつ", kunyomi: "つき",
      examples: [
        {kanji: "月曜日", kana: "げつようび", eng: "Monday"},
        {kanji: "一月", kana: "いちがつ", eng: "January"},
        {kanji: "月", kana: "つき", eng: "moon"},
        {kanji: "今月", kana: "こんげつ", eng: "this month"},
        {kanji: "一か月", kana: "いっかげつ", eng: "one month"},
      ],
      strokes: ["src/assets/lesson4/moon/getsu-tsuki_1.svg", "src/assets/lesson4/moon/getsu-tsuki_2.svg", "src/assets/lesson4/moon/getsu-tsuki_3.svg", "src/assets/lesson4/moon/getsu-tsuki_4.svg"],
      lesson: "Lesson 4"
    },
    {
      character: "火", meaning: "fire", onyomi: "か", kunyomi: "ひ",
      examples: [
        {kanji: "火曜日", kana: "かようび", eng: "Tuesday"},
        {kanji: "火", kana: "ひ", eng: "fire"},
        {kanji: "火山", kana: "かざん", eng: "volcano"},
        {kanji: "花火", kana: "はなび", eng: "fireworks"},
        {kanji: "火星", kana: "かせい", eng: "Mars"}
      ],
      strokes: ["src/assets/lesson4/fire/ka-hi_1.svg", "src/assets/lesson4/fire/ka-hi_2.svg", "src/assets/lesson4/fire/ka-hi_3.svg", "src/assets/lesson4/fire/ka-hi_4.svg"],
      lesson: "Lesson 4"
    },
    {
      character: "水", meaning: "water", onyomi: "すい", kunyomi: "みず",
      examples: [
        {kanji: "水曜日", kana: "すいようび", eng: "Wednesday"},
        {kanji: "水", kana: "みず", eng: "water"},
        {kanji: "水泳", kana: "すいえい", eng: "swimming"},
        {kanji: "水道", kana: "すいどう", eng: "water supply"},
        {kanji: "水着", kana: "みずぎ", eng: "bathing suit"}
      ],
      strokes: ["src/assets/lesson4/water/mizu_1.svg", "src/assets/lesson4/water/mizu_2.svg", "src/assets/lesson4/water/mizu_3.svg", "src/assets/lesson4/water/mizu_4.svg"],
      lesson: "Lesson 4"
    },
    {
      character: "木", meaning: "tree", onyomi: "もく", kunyomi: "き",
      examples: [
        {kanji: "木曜日", kana: "もくようび", eng: "Thursday"},
        {kanji: "木", kana: "き", eng: "tree"},
        {kanji: "木村さん", kana: "きむらさん", eng: "Mr./Ms. Kimura"}
      ],
      strokes: ["src/assets/lesson4/tree/moku-ki_1.svg", "src/assets/lesson4/tree/moku-ki_2.svg", "src/assets/lesson4/tree/moku-ki_3.svg", "src/assets/lesson4/tree/moku-ki_4.svg"],
      lesson: "Lesson 4"
    },
    {
      character: "金", meaning: "gold; money", onyomi: "きん", kunyomi: "かね",
      examples: [
        {kanji: "金曜日", kana: "きんようび", eng: "Friday"},
        {kanji: "お金", kana: "おかね", eng: "money"},
        {kanji: "料金", kana: "りょうきん", eng: "charge"},
        {kanji: "お金持ち", kana: "おかねもち", eng: "rich person"}
      ],
      strokes: ["src/assets/lesson4/gold/kin-kane_1.svg", "src/assets/lesson4/gold/kin-kane_2.svg", "src/assets/lesson4/gold/kin-kane_3.svg", "src/assets/lesson4/gold/kin-kane_4.svg", "src/assets/lesson4/gold/kin-kane_5.svg", "src/assets/lesson4/gold/kin-kane_6.svg", "src/assets/lesson4/gold/kin-kane_7.svg", "src/assets/lesson4/gold/kin-kane_8.svg"],
      lesson: "Lesson 4"
    },
    {
      character: "土", meaning: "soil", onyomi: "ど　と", kunyomi: "つち",
      examples: [
        {kanji: "土曜日", kana: "どようび", eng: "Saturday"},
        {kanji: "土地", kana: "とち", eng: "land"},
        {kanji: "土", kana: "つち", eng: "soil"},
        {kanji: "粘土", kana: "ねんど", eng: "clay"}
      ],
      strokes: ["src/assets/lesson4/soil/tsuchi_1.svg", "src/assets/lesson4/soil/tsuchi_2.svg", "src/assets/lesson4/soil/tsuchi_3.svg"],
      lesson: "Lesson 4"
    },
    {
      character: "曜", meaning: "weekday", onyomi: "よう", kunyomi: "",
      examples: [
        {kanji: "日曜日", kana: "にちようび", eng: "Sunday"},
        {kanji: "曜日", kana: "ようび", eng: "day of the week"}
      ],
      strokes: ["src/assets/lesson4/weekday/you(bi)_1.svg", "src/assets/lesson4/weekday/you(bi)_2.svg", "src/assets/lesson4/weekday/you(bi)_3.svg", "src/assets/lesson4/weekday/you(bi)_4.svg", "src/assets/lesson4/weekday/you(bi)_5.svg", "src/assets/lesson4/weekday/you(bi)_6.svg", "src/assets/lesson4/weekday/you(bi)_7.svg", "src/assets/lesson4/weekday/you(bi)_8.svg", "src/assets/lesson4/weekday/you(bi)_9.svg", "src/assets/lesson4/weekday/you(bi)_10.svg", "src/assets/lesson4/weekday/you(bi)_11.svg", "src/assets/lesson4/weekday/you(bi)_12.svg", "src/assets/lesson4/weekday/you(bi)_13.svg", "src/assets/lesson4/weekday/you(bi)_14.svg", "src/assets/lesson4/weekday/you(bi)_15.svg", "src/assets/lesson4/weekday/you(bi)_16.svg", "src/assets/lesson4/weekday/you(bi)_17.svg", "src/assets/lesson4/weekday/you(bi)_18.svg"],
      lesson: "Lesson 4"
    },
    {
      character: "上", meaning: "up", onyomi: "じょう", kunyomi: "うえ　のぼ",
      examples: [
        {kanji: "上", kana: "うえ", eng: "top; above"},
        {kanji: "上手な", kana: "じょうずな", eng: "good at"},
        {kanji: "屋上", kana: "おくじょう", eng: "rooftop"},
        {kanji: "上る", kana: "のぼる", eng: "to go up"}
      ],
      strokes: ["src/assets/lesson4/up/jou-ue_1.svg", "src/assets/lesson4/up/jou-ue_2.svg", "src/assets/lesson4/up/jou-ue_3.svg"],
      lesson: "Lesson 4"
    },
    {
      character: "下", meaning: "down", onyomi: "か", kunyomi: "した　くだ",
      examples: [
        {kanji: "下", kana: "した", eng: "under"},
        {kanji: "地下鉄", kana: "ちかてつ", eng: "subway"},
        {kanji: "下手な", kana: "へたな", eng: "poor at"},
        {kanji: "下さい", kana: "ください", eng: "Please give/do..."}
      ],
      strokes: ["src/assets/lesson4/down/ge-shita_1.svg", "src/assets/lesson4/down/ge-shita_2.svg", "src/assets/lesson4/down/ge-shita_3.svg"],
      lesson: "Lesson 4"
    },
    {
      character: "中", meaning: "middle", onyomi: "ちゅう　じゅう", kunyomi: "なか",
      examples: [
        {kanji: "中", kana: "なか", eng: "inside"},
        {kanji: "中国", kana: "ちゅうごく", eng: "China"},
        {kanji: "中学", kana: "ちゅうがく", eng: "junior high school"},
        {kanji: "一年中", kana: "いちねんじゅう", eng: "all year around"}
      ],
      strokes: ["src/assets/lesson4/middle/chuu-naka_1.svg", "src/assets/lesson4/middle/chuu-naka_2.svg", "src/assets/lesson4/middle/chuu-naka_3.svg", "src/assets/lesson4/middle/chuu-naka_4.svg"],
      lesson: "Lesson 4"
    },
    {
      character: "半", meaning: "half", onyomi: "はん", kunyomi: "",
      examples: [
        {kanji: "三時半", kana: "さんじはん", eng: "half past three"},
        {kanji: "半分", kana: "はんぶん", eng: "half"},
        {kanji: "半年", kana: "はんとし", eng: "half a year"},
        {kanji: "半額", kana: "はんがく", eng: "half price"}
      ],
      strokes: ["src/assets/lesson4/half/han-naka(ba)_1.svg", "src/assets/lesson4/half/han-naka(ba)_2.svg", "src/assets/lesson4/half/han-naka(ba)_3.svg", "src/assets/lesson4/half/han-naka(ba)_4.svg", "src/assets/lesson4/half/han-naka(ba)_5.svg"],
      lesson: "Lesson 4"
    },
    {
      character: "山", meaning: "mountain", onyomi: "さん", kunyomi: "やま",
      examples: [
        {kanji: "山", kana: "やま", eng: "mountain"},
        {kanji: "山川", kana: "やまかわ", eng: "Mr./Ms. Yamakawa"},
        {kanji: "富士山", kana: "ふじさん", eng: "Mt. Fuji"}
      ],
      strokes: ["src/assets/lesson5/mountain/yama_1.svg", "src/assets/lesson5/mountain/yama_2.svg", "src/assets/lesson5/mountain/yama_3.svg"],
      lesson: "Lesson 5"
    },
    {
      character: "川", meaning: "river", onyomi: "かわ　がわ", kunyomi: "",
      examples: [
        {kanji: "川", kana: "かわ", eng: "river"},
        {kanji: "山川", kana: "やまかわ", eng: "Mr./Ms. Yamakawa"},
        {kanji: "小川さん", kana: "おがわさん", eng: "Mr./Ms. Ogawa"}
      ],
      strokes: ["src/assets/lesson5/river/sen-kawa_1.svg", "src/assets/lesson5/river/sen-kawa_2.svg", "src/assets/lesson5/river/sen-kawa_3.svg"],
      lesson: "Lesson 5"
    },
    {
      character: "元", meaning: "origin", onyomi: "げん　がん", kunyomi: "もと",
      examples: [
        {kanji: "元気な", kana: "げんきな", eng: "fine"},
        {kanji: "元日", kana: "がんじつ", eng: "the first day of the year"},
        {kanji: "地元", kana: "じもと", eng: "local"}
      ],
      strokes: ["src/assets/lesson5/origin/gen-moto_1.svg", "src/assets/lesson5/origin/gen-moto_2.svg", "src/assets/lesson5/origin/gen-moto_3.svg", "src/assets/lesson5/origin/gen-moto_4.svg"],
      lesson: "Lesson 5"
    },
    {
      character: "気", meaning: "spirit", onyomi: "き", kunyomi: "",
      examples: [
        {kanji: "元気な", kana: "げんきな", eng: "fine"},
        {kanji: "天気", kana: "てんき", eng: "weather"},
        {kanji: "電気", kana: "でんき", eng: "electricity"},
        {kanji: "気持ち", kana: "きもち", eng: "feeling"},
        {kanji: "人気", kana: "にんき", eng: "popularity"}
      ],
      strokes: ["src/assets/lesson5/spirit/ki-kae(ru)_1.svg", "src/assets/lesson5/spirit/ki-kae(ru)_2.svg", "src/assets/lesson5/spirit/ki-kae(ru)_3.svg", "src/assets/lesson5/spirit/ki-kae(ru)_4.svg", "src/assets/lesson5/spirit/ki-kae(ru)_5.svg", "src/assets/lesson5/spirit/ki-kae(ru)_6.svg", "src/assets/lesson5/spirit/ki-kae(ru)_7.svg", "src/assets/lesson5/spirit/ki-kae(ru)_8.svg", "src/assets/lesson5/spirit/ki-kae(ru)_9.svg", "src/assets/lesson5/spirit/ki-kae(ru)_10.svg",],
      lesson: "Lesson 5"
    },
    {
      character: "天", meaning: "heaven", onyomi: "てん", kunyomi: "",
      examples: [
        {kanji: "天気", kana: "てんき", eng: "weather"},
        {kanji: "天国", kana: "てんごく", eng: "heaven"},
        {kanji: "天皇", kana: "てんのう", eng: "Japanese emperor"},
        {kanji: "天才", kana: "てんさい", eng: "genius"}
      ],
      strokes: ["src/assets/lesson5/heaven/ten-ama_1.svg", "src/assets/lesson5/heaven/ten-ama_2.svg", "src/assets/lesson5/heaven/ten-ama_3.svg", "src/assets/lesson5/heaven/ten-ama_4.svg"],
      lesson: "Lesson 5"
    },
    {
      character: "私", meaning: "I; private", onyomi: "し", kunyomi: "わたし",
      examples: [
        {kanji: "私", kana: "わたし", eng: "I"},
        {kanji: "私立大学", kana: "しりつだいがく", eng: "private university"}
      ],
      strokes: ["src/assets/lesson5/i/watashi_1.svg", "src/assets/lesson5/i/watashi_2.svg", "src/assets/lesson5/i/watashi_3.svg", "src/assets/lesson5/i/watashi_4.svg", "src/assets/lesson5/i/watashi_5.svg", "src/assets/lesson5/i/watashi_6.svg", "src/assets/lesson5/i/watashi_7.svg"],
      lesson: "Lesson 5"
    },
    {
      character: "今", meaning: "now", onyomi: "こん", kunyomi: "いま",
      examples: [
        {kanji: "今", kana: "いま", eng: "now"},
        {kanji: "今日", kana: "きょう", eng: "today"},
        {kanji: "電気", kana: "でんき", eng: "electricity"},
        {kanji: "気持ち", kana: "きもち", eng: "feeling"},
        {kanji: "人気", kana: "にんき", eng: "popularity"}
      ],
      strokes: ["src/assets/lesson5/now/ima_1.svg", "src/assets/lesson5/now/ima_2.svg", "src/assets/lesson5/now/ima_3.svg", "src/assets/lesson5/now/ima_4.svg"],
      lesson: "Lesson 5"
    },
    {
      character: "田", meaning: "rice field", onyomi: "た　だ", kunyomi: "",
      examples: [
        {kanji: "田中さん", kana: "たなかさん", eng: "Mr./Ms. Tanaka"},
        {kanji: "山田さん", kana: "やまださん", eng: "Mr./Ms. Yamada"},
        {kanji: "田んぼ", kana: "たんぼ", eng: "rice field"}
      ],
      strokes: ["src/assets/lesson5/ricefield/den-ta_1.svg", "src/assets/lesson5/ricefield/den-ta_2.svg", "src/assets/lesson5/ricefield/den-ta_3.svg", "src/assets/lesson5/ricefield/den-ta_4.svg", "src/assets/lesson5/ricefield/den-ta_5.svg"],
      lesson: "Lesson 5"
    },
    {
      character: "女", meaning: "woman", onyomi: "じょ", kunyomi: "おんな",
      examples: [
        {kanji: "女の人", kana: "おんなのひと", eng: "woman"},
        {kanji: "女性", kana: "じょせい", eng: "woman"},
        {kanji: "女の子", kana: "おんなのこ", eng: "girl"},
        {kanji: "長女", kana: "ちょうじょ", eng: "the eldest daughter"}
      ],
      strokes: ["src/assets/lesson5/woman/onna_1.svg", "src/assets/lesson5/woman/onna_2.svg", "src/assets/lesson5/woman/onna_3.svg"],
      lesson: "Lesson 5"
    },
    {
      character: "男", meaning: "man", onyomi: "だん", kunyomi: "おとこ",
      examples: [
        {kanji: "男の人", kana: "おとこのひと", eng: "man"},
        {kanji: "男性", kana: "だんせい", eng: "man"},
        {kanji: "男の子", kana: "おとこのこ", eng: "boy"},
        {kanji: "男子学生", kana: "だんしがくせい", eng: "male student"}
      ],
      strokes: ["src/assets/lesson5/man/otoko_1.svg", "src/assets/lesson5/man/otoko_2.svg", "src/assets/lesson5/man/otoko_3.svg", "src/assets/lesson5/man/otoko_4.svg", "src/assets/lesson5/man/otoko_5.svg", "src/assets/lesson5/man/otoko_6.svg", "src/assets/lesson5/man/otoko_7.svg"],
      lesson: "Lesson 5"
    },
    {
      character: "見", meaning: "to see", onyomi: "けん", kunyomi: "み",
      examples: [
        {kanji: "見る", kana: "みる", eng: "to see"},
        {kanji: "見物", kana: "けんぶつ", eng: "sightseeing"},
        {kanji: "花見", kana: "はなみ", eng: "flower viewing"},
        {kanji: "意見", kana: "いけん", eng: "opinion"}
      ],
      strokes: ["src/assets/lesson5/see/ken-mi(ru)_1.svg", "src/assets/lesson5/see/ken-mi(ru)_2.svg", "src/assets/lesson5/see/ken-mi(ru)_3.svg", "src/assets/lesson5/see/ken-mi(ru)_4.svg", "src/assets/lesson5/see/ken-mi(ru)_5.svg", "src/assets/lesson5/see/ken-mi(ru)_6.svg", "src/assets/lesson5/see/ken-mi(ru)_7.svg"],
      lesson: "Lesson 5"
    },
    {
      character: "行", meaning: "go", onyomi: "こう　ぎょう", kunyomi: "い",
      examples: [
        {kanji: "行く", kana: "いく", eng: "to go"},
        {kanji: "銀行", kana: "ぎんこう", eng: "bank"},
        {kanji: "一行目", kana: "いちぎょうめ", eng: "first line"},
        {kanji: "旅行", kana: "りょこう", eng: "travel"}
      ],
      strokes: ["src/assets/lesson5/go/i(ku)-gyou_1.svg", "src/assets/lesson5/go/i(ku)-gyou_2.svg", "src/assets/lesson5/go/i(ku)-gyou_3.svg", "src/assets/lesson5/go/i(ku)-gyou_4.svg", "src/assets/lesson5/go/i(ku)-gyou_5.svg", "src/assets/lesson5/go/i(ku)-gyou_6.svg"],
      lesson: "Lesson 5"
    },
    {
      character: "食", meaning: "eat", onyomi: "しょく", kunyomi: "た",
      examples: [
        {kanji: "食べる", kana: "たべる", eng: "to eat"},
        {kanji: "食べ物", kana: "たべもの", eng: "food"},
        {kanji: "朝食", kana: "ちょうしょく", eng: "breakfast"}
      ],
      strokes: ["src/assets/lesson5/eat/ta(beru)_1.svg", "src/assets/lesson5/eat/ta(beru)_2.svg", "src/assets/lesson5/eat/ta(beru)_3.svg", "src/assets/lesson5/eat/ta(beru)_4.svg", "src/assets/lesson5/eat/ta(beru)_5.svg", "src/assets/lesson5/eat/ta(beru)_6.svg", "src/assets/lesson5/eat/ta(beru)_7.svg", "src/assets/lesson5/eat/ta(beru)_8.svg", "src/assets/lesson5/eat/ta(beru)_9.svg"],
      lesson: "Lesson 5"
    },
    {
      character: "飲", meaning: "drink", onyomi: "いん", kunyomi: "のむ",
      examples: [
        {kanji: "飲む", kana: "のむ", eng: "to drink"},
        {kanji: "飲み物", kana: "のみもの", eng: "drink"},
        {kanji: "飲酒運転", kana: "いんしゅうんてん", eng: "drunken driving"}
      ],
      strokes: ["src/assets/lesson5/drink/in-no(mu)_1.svg", "src/assets/lesson5/drink/in-no(mu)_2.svg", "src/assets/lesson5/drink/in-no(mu)_3.svg", "src/assets/lesson5/drink/in-no(mu)_4.svg", "src/assets/lesson5/drink/in-no(mu)_5.svg", "src/assets/lesson5/drink/in-no(mu)_6.svg", "src/assets/lesson5/drink/in-no(mu)_7.svg", "src/assets/lesson5/drink/in-no(mu)_8.svg", "src/assets/lesson5/drink/in-no(mu)_9.svg", "src/assets/lesson5/drink/in-no(mu)_10.svg", "src/assets/lesson5/drink/in-no(mu)_11.svg", "src/assets/lesson5/drink/in-no(mu)_12.svg"],
      lesson: "Lesson 5"
    },
    {
      character: "東", meaning: "east", onyomi: "とう", kunyomi: "ひがし",
      examples: [
        {kanji: "東", kana: "ひがし", eng: "east"},
        {kanji: "東口", kana: "ひがしぐち", eng: "east exit"},
        {kanji: "東京", kana: "とうきょう", eng: "Tokyo"},
        {kanji: "関東", kana: "かんとう", eng: "Kanto area"},
        {kanji: "東洋", kana: "とうよう", eng: "the East"}
      ],
      strokes: ["src/assets/lesson6/east/higashi_1.svg", "src/assets/lesson6/east/higashi_2.svg", "src/assets/lesson6/east/higashi_3.svg", "src/assets/lesson6/east/higashi_4.svg", "src/assets/lesson6/east/higashi_5.svg", "src/assets/lesson6/east/higashi_6.svg", "src/assets/lesson6/east/higashi_7.svg", "src/assets/lesson6/east/higashi_8.svg"],
      lesson: "Lesson 6"
    },
    {
      character: "西", meaning: "west", onyomi: "せい　さい", kunyomi: "にし",
      examples: [
        {kanji: "西", kana: "にし", eng: "west"},
        {kanji: "西口", kana: "にしぐち", eng: "west exit"},
        {kanji: "北西", kana: "ほくせい", eng: "northwest"},
        {kanji: "関西", kana: "かんさい", eng: "Kansai area"},
        {kanji: "西洋", kana: "せいよう", eng: "the West"}
      ],
      strokes: ["src/assets/lesson6/west/nishi_1.svg", "src/assets/lesson6/west/nishi_2.svg", "src/assets/lesson6/west/nishi_3.svg", "src/assets/lesson6/west/nishi_4.svg", "src/assets/lesson6/west/nishi_5.svg", "src/assets/lesson6/west/nishi_6.svg"],
      lesson: "Lesson 6"
    },
    {
      character: "南", meaning: "south", onyomi: "なん", kunyomi: "みなみ",
      examples: [
        {kanji: "南", kana: "みなみ", eng: "south"},
        {kanji: "南口", kana: "みなみぐち", eng: "south exit"},
        {kanji: "南東", kana: "なんとう", eng: "southeast"},
        {kanji: "南極", kana: "なんきょく", eng: "Antarctica"},
        {kanji: "東南アジア", kana: "とうなんアジア", eng: "Southeast Asia"},
      ],
      strokes: ["src/assets/lesson6/south/minami_1.svg", "src/assets/lesson6/south/minami_2.svg", "src/assets/lesson6/south/minami_3.svg", "src/assets/lesson6/south/minami_4.svg", "src/assets/lesson6/south/minami_5.svg", "src/assets/lesson6/south/minami_6.svg", "src/assets/lesson6/south/minami_7.svg", "src/assets/lesson6/south/minami_8.svg", "src/assets/lesson6/south/minami_9.svg"],
      lesson: "Lesson 6"
    },
    {
      character: "北", meaning: "north", onyomi: "ほく　ほっ", kunyomi: "きた",
      examples: [
        {kanji: "北", kana: "きた", eng: "north"},
        {kanji: "北口", kana: "きたぐち", eng: "north exit"},
        {kanji: "東北", kana: "とうほく", eng: "Tohoku area"},
        {kanji: "北極", kana: "ほっきょく", eng: "North Pole"},
        {kanji: "北海道", kana: "ほっかいどう", eng: "Hokkaido"}
      ],
      strokes: ["src/assets/lesson6/north/kita_1.svg", "src/assets/lesson6/north/kita_2.svg", "src/assets/lesson6/north/kita_3.svg", "src/assets/lesson6/north/kita_4.svg", "src/assets/lesson6/north/kita_5.svg"],
      lesson: "Lesson 6"
    },
    {
      character: "口", meaning: "mouth", onyomi: "こう", kunyomi: "ぐち　くち",
      examples: [
        {kanji: "北口", kana: "きたぐち", eng: "north exit"},
        {kanji: "口", kana: "くち", eng: "mouth"},
        {kanji: "人口", kana: "じんこう", eng: "population"},
        {kanji: "入り口/入口", kana: "いりぐち", eng: "entrance"}
      ],
      strokes: ["src/assets/lesson6/mouth/kuchi_1.svg", "src/assets/lesson6/mouth/kuchi_2.svg", "src/assets/lesson6/mouth/kuchi_3.svg"],
      lesson: "Lesson 6"
    },
    {
      character: "出", meaning: "exit", onyomi: "しゅっ　しゅつ", kunyomi: "で　だ",
      examples: [
        {kanji: "出る", kana: "でる", eng: "to exit"},
        {kanji: "出口", kana: "でぐち", eng: "exit"},
        {kanji: "出かかる", kana: "でかける", eng: "to go out"},
        {kanji: "出席", kana: "しゅっせき", eng: "attendance"},
        {kanji: "輸出", kana: "ゆしゅつ", eng: "export"}
      ],
      strokes: ["src/assets/lesson6/exit/de(ru)_1.svg", "src/assets/lesson6/exit/de(ru)_2.svg", "src/assets/lesson6/exit/de(ru)_3.svg", "src/assets/lesson6/exit/de(ru)_4.svg", "src/assets/lesson6/exit/de(ru)_5.svg"],
      lesson: "Lesson 6"
    },
    {
      character: "右", meaning: "right", onyomi: "う　ゆう", kunyomi: "みぎ",
      examples: [
        {kanji: "右", kana: "みぎ", eng: "right"},
        {kanji: "右折", kana: "うせつ", eng: "right turn"},
        {kanji: "左右", kana: "さゆう", eng: "right and left"},
        {kanji: "右手", kana: "みぎて", eng: "right hand"},
        {kanji: "右側", kana: "みぎがわ", eng: "right side"}
      ],
      strokes: ["src/assets/lesson6/right/migi_1.svg", "src/assets/lesson6/right/migi_2.svg", "src/assets/lesson6/right/migi_3.svg", "src/assets/lesson6/right/migi_4.svg", "src/assets/lesson6/right/migi_5.svg"],
      lesson: "Lesson 6"
    },
    {
      character: "左", meaning: "left", onyomi: "さ", kunyomi: "ひだり",
      examples: [
        {kanji: "左", kana: "ひだり", eng: "left"},
        {kanji: "左折", kana: "させつ", eng: "left turn"},
        {kanji: "左手", kana: "ひだりて", eng: "left hand"},
        {kanji: "左利き", kana: "ひだりきき", eng: "left-handed"}
      ],
      strokes: ["src/assets/lesson6/left/hidari_1.svg", "src/assets/lesson6/left/hidari_2.svg", "src/assets/lesson6/left/hidari_3.svg", "src/assets/lesson6/left/hidari_4.svg", "src/assets/lesson6/left/hidari_5.svg"],
      lesson: "Lesson 6"
    },
    {
      character: "分", meaning: "minute; to divide", onyomi: "ふん ぷん　ぶん", kunyomi: "わ",
      examples: [
        {kanji: "五分", kana: "ごふん", eng: "five minutes"},
        {kanji: "十分", kana: "じゅっぷん/じっぶん", eng: "ten minutes"},
        {kanji: "自分", kana: "じぶん", eng: "oneself"},
        {kanji: "分ける", kana: "わける", eng: "to divide"}
      ],
      strokes: ["src/assets/lesson6/minute/fun-wa(keru)_1.svg", "src/assets/lesson6/minute/fun-wa(keru)_2.svg", "src/assets/lesson6/minute/fun-wa(keru)_3.svg", "src/assets/lesson6/minute/fun-wa(keru)_4.svg"],
      lesson: "Lesson 6"
    },
    {
      character: "先", meaning: "ahead", onyomi: "せん", kunyomi: "さき",
      examples: [
        {kanji: "先生", kana: "せんせい", eng: "teacher"},
        {kanji: "先週", kana: "せんしゅう", eng: "last week"},
        {kanji: "先に", kana: "さきに", eng: "ahead"},
        {kanji: "先月", kana: "せんげつ", eng: "last month"},
        {kanji: "先輩", kana: "せんぱい", eng: "senior member"}
      ],
      strokes: ["src/assets/lesson6/ahead/sen-saki_1.svg", "src/assets/lesson6/ahead/sen-saki_2.svg", "src/assets/lesson6/ahead/sen-saki_3.svg", "src/assets/lesson6/ahead/sen-saki_4.svg", "src/assets/lesson6/ahead/sen-saki_5.svg", "src/assets/lesson6/ahead/sen-saki_6.svg"],
      lesson: "Lesson 6"
    },
    {
      character: "生", meaning: "birth", onyomi: "せい しょう", kunyomi: "う",
      examples: [
        {kanji: "学生", kana: "がくせい", eng: "student"},
        {kanji: "先生", kana: "せんせい", eng: "teacher"},
        {kanji: "生まれる", kana: "うまれる", eng: "to be born"},
        {kanji: "一生に一度", kana: "いっしょうにいちど", eng: "once in a life time"}
      ],
      strokes: ["src/assets/lesson6/birth/u(mu)_1.svg", "src/assets/lesson6/birth/u(mu)_2.svg", "src/assets/lesson6/birth/u(mu)_3.svg", "src/assets/lesson6/birth/u(mu)_4.svg", "src/assets/lesson6/birth/u(mu)_5.svg"],
      lesson: "Lesson 6"
    },
    {
      character: "大", meaning: "big", onyomi: "だい　たい", kunyomi: "おお",
      examples: [
        {kanji: "大学生", kana: "だいがくせい", eng: "college student"},
        {kanji: "大きい", kana: "おおきい", eng: "big"},
        {kanji: "大変な", kana: "たいへんな", eng: "tough"},
        {kanji: "大人", kana: "おとな", eng: "adult"},
        {kanji: "大使館", kana: "たいしかん", eng: "embassy"}
      ],
      strokes: ["src/assets/lesson6/big/oo(kii)_1.svg", "src/assets/lesson6/big/oo(kii)_2.svg", "src/assets/lesson6/big/oo(kii)_3.svg"],
      lesson: "Lesson 6"
    },
    {
      character: "学", meaning: "learning", onyomi: "がく　がっ", kunyomi: "まな",
      examples: [
        {kanji: "大学", kana: "だいがく", eng: "university"},
        {kanji: "学生", kana: "がくせい", eng: "student"},
        {kanji: "学校", kana: "がっこう", eng: "school"},
        {kanji: "学ぶ", kana: "まなぶ", eng: "to study"},
        {kanji: "学部", kana: "がくぶ", eng: "department; faculty"}
      ],
      strokes: ["src/assets/lesson6/learning/mana(bu)_1.svg", "src/assets/lesson6/learning/mana(bu)_2.svg", "src/assets/lesson6/learning/mana(bu)_3.svg", "src/assets/lesson6/learning/mana(bu)_4.svg", "src/assets/lesson6/learning/mana(bu)_5.svg", "src/assets/lesson6/learning/mana(bu)_6.svg", "src/assets/lesson6/learning/mana(bu)_7.svg", "src/assets/lesson6/learning/mana(bu)_8.svg"],
      lesson: "Lesson 6"
    },
    {
      character: "外", meaning: "outside", onyomi: "がい", kunyomi: "そと",
      examples: [
        {kanji: "外国", kana: "がいこく", eng: "foreign country"},
        {kanji: "外国人", kana: "がいこくじん", eng: "foreigner"},
        {kanji: "外", kana: "そと", eng: "outside"},
        {kanji: "海外", kana: "かいがい", eng: "overseas"},
      ],
      strokes: ["src/assets/lesson6/outside/soto_1.svg", "src/assets/lesson6/outside/soto_2.svg", "src/assets/lesson6/outside/soto_3.svg", "src/assets/lesson6/outside/soto_4.svg", "src/assets/lesson6/outside/soto_5.svg"],
      lesson: "Lesson 6"
    },
    {
      character: "国", meaning: "country", onyomi: "こく　ごく　こっ", kunyomi: "くに",
      examples: [
        {kanji: "外国", kana: "がいこく", eng: "foreign country"},
        {kanji: "中国", kana: "ちゅうごく", eng: "China"},
        {kanji: "国", kana: "くに", eng: "country"},
        {kanji: "韓国", kana: "かんこく", eng: "South Korea"},
        {kanji: "国会", kana: "こっかい", eng: "the Diet"}
      ],
      strokes: ["src/assets/lesson6/country/kuni_1.svg", "src/assets/lesson6/country/kuni_2.svg", "src/assets/lesson6/country/kuni_3.svg", "src/assets/lesson6/country/kuni_4.svg", "src/assets/lesson6/country/kuni_5.svg", "src/assets/lesson6/country/kuni_6.svg", "src/assets/lesson6/country/kuni_7.svg", "src/assets/lesson6/country/kuni_8.svg"],
      lesson: "Lesson 6"
    },
    {
      character: "京", meaning: "capital", onyomi: "きょう", kunyomi: "",
      examples: [
        {kanji: "東京", kana: "とうきょう", eng: "Tokyo"},
        {kanji: "京子", kana: "きょうこ", eng: "Kyoko"},
        {kanji: "京都", kana: "きょうと", eng: "Kyoto"},
        {kanji: "上京する", kana: "じょうきょうする", eng: "to go to the capital"}
      ],
      strokes: ["src/assets/lesson7/capital/kyou(to)_1.svg", "src/assets/lesson7/capital/kyou(to)_2.svg", "src/assets/lesson7/capital/kyou(to)_3.svg", "src/assets/lesson7/capital/kyou(to)_4.svg", "src/assets/lesson7/capital/kyou(to)_5.svg", "src/assets/lesson7/capital/kyou(to)_6.svg", "src/assets/lesson7/capital/kyou(to)_7.svg", "src/assets/lesson7/capital/kyou(to)_8.svg"],
      lesson: "Lesson 7"
    },
    {
      character: "子", meaning: "child", onyomi: "し", kunyomi: "こ",
      examples: [
        {kanji: "子ども", kana: "こども", eng: "child"},
        {kanji: "京子", kana: "きょうこ", eng: "Kyoko"},
        {kanji: "女の子", kana: "おんなのこ", eng: "girl"},
        {kanji: "男の子", kana: "おとこのこ", eng: "boy"},
        {kanji: "女子学生", kana: "じょしがくせい", eng: "female student"},
      ],
      strokes: ["src/assets/lesson7/child/shi-ko_1.svg", "src/assets/lesson7/child/shi-ko_2.svg", "src/assets/lesson7/child/shi-ko_3.svg"],
      lesson: "Lesson 7"
    },
    {
      character: "小", meaning: "small", onyomi: "しょう", kunyomi: "ちい",
      examples: [
        {kanji: "小さい", kana: "ちいさい", eng: "small"},
        {kanji: "小学校", kana: "しょうがっこう", eng: "elementary school"},
        {kanji: "小学生", kana: "しょうがくせい", eng: "elementary school student"},
      ],
      strokes: ["src/assets/lesson7/small/chii(sai)_1.svg", "src/assets/lesson7/small/chii(sai)_2.svg", "src/assets/lesson7/small/chii(sai)_3.svg"],
      lesson: "Lesson 7"
    },
    {
      character: "会", meaning: "to meet", onyomi: "かい", kunyomi: "あ",
      examples: [
        {kanji: "会う", kana: "あう", eng: "to meet"},
        {kanji: "会社", kana: "かいしゃ", eng: "company"},
        {kanji: "会社員", kana: "かいしゃいん", eng: "office worker"},
        {kanji: "会議", kana: "かいぎ", eng: "meeting"},
        {kanji: "教会", kana: "きょうかい", eng: "church"}
      ],
      strokes: ["src/assets/lesson7/meet/kai-a(u)_1.svg", "src/assets/lesson7/meet/kai-a(u)_2.svg", "src/assets/lesson7/meet/kai-a(u)_3.svg", "src/assets/lesson7/meet/kai-a(u)_4.svg", "src/assets/lesson7/meet/kai-a(u)_5.svg", "src/assets/lesson7/meet/kai-a(u)_6.svg"],
      lesson: "Lesson 7"
    },
    {
      character: "社", meaning: "company", onyomi: "しゃ じゃ", kunyomi: "",
      examples: [
        {kanji: "会社", kana: "かいしゃ", eng: "company"},
        {kanji: "神社", kana: "じんじゃ", eng: "shrine"},
        {kanji: "社会", kana: "しゃかい", eng: "society"},
        {kanji: "入社", kana: "にゅうしゃ", eng: "entry to a company"}
      ],
      strokes: ["src/assets/lesson7/company/yashiro_1.svg", "src/assets/lesson7/company/yashiro_2.svg", "src/assets/lesson7/company/yashiro_3.svg", "src/assets/lesson7/company/yashiro_4.svg", "src/assets/lesson7/company/yashiro_5.svg", "src/assets/lesson7/company/yashiro_6.svg", "src/assets/lesson7/company/yashiro_7.svg"],
      lesson: "Lesson 7"
    },
    {
      character: "父", meaning: "father", onyomi: "ふ", kunyomi: "ちち　とう",
      examples: [
        {kanji: "父", kana: "ちち", eng: "father"},
        {kanji: "お父さん", kana: "おとうさん", eng: "father"},
        {kanji: "父母", kana: "ふぼ", eng: "father and mother"},
        {kanji: "祖父", kana: "そふ", eng: "grandfather"}
      ],
      strokes: ["src/assets/lesson7/father/fu-chichi_1.svg", "src/assets/lesson7/father/fu-chichi_2.svg", "src/assets/lesson7/father/fu-chichi_3.svg", "src/assets/lesson7/father/fu-chichi_4.svg"],
      lesson: "Lesson 7"
    },
    {
      character: "母", meaning: "mother", onyomi: "ぼ", kunyomi: "はは　かあ",
      examples: [
        {kanji: "母", kana: "はは", eng: "mother"},
        {kanji: "お母さん", kana: "おかあさん", eng: "mother"},
        {kanji: "母語", kana: "ぼご", eng: "mother tongue"},
        {kanji: "祖母", kana: "そぼ", eng: "grandmother"}
      ],
      strokes: ["src/assets/lesson7/mother/haha_1.svg", "src/assets/lesson7/mother/haha_2.svg", "src/assets/lesson7/mother/haha_3.svg", "src/assets/lesson7/mother/haha_4.svg", "src/assets/lesson7/mother/haha_5.svg"],
      lesson: "Lesson 7"
    },
    {
      character: "高", meaning: "high", onyomi: "こう", kunyomi: "たか",
      examples: [
        {kanji: "高い", kana: "たかい", eng: "expensive; high"},
        {kanji: "高校", kana: "こうこう", eng: "high school"},
        {kanji: "高校生", kana: "こうこうせい", eng: "high school student"},
        {kanji: "最高", kana: "さいこう", eng: "the best"}
      ],
      strokes: ["src/assets/lesson7/high/taka(i)_1.svg", "src/assets/lesson7/high/taka(i)_2.svg", "src/assets/lesson7/high/taka(i)_3.svg", "src/assets/lesson7/high/taka(i)_4.svg", "src/assets/lesson7/high/taka(i)_5.svg", "src/assets/lesson7/high/taka(i)_6.svg", "src/assets/lesson7/high/taka(i)_7.svg", "src/assets/lesson7/high/taka(i)_8.svg", "src/assets/lesson7/high/taka(i)_9.svg", "src/assets/lesson7/high/taka(i)_10.svg"],
      lesson: "Lesson 7"
    },
    {
      character: "校", meaning: "school", onyomi: "こう", kunyomi: "",
      examples: [
        {kanji: "学校", kana: "がっこう", eng: "school"},
        {kanji: "高校", kana: "こうこう", eng: "high school"},
        {kanji: "高校生", kana: "こうこうせい", eng: "high school student"},
        {kanji: "中学校", kana: "ちゅうがっこう", eng: "junior high school"}
      ],
      strokes: ["src/assets/lesson7/school/(gak)kou_1.svg", "src/assets/lesson7/school/(gak)kou_2.svg", "src/assets/lesson7/school/(gak)kou_3.svg", "src/assets/lesson7/school/(gak)kou_4.svg", "src/assets/lesson7/school/(gak)kou_5.svg", "src/assets/lesson7/school/(gak)kou_6.svg", "src/assets/lesson7/school/(gak)kou_7.svg", "src/assets/lesson7/school/(gak)kou_8.svg", "src/assets/lesson7/school/(gak)kou_9.svg", "src/assets/lesson7/school/(gak)kou_10.svg"],
      lesson: "Lesson 7"
    },
    {
      character: "毎", meaning: "every", onyomi: "まい", kunyomi: "",
      examples: [
        {kanji: "毎日", kana: "まいにち", eng: "every day"},
        {kanji: "毎週", kana: "まいしゅう", eng: "every week"},
        {kanji: "毎晩", kana: "まいばん", eng: "every night"},
        {kanji: "毎年", kana: "まいねん/まいとし", eng: "every year"}
      ],
      strokes: ["src/assets/lesson7/every/goto_1.svg", "src/assets/lesson7/every/goto_2.svg", "src/assets/lesson7/every/goto_3.svg", "src/assets/lesson7/every/goto_4.svg", "src/assets/lesson7/every/goto_5.svg", "src/assets/lesson7/every/goto_6.svg"],
      lesson: "Lesson 7"
    },
    {
      character: "語", meaning: "word", onyomi: "ご", kunyomi: "",
      examples: [
        {kanji: "日本語", kana: "にほんご", eng: "Japanese language"},
        {kanji: "英語", kana: "えいご", eng: "English language"},
        {kanji: "敬語", kana: "けいご", eng: "honorific expressions"}
      ],
      strokes: ["src/assets/lesson7/word/kata(ru)_1.svg", "src/assets/lesson7/word/kata(ru)_2.svg", "src/assets/lesson7/word/kata(ru)_3.svg", "src/assets/lesson7/word/kata(ru)_4.svg", "src/assets/lesson7/word/kata(ru)_5.svg", "src/assets/lesson7/word/kata(ru)_6.svg", "src/assets/lesson7/word/kata(ru)_7.svg", "src/assets/lesson7/word/kata(ru)_8.svg", "src/assets/lesson7/word/kata(ru)_9.svg", "src/assets/lesson7/word/kata(ru)_10.svg", "src/assets/lesson7/word/kata(ru)_11.svg", "src/assets/lesson7/word/kata(ru)_12.svg", "src/assets/lesson7/word/kata(ru)_13.svg", "src/assets/lesson7/word/kata(ru)_14.svg"],
      lesson: "Lesson 7"
    },
    {
      character: "文", meaning: "sentence", onyomi: "ぶん", kunyomi: "",
      examples: [
        {kanji: "文学", kana: "ぶんがく", eng: "literature"},
        {kanji: "作文", kana: "さくぶん", eng: "composition"},
        {kanji: "文字", kana: "もじ", eng: "letter; character"},
        {kanji: "文化", kana: "ぶんか", eng: "culture"},
        {kanji: "文法", kana: "ぶんぽう", eng: "grammar"}
      ],
      strokes: ["src/assets/lesson7/sentence/bun-fumi_1.svg", "src/assets/lesson7/sentence/bun-fumi_2.svg", "src/assets/lesson7/sentence/bun-fumi_3.svg", "src/assets/lesson7/sentence/bun-fumi_4.svg"],
      lesson: "Lesson 7"
    },
    {
      character: "帰", meaning: "to return", onyomi: "き", kunyomi: "かえ",
      examples: [
        {kanji: "帰る", kana: "かえる", eng: "to return"},
        {kanji: "帰国", kana: "きこく", eng: "going home"},
        {kanji: "帰宅", kana: "きたく", eng: "returning home"},
        {kanji: "帰り", kana: "かえり", eng: "return"}
      ],
      strokes: ["src/assets/lesson7/return/ki-kae(ru)_1.svg", "src/assets/lesson7/return/ki-kae(ru)_2.svg", "src/assets/lesson7/return/ki-kae(ru)_3.svg", "src/assets/lesson7/return/ki-kae(ru)_4.svg", "src/assets/lesson7/return/ki-kae(ru)_5.svg", "src/assets/lesson7/return/ki-kae(ru)_6.svg", "src/assets/lesson7/return/ki-kae(ru)_7.svg", "src/assets/lesson7/return/ki-kae(ru)_8.svg", "src/assets/lesson7/return/ki-kae(ru)_9.svg", "src/assets/lesson7/return/ki-kae(ru)_10.svg"],
      lesson: "Lesson 7"
    },
    {
      character: "入", meaning: "to enter", onyomi: "にゅう", kunyomi: "はい　い　いり",
      examples: [
        {kanji: "入る", kana: "はいる", eng: "to enter"},
        {kanji: "入り口", kana: "いりぐち", eng: "entrance"},
        {kanji: "入れる", kana: "いれる", eng: "to put something in"},
        {kanji: "輸入", kana: "ゆにゅう", eng: "import"}
      ],
      strokes: ["src/assets/lesson7/enter/hai(ru)_1.svg", "src/assets/lesson7/enter/hai(ru)_2.svg"],
      lesson: "Lesson 7"
    },
    {
      character: "員", meaning: "member", onyomi: "いん", kunyomi: "",
      examples: [
        {kanji: "会社員", kana: "かいしゃいん", eng: "office worker"},
        {kanji: "店員", kana: "てんいん", eng: "store clerk"},
        {kanji: "会員", kana: "かいいん", eng: "member"},
        {kanji: "駅員", kana: "えきいん", eng: "station attendant"}
      ],
      strokes: ["src/assets/lesson8/member/(ginkou)in_1.svg", "src/assets/lesson8/member/(ginkou)in_2.svg", "src/assets/lesson8/member/(ginkou)in_3.svg", "src/assets/lesson8/member/(ginkou)in_4.svg", "src/assets/lesson8/member/(ginkou)in_5.svg", "src/assets/lesson8/member/(ginkou)in_6.svg", "src/assets/lesson8/member/(ginkou)in_7.svg", "src/assets/lesson8/member/(ginkou)in_8.svg", "src/assets/lesson8/member/(ginkou)in_9.svg", "src/assets/lesson8/member/(ginkou)in_10.svg"],
      lesson: "Lesson 8"
    },
    {
      character: "新", meaning: "new", onyomi: "しん", kunyomi: "あたら",
      examples: [
        {kanji: "新しい", kana: "あたらしい", eng: "new"},
        {kanji: "新聞", kana: "しんぶん", eng: "newspaper"},
        {kanji: "新幹線", kana: "しんかんせん", eng: "Bullet Train"},
        {kanji: "新鮮な", kana: "しんせんな", eng: "fresh"}
      ],
      strokes: ["src/assets/lesson8/new/atara(shii)_1.svg", "src/assets/lesson8/new/atara(shii)_2.svg", "src/assets/lesson8/new/atara(shii)_3.svg", "src/assets/lesson8/new/atara(shii)_4.svg", "src/assets/lesson8/new/atara(shii)_5.svg", "src/assets/lesson8/new/atara(shii)_6.svg", "src/assets/lesson8/new/atara(shii)_7.svg", "src/assets/lesson8/new/atara(shii)_8.svg", "src/assets/lesson8/new/atara(shii)_9.svg", "src/assets/lesson8/new/atara(shii)_10.svg", "src/assets/lesson8/new/atara(shii)_11.svg", "src/assets/lesson8/new/atara(shii)_12.svg", "src/assets/lesson8/new/atara(shii)_13.svg"],
      lesson: "Lesson 8"
    },
    {
      character: "聞", meaning: "to listen", onyomi: "ぶん", kunyomi: "き",
      examples: [
        {kanji: "聞く", kana: "きく", eng: "to listen"},
        {kanji: "新聞", kana: "しんぶん", eng: "newspaper"},
        {kanji: "聞こえる", kana: "きこえる", eng: "can be heard"}
      ],
      strokes: ["src/assets/lesson8/listen/bun-ki(ku)_1.svg", "src/assets/lesson8/listen/bun-ki(ku)_2.svg", "src/assets/lesson8/listen/bun-ki(ku)_3.svg", "src/assets/lesson8/listen/bun-ki(ku)_4.svg", "src/assets/lesson8/listen/bun-ki(ku)_5.svg", "src/assets/lesson8/listen/bun-ki(ku)_6.svg", "src/assets/lesson8/listen/bun-ki(ku)_7.svg", "src/assets/lesson8/listen/bun-ki(ku)_8.svg", "src/assets/lesson8/listen/bun-ki(ku)_9.svg", "src/assets/lesson8/listen/bun-ki(ku)_10.svg", "src/assets/lesson8/listen/bun-ki(ku)_11.svg", "src/assets/lesson8/listen/bun-ki(ku)_12.svg", "src/assets/lesson8/listen/bun-ki(ku)_13.svg", "src/assets/lesson8/listen/bun-ki(ku)_14.svg"],
      lesson: "Lesson 8"
    },
    {
      character: "作", meaning: "to make", onyomi: "さく", kunyomi: "つく",
      examples: [
        {kanji: "作る", kana: "つくる", eng: "to make"},
        {kanji: "作文", kana: "さくぶん", eng: "composition"},
        {kanji: "作品", kana: "さくひん", eng: "artistic piece"},
        {kanji: "作者", kana: "さくしゃ", eng: "author"}
      ],
      strokes: ["src/assets/lesson8/make/saku-tsuku(ru)_1.svg", "src/assets/lesson8/make/saku-tsuku(ru)_2.svg", "src/assets/lesson8/make/saku-tsuku(ru)_3.svg", "src/assets/lesson8/make/saku-tsuku(ru)_4.svg", "src/assets/lesson8/make/saku-tsuku(ru)_5.svg", "src/assets/lesson8/make/saku-tsuku(ru)_6.svg", "src/assets/lesson8/make/saku-tsuku(ru)_7.svg"],
      lesson: "Lesson 8"
    },
    {
      character: "仕", meaning: "to serve", onyomi: "し", kunyomi: "つか",
      examples: [
        {kanji: "仕事", kana: "しごと", eng: "job"},
        {kanji: "仕返し", kana: "しかえし", eng: "revenge"},
        {kanji: "仕える", kana: "つかえる", eng: "to serve; to work under"}
      ],
      strokes: ["src/assets/lesson8/serve/shi(goto)_1.svg", "src/assets/lesson8/serve/shi(goto)_2.svg", "src/assets/lesson8/serve/shi(goto)_3.svg", "src/assets/lesson8/serve/shi(goto)_4.svg", "src/assets/lesson8/serve/shi(goto)_5.svg"],
      lesson: "Lesson 8"
    },
    {
      character: "事", meaning: "thing", onyomi: "じ", kunyomi: "ごと こと",
      examples: [
        {kanji: "仕事", kana: "しごと", eng: "job"},
        {kanji: "事", kana: "こと", eng: "thing"},
        {kanji: "火事", kana: "かじ", eng: "fire"},
        {kanji: "食事", kana: "しょくじ", eng: "meal"},
        {kanji: "返事", kana: "へんじ", eng: "reply"}
      ],
      strokes: ["src/assets/lesson8/thing/ji-koto_1.svg", "src/assets/lesson8/thing/ji-koto_2.svg", "src/assets/lesson8/thing/ji-koto_3.svg", "src/assets/lesson8/thing/ji-koto_4.svg", "src/assets/lesson8/thing/ji-koto_5.svg", "src/assets/lesson8/thing/ji-koto_6.svg", "src/assets/lesson8/thing/ji-koto_7.svg", "src/assets/lesson8/thing/ji-koto_8.svg"],
      lesson: "Lesson 8"
    },
    {
      character: "電", meaning: "electricity", onyomi: "でん", kunyomi: "",
      examples: [
        {kanji: "電車", kana: "でんしゃ", eng: "train"},
        {kanji: "電気", kana: "でんき", eng: "electricity; light"},
        {kanji: "電話", kana: "でんわ", eng: "telephone"},
        {kanji: "電池", kana: "でんち", eng: "battery"},
        {kanji: "電子レンジ", kana: "でんしレンジ", eng: "microwave oven"}
      ],
      strokes: ["src/assets/lesson8/electricity/den(wa)_1.svg", "src/assets/lesson8/electricity/den(wa)_2.svg", "src/assets/lesson8/electricity/den(wa)_3.svg", "src/assets/lesson8/electricity/den(wa)_4.svg", "src/assets/lesson8/electricity/den(wa)_5.svg", "src/assets/lesson8/electricity/den(wa)_6.svg", "src/assets/lesson8/electricity/den(wa)_7.svg", "src/assets/lesson8/electricity/den(wa)_8.svg", "src/assets/lesson8/electricity/den(wa)_9.svg", "src/assets/lesson8/electricity/den(wa)_10.svg", "src/assets/lesson8/electricity/den(wa)_11.svg", "src/assets/lesson8/electricity/den(wa)_12.svg", "src/assets/lesson8/electricity/den(wa)_13.svg"],
      lesson: "Lesson 8"
    },
    {
      character: "車", meaning: "car", onyomi: "しゃ", kunyomi: "くるま",
      examples: [
        {kanji: "車", kana: "くるま", eng: "car"},
        {kanji: "電車", kana: "でんしゃ", eng: "train"},
        {kanji: "自転車", kana: "じてんしゃ", eng: "bicycle"},
        {kanji: "車いす", kana: "くるまいす", eng: "wheelchair"},
        {kanji: "駐車場", kana: "ちゅうしゃじょう", eng: "parking lot"}
      ],
      strokes: ["src/assets/lesson8/car/kuruma_1.svg", "src/assets/lesson8/car/kuruma_2.svg", "src/assets/lesson8/car/kuruma_3.svg", "src/assets/lesson8/car/kuruma_4.svg", "src/assets/lesson8/car/kuruma_5.svg", "src/assets/lesson8/car/kuruma_6.svg", "src/assets/lesson8/car/kuruma_7.svg"],
      lesson: "Lesson 8"
    },
    {
      character: "休", meaning: "to rest", onyomi: "きゅう", kunyomi: "やす",
      examples: [
        {kanji: "休む", kana: "やすむ", eng: "to be absent; to rest"},
        {kanji: "休み", kana: "やすみ", eng: "holiday; absence"},
        {kanji: "休日", kana: "きゅうじつ", eng: "holiday"}
      ],
      strokes: ["src/assets/lesson8/rest/yasu(mi)_1.svg", "src/assets/lesson8/rest/yasu(mi)_2.svg", "src/assets/lesson8/rest/yasu(mi)_3.svg","src/assets/lesson8/rest/yasu(mi)_4.svg","src/assets/lesson8/rest/yasu(mi)_5.svg","src/assets/lesson8/rest/yasu(mi)_6.svg"],
      lesson: "Lesson 8"
    },
    {
      character: "言", meaning: "to say", onyomi: "げん", kunyomi: "い こと",
      examples: [
        {kanji: "言う", kana: "いう", eng: "to say"},
        {kanji: "言語学", kana: "げんごがく", eng: "linguistics"},
        {kanji: "方言", kana: "ほうげん", eng: "dialect"},
        {kanji: "言葉", kana: "ことば", eng: "word; language"}
      ],
      strokes: ["src/assets/lesson8/say/gen-i(u)_1.svg", "src/assets/lesson8/say/gen-i(u)_2.svg", "src/assets/lesson8/say/gen-i(u)_3.svg", "src/assets/lesson8/say/gen-i(u)_4.svg", "src/assets/lesson8/say/gen-i(u)_5.svg", "src/assets/lesson8/say/gen-i(u)_6.svg", "src/assets/lesson8/say/gen-i(u)_7.svg"],
      lesson: "Lesson 8"
    },
    {
      character: "読", meaning: "to read", onyomi: "どく", kunyomi: "よ",
      examples: [
        {kanji: "読む", kana: "よむ", eng: "to read"},
        {kanji: "読書", kana: "どくしょ", eng: "reading books"},
        {kanji: "読み物", kana: "よみもの", eng: "reading matter"}
      ],
      strokes: ["src/assets/lesson8/read/yo(mu)_1.svg", "src/assets/lesson8/read/yo(mu)_2.svg", "src/assets/lesson8/read/yo(mu)_3.svg", "src/assets/lesson8/read/yo(mu)_4.svg", "src/assets/lesson8/read/yo(mu)_5.svg", "src/assets/lesson8/read/yo(mu)_6.svg", "src/assets/lesson8/read/yo(mu)_7.svg", "src/assets/lesson8/read/yo(mu)_8.svg", "src/assets/lesson8/read/yo(mu)_9.svg", "src/assets/lesson8/read/yo(mu)_10.svg", "src/assets/lesson8/read/yo(mu)_11.svg", "src/assets/lesson8/read/yo(mu)_12.svg", "src/assets/lesson8/read/yo(mu)_13.svg", "src/assets/lesson8/read/yo(mu)_14.svg"],
      lesson: "Lesson 8"
    },
    {
      character: "思", meaning: "to think", onyomi: "し", kunyomi: "おも",
      examples: [
        {kanji: "思う", kana: "おもう", eng: "to think"},
        {kanji: "不思議な", kana: "ふしぎな", eng: "mysterious"},
        {kanji: "思い出す", kana: "おもいだす", eng: "to recall; to remember"}
      ],
      strokes: ["src/assets/lesson8/think/shi-omo(u)_1.svg", "src/assets/lesson8/think/shi-omo(u)_2.svg", "src/assets/lesson8/think/shi-omo(u)_3.svg", "src/assets/lesson8/think/shi-omo(u)_4.svg", "src/assets/lesson8/think/shi-omo(u)_5.svg", "src/assets/lesson8/think/shi-omo(u)_6.svg", "src/assets/lesson8/think/shi-omo(u)_7.svg", "src/assets/lesson8/think/shi-omo(u)_8.svg", "src/assets/lesson8/think/shi-omo(u)_9.svg"],
      lesson: "Lesson 8"
    },
    {
      character: "次", meaning: "next", onyomi: "じ", kunyomi: "つぎ",
      examples: [
        {kanji: "次", kana: "つぎ", eng: "next"},
        {kanji: "次女", kana: "じじょ", eng: "second daughter"},
        {kanji: "目次", kana: "もくじ", eng: "table of contents"},
        {kanji: "次回", kana: "じかい", eng: "next time"}
      ],
      strokes: ["src/assets/lesson8/next/tsugi_1.svg", "src/assets/lesson8/next/tsugi_2.svg", "src/assets/lesson8/next/tsugi_3.svg", "src/assets/lesson8/next/tsugi_4.svg", "src/assets/lesson8/next/tsugi_5.svg", "src/assets/lesson8/next/tsugi_6.svg"],
      lesson: "Lesson 8"
    },
    {
      character: "何", meaning: "what", onyomi: "なに なん", kunyomi: "",
      examples: [
        {kanji: "何", kana: "なに", eng: "what"},
        {kanji: "何時", kana: "なんじ", eng: "what time"},
        {kanji: "何人", kana: "なんにん", eng: "how many people"},
        {kanji: "何か", kana: "なにか", eng: "something"}
      ],
      strokes: ["src/assets/lesson8/what/nani_1.svg", "src/assets/lesson8/what/nani_2.svg", "src/assets/lesson8/what/nani_3.svg", "src/assets/lesson8/what/nani_4.svg", "src/assets/lesson8/what/nani_5.svg", "src/assets/lesson8/what/nani_6.svg", "src/assets/lesson8/what/nani_7.svg"],
      lesson: "Lesson 8"
    },
    {
      character: "午", meaning: "noon", onyomi: "ご", kunyomi: "　",
      examples: [
        {kanji: "午前", kana: "ごぜん", eng: "A.M."},
        {kanji: "午後", kana: "ごご", eng: "P.M.; in the afternoon"},
        {kanji: "午前中", kana: "ごぜんちゅう", eng: "in the morning"},
        {kanji: "正午", kana: "しょうご", eng: "noon"}
      ],
      strokes: ["src/assets/lesson9/noon/(shou)go_1.svg", "src/assets/lesson9/noon/(shou)go_2.svg", "src/assets/lesson9/noon/(shou)go_3.svg", "src/assets/lesson9/noon/(shou)go_4.svg"],
      lesson: "Lesson 9"
    },
    {
      character: "後", meaning: "after", onyomi: "ご", kunyomi: "あと　うし",
      examples: [
        {kanji: "午後", kana: "ごご", eng: "P.M.; in the afternoon"},
        {kanji: "〜の後", kana: "のあと", eng: "after..."},
        {kanji: "後で", kana: "あとで", eng: "later"},
        {kanji: "後ろ", kana: "うしろ", eng: "back; behind"},
        {kanji: "最後に", kana: "さいごに", eng: "lastly"}
      ],
      strokes: ["src/assets/lesson9/after/ushi(ro)_1.svg", "src/assets/lesson9/after/ushi(ro)_2.svg", "src/assets/lesson9/after/ushi(ro)_3.svg", "src/assets/lesson9/after/ushi(ro)_4.svg", "src/assets/lesson9/after/ushi(ro)_5.svg", "src/assets/lesson9/after/ushi(ro)_6.svg", "src/assets/lesson9/after/ushi(ro)_7.svg", "src/assets/lesson9/after/ushi(ro)_8.svg", "src/assets/lesson9/after/ushi(ro)_9.svg"],
      lesson: "Lesson 9"
    },
    {
      character: "前", meaning: "front", onyomi: "ぜん", kunyomi: "まえ",
      examples: [
        {kanji: "前", kana: "まえ", eng: "before; front"},
        {kanji: "午前", kana: "ごぜん", eng: "A.M."},
        {kanji: "名前", kana: "なまえ", eng: "name"},
        {kanji: "前売り", kana: "まえうり", eng: "advance sale"},
      ],
      strokes: ["src/assets/lesson9/front/mae_1.svg", "src/assets/lesson9/front/mae_2.svg", "src/assets/lesson9/front/mae_3.svg", "src/assets/lesson9/front/mae_4.svg", "src/assets/lesson9/front/mae_5.svg", "src/assets/lesson9/front/mae_6.svg", "src/assets/lesson9/front/mae_7.svg", "src/assets/lesson9/front/mae_8.svg", "src/assets/lesson9/front/mae_9.svg"],
      lesson: "Lesson 9"
    },
    {
      character: "名", meaning: "name", onyomi: "めい　みょう", kunyomi: "な",
      examples: [
        {kanji: "名前", kana: "なまえ", eng: "name"},
        {kanji: "有名な", kana: "ゆうめいな", eng: "famous"},
        {kanji: "名刺", kana: "めいし", eng: "name card"},
        {kanji: "氏名", kana: "しめい", eng: "full name"},
        {kanji: "名字", kana: "みょうじ", eng: "family name"}
      ],
      strokes: [],
      lesson: "Lesson 9"
    },
    {
      character: "白", meaning: "white", onyomi: "はく", kunyomi: "",
      examples: [
        {kanji: "白い", kana: "しろい", eng: "white"},
        {kanji: "白紙", kana: "はくし", eng: "blank sheet"},
        {kanji: "白", kana: "しろ", eng: "white color"},
        {kanji: "白鳥", kana: "はくちょう", eng: "swan"},
      ],
      strokes: ["src/assets/lesson9/white/shiro(i)_1.svg", "src/assets/lesson9/white/shiro(i)_2.svg", "src/assets/lesson9/white/shiro(i)_3.svg", "src/assets/lesson9/white/shiro(i)_4.svg", "src/assets/lesson9/white/shiro(i)_5.svg"],
      lesson: "Lesson 9"
    },
    {
      character: "雨", meaning: "rain", onyomi: "う", kunyomi: "あめ",
      examples: [
        {kanji: "雨", kana: "あめ", eng: "rain"},
        {kanji: "雨期", kana: "うき", eng: "rainy season"},
        {kanji: "梅雨", kana: "つゆ", eng: "rainy season"},
        {kanji: "大雨", kana: "おおあめ", eng: "heavy rain"}
      ],
      strokes: ["src/assets/lesson9/rain/u-ame_1.svg", "src/assets/lesson9/rain/u-ame_2.svg", "src/assets/lesson9/rain/u-ame_3.svg", "src/assets/lesson9/rain/u-ame_4.svg", "src/assets/lesson9/rain/u-ame_5.svg", "src/assets/lesson9/rain/u-ame_6.svg", "src/assets/lesson9/rain/u-ame_7.svg", "src/assets/lesson9/rain/u-ame_8.svg"],
      lesson: "Lesson 9"
    },
    {
      character: "書", meaning: "to write", onyomi: "しょ", kunyomi: "か",
      examples: [
        {kanji: "書く", kana: "かく", eng: "to write"},
        {kanji: "辞書", kana: "じしょ", eng: "dictionary"},
        {kanji: "教科書", kana: "きょうかしょ", eng: "textbook"},
        {kanji: "図書館", kana: "としょかん", eng: "library"}
      ],
      strokes: ["src/assets/lesson9/write/sho-ka(ku)_1.svg", "src/assets/lesson9/write/sho-ka(ku)_2.svg", "src/assets/lesson9/write/sho-ka(ku)_3.svg", "src/assets/lesson9/write/sho-ka(ku)_4.svg", "src/assets/lesson9/write/sho-ka(ku)_5.svg", "src/assets/lesson9/write/sho-ka(ku)_6.svg", "src/assets/lesson9/write/sho-ka(ku)_7.svg", "src/assets/lesson9/write/sho-ka(ku)_8.svg", "src/assets/lesson9/write/sho-ka(ku)_9.svg", "src/assets/lesson9/write/sho-ka(ku)_10.svg"],
      lesson: "Lesson 9"
    },
    {
      character: "友", meaning: "friend", onyomi: "ゆう", kunyomi: "とも",
      examples: [
        {kanji: "友だち", kana: "ともだち", eng: "friend"},
        {kanji: "親友", kana: "しんゆう", eng: "best friend"},
        {kanji: "友人", kana: "ゆうじん", eng: "friend"},
        {kanji: "友情", kana: "ゆうじょう", eng: "friendship"}
      ],
      strokes: ["src/assets/lesson9/friend/yuu-tomo_1.svg", "src/assets/lesson9/friend/yuu-tomo_2.svg", "src/assets/lesson9/friend/yuu-tomo_3.svg", "src/assets/lesson9/friend/yuu-tomo_4.svg"],
      lesson: "Lesson 9"
    },
    {
      character: "間", meaning: "between", onyomi: "かん　げん", kunyomi: "あいだ",
      examples: [
        {kanji: "時間", kana: "じかん", eng: "time"},
        {kanji: "二時間", kana: "にじかん", eng: "two hours"},
        {kanji: "間", kana: "あいだ", eng: "between"},
        {kanji: "人間", kana: "にんげん", eng: "human being"},
        {kanji: "一週間", kana: "いっしゅうかん", eng: "one week"}
      ],
      strokes: ["src/assets/lesson9/between/aida_1.svg", "src/assets/lesson9/between/aida_2.svg", "src/assets/lesson9/between/aida_3.svg", "src/assets/lesson9/between/aida_4.svg", "src/assets/lesson9/between/aida_5.svg", "src/assets/lesson9/between/aida_6.svg", "src/assets/lesson9/between/aida_7.svg", "src/assets/lesson9/between/aida_8.svg", "src/assets/lesson9/between/aida_9.svg", "src/assets/lesson9/between/aida_10.svg", "src/assets/lesson9/between/aida_11.svg", "src/assets/lesson9/between/aida_12.svg"],
      lesson: "Lesson 9"
    },
    {
      character: "家", meaning: "house", onyomi: "か", kunyomi: "いえ",
      examples: [
        {kanji: "家", kana: "いえ", eng: "house"},
        {kanji: "家族", kana: "かぞく", eng: "family"},
        {kanji: "家", kana: "うち", eng: "house; home"},
        {kanji: "家内", kana: "かない", eng: "my wife"},
        {kanji: "作家", kana: "さっか", eng: "author"}
      ],
      strokes: ["src/assets/lesson9/house/ie_1.svg", "src/assets/lesson9/house/ie_2.svg", "src/assets/lesson9/house/ie_3.svg", "src/assets/lesson9/house/ie_4.svg", "src/assets/lesson9/house/ie_5.svg", "src/assets/lesson9/house/ie_6.svg", "src/assets/lesson9/house/ie_7.svg", "src/assets/lesson9/house/ie_8.svg", "src/assets/lesson9/house/ie_9.svg", "src/assets/lesson9/house/ie_10.svg"],
      lesson: "Lesson 9"
    },
    {
      character: "話", meaning: "to speak", onyomi: "わ", kunyomi: "はな　はなし",
      examples: [
        {kanji: "話す", kana: "はなす", eng: "to speak"},
        {kanji: "話", kana: "はなし", eng: "talk; story"},
        {kanji: "電話", kana: "でんわ", eng: "telephone"},
        {kanji: "会話", kana: "かいわ", eng: "conversation"}
      ],
      strokes: ["src/assets/lesson9/speak/wa-hana(su)_1.svg", "src/assets/lesson9/speak/wa-hana(su)_2.svg", "src/assets/lesson9/speak/wa-hana(su)_3.svg", "src/assets/lesson9/speak/wa-hana(su)_4.svg", "src/assets/lesson9/speak/wa-hana(su)_5.svg", "src/assets/lesson9/speak/wa-hana(su)_6.svg", "src/assets/lesson9/speak/wa-hana(su)_7.svg", "src/assets/lesson9/speak/wa-hana(su)_8.svg", "src/assets/lesson9/speak/wa-hana(su)_9.svg", "src/assets/lesson9/speak/wa-hana(su)_10.svg", "src/assets/lesson9/speak/wa-hana(su)_11.svg", "src/assets/lesson9/speak/wa-hana(su)_12.svg", "src/assets/lesson9/speak/wa-hana(su)_13.svg"],
      lesson: "Lesson 9"
    },
    {
      character: "少", meaning: "little", onyomi: "しょう", kunyomi: "すこ　すく",
      examples: [
        {kanji: "少し", kana: "すこし", eng: "little"},
        {kanji: "少ない", kana: "すくない", eng: "few"},
        {kanji: "少々", kana: "しょうしょう", eng: "a little"},
        {kanji: "少女", kana: "しょうじょ", eng: "girl"},
        {kanji: "少年", kana: "しょうねん", eng: "boy"}
      ],
      strokes: ["src/assets/lesson9/little/suko(shi)_1.svg", "src/assets/lesson9/little/suko(shi)_2.svg", "src/assets/lesson9/little/suko(shi)_3.svg", "src/assets/lesson9/little/suko(shi)_4.svg"],
      lesson: "Lesson 9"
    },
    {
      character: "古", meaning: "old", onyomi: "こ", kunyomi: "ふる",
      examples: [
        {kanji: "古い", kana: "ふるい", eng: "old (for things)"},
        {kanji: "中古", kana: "ちゅうこ", eng: "secondhand"},
        {kanji: "古代", kana: "こだい", eng: "ancient time"}
      ],
      strokes: ["src/assets/lesson9/old/furu(i)_1.svg", "src/assets/lesson9/old/furu(i)_2.svg", "src/assets/lesson9/old/furu(i)_3.svg", "src/assets/lesson9/old/furu(i)_4.svg", "src/assets/lesson9/old/furu(i)_5.svg"],
      lesson: "Lesson 9"
    },
    {
      character: "知", meaning: "to know", onyomi: "ち", kunyomi: "し",
      examples: [
        {kanji: "知る", kana: "しる", eng: "to know"},
        {kanji: "知人", kana: "ちじん", eng: "aquaintance"},
        {kanji: "知り合い", kana: "しりあい", eng: "acquaintance"},
      ],
      strokes: ["src/assets/lesson9/know/shi(ru)_1.svg", "src/assets/lesson9/know/shi(ru)_2.svg", "src/assets/lesson9/know/shi(ru)_3.svg", "src/assets/lesson9/know/shi(ru)_4.svg", "src/assets/lesson9/know/shi(ru)_5.svg", "src/assets/lesson9/know/shi(ru)_6.svg", "src/assets/lesson9/know/shi(ru)_7.svg", "src/assets/lesson9/know/shi(ru)_8.svg"],
      lesson: "Lesson 9"
    },
    {
      character: "来", meaning: "to come", onyomi: "らい", kunyomi: "く　き　こ",
      examples: [
        {kanji: "来る", kana: "くる", eng: "to come"},
        {kanji: "来ます", kana: "きます", eng: "to come"},
        {kanji: "来ない", kana: "こない", eng: "not to come"},
        {kanji: "来週", kana: "らいしゅう", eng: "next week"},
        {kanji: "来日", kana: "らいにち", eng: "visit to Japan"},
      ],
      strokes: ["src/assets/lesson9/come/rai-ku(ru)_1.svg", "src/assets/lesson9/come/rai-ku(ru)_2.svg", "src/assets/lesson9/come/rai-ku(ru)_3.svg", "src/assets/lesson9/come/rai-ku(ru)_4.svg", "src/assets/lesson9/come/rai-ku(ru)_5.svg", "src/assets/lesson9/come/rai-ku(ru)_6.svg", "src/assets/lesson9/come/rai-ku(ru)_7.svg"],
      lesson: "Lesson 9"
    },
    {
      character: "住", meaning: "to live", onyomi: "じゅう", kunyomi: "す",
      examples: [
        {kanji: "住む", kana: "すむ", eng: "to live"},
        {kanji: "住所", kana: "じゅうしょ", eng: "address"},
        {kanji: "住所", kana: "じゅうしょ", eng: "to immigrate"}
      ],
      strokes: ["src/assets/lesson10/live/juu-su(mu)_1.svg", "src/assets/lesson10/live/juu-su(mu)_2.svg", "src/assets/lesson10/live/juu-su(mu)_3.svg", "src/assets/lesson10/live/juu-su(mu)_4.svg", "src/assets/lesson10/live/juu-su(mu)_5.svg", "src/assets/lesson10/live/juu-su(mu)_6.svg", "src/assets/lesson10/live/juu-su(mu)_7.svg"],
      lesson: "Lesson 10"
    },
    {
      character: "正", meaning: "right; correct", onyomi:"しょう　せい" , kunyomi:"ただ",
      examples:[
        {kanji:"お正月" ,kana:"おしょうがつ" ,eng:"New Year"},
        {kanji:"正しい" ,kana:"ただしい" ,eng:"correct"},
        {kanji:"正午" ,kana:"しょうご" ,eng:"noon"},
        {kanji:"正解" ,kana:"せいかい" ,eng:"correct answer"}
      ],
      strokes: ["src/assets/lesson10/right/tada(shii)_1.svg", "src/assets/lesson10/right/tada(shii)_2.svg", "src/assets/lesson10/right/tada(shii)_3.svg", "src/assets/lesson10/right/tada(shii)_4.svg", "src/assets/lesson10/right/tada(shii)_5.svg"],
      lesson: "Lesson 10"
    },
    {
      character : '年', meaning : 'year', onyomi : 'ねん', kunyomi : 'とし',
      examples : [
        { kanji : '三年生', kana : 'さんねんせい', eng : 'third-year student'},  
        { kanji : '来年', kana : 'らいねん', eng : 'next year'},
        { kanji : '今年', kana : 'ことし', eng : 'this year'},
        { kanji : '年', kana : 'とし', eng : 'year'},  
       ],
       strokes: ["src/assets/lesson10/year/nen-toshi_1.svg", "src/assets/lesson10/year/nen-toshi_2.svg", "src/assets/lesson10/year/nen-toshi_3.svg", "src/assets/lesson10/year/nen-toshi_4.svg", "src/assets/lesson10/year/nen-toshi_5.svg", "src/assets/lesson10/year/nen-toshi_6.svg"],
       lesson: "Lesson 10"
    },
    {
       character:'売' ,meaning:'to sell' ,onyomi:'ばい' ,kunyomi:'う',
       examples:[
           { kanji:'売る' ,kana:'うる' ,eng:'to sell'},
           { kanji:'売店' ,kana:'ばいてん' ,eng:'stand; stall'},
           { kanji:'自動販売機' ,kana:'じどうはんばいき' ,eng:'vending machine'},
       ],
       strokes: ["src/assets/lesson10/sell/bai-u(ru)_1.svg", "src/assets/lesson10/sell/bai-u(ru)_2.svg", "src/assets/lesson10/sell/bai-u(ru)_3.svg", "src/assets/lesson10/sell/bai-u(ru)_4.svg", "src/assets/lesson10/sell/bai-u(ru)_5.svg", "src/assets/lesson10/sell/bai-u(ru)_6.svg", "src/assets/lesson10/sell/bai-u(ru)_7.svg"],
       lesson: "Lesson 10"
    },
    {
       character:'買' ,meaning:'to buy' ,onyomi:'ばい' ,kunyomi:'か',
       examples:[
           { kanji:'買う' ,kana:'かう' ,eng:'to buy'},
           { kanji:'買い物' ,kana:'かいもの' ,eng:'shopping'},
           { kanji:'売買' ,kana:'ばいばい' ,eng:'selling and buying'}
       ],
       strokes: ["src/assets/lesson10/buy/bai-ka(u)_1.svg", "src/assets/lesson10/buy/bai-ka(u)_2.svg", "src/assets/lesson10/buy/bai-ka(u)_3.svg", "src/assets/lesson10/buy/bai-ka(u)_4.svg", "src/assets/lesson10/buy/bai-ka(u)_5.svg", "src/assets/lesson10/buy/bai-ka(u)_6.svg", "src/assets/lesson10/buy/bai-ka(u)_7.svg", "src/assets/lesson10/buy/bai-ka(u)_8.svg", "src/assets/lesson10/buy/bai-ka(u)_9.svg", "src/assets/lesson10/buy/bai-ka(u)_10.svg", "src/assets/lesson10/buy/bai-ka(u)_11.svg", "src/assets/lesson10/buy/bai-ka(u)_12.svg"],
       lesson: "Lesson 10"
    },
    {
      character: "町", meaning: "town", onyomi: "ちょう", kunyomi: "まち",
      examples: [
        {kanji: "町", kana: "まち", eng: "town"},
        {kanji: "北山町", kana: "きたやまちょう", eng: "Kitayama Town"},
        {kanji: "町長", kana: "ちょうちょう", eng: "mayor of a town"}
      ],
      strokes: ["src/assets/lesson10/town/chou-machi_1.svg", "src/assets/lesson10/town/chou-machi_2.svg", "src/assets/lesson10/town/chou-machi_3.svg", "src/assets/lesson10/town/chou-machi_4.svg", "src/assets/lesson10/town/chou-machi_5.svg", "src/assets/lesson10/town/chou-machi_6.svg", "src/assets/lesson10/town/chou-machi_7.svg"],
      lesson: "Lesson 10"
    },
    {
      character: "長", meaning: "long", onyomi: "ちょう", kunyomi: "なが",
      examples: [
        {kanji: "長い", kana: "ながい", eng: "long"},
        {kanji: "長男", kana: "ちょうなん", eng: "the eldest son"},
        {kanji: "社長", kana: "しゃちょう", eng: "company president"}
      ],
      strokes: ["src/assets/lesson10/long/chou-naga(i)_1.svg", "src/assets/lesson10/long/chou-naga(i)_2.svg", "src/assets/lesson10/long/chou-naga(i)_3.svg", "src/assets/lesson10/long/chou-naga(i)_4.svg", "src/assets/lesson10/long/chou-naga(i)_5.svg", "src/assets/lesson10/long/chou-naga(i)_6.svg", "src/assets/lesson10/long/chou-naga(i)_7.svg", "src/assets/lesson10/long/chou-naga(i)_8.svg"],
      lesson: "Lesson 10"
    },
    {
      character: "道", meaning: "way", onyomi: "どう", kunyomi: "みち",
      examples: [
        {kanji: "道", kana: "みち", eng: "way; road"},
        {kanji: "書道", kana: "しょどう", eng: "calligraphy"},
        {kanji: "柔道", kana: "じゅうどう", eng: "judo"},
        {kanji: "北海道", kana: "ほっかいどう", eng: "Hokkaido"}
      ],
      strokes: ["src/assets/lesson10/way/dou-michi_1.svg", "src/assets/lesson10/way/dou-michi_2.svg", "src/assets/lesson10/way/dou-michi_3.svg", "src/assets/lesson10/way/dou-michi_4.svg", "src/assets/lesson10/way/dou-michi_5.svg", "src/assets/lesson10/way/dou-michi_6.svg", "src/assets/lesson10/way/dou-michi_7.svg", "src/assets/lesson10/way/dou-michi_8.svg", "src/assets/lesson10/way/dou-michi_9.svg", "src/assets/lesson10/way/dou-michi_10.svg", "src/assets/lesson10/way/dou-michi_11.svg", "src/assets/lesson10/way/dou-michi_12.svg"],
      lesson: "Lesson 10"
    },
    {
      character: "雪", meaning: "snow", onyomi: "せつ", kunyomi: "ゆき",
      examples: [
        {kanji: "雪", kana: "ゆき", eng: "snow"},
        {kanji: "新雪", kana: "しんせつ", eng: "new snow"},
        {kanji: "雪だるま", kana: "ゆきだるま", eng: "snowman"}
      ],
      strokes: ["src/assets/lesson10/snow/setsu-yuki_1.svg", "src/assets/lesson10/snow/setsu-yuki_2.svg", "src/assets/lesson10/snow/setsu-yuki_3.svg", "src/assets/lesson10/snow/setsu-yuki_4.svg", "src/assets/lesson10/snow/setsu-yuki_5.svg", "src/assets/lesson10/snow/setsu-yuki_6.svg", "src/assets/lesson10/snow/setsu-yuki_7.svg", "src/assets/lesson10/snow/setsu-yuki_8.svg", "src/assets/lesson10/snow/setsu-yuki_9.svg", "src/assets/lesson10/snow/setsu-yuki_10.svg", "src/assets/lesson10/snow/setsu-yuki_11.svg"],
      lesson: "Lesson 10"
    },
    {
      character: "立", meaning: "to stand", onyomi: "りつ", kunyomi: "た",
      examples: [
        {kanji: "立つ", kana: "たつ", eng: "to stand"},
        {kanji: "国立大学", kana: "こくりつだいがく", eng: "national university"},
        {kanji: "私立高校", kana: "しりつこうこう", eng: "private high school"}
      ],
      strokes: ["src/assets/lesson10/stand/ritsu-ta(tsu)_1.svg", "src/assets/lesson10/stand/ritsu-ta(tsu)_2.svg", "src/assets/lesson10/stand/ritsu-ta(tsu)_3.svg", "src/assets/lesson10/stand/ritsu-ta(tsu)_4.svg", "src/assets/lesson10/stand/ritsu-ta(tsu)_5.svg"],
      lesson: "Lesson 10"
    },
    {
      character: "自", meaning: "self", onyomi: "じ", kunyomi: "",
      examples: [
        {kanji: "自分", kana: "じぶん", eng: "oneself"},
        {kanji: "自動車", kana: "じどうしゃ", eng: "automobile"},
        {kanji: "自転車", kana: "じてんしゃ", eng: "bicycle"},
        {kanji: "自由", kana: "じゆう", eng: "freedom"}
      ],
      strokes: ["src/assets/lesson10/self/mizuka(ra)_1.svg", "src/assets/lesson10/self/mizuka(ra)_2.svg", "src/assets/lesson10/self/mizuka(ra)_3.svg", "src/assets/lesson10/self/mizuka(ra)_4.svg", "src/assets/lesson10/self/mizuka(ra)_5.svg", "src/assets/lesson10/self/mizuka(ra)_6.svg"],
      lesson: "Lesson 10"
    },
    {
      character: "夜", meaning: "night", onyomi: "や", kunyomi: "よる　よ",
      examples: [
        {kanji: "夜", kana: "よる", eng: "night"},
        {kanji: "夜中", kana: "よなか", eng: "middle of night"},
        {kanji: "今夜", kana: "こんや", eng: "tonight"},
        {kanji: "夜明け", kana: "よあけ", eng: "dawn"}
      ],
      strokes: ["src/assets/lesson10/night/yoru_1.svg", "src/assets/lesson10/night/yoru_2.svg", "src/assets/lesson10/night/yoru_3.svg", "src/assets/lesson10/night/yoru_4.svg", "src/assets/lesson10/night/yoru_5.svg", "src/assets/lesson10/night/yoru_6.svg", "src/assets/lesson10/night/yoru_7.svg", "src/assets/lesson10/night/yoru_8.svg"],
      lesson: "Lesson 10"
    },
    {
      character: "朝", meaning: "morning", onyomi: "ちょう", kunyomi: "あさ",
      examples: [
        {kanji: "朝", kana: "あさ", eng: "morning"},
        {kanji: "今朝", kana: "けさ", eng: "this morning"},
        {kanji: "朝食", kana: "ちょうしょく", eng: "breakfast"},
        {kanji: "毎朝", kana: "まいあさ", eng: "every morning"}
      ],
      strokes: ["src/assets/lesson10/morning/chou-asa_1.svg", "src/assets/lesson10/morning/chou-asa_2.svg", "src/assets/lesson10/morning/chou-asa_3.svg", "src/assets/lesson10/morning/chou-asa_4.svg", "src/assets/lesson10/morning/chou-asa_5.svg", "src/assets/lesson10/morning/chou-asa_6.svg", "src/assets/lesson10/morning/chou-asa_7.svg", "src/assets/lesson10/morning/chou-asa_8.svg", "src/assets/lesson10/morning/chou-asa_9.svg", "src/assets/lesson10/morning/chou-asa_10.svg", "src/assets/lesson10/morning/chou-asa_11.svg", "src/assets/lesson10/morning/chou-asa_12.svg"],
      lesson: "Lesson 10"
    },
    {
      character: "持", meaning: "to hold", onyomi: "じ", kunyomi: "も",
      examples: [
        {kanji: "持つ", kana: "もつ", eng: "to carry, to hold"},
        {kanji: "持ってくる", kana: "もってくる", eng: "to bring"},
        {kanji: "所持品", kana: "しょじひん", eng: "belongings"},
        {kanji: "気持ち", kana: "きもち", eng: "feeling"}
      ],
      strokes: ["src/assets/lesson10/hold/ji-mo(tsu)_1.svg", "src/assets/lesson10/hold/ji-mo(tsu)_2.svg", "src/assets/lesson10/hold/ji-mo(tsu)_3.svg", "src/assets/lesson10/hold/ji-mo(tsu)_4.svg", "src/assets/lesson10/hold/ji-mo(tsu)_5.svg", "src/assets/lesson10/hold/ji-mo(tsu)_6.svg", "src/assets/lesson10/hold/ji-mo(tsu)_7.svg", "src/assets/lesson10/hold/ji-mo(tsu)_8.svg", "src/assets/lesson10/hold/ji-mo(tsu)_9.svg"],
      lesson: "Lesson 10"
    },
    {
      character: "手", meaning: "hand", onyomi: "しゅ", kunyomi: "て",
      examples: [
        {kanji: "手紙", kana: "てがみ", eng: "letter"},
        {kanji: "歌手", kana: "かしゅ", eng: "singer"},
        {kanji: "歌手", kana: "", eng: "hand"},
        {kanji: "手話", kana: "しゅわ", eng: "sign language"},
        {kanji: "歌手", kana: "かしゅ", eng: "singer"}
      ],
      strokes: ["src/assets/lesson11/hand/te_1.svg", "src/assets/lesson11/hand/te_2.svg", "src/assets/lesson11/hand/te_3.svg", "src/assets/lesson11/hand/te_4.svg"],
      lesson: "Lesson 11"
    },
    {
      character: "紙", meaning: "paper", onyomi: "し", kunyomi: "がみ　かみ",
      examples: [
        {kanji: "手紙", kana: "てがみ", eng: "letter"},
        {kanji: "紙", kana: "かみ", eng: "paper"},
        {kanji: "和紙", kana: "わし", eng: "Japanese paper"},
        {kanji: "表紙", kana: "ひょうし", eng: "cover page"},
        {kanji: "折り紙", kana: "おりがみ", eng: "origami"}
      ],
      strokes: ["src/assets/lesson11/paper/shi-kami_1.svg", "src/assets/lesson11/paper/shi-kami_2.svg", "src/assets/lesson11/paper/shi-kami_3.svg", "src/assets/lesson11/paper/shi-kami_4.svg", "src/assets/lesson11/paper/shi-kami_5.svg", "src/assets/lesson11/paper/shi-kami_6.svg", "src/assets/lesson11/paper/shi-kami_7.svg", "src/assets/lesson11/paper/shi-kami_8.svg", "src/assets/lesson11/paper/shi-kami_9.svg", "src/assets/lesson11/paper/shi-kami_10.svg"],
      lesson: "Lesson 11"
    },
    {
      character: "好", meaning: "favorite; to like", onyomi: "こう", kunyomi: "す　この",
      examples: [
        {kanji: "好きな", kana: "すきな", eng: "to like"},
        {kanji: "大好きな", kana: "だいすきな", eng: "to love"},
        {kanji: "好意", kana: "こうい", eng: "goodwill"},
        {kanji: "好み", kana: "このみ", eng: "liking; taste"},
        {kanji: "好物", kana: "こうぶつ", eng: "favorite food"}
      ],
      strokes: ["src/assets/lesson11/like/kou-su(ki)_1.svg", "src/assets/lesson11/like/kou-su(ki)_2.svg", "src/assets/lesson11/like/kou-su(ki)_3.svg", "src/assets/lesson11/like/kou-su(ki)_4.svg", "src/assets/lesson11/like/kou-su(ki)_5.svg", "src/assets/lesson11/like/kou-su(ki)_6.svg"],
      lesson: "Lesson 11"
    },
    {
      character: "近", meaning: "near", onyomi: "きん", kunyomi: "ちか",
      examples: [
        {kanji: "近く", kana: "ちかく", eng: "near; nearby"},
        {kanji: "近所", kana: "きんじょ", eng: "neighborhood"},
        {kanji: "最近", kana: "さいきん", eng: "recently"},
        {kanji: "中近東", kana: "ちゅうきんとう", eng: "the Middle and Near East"}
      ],
      strokes: ["src/assets/lesson11/near/chika(ku)_1.svg", "src/assets/lesson11/near/chika(ku)_2.svg", "src/assets/lesson11/near/chika(ku)_3.svg", "src/assets/lesson11/near/chika(ku)_4.svg", "src/assets/lesson11/near/chika(ku)_5.svg", "src/assets/lesson11/near/chika(ku)_6.svg", "src/assets/lesson11/near/chika(ku)_7.svg"],
      lesson: "Lesson 11"
    },
    {
      character: "明", meaning: "bright", onyomi: "めい", kunyomi: "あか",
      examples: [
        {kanji: "明るい", kana: "あかるい", eng: "cheerful; bright"},
        {kanji: "明日", kana: "あした", eng: "tomorrow"},
        {kanji: "説明", kana: "せつめい", eng: "explanation"},
        {kanji: "発明", kana: "はつめい", eng: "invention"},
        {kanji: "文明", kana: "ぶんめい", eng: "civilization"}
      ],
      strokes: ["src/assets/lesson11/bright/aka(rui)_1.svg", "src/assets/lesson11/bright/aka(rui)_2.svg", "src/assets/lesson11/bright/aka(rui)_3.svg", "src/assets/lesson11/bright/aka(rui)_4.svg", "src/assets/lesson11/bright/aka(rui)_5.svg", "src/assets/lesson11/bright/aka(rui)_6.svg", "src/assets/lesson11/bright/aka(rui)_7.svg", "src/assets/lesson11/bright/aka(rui)_8.svg"],
      lesson: "Lesson 11"
    },
    {
      character: "病", meaning: "ill; sick", onyomi: "びょう", kunyomi: "　",
      examples: [
        {kanji: "病院", kana: "びょういん", eng: "hospital"},
        {kanji: "病気", kana: "びょうき", eng: "illness"},
        {kanji: "重病", kana: "じゅうびょう", eng: "serious illness"},
        {kanji: "急病", kana: "きゅうびょう", eng: "sudden illness"},
      ],
      strokes: ["src/assets/lesson11/ill/yamai_1.svg", "src/assets/lesson11/ill/yamai_2.svg", "src/assets/lesson11/ill/yamai_3.svg", "src/assets/lesson11/ill/yamai_4.svg", "src/assets/lesson11/ill/yamai_5.svg", "src/assets/lesson11/ill/yamai_6.svg", "src/assets/lesson11/ill/yamai_7.svg", "src/assets/lesson11/ill/yamai_8.svg", "src/assets/lesson11/ill/yamai_9.svg", "src/assets/lesson11/ill/yamai_10.svg"],
      lesson: "Lesson 11"
    },
    {
      character: "映", meaning: "to reflect", onyomi: "えい", kunyomi: "うつ",
      examples: [
        {kanji: "映画", kana: "えいが", eng: "movie"},
        {kanji: "映画館", kana: "えいがかん", eng: "movie theater"},
        {kanji: "映る", kana: "うつる", eng: "to be reflected"},
      ],
      strokes: ["src/assets/lesson11/reflect/ei-utsu(ru)_1.svg", "src/assets/lesson11/reflect/ei-utsu(ru)_2.svg", "src/assets/lesson11/reflect/ei-utsu(ru)_3.svg", "src/assets/lesson11/reflect/ei-utsu(ru)_4.svg", "src/assets/lesson11/reflect/ei-utsu(ru)_5.svg", "src/assets/lesson11/reflect/ei-utsu(ru)_6.svg", "src/assets/lesson11/reflect/ei-utsu(ru)_7.svg", "src/assets/lesson11/reflect/ei-utsu(ru)_8.svg", "src/assets/lesson11/reflect/ei-utsu(ru)_9.svg"],
      lesson: "Lesson 11"
    },
    {
      character: "画", meaning: "to draw; picture", onyomi: "が　かく", kunyomi: "　",
      examples: [
        {kanji: "映画", kana: "えいが", eng: "movie"},
        {kanji: "画家", kana: "がか", eng: "painter"},
        {kanji: "計画", kana: "けいかく", eng: "plan"},
        {kanji: "漫画", kana: "まんが", eng: "comic"}
      ],
      strokes: ["src/assets/lesson11/picture/(ei)ga_1.svg", "src/assets/lesson11/picture/(ei)ga_2.svg", "src/assets/lesson11/picture/(ei)ga_3.svg", "src/assets/lesson11/picture/(ei)ga_4.svg", "src/assets/lesson11/picture/(ei)ga_5.svg", "src/assets/lesson11/picture/(ei)ga_6.svg", "src/assets/lesson11/picture/(ei)ga_7.svg", "src/assets/lesson11/picture/(ei)ga_8.svg"],
      lesson: "Lesson 11"
    },
    {
      character: "歌", meaning: "song; to sing", onyomi: "か", kunyomi: "うた",
      examples: [
        {kanji: "歌う", kana: "うたう", eng: "to sing"},
        {kanji: "歌", kana: "うた", eng: "song"},
        {kanji: "歌手", kana: "かしゅ", eng: "singer"},
        {kanji: "国歌", kana: "こっか", eng: "national anthem"},
        {kanji: "歌舞伎", kana: "かぶき", eng: "Kabuki"},
        {kanji: "歌詞", kana: "かし", eng: "lyrics"},
      ],
      strokes: ["src/assets/lesson11/song/ka-uta_1.svg", "src/assets/lesson11/song/ka-uta_2.svg", "src/assets/lesson11/song/ka-uta_3.svg", "src/assets/lesson11/song/ka-uta_4.svg", "src/assets/lesson11/song/ka-uta_5.svg", "src/assets/lesson11/song/ka-uta_6.svg", "src/assets/lesson11/song/ka-uta_7.svg", "src/assets/lesson11/song/ka-uta_8.svg", "src/assets/lesson11/song/ka-uta_9.svg", "src/assets/lesson11/song/ka-uta_10.svg", "src/assets/lesson11/song/ka-uta_11.svg", "src/assets/lesson11/song/ka-uta_12.svg", "src/assets/lesson11/song/ka-uta_13.svg", "src/assets/lesson11/song/ka-uta_14.svg"],
      lesson: "Lesson 11"
    },
    {
      character: "市", meaning: "city", onyomi: "し", kunyomi: "いち",
      examples: [
        {kanji: "川口市", kana: "かわぐちし", eng: "Kawaguchi City"},
        {kanji: "市役所", kana: "しやくしょ", eng: "city hall"},
        {kanji: "市長", kana: "しちょう", eng: "mayor"},
        {kanji: "市場", kana: "いちば", eng: "market"}
      ],
      strokes: ["src/assets/lesson11/city/shi-ichi_1.svg", "src/assets/lesson11/city/shi-ichi_2.svg", "src/assets/lesson11/city/shi-ichi_3.svg", "src/assets/lesson11/city/shi-ichi_4.svg", "src/assets/lesson11/city/shi-ichi_5.svg"],
      lesson: "Lesson 11"
    },
    {
      character: "所", meaning: "place; spot", onyomi: "じょ　しょ", kunyomi: "ところ　どころ",
      examples: [
        {kanji: "いろいろな所", kana: "いろいろなところ", eng: "various places"},
        {kanji: "近所", kana: "きんじょ", eng: "neighborhood"},
        {kanji: "台所", kana: "だいどころ", eng: "kitchen"},
        {kanji: "住所", kana: "じゅうしょ", eng: "address"}
      ],
      strokes: ["src/assets/lesson11/place/(ba)sho_1.svg", "src/assets/lesson11/place/(ba)sho_2.svg", "src/assets/lesson11/place/(ba)sho_3.svg", "src/assets/lesson11/place/(ba)sho_4.svg", "src/assets/lesson11/place/(ba)sho_5.svg", "src/assets/lesson11/place/(ba)sho_6.svg", "src/assets/lesson11/place/(ba)sho_7.svg", "src/assets/lesson11/place/(ba)sho_8.svg"],
      lesson: "Lesson 11"
    },
    {
      character: "勉", meaning: "to make efforts; effort", onyomi: "べん", kunyomi: "つと",
      examples: [
        {kanji: "勉強する", kana: "べんきょうする", eng: "to study"},
        {kanji: "勉める", kana: "つとめる", eng: "to try hard"},
        {kanji: "勤勉な", kana: "きんべんな", eng: "diligent"}
      ],
      strokes: ["src/assets/lesson11/effort/ben(kyou)_1.svg", "src/assets/lesson11/effort/ben(kyou)_2.svg", "src/assets/lesson11/effort/ben(kyou)_3.svg", "src/assets/lesson11/effort/ben(kyou)_4.svg", "src/assets/lesson11/effort/ben(kyou)_5.svg", "src/assets/lesson11/effort/ben(kyou)_6.svg", "src/assets/lesson11/effort/ben(kyou)_7.svg", "src/assets/lesson11/effort/ben(kyou)_8.svg", "src/assets/lesson11/effort/ben(kyou)_9.svg", "src/assets/lesson11/effort/ben(kyou)_10.svg"],
      lesson: "Lesson 11"
    },
    {
      character: "強", meaning: "strong; powerful", onyomi: "きょう　ごう", kunyomi: "つよ",
      examples: [
        {kanji: "勉強する", kana: "べんきょうする", eng: "to study"},
        {kanji: "強い", kana: "つよい", eng: "strong"},
        {kanji: "強情な", kana: "ごうじょうな", eng: "obstinate"},
        {kanji: "強盗", kana: "ごうとう", eng: "robbery"},
        {kanji: "強力な", kana: "きょうりょくな", eng: "powerful"}
      ],
      strokes: ["src/assets/lesson11/strong/tsuyo(i)_1.svg", "src/assets/lesson11/strong/tsuyo(i)_2.svg", "src/assets/lesson11/strong/tsuyo(i)_3.svg", "src/assets/lesson11/strong/tsuyo(i)_4.svg", "src/assets/lesson11/strong/tsuyo(i)_5.svg", "src/assets/lesson11/strong/tsuyo(i)_6.svg", "src/assets/lesson11/strong/tsuyo(i)_7.svg", "src/assets/lesson11/strong/tsuyo(i)_8.svg", "src/assets/lesson11/strong/tsuyo(i)_9.svg", "src/assets/lesson11/strong/tsuyo(i)_10.svg", "src/assets/lesson11/strong/tsuyo(i)_11.svg"],
      lesson: "Lesson 11"
    },
    {
      character: "有", meaning: "to exist", onyomi: "ゆう", kunyomi: "あ",
      examples: [
        {kanji: "有名な", kana: "ゆうめいな", eng: "famous"},
        {kanji: "有料", kana: "ゆうりょう", eng: "toll; fee"},
        {kanji: "有る", kana: "ある", eng: "to exist"},
        {kanji: "有能な", kana: "ゆうのうな", eng: "talented"},
      ],
      strokes: ["src/assets/lesson11/exist/yuu-a(ru)_1.svg", "src/assets/lesson11/exist/yuu-a(ru)_2.svg", "src/assets/lesson11/exist/yuu-a(ru)_3.svg", "src/assets/lesson11/exist/yuu-a(ru)_4.svg", "src/assets/lesson11/exist/yuu-a(ru)_5.svg", "src/assets/lesson11/exist/yuu-a(ru)_6.svg"],
      lesson: "Lesson 11"
    },
    {
      character: "旅", meaning: "travel", onyomi: "りょ", kunyomi: "たび",
      examples: [
        {kanji: "旅行", kana: "りょこう", eng: "travel"},
        {kanji: "旅館", kana: "りょかん", eng: "Japanese inn"},
        {kanji: "一人旅", kana: "ひとりたび", eng: "traveling alone"},
        {kanji: "旅券", kana: "りょけん", eng: "passport"}
      ],
      strokes: ["src/assets/lesson11/travel/ryo-tabi_1.svg", "src/assets/lesson11/travel/ryo-tabi_2.svg", "src/assets/lesson11/travel/ryo-tabi_3.svg", "src/assets/lesson11/travel/ryo-tabi_4.svg", "src/assets/lesson11/travel/ryo-tabi_5.svg", "src/assets/lesson11/travel/ryo-tabi_6.svg", "src/assets/lesson11/travel/ryo-tabi_7.svg", "src/assets/lesson11/travel/ryo-tabi_8.svg", "src/assets/lesson11/travel/ryo-tabi_9.svg", "src/assets/lesson11/travel/ryo-tabi_10.svg"],
      lesson: "Lesson 11"
    },
    {
      character: "昔", meaning: "ancient times", onyomi: "　", kunyomi: "むかし",
      examples: [
        {kanji: "昔", kana: "むかし", eng: "old times"},
        {kanji: "昔話", kana: "むかしばなし", eng: "old tale"},
        {kanji: "大昔", kana: "おおむかし", eng: "ancient times"},
      ],
      strokes: ["src/assets/lesson12/ancient/mukashi_1.svg", "src/assets/lesson12/ancient/mukashi_2.svg", "src/assets/lesson12/ancient/mukashi_3.svg", "src/assets/lesson12/ancient/mukashi_4.svg", "src/assets/lesson12/ancient/mukashi_5.svg", "src/assets/lesson12/ancient/mukashi_6.svg", "src/assets/lesson12/ancient/mukashi_7.svg", "src/assets/lesson12/ancient/mukashi_8.svg"],
      lesson: "Lesson 12"
    },
    {
      character: "々", meaning: "symbol of repetition of a kanji", onyomi: "　", kunyomi: "　",
      examples: [
        {kanji: "昔々", kana: "むかしむかし", eng: "once upon a time"},
        {kanji: "人々", kana: "ひとびと", eng: "people"},
        {kanji: "時々", kana: "ときどき", eng: "sometimes"},
        {kanji: "色々な", kana: "いろいろな", eng: "various"},
      ],
      strokes: ["src/assets/lesson12/repeater/(yama)yama_1.svg", "src/assets/lesson12/repeater/(yama)yama_2.svg", "src/assets/lesson12/repeater/(yama)yama_3.svg"],
      lesson: "Lesson 12"
    },
    {
      character: "神", meaning: "God", onyomi: "じん　しん　こう", kunyomi: "かみ",
      examples: [
        {kanji: "神さま", kana: "かみさま", eng: "God"},
        {kanji: "神社", kana: "じんじゃ", eng: "shrine"},
        {kanji: "神道", kana: "しんとう", eng: "Shinto"},
        {kanji: "神戸市", kana: "こうべし", eng: "Kobe City"},
      ],
      strokes: ["src/assets/lesson12/god/shin-kami_1.svg", "src/assets/lesson12/god/shin-kami_2.svg", "src/assets/lesson12/god/shin-kami_3.svg", "src/assets/lesson12/god/shin-kami_4.svg", "src/assets/lesson12/god/shin-kami_5.svg", "src/assets/lesson12/god/shin-kami_6.svg", "src/assets/lesson12/god/shin-kami_7.svg", "src/assets/lesson12/god/shin-kami_8.svg", "src/assets/lesson12/god/shin-kami_9.svg"],
      lesson: "Lesson 12"
    },
    {
      character: "早", meaning: "early", onyomi: "そう", kunyomi: "はや",
      examples: [
        {kanji: "早い", kana: "はやい", eng: "early"},
        {kanji: "早起きる", kana: "はやおきする", eng: "to get up early"},
        {kanji: "早朝", kana: "そうちょう", eng: "early morning"}
      ],
      strokes: ["src/assets/lesson12/early/sou-haya(i)_1.svg", "src/assets/lesson12/early/sou-haya(i)_2.svg", "src/assets/lesson12/early/sou-haya(i)_3.svg", "src/assets/lesson12/early/sou-haya(i)_4.svg", "src/assets/lesson12/early/sou-haya(i)_5.svg", "src/assets/lesson12/early/sou-haya(i)_6.svg"],
      lesson: "Lesson 12"
    },
    {
      character: "起", meaning: "to get up", onyomi: "き", kunyomi: "お",
      examples: [
        {kanji: "起きる", kana: "おきる", eng: "to get up"},
        {kanji: "起こす", kana: "おこす", eng: "to wake someone up"},
        {kanji: "再起動", kana: "さいきどう", eng: "reboot"}
      ],
      strokes: ["src/assets/lesson12/getup/o(kiru)_1.svg", "src/assets/lesson12/getup/o(kiru)_2.svg", "src/assets/lesson12/getup/o(kiru)_3.svg", "src/assets/lesson12/getup/o(kiru)_4.svg", "src/assets/lesson12/getup/o(kiru)_5.svg", "src/assets/lesson12/getup/o(kiru)_6.svg", "src/assets/lesson12/getup/o(kiru)_7.svg", "src/assets/lesson12/getup/o(kiru)_8.svg", "src/assets/lesson12/getup/o(kiru)_9.svg", "src/assets/lesson12/getup/o(kiru)_10.svg"],
      lesson: "Lesson 12"
    },
    {
      character: "牛", meaning: "cow", onyomi: "ぎゅう", kunyomi: "うし",
      examples: [
        {kanji: "牛", kana: "うし", eng: "cow"},
        {kanji: "牛乳", kana: "ぎゅうにゅう", eng: "milk"},
        {kanji: "牛肉", kana: "ぎゅうにく", eng: "beef"},
        {kanji: "子牛", kana: "こうし", eng: "calf; veal"}
      ],
      strokes: ["src/assets/lesson12/cow/gyuu-ushi_1.svg", "src/assets/lesson12/cow/gyuu-ushi_2.svg", "src/assets/lesson12/cow/gyuu-ushi_3.svg", "src/assets/lesson12/cow/gyuu-ushi_4.svg"],
      lesson: "Lesson 12"
    },
    {
      character: "使", meaning: "to use", onyomi: "し", kunyomi: "つか",
      examples: [
        {kanji: "使う", kana: "つかう", eng: "to use"},
        {kanji: "大使", kana: "たいし", eng: "ambassador"},
        {kanji: "使用中", kana: "しようちゅう", eng: "\"Occupied\""},
        {kanji: "お使い", kana: "おつかい", eng: "errand"}
      ],
      strokes: ["src/assets/lesson12/use/shi-tsuka(u)_1.svg", "src/assets/lesson12/use/shi-tsuka(u)_2.svg", "src/assets/lesson12/use/shi-tsuka(u)_3.svg", "src/assets/lesson12/use/shi-tsuka(u)_4.svg", "src/assets/lesson12/use/shi-tsuka(u)_5.svg", "src/assets/lesson12/use/shi-tsuka(u)_6.svg", "src/assets/lesson12/use/shi-tsuka(u)_7.svg", "src/assets/lesson12/use/shi-tsuka(u)_8.svg"],
      lesson: "Lesson 12"
    },
    {
      character: "働", meaning: "to work", onyomi: "どう", kunyomi: "はたら　ばたら",
      examples: [
        {kanji: "働く", kana: "はたらく", eng: "to work"},
        {kanji: "共働き", kana: "ともばたらき", eng: "both husband and wife working"},
        {kanji: "労働", kana: "ろうどう", eng: "labor"}
      ],
      strokes: ["src/assets/lesson12/work/hatara(ku)_1.svg", "src/assets/lesson12/work/hatara(ku)_2.svg", "src/assets/lesson12/work/hatara(ku)_3.svg", "src/assets/lesson12/work/hatara(ku)_4.svg", "src/assets/lesson12/work/hatara(ku)_5.svg", "src/assets/lesson12/work/hatara(ku)_6.svg", "src/assets/lesson12/work/hatara(ku)_7.svg", "src/assets/lesson12/work/hatara(ku)_8.svg", "src/assets/lesson12/work/hatara(ku)_9.svg", "src/assets/lesson12/work/hatara(ku)_10.svg", "src/assets/lesson12/work/hatara(ku)_11.svg", "src/assets/lesson12/work/hatara(ku)_12.svg", "src/assets/lesson12/work/hatara(ku)_13.svg"],
      lesson: "Lesson 12"
    },
    {
      character: "連", meaning: "to link", onyomi: "れん", kunyomi: "つ",
      examples: [
        {kanji: "連れて帰る", kana: "つれてかえる", eng: "to bring (a person) back"},
        {kanji: "国連", kana: "こくれん", eng: "United Nations"},
        {kanji: "連休", kana: "れんきゅう", eng: "consecutive holidays"}
      ],
      strokes: ["src/assets/lesson12/link/tsura(naru)_1.svg", "src/assets/lesson12/link/tsura(naru)_2.svg", "src/assets/lesson12/link/tsura(naru)_3.svg", "src/assets/lesson12/link/tsura(naru)_4.svg", "src/assets/lesson12/link/tsura(naru)_5.svg", "src/assets/lesson12/link/tsura(naru)_6.svg", "src/assets/lesson12/link/tsura(naru)_7.svg", "src/assets/lesson12/link/tsura(naru)_8.svg", "src/assets/lesson12/link/tsura(naru)_9.svg", "src/assets/lesson12/link/tsura(naru)_10.svg"],
      lesson: "Lesson 12"
    },
    {
      character: "別", meaning: "to separate", onyomi: "べつ", kunyomi: "わか",
      examples: [
        {kanji: "別れる", kana: "わかれる", eng: "to separate"},
        {kanji: "別に", kana: "べつに", eng: "not in particular"},
        {kanji: "特別な", kana: "とくべつな", eng: "special"},
        {kanji: "差別", kana: "さべつ", eng: "discrimination"},
        {kanji: "別々に", kana: "べつべつに", eng: "separately"}
      ],
      strokes: ["src/assets/lesson12/separate/betsu-waka(re)_1.svg", "src/assets/lesson12/separate/betsu-waka(re)_2.svg", "src/assets/lesson12/separate/betsu-waka(re)_3.svg", "src/assets/lesson12/separate/betsu-waka(re)_4.svg", "src/assets/lesson12/separate/betsu-waka(re)_5.svg", "src/assets/lesson12/separate/betsu-waka(re)_6.svg", "src/assets/lesson12/separate/betsu-waka(re)_7.svg"],
      lesson: "Lesson 12"
    },
    {
      character: "度", meaning: "time; degrees", onyomi: "ど", kunyomi: "　",
      examples: [
        {kanji: "一度", kana: "いちど", eng: "once"},
        {kanji: "今度", kana: "こんど", eng: "near future"},
        {kanji: "温度", kana: "おんど", eng: "temperature"},
        {kanji: "三十度", kana: "さんじゅうど", eng: "30 degrees"},
        {kanji: "態度", kana: "たいど", eng: "attitude"}
      ],
      strokes: ["src/assets/lesson12/time;degrees/do-tabi_1.svg", "src/assets/lesson12/time;degrees/do-tabi_2.svg", "src/assets/lesson12/time;degrees/do-tabi_3.svg", "src/assets/lesson12/time;degrees/do-tabi_4.svg", "src/assets/lesson12/time;degrees/do-tabi_5.svg", "src/assets/lesson12/time;degrees/do-tabi_6.svg", "src/assets/lesson12/time;degrees/do-tabi_7.svg", "src/assets/lesson12/time;degrees/do-tabi_8.svg", "src/assets/lesson12/time;degrees/do-tabi_9.svg"],
      lesson: "Lesson 12"
    },
    {
      character: "赤", meaning: "red", onyomi: "せき", kunyomi: "あか",
      examples: [
        {kanji: "赤", kana: "あか", eng: "red color"},
        {kanji: "赤い", kana: "あかい", eng: "red"},
        {kanji: "赤ちゃん", kana: "あかちゃん", eng: "baby"},
        {kanji: "赤道", kana: "せきどう", eng: "the equator"},
        {kanji: "赤十字", kana: "せきじゅうじ", eng: "the Red Cross"}
      ],
      strokes: ["src/assets/lesson12/red/seki-aka_1.svg", "src/assets/lesson12/red/seki-aka_2.svg", "src/assets/lesson12/red/seki-aka_3.svg", "src/assets/lesson12/red/seki-aka_4.svg", "src/assets/lesson12/red/seki-aka_5.svg", "src/assets/lesson12/red/seki-aka_6.svg", "src/assets/lesson12/red/seki-aka_7.svg"],
      lesson: "Lesson 12"
    },
    {
      character: "青", meaning: "blue", onyomi: "せい", kunyomi: "あお",
      examples: [
        {kanji: "青", kana: "あお", eng: "blue color"},
        {kanji: "青い", kana: "あおい", eng: "blue"},
        {kanji: "青年", kana: "せいねん", eng: "youth"},
        {kanji: "青空", kana: "あおぞら", eng: "blue sky"},
        {kanji: "青信号", kana: "あおしんごう", eng: "green light"}
      ],
      strokes: ["src/assets/lesson12/blue/ao_1.svg", "src/assets/lesson12/blue/ao_2.svg", "src/assets/lesson12/blue/ao_3.svg", "src/assets/lesson12/blue/ao_4.svg", "src/assets/lesson12/blue/ao_5.svg", "src/assets/lesson12/blue/ao_6.svg", "src/assets/lesson12/blue/ao_7.svg", "src/assets/lesson12/blue/ao_8.svg"],
      lesson: "Lesson 12"
    },
    {
      character: "色", meaning: "color", onyomi: "しき　しょく", kunyomi: "いろ",
      examples: [
        {kanji: "色", kana: "いろ", eng: "color"},
        {kanji: "色々な", kana: "いろいろな", eng: "various"},
        {kanji: "景色", kana: "けしき", eng: "scenery"},
        {kanji: "特色", kana: "とくしょく", eng: "characteristic"}
      ],
      strokes: ["src/assets/lesson12/color/shoku-iro_1.svg", "src/assets/lesson12/color/shoku-iro_2.svg", "src/assets/lesson12/color/shoku-iro_3.svg", "src/assets/lesson12/color/shoku-iro_4.svg", "src/assets/lesson12/color/shoku-iro_5.svg", "src/assets/lesson12/color/shoku-iro_6.svg"],
      lesson: "Lesson 12"
    },
    
]

const [selectedLesson, setSelectedLesson] = useState("All Lessons")

const kanjisToShow = selectedLesson === "All Lessons" ?
  testKanjis : testKanjis.filter(kanji => kanji.lesson === selectedLesson)

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
