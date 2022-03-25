import React from 'react'

const About = (props) => {
    const {user} = props;
    
  return (
    <>
    <section className="left-section about" id="about">
                <h3 className="subtitle">ABOUT ME</h3>
                <h2 className="title">Biography</h2>
                <p className="desc">Innovative use of technology and SEO to drive traffic
and engage users Able to complete projects efficiently and satisfy customers SEO
friendly websites.</p>
                <table className="userdata">
                  <tbody>
                      <tr>
                        <th>Name</th>
                        <td data-text="Name">{user.name}</td>
                      </tr>
                      <tr>
                        <th>Birthday</th>
                        <td data-text="Birthday">{user.dob}</td>
                      </tr>
                      <tr>
                        <th>Age</th>
                        <td data-text="Age">{user.age}</td>
                      </tr>
                      <tr>
                        <th>Address</th>
                        <td data-text="Address">{user.address}</td>
                      </tr>
                      <tr>
                        <th>Phone</th>
                        <td data-text="Phone"><a href={`tel:${user.mobile}`}>{user.mobile}</a></td>
                      </tr>
                      <tr>
                        <th>Email</th>
                        <td data-text="Email"><a href={`mailto:${user.email}`}>{user.email}</a></td>
                      </tr>
                      
                  </tbody>
                </table>
                <div className="about_right">
                  <div className="resumo_fn_cv_btn">
                      <a href="Ravinder Singh UI developer.pdf" download="">
                      <span className="icon">
                        <i className="fa fa-download" aria-hidden="true"></i>
                      </span>
                      <span>Download CV</span>
                      </a>
                  </div>
                </div>
            </section>
            
    </>
  )
}

export default About