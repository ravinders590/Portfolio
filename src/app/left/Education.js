import React from 'react'

const Education = ({educationinfo, type}) => {
    // const {educationinfo, type} = props;
    
    
  return (
    <>
        <div className="resumo_fn_boxed_list">
            <ul>
            {educationinfo.map((item) => {
                var disc = item.description;
                return <li key={item.id}>
                    
                        <div className="item">
                            <div className="item_top">
                                <h5>{item.name}</h5>
                                <span>{item.years}</span>
                            </div>
                            <h3>{item.designation}</h3>
                            {type === "experience" && 
                                <>
                                <ol type='1'>
                                    {
                                        disc.map((disc_item,i)=>{
                                            return <li key={i}>{disc_item}</li>
                                        })
                                    }
                                    </ol>
                                </>
                            }
                        </div>
                    </li>
            })}
                
            </ul>
        </div>
    </>
  )
}

export default Education;