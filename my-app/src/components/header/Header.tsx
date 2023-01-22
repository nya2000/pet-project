const Header = () => {
    return (
        <header className='header'>
            <div className='innerHeader'>
                <ul className='navigation'>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a className='logIn' href='/'>
                            Login
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
