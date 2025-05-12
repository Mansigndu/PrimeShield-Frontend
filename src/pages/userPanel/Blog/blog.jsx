             
import './blog.css';

function Blog() {
    return (
        <>
            <div className="blogbox">
                <h4 className='blog1'>LATEST BLOG</h4>
                <h2 className='blog2'>Explore Insights from <br />Our Insurance Experts</h2>
                <div className="blogbigbox">

                    <div className="leftblog">
                        <img src="images/blog-1.jpg" alt="Understanding Insurance" style={{ height:"50vh", width:"90%" }} />
                        <div className="left1blog">
                            <h4 className='H'>Understanding General Insurance</h4>
                            <p>Learn the basics of general insurance, what it covers, <br />and why it's essential for everyday life.</p>
                        </div>
                    </div>

                    <div className="centerblog">
                        <img src="images/blog-2.jpg" alt="Choosing the Right Policy" style={{ height:"50vh", width:"90%" }} />
                        <div className="center1blog">
                            <h4 className='H'>How to Choose the Right Policy</h4>
                            <p>Explore tips on selecting a general insurance plan <br />that suits your needs and lifestyle.</p>
                        </div>
                    </div>

                    <div className="rightblog">
                        <img src="images/blog-3.jpg" alt="Claim Process" style={{ height:"50vh", width:"90%" }} />
                        <div className="right1blog">
                            <h4 className='H'>Simplifying the Claim Process</h4>
                            <p>A step-by-step guide on how to file a claim <br />and what documents are needed.</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Blog;
