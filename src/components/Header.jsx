import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    return (
        <div className="header">
            <p>Genki Kanji</p>
            <div className='searchbar'>
                <input type="text" />
                <SearchIcon />
            </div>
        </div>
    )
}

export default Header