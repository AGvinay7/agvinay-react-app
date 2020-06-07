import React, { Component } from 'react';
import logger from 'loglevel';
import CardComponent from '../CardComponent/CardComponent';
import './FooterComponent.scss';


interface IState {
    images: any
}

export default class FooterComponent extends Component<IState>{
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        fetch('https://picsum.photos/200/300').then((res) => {
            console.log(res);


        });
    }
    render() {

        logger.info("started !!!");
        return (
            <div>
                <div>
                   
                    {/* {this.state!.images} */}

                </div>

               {/*  <div className="cards">
                    <CardComponent Content={""}></CardComponent>
                    <CardComponent Content={""}></CardComponent>
                    <CardComponent Content={""}></CardComponent>
                    <CardComponent Content={""}></CardComponent>
                    <CardComponent Content={""}></CardComponent>
                    <CardComponent Content={""}></CardComponent>
                    <CardComponent Content={""}></CardComponent>
                    <CardComponent Content={""}></CardComponent>
                    <CardComponent Content={""}></CardComponent>
                    <CardComponent Content={""}></CardComponent>
                </div> */}
            </div>)

    }
}