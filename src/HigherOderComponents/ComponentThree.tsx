import React from 'react';
import HOC from './HigherOderComponent';


 class ComponentThree extends React.Component {
  

    // constructor(props: any) {
    //     super(props);
    // }
   
    render() {
    return <div> {this.props.children}  </div>
    }
}
export default HOC(ComponentThree);