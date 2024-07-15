import './HomeCard.css';

function HomeCard() {

    return (
        <article className="card">
            <div id="intro">
                <div>
                    <p>Im Kurs Grundlagen Web-Programmierung wirst du die theoretischen und praktischen
                        Grundlagen
                        für die Realisierung einer Weboberfläche erarbeiten.</p>
                    <p>Solche Grundlagen sind:</p>
                    <ul>
                        <li>Das Grundlegende Prinzip eines Web Browsers, worauf jede Website basiert.</li>
                        <li>HTML, CSS und JavaScript als Programmiersprachen.</li>
                        <li><span >Wie ich eine Website veröffentlichen kann.</span>
                        </li>
                        <li><span>Wie verschiedene Architekturen von modernen
                            Webapplikationen aussehen.</span></li>
                    </ul>
                    <p>Bewertet wird der Kurs über eine Prüfung und einer Modularbeit. Die Arbeit wird daraus
                        bestehen eine Website über dich selbst zu erstellen.</p>
                </div>
            </div>
        </article>
    );
}

export default HomeCard;