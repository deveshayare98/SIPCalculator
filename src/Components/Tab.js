import React, { useState } from "react";
import '../Styles/Tab.css'



function Tab(props) {

    return(
        <div className="tab-container">
            <div className="tab-list">
                {props.TabList.length>0 ? props.TabList.map((fact)=>{
                    return(
                        <div className={`tab-name ${fact.value===props.SelectedTab?"active":""} `} onClick={()=>{props.onClickTab(fact.value)}}>{fact.label}</div>
                    )
                }):""}
            </div>
        </div>
    )
}

export default Tab