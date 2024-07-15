import './Header.css';

import { BrowserRouter as Link } from 'react-router-dom';


function Header() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="row text-center">
                        <h1>Grundlagen Web-Programmierung</h1>
                        <p>Willkommen zum Kurs!</p>
                    </div>
                </div>
            </header>
        </>
    );
}
export default Header;