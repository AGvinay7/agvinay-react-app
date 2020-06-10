import React from 'react';
import './App.css';
import Footer from './components/FooterComponent/FooterComponent';
import Header from './components/HeaderComponent/HeaderComponent';
import SideNav from './components/SideNavComponent/SideNavComponent';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpened: false
    }
  }

  hideNavigtaion = () => {
    this.setState({ isOpened: !this.state.isOpened });
  }

  render() {
    return (

      <div className="container">

        {this.state.isOpened && <div className="navigation-bar"><SideNav callBackFunc={this.hideNavigtaion} /></div>}
        <div className="static-header-content">
          <Header
            handlerFunc={this.hideNavigtaion}
            Name={'Vinay AG'}            
            BodyText={'A sample React Web Application,'}

          />
        </div>
        <div className="main-content"><Footer></Footer></div>

      </div>
    );
  }


}

export default App;