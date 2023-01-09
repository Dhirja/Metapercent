


import React from 'react'
import "./Metap.css"
import data from "../Data.json"

const Metapercent = () => {
    console.log(data)

  return (
    <div id='Parnt_div'>
        <div id='navDiv'>
            <div><h4 style={{padding:"9px"}}>Title</h4></div>
            <div id='rightnavbar'>
                <div>
                    <button>Home</button>
                </div>
                <div>
                  <button>About</button>
                </div>
                <div>
                   <button>Blog</button>
                </div>
                <div>
                   <button>Contact</button>
                </div>
                <div>
                   <button id='lastbtn'>Button</button>
                </div>
            </div>
        </div>

        <div className='seconddiv'>
            <div id='secindiv'>
                <h3>Title</h3>
                <p>lorem ipsum ajhbdasd fhbhfbedhf bhdsbbyhbyuhc bvjdbhv. Aslo fun today kiol<br></br></p>
                <div><button id='readbtn'>Read more</button></div>
            </div>
            
        </div>
        <div className='clasdiv'>
            <h5>Classes</h5>
            <p>loewm ipsum to forget nahi select rogfhi bhcvbh fgbg diop jikl  forget nahi select rogfhi bhcvbh fgbg diop jikl  forget nahi select rogfhi bhcvbh fgbg diop jikl</p>
        </div>
         
         <div className='flexdivmeta'>
            {
                data.map((item, ind)=>{
                    // console.log(item)
                    return (
                    <div key={ind} >
                        <div className='imgdiv'>
                            <img src={item.ImageUrl} alt='pic'/>
                        </div>
                        <div>
                            <h4>{item.Name} </h4>
                            <p>{item.ShortDesc}</p>
                        </div>
                        <button style={{border:"1px solid black",marginLeft:"4px"}}>View</button>
                    </div>
                    )
                })
            }
         </div>
    </div>
  )
}

export default Metapercent