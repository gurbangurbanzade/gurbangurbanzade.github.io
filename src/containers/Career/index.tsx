import React from 'react'
import BackBtn from '../../components/backBtn'
import "./style.scss"
function Career() {
    return (
        <>
            <BackBtn />
            <div className='career'>

                <section className="design-section">
                    <div className="timeline">




                        {/* row 5 */}
                        <div className="timeline-empty ">
                        </div>

                        <div className="timeline-middle top">
                            {/* <div className="timeline-circle"></div> */}
                        </div>
                        <div className="timeline-component timeline-content animated animatedFadeInUp fadeInUp six">
                            <div className="lineCardCareer deadBlue"></div>
                            <div className="textCareer">
                                <h3>Junior Front-End Developer</h3>
                                <p>Remote worker at AFB</p>
                                <p>2037</p>
                            </div>
                        </div>
                        {/* row 4 */}
                        <div className="timeline-component timeline-content study  animated animatedFadeInUp fadeInUp five">
                            <div className="textCareer">
                                <h3>Masters Degree at Data Science</h3>
                                <p>UNEC</p>
                                <p>2035-2037</p>
                            </div>
                            <div className="lineCardCareer deadOrange"></div>
                        </div>

                        <div className="timeline-middle">
                            <div className="timeline-circle"></div>
                        </div>
                        <div className="timeline-empty">
                        </div>
                        {/* row 3 */}
                        <div className="timeline-empty">
                        </div>

                        <div className="timeline-middle">
                            <div className="timeline-circle"></div>
                        </div>

                        <div className="timeline-component timeline-content animated animatedFadeInUp fadeInUp four">
                            <div className="lineCardCareer brightOrange"></div>
                            <div className="textCareer">
                                <h3>Help Desk</h3>
                                <p>Azercell</p>
                                <p>2034-2035</p>
                            </div>

                        </div>
                        {/* row 2 */}
                        <div className="timeline-component timeline-content study animated animatedFadeInUp fadeInUp three">
                            <div className="textCareer">
                                <h3>Bachelor degree of Computer Science</h3>
                                <p>Baku State University</p>
                                <p>2030-2034</p></div>
                            <div className="lineCardCareer deadOrange deadOrangeBorder"></div>

                        </div>
                        <div className="timeline-middle">
                            <div className="timeline-circle"></div>
                        </div>

                        <div className="timeline-component timeline-content animated animatedFadeInUp fadeInUp two">
                            <div className="lineCardCareer neonBlue"></div>
                            <div className="textCareer">
                                <h3>Volunteer as Business Manager </h3>
                                <p>Azercell</p>
                                <p>2030-2034</p></div>

                        </div>
                        {/* row 1 */}
                        <div className="timeline-component timeline-content study animated animatedFadeInUp fadeInUp one" style={{ paddingTop: 0, paddingBottom: 0 }}>
                            <div className="textCareer">
                                <h3>School</h3>
                                <p>School №32</p>
                                <p>2019-2030</p></div>
                            <div className="lineCardCareer deadGreen"></div>

                        </div>
                        <div className="timeline-middle bottom">
                            <div className="timeline-circle"></div>
                        </div>

                        <div className="timeline-empty">
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
// https://codepen.io/keeann/pen/RmEbav
export default Career