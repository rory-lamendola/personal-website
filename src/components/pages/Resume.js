import React, { Component, useState, } from 'react';







const exp = [
  {
    company:"PETAL", 
    location: "New York NY",
    jobs: [
      {
        title:"Senior Data Engineer",
        startDate:"JAN 2019", 
        endDate:"CURRENT",
        desc:["responsibility1", "responsibility2"]
      },
      {
        title:"Data Engineer II",
        startDate:"OCT 2018", 
        endDate:"DEC 2019",
        desc:["responsibility1", "responsibility2"]
      },
      
  ]},
  {
    company:"GILT/HBC", 
    location: "New York NY",
    jobs: [
      {
        title:"Data Engineer II",
        startDate:"MAY 2018", 
        endDate:"OCT 2018",
        desc:[
          "With business partners, rigorously tested the full orders lifecycle data, identifying several bugs that originated in production systems across the company.  This data was then directly used in customer experience dashboards provided to the new CEO.",
          "Partnered with data scientists to help create a machine learning model to replace the current fraud vendor."
        ]
      },
      {
        title:"Data Engineer I",
        startDate:"MAY 2017", 
        endDate:"APR 2018",
        desc:[
          "Developed Scala and Bash tools to extract raw data to load in our data lake in AWS, then scheduled these in Airflow.",
          "Created cloudformation templates to create all infrastructure required for the deployment of the above jobs.",
          "Headed the monitoring of data quality across parallel systems during migration of data warehouse to AWS using Scala in conjunction with Grafana.",
          "Designed several ELT pipelines for portions of the orders lifecycle data (fraud and shipping).",
          "Developed a dashboard in Looker to help business partners understand the fraud process.  This dashboard has since been used for all KPI gathering efforts.",
          "Organized several engineering and operational teams to re-architect the fraud process in a data driven manner."

        ]
      },
      
  ]},
  {
    company:"AIR WORLDWIDE", 
    location: "Boston MA",
    jobs: [
      {
        title:"Risk Consultant",
        startDate:"JAN 2017", 
        endDate:"MAY 2017",
        desc:["Began managing project initiatives, including client relations for the launch of catastrophe bonds"]
      },
      {
        title:"Risk Analyst",
        startDate:"JULY 2015", 
        endDate:"DEC 2016",
        desc:[
          "Modeled the impact of catastrophes such as hurricanes and earthquakes on client data.  Helped develop small portions of a pandemic model.",
          "Manipulated large datasets to create financial models for insurance linked securities products (CAT bonds).",
          "Established repeatable, dynamic SQL scripts to aid in the creation of investor packages.",
          "Lead investor trainings on AIR’s risk platform.",
          "First recipient of the Verisk Way to Go Award for outstanding contribution as defined by the Verisk Way to serve, add value, and innovate."
        ]
      },
      
  ]},
  {
    company:"GUY CARPENTER", 
    location: "Philadelphia PA",
    jobs: [
      {
        title:"Catastrophe Modeling Intern",
        startDate:"JULY 2014", 
        endDate:"DEC 2014",
        desc:[
          "Modeled catastrophic events, such as hurricanes, severe thunderstorms, and winter storms, on client portfolios to determine losses on insured properties",
        ]
      }
  ]},
  {
    company:"JOHN HANCOCK", 
    location: "Boston MA",
    jobs: [
      {
        title:"Actuarial Intern",
        startDate:"JULY 2013", 
        endDate:"DEC 2013",
        desc:["Fully automated the reporting process for yearly and quarterly submissions"]
      }
  ]},
  
  
  
  
]


const Job = props => {
  const experiences = props.experience.map(exp => {

    const jobs = exp.jobs.map(job => {
      const responsibilities = job.desc.map(responsibility => <li>{responsibility}</li>)
      
      return (
        <div>
          <p>{job.title}</p>
          <p>{job.startDate} to {job.endDate}</p>
          <ul>{responsibilities}</ul>
        </div>
      )
    })
    return (
      <div>
        <h4>{exp.company}, {exp.location}</h4>
        {jobs}
      </div>
      
    )
  })

  return <div>{experiences}</div>   
}

const edu = [
  {
    school: "Northeastern University",
    location: "Boston MA",
    startDate: "SEPT 2011",
    endDate: "JUN 2015",
    degree: "Bachelor of Science, Mathematics (Minors in Computer Science and History)",
    honors: "Member of Honor’s Program, Dean’s List, Presidential Global Scholar.",
    link: "https://cos.northeastern.edu/mathematics/"
  },
  {
    school: "University of Edinburgh",
    location: "Scotland",
    startDate: "JAN 2014",
    endDate: "JUN 2014",
    degree: "Study Abroad",
    link: "https://www.maths.ed.ac.uk/school-of-mathematics"
  },
  {
    school: "University of Buffalo",
    location: "Buffalo NY",
    startDate: "SEPT 2005",
    endDate: "JUN 2011",
    degree: "Gifted Math Program Graduate",
    link: "http://giftedmath.buffalo.edu/",
  },
  ]

const Edu = props => {
  const education = props.education.map(edu => {
    const honors = ("honors" in edu) ? edu.honors: "";
    return (
      <div>
        <h4><a href={edu.link}>{edu.school}</a>, {edu.location}</h4>
        <p>{edu.startDate} to {edu.endDate}</p>
        <p>{edu.degree}</p>
        <p>{honors}</p>
      </div>    
    )
  })

  return <div>{education}</div>   
}

class Collapsible extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          open: false
      }
      this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel(e){
      this.setState({open: !this.state.open})
  }

  componentDidUpdate(){
      
  }

  render() {
    return (
    <div>
      <h3 onClick={(e)=>this.togglePanel(e)}>{this.props.title}</h3>
      {this.state.open ? (<div>{this.props.children}</div>) : null}
    </div>);
  }
}

class Resume extends Component {

  render() {
    return (
        <div>
          <h2>Resume</h2>
          <Collapsible title="Education"><Edu education={edu}></Edu></Collapsible>
          
          <h3>Community</h3>
          <h3>Technical Skills</h3>
          <Collapsible title="Experience"><Job experience={exp}></Job></Collapsible>
          
        </div>
        
    );
  }
}

export default Resume;