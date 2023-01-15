import React, { Component } from "react";
import './css/hrindex.css';
import axios from "axios";

export default class Home extends Component{
    constructor(props){
        super(props);
    
        this.state={
          hrs:[]
        };
      }
    
    componentDidMount(){
      this.retrievePosts();
    }
    
    retrievePosts(){
      axios.get("http://localhost:8000/hr/get").then(res=>{
        if(res.data.success){
          this.setState({
            hrs:res.data. extistinghr
          });
          console.log(this.state.hrs)
        }
      });
    }
    
    
    handleClick=async ()=>{
      const response=await fetch()
    }
    
    
    render(){
        return(
            <div>
            <nav class="vertical-menu-wrapper">
              
                <div class="vertical-menu-logo">
                <div>HR Management</div>
                <span on
                class="open-menu-btn"><hr/><hr/><hr/></span>
    
                </div>
                <ul class="vertical-menu">
                    <li><a class="aindex" href="/hrhome">Profile</a></li>
                    <li><a class="aindex" href="/create">Employees Registration</a></li>
                    <hr />
                    <li><a class="aindex" href="/details">Company Employees</a></li>
                    <li><a class="aindex" href="/assets">Assets and Maintain Record</a></li>
                    <hr />
                    <li><a class="aindex" href="/report">Report Generater</a></li>
                    {this.state.hrs.map((hrs)=>(
                    <li id="user-info">{hrs.name}<span>online</span></li>
                    ))}
                </ul>
               
             </nav>

             <div id="hrheading"class="alert alert-success" role="alert">
                <h4 class="alert-heading">Well Come!</h4>
                <p>The primary objective of HRM is to ensure a satisfactory accomplishment of the objectives of an organisation and of its employees. While framing the HR objectives of the organisation, care is taken to consider the interests and needs of the employees and of employee goals.</p>
                <hr/>
                <p class="mb-0"></p>
                </div>
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">

</div>
<img src="./images/hrr.jpg" className="hrhome"/>


            </div>



        )
    }
}