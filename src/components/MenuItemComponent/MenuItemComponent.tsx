import React, { Component } from 'react';
import IMenuProps from './IMenuProps';
import './MenuItemComponent.scss';

export default class MenuItemComponent extends Component<IMenuProps>{
    constructor(props: IMenuProps) {
        super(props);
    }
    render() {
        return (
            <div className="menu-item">
                <a href="https://www.linkedin.com/in/vinay-ag">LinkedIn</a>                
                <a href="https://www.github.com/AGvinay7">GitHub</a>
                <a href="https://www.instagram.com/agvinn">Instagram</a>
                <a href="https://www.facebook.com/vinay.ag.5205">Facebook</a>
            </div>
        );
    }
}