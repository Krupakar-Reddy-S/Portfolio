import '../css/Interests.css';

function Interests() {
    return (
        <div id="interests">
            <h2>Interests</h2>
            <div className="interests-cards">
                <div className="interests-card">
                    <i class="zmdi zmdi-tv font-blue interest-icon"></i>
                    <h3>Movie</h3>
                </div>
                <div className="interests-card">
                    <i class="zmdi zmdi-radio font-blue interest-icon"></i>
                    <h3>Music</h3>
                </div>
                <div className="interests-card">
                    <i class="zmdi zmdi-smartphone font-blue interest-icon"></i>
                    <h3>Gaming</h3>
                </div>
                <div className="interests-card">
                    <i class="zmdi zmdi-camera font-blue interest-icon"></i>
                    <h3>Photography</h3>
                </div>
                <div className="interests-card">
                    <i class="zmdi zmdi-library font-blue interest-icon"></i>
                    <h3>Reading</h3>
                </div>
                <div className="interests-card">
                    <i class="zmdi zmdi-airplane font-blue interest-icon"></i>
                    <h3>Traveling</h3>
                </div>
            </div>
        </div>
    );
}

export default Interests;