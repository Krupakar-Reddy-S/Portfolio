import '../css/Sidebar.css';

function Sidebar({ isVisible, toggleSidebar }) {
    const year = new Date().getFullYear();

    return (
        <div>
            <div className={`overlay ${isVisible ? 'is-visible' : ''}`} onClick={toggleSidebar}></div>
            <div className={`sidebar ${isVisible ? 'is-visible' : ''}`}>
                <div className="nicescroll-bar">
                    <div className="drawer-profile-wrap">
                        <div className="candidate-img-drawer mt-25 mb-20"></div>
                        <span className="candidate-name block mb-10 text-center">S Krupakar Reddy</span>
                        <ul className="social-icons mb-30">
                            <li>
                                <a className="linkedin-link" href="https://www.linkedin.com/in/krupakar-reddy-s/" target="_blank" rel="noreferrer">
                                    <i className="zmdi zmdi-linkedin sb"></i>
                                </a>
                            </li>
                            <li>
                                <a className="github-link-sb" href="https://github.com/Krupakar-Reddy-S" target="_blank" rel="noreferrer">
                                    <i className="zmdi zmdi-github sb"></i>
                                </a>
                            </li>
                            <li>
                                <a className="twitter-link" href="https://x.com/krupakar_reddy_" target="_blank" rel="noreferrer">
                                    <i className="zmdi zmdi-twitter sb"></i>
                                </a>
                            </li>
                            <li>
                                <a className="instagram-link" href="https://www.instagram.com/krupakar_reddy_s" target="_blank" rel="noreferrer">
                                    <i className="zmdi zmdi-instagram sb"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mdl-scroll-spy-2">
                        <ul className="mdl-navigation">
                            <li>
                                <a className="mdl-navigation__link border-top-sep" data-scroll="" href="#about">
                                    <i className="zmdi zmdi-border-color pr-15"></i>
                                    <span className="font-capitalize">About</span>
                                </a>
                            </li>
                            <li>
                                <a className="mdl-navigation__link border-top-sep" data-scroll="" href="#portfolio">
                                    <i className="zmdi zmdi-case pr-15"></i>
                                    <span className="font-capitalize">Portfolio</span>
                                </a>
                            </li>
                            <li>
                                <a className="mdl-navigation__link border-top-sep" data-scroll="" href="#interests">
                                    <i className="zmdi zmdi-coffee pr-15"></i>
                                    <span className="font-capitalize">Interest</span>
                                </a>
                            </li>
                            <li>
                                <a className="mdl-navigation__link border-top-sep" data-scroll="" href="#projects">
                                    <i className="zmdi zmdi-code pr-15"></i>
                                    <span className="font-capitalize">Projects</span>
                                </a>
                            </li>
                            <li>
                                <a className="mdl-navigation__link border-top-sep border-bottom-sep" data-scroll="" href="#contact">
                                    <i className="zmdi zmdi-email pr-15"></i>
                                    <span className="font-capitalize">Contact</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="drawer-footer mt-50 mb-30 text-center">
                        <p className="font-12 mt-10">S Krupakar Reddy © {year}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;