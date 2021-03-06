import React, { Component } from 'react';
import './SideNavComponent.scss';
import Menu from '../MenuItemComponent/MenuItemComponent';
import SideDrawer from './SideDrawer/SideDrawer';
import ISideNavProps from './ISideNavProps';
import imgvinay from './../../images/four.png';

export default class SideNavComponent extends Component<ISideNavProps> {
    constructor(props: any) {
        super(props);
        this.state = {
            isOpen: false
        };
    }
    render() {
        return (
            <div className="body">
                <img src={imgvinay} className="closeButton" onClick={this.props.callBackFunc}/>
                <div >
                   
                    <Menu Name={""}></Menu>
                </div>
            </div>           
        );
    }
}