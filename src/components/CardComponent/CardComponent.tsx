import React from 'react';
import IC from './ICardComponent';
import './CardComponent.scss';


export default class CardComponent extends React.Component<IC>{
    constructor(props: any) {
        super(props);

    }
    render() {
        return <div className="card" > <b>{Math.floor(Math.random() * 100) + 1}</b> </div>
    }

} 