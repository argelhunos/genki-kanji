import { Link } from "react-router-dom"

const SimpleHeader = () => {
    return (
        <div className="header">
            <div className='logo-links'>
                <p>Genki Kanji</p>
                <Link to="/genki-kanji/">Home</Link>
            </div>
        </div>
    )
}

export default SimpleHeader