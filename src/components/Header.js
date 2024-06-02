import '../css/Header.css';

function Header() {
    return (
        <header className='header'>
            <div className='menu-icon'><i class="zmdi zmdi-menu zmdi-hc-1g"></i></div>
            <p>Krupakar Reddy</p>
            <div id='spacer'></div>
            <nav>
                <ul>
                    <li><div><a href="#about">About</a></div></li>
                    <li><div><a href="#portfolio">Portfolio</a></div></li>
                    <li><div><a href="#interests">Interests</a></div></li>
                    <li><div><a href="#projects">Projects</a></div></li>
                    <li><div><a href="#contact">Contact</a></div></li>
                </ul>
            </nav>
            <div className='more-icon'><i class="zmdi zmdi-more-vert"></i></div>
        </header>
    );
}

export default Header;