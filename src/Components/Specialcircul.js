import axios from 'axios'
import { useEffect, useState } from 'react';




const Specialcirculation =()=>{
        const [res,setres]=useState([]);
        useEffect(()=>{
                axios.get("http://localhost:5402/specialcircular").then(result =>{
                    setres(result.data)
                    // console.log(result.data);
                }).catch(error=>{
                    console.log(error)
                })
        },[])
    return(
        <>
       
        <div className="container">
                <div className="row">
                <div  className="heading my-5"><h1>Special Circulation 🏆</h1></div>
                    {
                        res.map((item,index)=>{
                            return <div className='col-lg-4 col-md-6 col-sm-6 col-xl-3 col-xs-12 coinbox' key={index}  >
                            <img src={require(`../coins3/${index+1}.jpg`)} className="carousalimgmyc" alt="m" />
                            <h4>{item.coin}</h4>
                            <p><b>Mint : </b>{item.mint} <br/> <b>Year : </b>{item.year}</p>
                         </div>
                        })
                    }
                    
                   
    
                </div>
            </div>
        </>
    )
    }
    
    export default Specialcirculation;