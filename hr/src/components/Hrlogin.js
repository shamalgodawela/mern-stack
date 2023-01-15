import React, { Component } from "react";
import './css/style.css';



export default class Hrlogin extends Component{
	constructor(props){
		super(props)
		this.state={
			email:"",
			password:""

		};
		this.handleSubmit=this.handleSubmit.bind(this);
	}
	handleSubmit(e){
		e.preventDefault();
		const {email,password}=this.state;
		console.log(email,password);
		fetch("http://localhost:8000/login/user",{
			method:"POST",
			crossDomain:true,
			headers:{
				"content-Type":"application/json",
				Accept:"application/json",
				"Access-control-Allow-origin":"*",
			},
			body:JSON.stringify({
				email,
				password
			}),

		})
		.then((res)=>res.json())
		.then((data)=>{
			console.log(data,"userregister");
		})
	}
    

    render(){
        return(
            <body className="bod22">
          <div>
            
            <div class="container10">
            <div class="img8">
			<img src="images/Nihon Logo-02.png"/>
		    </div>
            <div class="login-content">
            <form action="/hrindex" className="form10" >
		
				<img src="images/avatar.svg"/>
				<h2 class="title">Login To The HR System</h2>
           		<div class="input-div one">
           		   <div class="i">
           		   		<i class="fas fa-user"></i>
           		   </div>
				   
           		   <div class="div">
           		   		<input type="text" class="input"placeholder="Username"onChange={(e)=>this.setState({email:e.target.value})}/>
           		   </div>
           		</div>
           		<div class="input-div pass">
           		   <div class="i"> 
           		    	<i class="fas fa-lock"></i>
           		   </div>
           		   <div class="div">
           		    	<input type="password" class="input" placeholder="Password" onChange={(e)=>this.setState({email:e.target.value})}/>
            	   </div>
            	</div>
            
				<button type="submit" class="btn btn-primary" id="btn9">Login</button>
                </form>
        
        </div>
            </div>
            <script type="text/javascript" src="js/main.js"></script>
        </div>
		</body>
        )
    }
}