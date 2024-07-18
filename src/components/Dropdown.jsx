const Dropdown = ({searchFilter, optionOne, optionTwo, onOptionClick}) => {
    return (
        <div className="dropdown">
            <button id="value">{searchFilter}</button>
            <div className="content">
                <p id="option-1" onClick={onOptionClick}>{optionOne}</p>
                <p id="option-2" onClick={onOptionClick}>{optionTwo}</p>
            </div>
        </div>
    )
}

export default Dropdown