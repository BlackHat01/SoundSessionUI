import "./header.css";

const Header = () => {
    return(
        <div className="header">
            <div className="headerContainer">
                <span className="logo"><p class="lead">Welcome to SoundSession</p></span>
                <div className="headerItems">
                    <button id="headerBtn" className="btn btn-outline-secondary">Register</button>
                    <button id="headerBtn" className="btn btn-outline-secondary">Login</button>
                </div>
            </div>
        </div>
    )
};

export default Header;