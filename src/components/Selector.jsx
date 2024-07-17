const Selector = ({onchange}) => {
    return (
        <select name="lessons" id="lessons" className="selector" onChange={onchange}>
            <option value="All Lessons">All Lessons</option>
            <option value="Lesson 3">Lesson 3</option>
            <option value="Lesson 4">Lesson 4</option>
            <option value="Lesson 5">Lesson 5</option>
            <option value="Lesson 6">Lesson 6</option>
            <option value="Lesson 7">Lesson 7</option>
            <option value="Lesson 8">Lesson 8</option>
            <option value="Lesson 9">Lesson 9</option>
            <option value="Lesson 10">Lesson 10</option>
            <option value="Lesson 11">Lesson 11</option>
            <option value="Lesson 12">Lesson 12</option>
        </select>
    )
}

export default Selector