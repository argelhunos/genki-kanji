import SearchIcon from '@mui/icons-material/Search';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';

const Header = ({searchFilter, optionOne, optionTwo, onOptionClick, onSearchClick, onFieldChange}) => {
    return (
        <div className="header">
            <div className='logo-links'>
                <p>Genki Kanji</p>
                <Link to="/genki-kanji/"></Link>
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