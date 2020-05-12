import React from 'react';
import IHOCprops from './IHOCprops';


let GenRanNum = (InpNum:any) => {
    return Math.random() + InpNum;

};

const HigherOderComponent = (OriginalComp: any) => {

class NewComponent extends React.Component<IHOCprops>{

    constructor(props:any){
          super(props);
           
    }
    render(){
        return <OriginalComp Naeme = {'vinay'} val = {GenRanNum(this.props.InpNum)}/>
    }

}

return NewComponent

}


export default HigherOderComponent;