import 'material-design-lite/material';
function LandingPage() {
    console.log("This is inside Landing Page function!");
    return (<>
        <section style={styles.header} className="mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title">
                <span className="mdl-card__title-text">Showings for today</span>
            </div>
        </section>
        <section style={styles.filmsWrapper}>

            <section style={styles.wrapper} className="mdl-card mdl-shadow--2dp">
                <div style={styles.innerWrapper}>
                    <div style={styles.posterDiv}>
                        <img src="/img/posters/1.jpg" alt="" style={styles.poster} />
                    </div>
                    <div style={styles.textDiv}>
                        <p style={styles.title}>Movie title here</p>
                        <p style={styles.runtimeP}>Runtime minutes</p>
                        <p style={styles.tagline}>Movie tagline here</p>
                    </div>
                </div>
                <div style={styles.showings}>
                    Showing times will go here
            </div>
            </section>

        </section>
    </>);
}

export default LandingPage
const styles = {};