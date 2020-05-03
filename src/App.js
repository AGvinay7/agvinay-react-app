import React from 'react';
import './App.css';
import Footer from './components/FooterComponent/FooterComponent';
import Header from './components/HeaderComponent/HeaderComponent';
import SideNav from './components/SideNavComponent/SideNavComponent';
import MenuItem from './components/MenuItemComponent/MenuItemComponent';

class App extends React.Component {
    
 render(){
   return (<div className="App">
   {/* <header className="App-header">  
    
     <a
       className="App-link"
       href="https://github.com/AGVinay7"
       target="_blank"
       rel="noopener noreferrer"
     >
       VinayAG@GitHub
     </a>
   </header> */}
   <Header/>
   <SideNav/>
   <MenuItem Name={"Menu-Item"}></MenuItem>
   <Footer/>
 </div>);
 }


}

export default App;
