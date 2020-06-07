import React from 'react';
import IHeaderProps from './IHeaderProps';
import "./HeaderComponent.scss";
import ComponentThree from '../../HigherOderComponents/ComponentThree';
import hamburger from './../../images/five.png';

interface IHeaderState {
    vinay?: string,
    date: Date
}

export default class HeaderComponent extends React.Component<IHeaderProps, IHeaderState>{
    constructor(props: any) {
        super(props);
        this.setState({ date: new Date() });
    }


    componentDidMount() {
        setInterval(this.IncTime, 1000);
    }

    IncTime = () => {
        this.setState({ date: new Date() })
        console.log(this.state.date);

    }

    render() {
        return (
            <div>
                 
                <div>
                    <img className="hamburger" src={hamburger} onClick={this.props.handlerFunc}/>    
                    <div className="app-header"> {this.props.Name}</div>
                    <div className="inline-timer">{this.state?.date?.toLocaleTimeString()}</div>
                </div>
            </div>
        )
    }
}