import React, { Component } from "react";
import './css2/hrhome.css'
import axios from "axios";

export default class Hrhome extends Component{
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
            <body>
    <div class="header__wrapper">
      <header></header>
      <div class="cols__container">
        <div class="left__col">
          <div class="img__container">
            <img src="images/shamal.jpeg" alt="HR manager"  />
            <span></span>
          </div>
          <h2>shamal melantha</h2>
          <p>HR manager</p>
          <p>hr@nihonagholdings.com</p>

          <div class="content">
           <h1 class="nihon">Nihon agriculture holdings (Pvt)Ltd</h1>

            <ul>
             
              <i class="fab fa-pinterest"></i>
              <i class="fab fa-facebook"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-dribbble"></i>
            </ul>
          </div>
        </div>
        <div class="right__col">
            <div class=""/>
                <div class="">
                <table className="table">
       
       <thead>
     
      
         <tr className="tr">
           <th scope="col">Name</th>
           <th scope="col">Email</th>
           <th scope="col">Password</th>
           <th scope="col">Number</th>
           <th scope="col">Address</th>
           <th scope="col">Action</th>
          
         </tr>
       </thead>
       <tbody >
       {this.state.hrs.map((hrs)=>(
            <tr>
            <th scope="row">{hrs.name}</th>
            <td>{hrs.email}</td>
            <td >{hrs.password}</td>
            <td>{hrs.number}</td>
            <td>{hrs.address}</td>  
            
            <td>
             <a className="btn btn-warning" href="">
               <i className="fas fa-edit"></i>&nbsp;Edit
             </a>
     
            </td>
          </tr>
     
         ))}
        
        
       </tbody>
     
     </table>
                </div>
            
           
          
         
        </div>
      </div>
    </div>
  </body>
        )
    }
}