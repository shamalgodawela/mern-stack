import React,{Component} from "react";
import{BrowserRouter,Route, Routes} from 'react-router-dom';
import Employeedetails from './components/Employeedetails'
import Createemp from "./components/Createemp";
import Hrlogin from "./components/Hrlogin";
import Addassets from "./components/Addassets";
import Assetsdetails from "./components/Assetsdetails";
import Hrhome from "./components/Hrhome";
import Edit from "./components/Edit";
import Report from "./Report";
import Assetsreport from "./components/Assetsreport";
import Example from "./components/Example";
import Home from "./components/Home";



export default class App extends Component {
 render(){

    return(
      <BrowserRouter>
      <div>
   
  
     

        <Routes>

        

        <Route path="/" element={<Hrlogin/>}/>
        <Route path="/assets/add" element={<Addassets/>}/>
        <Route path="/hrindex" element={<Home/>}/>
        <Route path="/details" element={<Employeedetails/>}/>
        <Route path="/create" element={<Createemp/>}/>
        <Route path="/assets" element={<Assetsdetails/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/hrhome" element={<Hrhome/>}/>
        <Route path="/report" element={<Report/>}/>
         <Route path="/asreport" element={<Assetsreport/>}/>
         <Route path="/example" element={<Example/>}/>
      



     
        
  
        </Routes>


      </div>
      
      
      
      </BrowserRouter>
      
     
    )
 }
  
}