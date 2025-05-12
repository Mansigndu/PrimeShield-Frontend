import './pricing.css'

function Pricing() {
    return (
        <>
            <div className="pricingbigbox">
                <h3>Insurance Plans</h3>
                <h1>We Offer Comprehensive <br />Coverage at Competitive Rates</h1>
                <div className="pricingbox">
                    <div className="leftpricingbox">
                        <h3 className='pricingboxh3'>Basic Coverage</h3>
                        <p>IDEAL FOR INDIVIDUALS</p>
                        <div className="leftpricingbigbox">
                            <h5>
                                Third-Party Liability<br /><br />
                                Personal Accident Cover<br /><br />
                                Emergency Assistance<br /><br />
                                Online Claim Support
                            </h5><br />
                            
                        </div>
                    </div>
                    <div className="centerpricingbox">
                        <h3 className='pricingboxh3'>Standard Coverage</h3>
                        <p>PERFECT FOR SMALL FAMILIES</p>
                        <div className="centerpricingbigbox">
                            <h5>
                                Includes Basic Plan<br /><br />
                                Theft & Fire Coverage<br /><br />
                                Roadside Assistance<br /><br />
                                Cashless Repairs
                            </h5><br />
                            
                        </div>
                    </div>
                    <div className="rightpricingbox">
                        <h3 className='pricingboxh3'>Premium Coverage</h3>
                        <p>BEST FOR FULL PROTECTION</p>
                        <div className="rightpricingbigbox">
                            <h5>
                                Includes Standard Plan<br /><br />
                                Natural Disaster Coverage<br /><br />
                                No Claim Bonus Protection<br /><br />
                                24/7 Helpline & Concierge
                            </h5><br />
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricing;