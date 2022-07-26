import React from "react";
import '/workspace/Hope-Center/hopecenter/src/App.css';
import SidebarData from './SidebarData'


function Sidebar(){

    return(
        <div className='Sidebar' >
            <p id="select">Please Select Your Donation Date</p>
            <p id="Whitetext">You will be redirected to page requiring personal information after comfirmation.</p>
            <div id="confirm">
                <p><a href="#">Confirm Date</a></p>
            </div>
                <SidebarData />
         
        </div>
    )
}
export default Sidebar;