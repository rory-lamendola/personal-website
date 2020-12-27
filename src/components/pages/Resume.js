import React, { Component, useState, } from 'react';

const exp = [
  {
    company:"PETAL", 
    location: "New York NY",
    jobs: [
      {
        title:"Senior Software Engineer I",
        startDate:"Jan 2019", 
        endDate:"Current",
        desc:["responsibility1", "responsibility2"]
      },
      {
        title:"Software Engineer II",
        startDate:"Oct 2018", 
        endDate:"Dec 2019",
        desc:["Built out modularized ETL steps that can be strung together for different data processing needs", 
        "Restructured the data warehouse into dim and fact tables to standardize our analytics, which can now be easily hooked into Looker for self service reporting.",
        "Deployed our company's first lambda function, which can be used across AWS accounts to aggregate raw data files into our data lake."
      ]
      },
      
  ]},
  {
    company:"GILT/HBC", 
    location: "New York NY",
    jobs: [
      {
        title:"Software Engineer II",
        startDate:"May 2018", 
        endDate:"Oct 2018",
        desc:[
          "With business partners, rigorously tested the full orders lifecycle data, identifying several bugs that originated in production systems across the company.  This data was then directly used in customer experience dashboards provided to the new CEO.",
          "Partnered with data scientists to help create a machine learning model to replace the current fraud vendor."
        ]
      },
      {
        title:"Software Engineer I",
        startDate:"May 2017", 
        endDate:"Arp 2018",
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
        startDate:"Jan 2017", 
        endDate:"May 2017",
        desc:["Began managing project initiatives, including client relations for the launch of catastrophe bonds"]
      },
      {
        title:"Risk Analyst",
        startDate:"July 2015", 
        endDate:"Dec 2016",
        desc:[
          "Modeled the impact of catastrophes such as hurricanes and earthquakes on client data.  Helped develop small portions of a pandemic model.",
          "Manipulated large datasets to create financial models for insurance linked securities products.",
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
        startDate:"July 2014", 
        endDate:"Dec 2014",
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
        startDate:"July 2013", 
        endDate:"Dec 2013",
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
          <h5>{job.title}</h5>
          <div style={{fontFamily: 'Qanelas', fontSize: '22px'}}>
            <p>{job.startDate} to {job.endDate}</p>
            <ul>{responsibilities}</ul>
          </div>
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
    startDate: "Sept 2011",
    endDate: "Jun 2015",
    degree: "Bachelor of Science, Mathematics (Minors in Computer Science and History)",
    honors: "Member of Honor’s Program, Dean’s List, Presidential Global Scholar.",
    link: "https://cos.northeastern.edu/mathematics/"
  },
  {
    school: "University of Edinburgh",
    location: "Scotland",
    startDate: "Jan 2014",
    endDate: "Jun 2014",
    degree: "Study Abroad",
    link: "https://www.maths.ed.ac.uk/school-of-mathematics"
  },
  {
    school: "University of Buffalo",
    location: "Buffalo NY",
    startDate: "Sept 2005",
    endDate: "Jun 2011",
    degree: "Gifted Math Program Graduate",
    link: "http://giftedmath.buffalo.edu/",
  },
  ]


const Edu = props => {
  const education = props.education.map(edu => {
    const honors = ("honors" in edu) ? edu.honors: "";
    return (
      <div>
        <h5><a href={edu.link}>{edu.school}</a>, {edu.location}</h5>
        <div style={{fontFamily: 'Qanelas', fontSize: '22px'}}>
          <p>{edu.startDate} to {edu.endDate}</p>
          <p>{edu.degree}</p>
          <p>{honors}</p>
        </div>
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

const styles = {
  position: "absolute",
  right: 0,
  bottom: 0,
  top: 0,
  left: 100,
  fontFamily: 'Qanelas',
  overflow: "scroll"
};

class Resume extends Component {

  render() {
    return (
        <div style={styles}>
          <h2>Resume</h2>
          <h3><Collapsible title="Experience"><Job experience={exp}></Job></Collapsible></h3>
          <h3><Collapsible title="Education"><Edu education={edu}></Edu></Collapsible></h3>
          <h3>Technical Skills</h3>
          <h3>Community</h3>
          
          
          
        </div>
        
    );
  }
}

export default Resume;