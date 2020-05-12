import React, { Component } from 'react';
import logger from 'loglevel';

interface IFooterProps{
    handlerFunc : any
}

export default class FooterComponent extends Component <IFooterProps>{
    constructor(props:any) {
        super(props);
        this.state = {
            test : ""
        }
    }
    render() {
        logger.info("started !!!");
        return <div><button onClick={this.props.handlerFunc}>Hide HB</button></div>        
    }
}