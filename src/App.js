import React from 'react';
import './App.css';
import Footer from './components/FooterComponent/FooterComponent';
import Header from './components/HeaderComponent/HeaderComponent';
import SideNav from './components/SideNavComponent/SideNavComponent';


class App extends React.Component {

  constructor(props){
  super(props);
   this.state = {
     isOpened : true
   }
  }

  hideNavigtaion = () => {
    this.setState({isOpened:!this.state.isOpened});
  }

  render() {
    return (    
   
    <div className="container">
      
      {this.state.isOpened && <div className="navigation-bar"><SideNav/></div>}
           <div className="static-header-content">
             <Header 
             Name={'NETFLIX'}
              BodyText={'A sample React Web Application,'}        
            
              />
              </div>
              <div className="main-content"><Footer handlerFunc={this.hideNavigtaion}></Footer></div>
                  
    </div>
    );
  }


}

export default App;