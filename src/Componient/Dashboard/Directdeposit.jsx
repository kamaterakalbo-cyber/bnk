import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import {Directdepositt} from './Directdeposi'
import { DollarSign, Clock } from "lucide-react";
import { RiSecurePaymentFill } from "react-icons/ri";
import { IoNotificationsOff } from "react-icons/io5";
import useDashboard from  './apifetch'




<div className="feature">
  <DollarSign size={20} />
  <Clock size={20} />
  <span>Get paid up to 2 days early</span>
</div>



const Directdeposit = () => {

    const fetchdata = useDashboard();
  return (
    <Directdepositt>
    <section className="direct-deposit">
      <div className="backedheader" onClick={() => window.location.href = '/profile'}>
        <FaArrowLeft/>
        <p>Direct Deposit</p>
      </div>

    <div className="header">
              <h2>Get more with early direct deposit</h2>

      <p>
        Deposit all or some of your paycheck for a fast, easy &amp; secure way to manage your money:
      </p>
    </div>

      <div className="ul">
        <div>
            <span><DollarSign /></span>
           <div>
            <p className="mymain">
         <strong>
            Get your pay up to 2 days early<sup>1</sup>
          </strong>
          <p className="mywrites">government benefits up to 4 days early</p>
            </p>
        
           </div>
        </div>
        <div>
            <span><RiSecurePaymentFill /></span>
           <div>
            <p className="mymain">
          <strong>
            Unlock overdraft protection up to $200<sup>2</sup><br/>
          </strong>
          <p className="mywrites">with opt in and eligible direct deposit</p>
            </p>
 
            {/* <p> with opt in and eligible direct deposit</p> */}
           </div>
        </div>
        <div>
            <span><IoNotificationsOff/></span>
           <div>
          <p className="mymain">
          <strong>
            Get notified with direct deposit alerts<sup>3</sup>
          </strong>
          <p className="mywrites">Message and data rates may apply</p>
            </p>
            
           </div>
        </div>



      </div>

<div className="account">
       <p className="mainsnss">
        It’s easy! Just provide your account and bank routing numbers to your payroll or benefits provider by quickly emailing your information using the buttons below.
      </p>

      <div className="account-details">
        <p><strong>ROUTING #:</strong> 251480576</p>
        <p><strong>ACCOUNT #:</strong> {fetchdata?.account?.account_number}</p>
        <p><strong>ACCOUNT TYPE:</strong> Checking</p>
        <p><strong>BANK NAME:</strong> West Vent Online Bank</p>
        <p><strong>BANK ADDRESS:</strong> 4495 Crossings Boulevard, Prince George, VA 23875</p>
        <p><strong>SWIFT/BIC:</strong>CHASUS33</p>
      </div>

      <div className="disclosures">
     <div>
        <p>
          <strong>1.</strong> Direct deposit early availability depends on timing of payor’s payment instructions and fraud prevention restrictions may apply. As such, the availability or timing of early direct deposit may vary from pay period to pay period. The name and Social Security number on file with your employer or benefits provider must match your account exactly or we will decline your deposit.
        </p>
        <p>For federal government benefits, enroll by visiting <span>https://godirect.gov/gpw/contactAgency/</span> (godirect.gov in Bing) and calling the appropriate Agency number. Contact your relevant state paying agency to enroll in direct deposit for your state benefits. This app page contains a hyperlink to godirect.gov. . West Vent Online Bank does not provide, and is not responsible for, the products, services, or overall website content available on godirect.gov. . The West Vent Online Bank Privacy Policy does not apply to godirect.gov, and you should consult the privacy disclosures on godirect.gov  for further information.</p>
      
     </div>
     <div>
        <p>
          <strong>2.</strong> Opt-in required. Account must be in good standing and chip-enabled debit card activated to opt-in. Initial and ongoing eligible direct deposits are required for overdraft coverage. Additional criteria may apply which can affect your eligibility and your overdraft coverage. Overdrafts are paid at our discretion. Overdraft fees may cause your account to be overdrawn by an amount that is greater than your overdraft coverage. A $15 fee may apply to each eligible purchase transaction that brings your account negative. Balance must be brought to at least $0 within 24 hours of authorization of the first transaction that overdraws your account to avoid a fee. Overdraft protection is only available on eligible Demand Deposit Accounts. Log into your account and refer to your Account Agreement to check feature availability.</p>
     </div>
     <div>
        <p>
          <strong>3.</strong> Message and data rates may apply.</p>
          </div>
      </div>
</div>
      </section>
    
</Directdepositt>
)
}


export default Directdeposit