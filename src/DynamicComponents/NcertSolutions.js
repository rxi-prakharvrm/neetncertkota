import { Link } from 'react-router-dom';

const NcertSolutions = () => {
    return (
        <div class="ncert-solutions-main-section">
            <div class="ncert-solutions-main-section-ctr">
                <div class="ncert-solutions-main-section-text-ctr">
                    <h1 class="ncert-solutions-main-section-text-ctr-header">NCERT SOLUTIONS</h1>
                    <p class="ncert-solutions-main-section-text-ctr-para">We have all the solutions of Ncert and other
                        textbooks. When we read the NCERT Books specially the Biology textbook. NCERT asks you some
                        questions during the chapter and at the end of the chapter to enhance your curiosity in the chapter
                        and to make you check yourself at the end of the chapter in the Exercise. We recommend you first to
                        give the answer yourself and then check the best explanations here on our website. All the teachers
                        here are well Qualified and have experienced for the NEET exam themselves.</p>
                </div>
                <div class="ncert-solutions-class-ctr">
                    <Link to="/ncert-solutions/neet" class="ncert-solutions-class-tile">NEET</Link>
                    <Link to="/ncert-solutions/class12" class="ncert-solutions-class-tile">12</Link>
                    <Link to="/ncert-solutions/class11" class="ncert-solutions-class-tile">11</Link>
                    {/* <Link to="ncert-solutions/10.html" class="ncert-solutions-class-tile">10</Link>
                    <Link to="ncert-solutions/09.html" class="ncert-solutions-class-tile">09</Link>
                    <Link to="ncert-solutions/08.html" class="ncert-solutions-class-tile">08</Link> */}
                </div>
            </div>
        </div>
    );
}
 
export default NcertSolutions;