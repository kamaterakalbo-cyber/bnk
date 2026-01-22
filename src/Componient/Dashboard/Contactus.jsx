import React from "react"
import {Contact} from './Contactus'
import { FaArrowLeft } from "react-icons/fa";






const Contactus = () => {

    return(
  <Contact>
    <section className="sections">

        <div className="header" onClick={() => window.location.href = '/profile'}>
  <FaArrowLeft/>
            <p>Contact Us</p>
        </div>

        <div className="healp">
            <h3>Get help in seconds</h3>
            <p>Check out our FAQs.</p>
        </div>
        <div className="healp">
            <h3>Still have a question? Chat with us</h3>
            <p>5am–9pm PST, 7 days a week</p>
            <p>Tap on Get Help from the home screen then tap Chat with Us.</p>
        </div>
        <div className="healp">
            <h3>Still can't find your answer? Call us</h3>
            <p>Contact Customer Support at</p>
            <p>(866) 795-7597</p>
            <p>support@westonline.org</p>
            <p>5am–9pm PST, 7 days a week.</p>
        </div>
        <div className="healp">
            <h3>Mail us</h3>
            <p>West Vent Online Bank</p>
            <p>4495 Crossings Boulevard</p>
            <p>Prince George, VA 23875</p>
           
        </div>
    </section>

  </Contact>

    )
}



export default Contactus