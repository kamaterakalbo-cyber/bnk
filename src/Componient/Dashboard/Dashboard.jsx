import React, { useState } from "react";
import { Dashboards } from "./Dashboard";
import { IoAddCircleSharp, IoAddSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { BsFillSendFill } from "react-icons/bs";
import { IoMdArrowRoundDown, IoIosPeople, IoIosFlash } from "react-icons/io";
import { CgMoreVerticalR } from "react-icons/cg";
import { FaCreditCard } from "react-icons/fa";
import useDashboard from "./apifetch";
import { CiLock } from "react-icons/ci";
import { TbTransactionDollar, TbShieldDollar } from "react-icons/tb";
import { FiHelpCircle } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import Overlay from "../overlay.jsx";

const Dashbaord = () => {
  const fetchdata = useDashboard();
  const [showOverlay, setShowOverlay] = useState(false);
  //   time formatting
  const formatTime = (isoString) => {
    if (!isoString) return "";
    const date = new Date(isoString);
    return date.toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  return (
    <Dashboards>
      {showOverlay && <Overlay />}

      <div className="main-dashboard">
        <div className="accoutninfo">
          <div className="names">
            <p>West Vest Online Bank</p>
            <p>
              {" "}
              {fetchdata?.account?.account_number
                ? `****${fetchdata.account.account_number.toString().slice(-4)}`
                : ""}
            </p>
          </div>

          <div className="banaces">
            <p>Available Balance</p>
            <span>
              {" "}
              $
              {new Intl.NumberFormat("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(fetchdata?.account?.balance)}
            </span>
          </div>

          <div className="actives">
            <p className="acives">
              <span>
                <GoDotFill />
              </span>
              Active
            </p>
            <p>
              <span>{formatTime(fetchdata?.current_time)}</span>
            </p>
          </div>
        </div>

        <div className="sendtopup">
          <div className="onebyne1">
            <span
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/direct-deposit";
                }, 2000);
              }}
            >
              <IoAddCircleSharp />
            </span>
            <p
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/direct-deposit";
                }, 2000);
              }}
            >
              Top Up
            </p>
          </div>
          <div className="onebyne">
            <span
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/transfer-list";
                }, 2000);
              }}
            >
              <BsFillSendFill />
            </span>
            <p
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/transfer-list";
                }, 2000);
              }}
            >
              Send
            </p>
          </div>
          <div className="onebyne">
            <span
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/direct-deposit";
                }, 2000);
              }}
            >
              <IoMdArrowRoundDown />
            </span>
            <p
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/direct-deposit";
                }, 2000);
              }}
            >
              Recieve
            </p>
          </div>
          <div className="onebyne">
            <span
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/account";
                }, 2000);
              }}
            >
              <CgMoreVerticalR />
            </span>
            <p
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/account";
                }, 2000);
              }}
            >
              More
            </p>
          </div>
        </div>

        <div className="cartds">
          <div>
            <span
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/card-lock";
                }, 2000);
              }}
            >
              <CiLock />
            </span>
            <p
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/card-lock";
                }, 2000);
              }}
            >
              Card Unlocked
            </p>
          </div>
          <div>
            <span
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/direct-deposit";
                }, 2000);
              }}
            >
              <IoIosFlash />
            </span>
            <p
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/direct-deposit";
                }, 2000);
              }}
            >
              Early Direct Deposit
            </p>
          </div>
          <div>
            <span
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/transaction";
                }, 2000);
              }}
            >
              <TbTransactionDollar />
            </span>
            <p
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/transaction";
                }, 2000);
              }}
            >
              Transactions
            </p>
          </div>
          <div>
            <span
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/overdraft-protection";
                }, 2000);
              }}
            >
              <TbShieldDollar />
            </span>
            <p
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/overdraft-protection";
                }, 2000);
              }}
            >
              Overdraft Protection
            </p>
          </div>

          <div>
            <span
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/find-atm";
                }, 2000);
              }}
            >
              <FaLocationDot />
            </span>
            <p
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/find-atm";
                }, 2000);
              }}
            >
              ATM & Cast Deposit Map
            </p>
          </div>
          <div>
            <span
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/contactus";
                }, 2000);
              }}
            >
              <FiHelpCircle />
            </span>
            <p
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/contactus";
                }, 2000);
              }}
            >
              Get Help
            </p>
          </div>
        </div>

        <div className="quicttransfer">
          <p className="trasferquick">Quick Transfer</p>

          <div className="quicktransfrbox">
            <div className="myowns">
              <div className="addes">
                <span
                  onClick={() => {
                    setShowOverlay(true);
                    setTimeout(() => {
                      window.location.href = "/transfer-list";
                    }, 2000);
                  }}
                >
                  <IoAddSharp />
                </span>
                <p
                  onClick={() => {
                    setShowOverlay(true); // 👈 tell React to render Overlay
                    setTimeout(() => {
                      window.location.href = "/transfer-list";
                    }, 2000);
                  }}
                >
                  Add New
                </p>
              </div>
              <div className="addess">
                <span>
                  <IoIosPeople />
                </span>
                <p>No saved beneficiaries</p>
              </div>
            </div>

            <div className="myss">
              <div>
                <p>Your Active Cards</p>
                <span>
                  <FaCreditCard />
                </span>
                <p>No active cards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dashboards>
  );
};

export default Dashbaord;
