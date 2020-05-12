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
                <a href="/">{this.props?.Name}</a>
            </div>
        );
    }
}