import React from 'react'
import Education from './Education';
import Progressbar from './Progressbar';


const Educated = () => {
    const experience = [
        {
        id:4,
        name:'Inventum Technologies Pvt. Ltd.',
        designation:'Web Designer & Developer',
        years:'(Oct 2021 to Current)',
        description:[
            " Wordpress Custom Post Type and Settings Field.",
            "Modify Invoice Template for According to customer requirements",
            "I’m working on react technologies intermediate level.",
            "I’m working with railtel or Delhi wifi UI Changes perform."
        ]
        },
        
        {id:3,
        name:'AOP Web World Pvt. Ltd.',
        designation:'Web Designer & Developer',
        years:'(April 2021 to Oct. 2021)',
        description:[
            " Wordpress Custom Post Type and Settings Field.",
            "Custom Html to Wordpress Design.",
            "According to Client requirement working given on Feedback.",
            "Sometime custom function create using Core PHP."
        ]
        },
        {id:2,
            name:'Reliqus Software Pvt. Ltd.',
            designation:'Web Designer & Developer',
            years:'(April 2019 to April 2021)',
            description:[
                "Design Web Page Layout.",
                "Custom Html to Wordpress Design.",
                "According to Client requirement working given on Feedback.",
                "Sometime custom function create using Core PHP."
            ]
        },
        {id:1,
        name:'Xpedient Technologies Pvt. Ltd.',
        designation:'Web Designer & Developer',
        years:'(Sept. 2018 to April 2019)',
        description:[
            "Any Basic Template Take from any where website like w3layout, themeforest etc. then start build website.",
            "Manytime Direct contact from client for Designing purpose.",
            "All type of website build in company like e-commerce, MLM website etc."
        ]},
    
    
      ]
      const educations = [
        
        {
          id:1,
          name:'G R M Public School',
          designation:'10th ,12th From CBSE Board ',
          years:'(Jan 2009 - Mar 2011)',
        },
        {
          id:2,
          name:'Aditya Institute of Technology',
          designation:'Diploma in Computer Engineering(CE)',
          years:'(Aug 2011 - Aug 2014)',
        },
        {
          id:3,
          name:'Estingo Network Pvt. Ltd.',
          designation:'Training in Web Designing for 6months',
          years:'(Aug 2014 - Aug 2015)',
        },
        {
          id:4,
          name:'Amity School of Engineering & Technology',
          designation:'B.tech in Computer Science Engineering(CSE)',
          years:'(Aug 2015 - Aug 2018)',
        },
    
    
      ]
      const progressbar = [
        {
            id:1,
            value:92,
            right:8,
            name: 'Adobe Photoshop'
        },
        {
            id:2,
            value:95,
            right:5,
            name: 'HTML5 & CSS3'
        },
        {
            id:3,
            value:80,
            right:20,
            name: 'Bootstrap 4'
        },
        {
            id:4,
            value:90,
            right:10,
            name: 'JQuery'
        },
        {
            id:5,
            value:60,
            right:40,
            name: 'React Js'
        },
        {
            id:6,
            value:70,
            right:30,
            name: 'PHP'
        }
      ]
  return (
    <>
    <section className="left-section education" id="education">
        <div className="resumo_fn_tabs">
        <div className="tab_header">
            <ul>
                <li className="active"><a href="#" data-tabs="tab1">Experience</a></li>
                <li><a href="#" data-tabs="tab2">Education</a></li>
                <li><a href="#" data-tabs="tab3">Skills</a></li>
            </ul>
        </div>
        <div className="tab_content">
            <div id="tab1" className="tab_item active">
                <Education educationinfo={experience} type={"experience"}/>                
            </div>
            <div id="tab2" className="tab_item ">
                <Education educationinfo={educations} type={"education"}/>
            </div>
            <div id="tab3" className="tab_item ">
                <div className="resumo_fn_progress_bar">
                    <Progressbar progressbar={progressbar}/>
                    <div className="clearfix"></div>
                </div>
                
            </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default Educated