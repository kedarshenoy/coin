import '../Styles/home.css'

import axios from 'axios';
import { useEffect, useState } from 'react';
const controler =new AbortController();

const Missmint =()=>{
        const [coins, setcoins] = useState([]);

        useEffect(()=>{
                async function fetch(){
                       const response= await axios.get("http://localhost:5402/missmint");
                       const result = await response.data;
                       setcoins(result);
                       console.log(result)
                }
                fetch();
                return(
                        controler.abort()
                )
                },[]
        )
    return(
        <>
       
        <div className="container">
                <div className="row">
                <div  className="heading my-5"><h1>Miss Mint Collections ⚒</h1></div>
                    
                    
                      {
                        coins.map((item,index)=>{
                                return(
                                        <div className='col-lg-4 col-md-6 col-sm-6 col-xl-3 col-xs-12 coinbox' key={index} >
                                                <img src={require(`../missmint/${index+1}.jpg`)} className="carousalimgantique" alt="m" />
                                                <h4>{item.coin}</h4>
                                                <p><b>Year :</b> {item.year} <b className='mx-2'> Mint :</b> {item.mint} </p>
                                        </div>    
                                )
                        })
                      }
                </div>
            </div>
        </>
    )
    }
    
    export default Missmint;