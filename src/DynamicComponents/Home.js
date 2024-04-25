const Home = () => {
    return (
        <>
            <div className="main-section">
                <div className="main-section-inner-ctr">
                    <div className="main-text-ctr">
                        <span className="main-text-ctr-before-1"></span>
                        <div className="main-text-inner-ctr">
                            <h1 className="main-text-ctr-header">SIMPLEST NCERT EXPLANATION</h1>
                            <p className="main-text-ctr-para">We provide you the best and the easiest explanation of NCERT.</p>
                        </div>
                        <span className="main-text-ctr-after-1"></span>
                    </div>
                </div>
            </div>
        
            <div className="what-makes-us-different-ctr">
                <h1 className="what-makes-us-different-header">What makes NEETNCERTKOTA different from others?</h1>
                <div className="what-makes-us-different-inner-ctr">
                    <div className="what-makes-us-different-upper-row">
                        <div className="no-sign-up-ctr">
                            <h3 className="no-sign-up-header">Sign up <span className="bold-colored-text">not</span> required to explore our content.</h3>
                            <p className="no-sign-up-para">We don't force you to sign up or give your details before letting you see
                                our
                                content like others.<br /><br />
        
                                You can visit our site freely and enjoy solving and learning question if you want to subscribe
                                our
                                Interview-shorts and inspire story blog then by your wish you can subscribe at the end of the
                                page.<br /><br />
        
                                Our moto is only to save your time for study and help you understand the depth of question.<br />
                            </p>
                        </div>
                        <div className="what-makes-us-different-img-ctr"><img src="./images/no-sign-up.jpg" alt="No Sign Up" /></div>
                    </div>
                    <div className="what-makes-us-different-lower-row">
                        <div className="what-makes-us-different-img-ctr"><img src="./images/two-different-answer.jpg"
                                alt="Two different answer" /></div>
                        <div className="two-types-answer-ctr">
                            <h3 className="two-types-answer-header">We Provide you <span className="bold-colored-text">two</span> different solutions</h3>
                            <p className="two-types-answer-para">
                                A: short one word answer <br />
                                B: Long explanation.<br /><br />
                                This helps you save your time if you just want to confirm the final answer and already know the
                                depth of concept.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Home;
