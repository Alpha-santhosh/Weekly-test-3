import React from 'react'
import './sectionone.css'
function Sectionone() {
    return (
        <div className="sectione_one">
            <header>
                <div className="log">
                    <img src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png" alt="" className='credlog' />
                </div>
                <nav>
                    <div className="a">
                        <a href="">credit score check</a>
                    </div>
                    <div className="a">
                        <a href="">CRED pay</a>
                    </div>
                </nav>
            </header>
            <div className="hero">
                <div className="heading">
                    rewards for paying
                    credit card bills.
                </div>
                <div className="para">
                join 9M+ members who win rewards and cashbacks everyday
                </div>
                <div className="download_btn">
                Download CRED
                </div>
            </div>
        </div>
    )
}

export default Sectionone;