import React from 'react'

const Progressbar = (props) => {
    const {progressbar} = props;
  return (
    <>
    {
      progressbar.map((currElem)=>{
        const {id,value,right,name} = currElem;
        return (
          <div className="progress_item open" data-value="`${value}`" key={id}>
          <div className="item_in">
              <h3 className="progress_title">{name}</h3>
              <span className="progress_percent" style={{right:`${right}%`}}>{`${value}%`}</span>
              <div className="bg_wrap">
                  <div className="progress_bg" style={{width:`${value}%`}}></div>
              </div>
          </div>
          </div>
        )
      })
    }
    
    </>
  )
}

export default Progressbar