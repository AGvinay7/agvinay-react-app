import React, { Component } from 'react';
import IHeaderProps from './IHeaderProps';

export default class HeaderComponent extends Component<IHeaderProps>{
    constructor(props:any) {
        super(props);
    }
    render()
    {
        return <h1>Header </h1>
    }
}