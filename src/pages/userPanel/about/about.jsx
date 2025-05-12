import './about.css'
import { TiTick } from "react-icons/ti";

function AboutUs() {
    return(
        <div className="aboutContainer">
            <h4 className="aboutheading">About Us</h4>
            <div className="aboutbigbox">
                <div className="aboutleftbox">
                    <h1 className="abouth1" id='ab-txt'>The Best Polices With Good Interests%</h1>
                    <p>
                    At Prime Shield, we believe that peace of mind should be simple, accessible, and affordable. Our mission is to provide individuals, families, and businesses with reliable insurance coverage tailored to their unique needs—without the complexity or hidden fine print.
                    </p>
                    <div className="abouttickbox">
                        <div className="abouttickinsde">
                            <div className="aboutticktext">
                                <TiTick fontSize={"5vw"} color={"aqua"}/>
                                <span>Best Policies</span>
                            </div>
                            <div className="aboutticktext">
                                <TiTick fontSize={"5vw"} color={"aqua"}/>
                                <span>Professional Staff</span>
                            </div>
                        </div>
                        <div className="abouttickinsde">
                            <div className="aboutticktext">
                                <TiTick fontSize={"5vw"}color={"aqua"} />
                                <span>24/7 Support</span>
                            </div>
                            <div className="aboutticktext">
                                <TiTick fontSize={"5vw"} color={"aqua"}/>
                                <span>Fair Prices</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aboutrightbox">
                    <img src="images/about.jpg" alt="" style={{width:"80%"}}  />
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
