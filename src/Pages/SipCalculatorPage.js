import React, { useEffect, useState } from "react";
import Banner from "../Component/Banner";
import Tab from "../Component/Tab";
import SliderRange from "../Component/SliderRange";
import Group from "../Assests/Images/Group.png";
import VerticalBar from "../Component/VerticalBar";
import calculateSIP from "../utils/SIPReturnCalculation";
import "../Styles/SipCalculatorPage.css";

var TabList = [
  { label: "SIP Calculator", value: "sip_calculator" },
  { label: "Choose Fund/s", value: "choose_fund" },
  { label: "Confirm", value: "confirm" },
];

const PriceArray = [
  { label: "5k", value: "5000" },
  { label: "10k", value: "10000" },
  { label: "25k", value: "25000" },
  { label: "50k", value: "50000" },
];

const yearArray=['5','10','15','20']

function SipCalculatorPage(props) {
  const [activeTab, setActiveTab] = useState("sip_calculator");
  const [selectedRange, setselectedRange] = useState(1000);
  const [ReturnproficArr,setreturnproficArr]=useState([])
  function onClickTabFun(data) {
    setActiveTab(data);
  }

  useEffect(()=>{
    (async()=>{
      const profitArray=await calculateReturn('1000')
      setreturnproficArr(profitArray)
    })()
  },[])

  async function setSliderPrice(value) {
    setselectedRange(value);
    const profitArray=await calculateReturn(value)
    setreturnproficArr(profitArray)
    
  }

  function calculateReturn(value){
    let newReturnArr=yearArray.map((fact)=>{
        const futureValue = calculateSIP( 0, Number(value), 10, Number(fact) );
        return futureValue
    })
    
    return newReturnArr
  }

  async function selectedSliderfun(value) {
    setselectedRange(value);
    const profitArray=await calculateReturn(value)
    setreturnproficArr(profitArray)
  }
  return (
    <div className="sip-main-container">
      <div className="sip-sub-container">
        <Banner />
        <div className="sip-middle-section">
          <div className="description">
            <div className="left-section">
              <div>Dear Aditya</div>
              <div>
                Every day, all we do think about future. what it hold for us?
                How successful would we be? How secure would we feel? How high
                would we go?
              </div>
              <div>
                While the questions are many, what people really want from their
                future is be happy... we are glad to announce "
                <b>Happy Tomorrows</b>" under our `Financial Awareness and
                Wellbeing Initiative` for all MOFSL Associates.
              </div>
              <div>
                Like all successful inverstors, you should also start your
                journey to "<b>Happy Tomorrows</b>" by starting early in a{" "}
                <b>SIP</b> and staying invested for long term!{" "}
              </div>
            </div>
            <div className="right-section">
              <img src={Group} width="230px" height="180px" />
            </div>
          </div>
          <div className="emp-details">
            <div className="emp-code">Employee Code: M0611</div>
            <div className="emp-company">
              Company: Motilal Oswal Asset Management Company Limited
            </div>
          </div>
        </div>
        <div className="sip-buttom-section">
          <Tab
            SelectedTab={activeTab}
            onClickTab={onClickTabFun}
            TabList={TabList}
          />
          {activeTab == "sip_calculator" ? (
            <div className="sip-calculator-container">
              <div className="title">Review your investment details</div>
              <div className="sub-title">
                Use the slider for selecting investment amount
              </div>
              <div className="middle-section">
                <div className="left-section">
                  <span className="label">MONTHLY SIP AMOUNT</span>
                  <SliderRange
                    range
                    min={500}
                    max={100000}
                    step={500}
                    selecetedValue={selectedRange}
                    selectedSlider={(e) => selectedSliderfun(e)}
                    tipFormatter={(value) => `${value}!`}
                  />
                  <div className="button-groups">
                    {PriceArray.length > 0 &&
                      PriceArray.map((fact) => {
                        return (
                          <button
                            className="primary-button"
                            onClick={() => setSliderPrice(fact.value)}
                          >
                            {fact.label}
                          </button>
                        );
                      })}
                  </div>
                </div>
                <div className="right-section">
                  <VerticalBar selectedSIP={ReturnproficArr} />
                </div>
              </div>
              <div className="bottom-section">
                <div className="small-text">Assumed annual 10% return</div>
                <div className="condition-section">
                  <div className="condition-info">
                    <p>
                      *The above is for illustration purpose only. The SIP
                      amount, tenure of SIP, expected rate of return are assumed
                      figures for the purpose of explaining the concept of a...
                      Read More
                    </p>
                  </div>
                  <div className="button-section">
                    <button className="next-button">Next</button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {activeTab == "choose_fund" ? <div>Choose Fund/s</div> : ""}
          {activeTab == "confirm" ? <div>Confirm</div> : ""}
          
        </div>
      </div>
    </div>
  );
}

export default SipCalculatorPage;
