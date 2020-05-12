import React, { Component } from 'react';

import './SideNavComponent.scss';
import Menu from '../MenuItemComponent/MenuItemComponent';
import SideDrawer from './SideDrawer/SideDrawer';


export default class SideNavComponent extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
            isOpen: false
        };
    }
    render() {
        return (
            <div className="body">
                <div className="hamberger-berger"> </div>
                <div >
                    <Menu Name={"Photos"}></Menu>
                    <Menu Name={"About us"}></Menu>
                    <Menu Name={"Settings"}></Menu>
                    <Menu Name={"Profile"}></Menu>
                </div>
            </div>           
        );
    }
}