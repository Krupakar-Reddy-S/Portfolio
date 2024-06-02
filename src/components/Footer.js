import '../css/Footer.css';

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className='footer'>
            <p className='text-thanks'>Thank You For Visiting.</p>
            <p className='text-copyright'>S. Krupakar Reddy © {year} All rights reserved.</p>
        </footer>
    );
}

export default Footer;