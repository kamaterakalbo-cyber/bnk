import React, { use, useState, useEffect } from "react";
import {Cardlocks} from './Cardlock'
import { FaArrowLeft } from "react-icons/fa";
import { IoLockClosedSharp, IoLockOpen } from "react-icons/io5";







const Cardlock = () => {

   const [lock, setLock] = useState(() => {
    const savedLock = localStorage.getItem("cardLocked");
    return savedLock === "true";
  });

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cardLocked", lock);
  }, [lock]);

  const Locked = () => {
    setLock(prev => !prev);
  };
    return(

        <Cardlocks>
<section className="lock-unlock-card">

        <div className="unlock-card" onClick={() => window.location.href = '/profile'}>
          <FaArrowLeft/>
          <p>Lock/Unlock Card</p>
        </div>

<div className="locekedcard">
  <p>Lock Card</p>
   {lock ? <IoLockOpen onClick={Locked} style={{color: 'green'}}/> : < IoLockClosedSharp onClick={Locked} style={{color: 'red'}}/>}
</div>



  <p className="iflock">If you lock your card, withdrawals and debit transactions associated with your card will not be authorized until you unlock your card.</p>

  <p className="headings">Despite the locked status of your card, the following account activity is still available:</p>
  <ul>
    <li>Debit transactions authorized before you locked your account</li>
    <li>Direct deposits to your account</li>
    <li>Payment transactions conducted using your account and routing number</li>
    <li>Recurring bill payments set up through your Green Dot</li>
    <li>Depositing checks using your smartphone</li>
    <li>Sending money to family and friends</li>
    <li>Putting money into the High-Yield Savings Account</li>
    <li>Debits or credits applied by Green Dot Customer Service Agents</li>
  </ul>

  <p className="mones">Monthly fees will continue on locked cards.</p>

  <p className="margto">If you lost your card or believe it has been stolen, click here.</p>

  <p className="loststs">A lost/stolen card replacement fee may apply.</p>
</section>


</Cardlocks>

    )
}




export default Cardlock