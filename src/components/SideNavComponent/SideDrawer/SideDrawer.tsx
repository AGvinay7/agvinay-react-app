import React from "react";
import "./SideDrawer.scss";
class SideDrawer extends React.Component {

    constructor(props: any) {
        super(props)
        this.state = {
            isOpen: false
        }
    }
    render() {
        return (<button className="toggleSideBar">
            <div className="one">  </div>
            <div className="two">   </div>
            <div className="three">  </div>
        </button>
        )
    }

}

export default SideDrawer;