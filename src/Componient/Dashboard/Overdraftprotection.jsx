import React from "react";
import { Overdraft } from "./Overdraftprotection";

import { FaArrowLeft } from "react-icons/fa";

const Overdraftprotection = () => {
  return (
    <Overdraft>
      <section className="maiana">
        <div className="headers">
          <FaArrowLeft onClick={() => window.location.href = '/profile'} />
          <p onClick={() => window.location.href = '/profile'}>Overdraft Protection</p>
        </div>

        <div className="mysite">
            <h3>Get up to $200 in overdraft protection</h3>
            <p>Set up direct deposit and opt in to get covered for every purchase.</p>
        </div>

        <div className="mayss8">
            <h4>Get up to $200 in overdraft protection</h4>
            <h4>No fees incurred if your available balance is overdrawn by $10 or less.</h4>
            <h4>No fees if you repay your overdraft amount within 24 hours.</h4>
            <h4>Receive up to 10 overdraft transactions per statement period.</h4>
            <h4>Initial & ongoing coverage is based on your eligible direct deposits and account activity. You may opt out at any time.</h4>
            
        </div>

        <div className="setsts">
            <p>
                Opt-in required. Account must be in good standing and chip-enabled debit card activated to opt-in. Initial and ongoing eligible direct deposits are required for overdraft coverage. Additional criteria may apply which can affect your eligibility and your overdraft coverage. Overdrafts are paid at our discretion. Overdraft fees may cause your account to be overdrawn by an amount that is greater than your overdraft coverage. A $15 fee may apply to each eligible purchase transaction that brings your account negative. Balance must be brought to at least $0 within 24 hours of authorization of the first transaction that overdraws your account to avoid a fee. More questions? See FAQs for details.
            </p>
        </div>

        <div className="burr">
            <button onClick={() => window.location.href = '/direct-deposit'}>
                Set up direct deposit
            </button>
        </div>
      </section>
    </Overdraft>
  );
};

export default Overdraftprotection;
