import React from "react";
import {PieChart,Pie,Tooltip,BarChart,XAxis,YAxis,Legend,CartesianGrid,Bar,} from "recharts";
import './components/css/hrindex.css'

const Report = () => {
  const data = [
    { name: "2018", cost:1500000 },
    { name: "2019", cost: 1600000 },
    { name: "2020", cost: 1000000 },
    { name: "2021", cost: 1200000 },
  ];

  return (
    <div>
       <nav class="vertical-menu-wrapper">
              
              <div class="vertical-menu-logo">
              <div>HR Management</div>
              <span on
              class="open-menu-btn"><hr/><hr/><hr/></span>
  
              </div>
              <ul class="vertical-menu">
                  <li><a class="aindex" href="/hrhome">Profile</a></li>
                  <li>Employee registration</li>
                  <hr />
                  <li>Company employees</li>
                  <li>Assets and maintaince record</li>
                  <hr />
                  <li><a class="aindex" href="/report">Report Generater</a></li>
          
                  
              </ul>
             
           </nav>
           <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Select Report Pdf
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="/assets">Assets Details</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
  </ul>
</div>
    <div style={{ textAlign: "center" }}>
      <h2>Assets and maintance cost for past years(RS)</h2>
      <div className="App">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="cost"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="cost" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
    </div>
  );
};

export default Report;