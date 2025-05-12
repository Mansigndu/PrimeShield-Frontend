
import './members.css';

function Members() {
    return (
        <>
            <div className="bigmember">
                <h5 className='hm'>OUR TEAM</h5>
                <h2 className='hh'>Meet the Experts Behind Your <br />Insurance Security</h2>
                
                <div className="insidebox ">

                    <div className="leftmember d-flex flex-column gap-2">
                        <img src="images/team-1.jpg" alt="Team Member" style={{ height: "45vh", width: "100%" }} />
                        <div className="left1member">
                            <h4 className='hm'>Rahul Verma</h4>
                            <h5 className='hh'>Claims Specialist</h5>
                        </div>
                    </div>

                    <div className="centermember d-flex flex-column gap-2">
                        <img src="images/team-2.jpg" alt="Team Member" style={{ height: "45vh", width: "100%" }} />
                        <div className="center1member">
                            <h4 className='hm'>Sneha Verma</h4>
                            <h5 className='hh'>Policy Advisor</h5>
                        </div>
                    </div>

                    <div className="rightmember d-flex flex-column gap-2">
                        <img src="images/team-3.jpg" alt="Team Member" style={{ height: "45vh", width: "100%" }} />
                        <div className="right1member">
                            <h4 className='hm'> Mohit Sharma</h4>
                            <h5 className='hh'>Customer Support Head</h5>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Members;
