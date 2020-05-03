import React, { Component } from 'react';
import IMenuProps from './IMenuProps';

export default class MenuItemComponent extends Component<IMenuProps>{
    constructor(props:IMenuProps) {
        super(props);
    }
    render()
    {
    return <h1>{this.props?.Name} </h1>
    }
}