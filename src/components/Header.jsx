import SearchIcon from '@mui/icons-material/Search';
import Dropdown from './Dropdown';

const Header = ({searchFilter, optionOne, optionTwo, onOptionClick, onSearchClick, onFieldChange}) => {
    return (
        <div className="header">
            <div className='logo-links'>
                <p>Genki Kanji</p>
                <a href="about">About</a>
            </div>
            <div className='searchbar'>
                <div className='searchfield'>
                    <Dropdown searchFilter={searchFilter} optionOne={optionOne} optionTwo={optionTwo} onOptionClick={onOptionClick} />
                    <input type="text" onChange={onFieldChange}/>
                </div>
                <div onClick={onSearchClick}>
                    <SearchIcon className='search-icon'/>
                </div>
            </div>
        </div>
    )
}

export default Header