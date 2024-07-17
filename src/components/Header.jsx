import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    return (
        <div className="header">
            <p>Genki Kanji</p>
            <div>
                <input type="text" />
                <SearchIcon />
            </div>
        </div>
    )
}

export default Header