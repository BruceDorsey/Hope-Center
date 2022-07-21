import React from "react";
import '/workspace/Hope-Center/hopecenter/src/App.css';
import SidebarData from './SidebarData'


function Sidebar(){

    return(
        <div className='Sidebar' >
            <p id="Whitetext">You will be redirected to page requiring personal information after comfirmation.</p>
                <SidebarData />
         
        </div>
    )
}
export default Sidebar;