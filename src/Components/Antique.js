import '../Styles/home.css'

import axios from 'axios';
import { useEffect, useState } from 'react';
const controller =new AbortController();

const Antique =()=>{
    const [coins,setcoins]=useState([]);
    const arr2=[
        {coin :"One Rupee King George VI Coin",year:"1944"},
        {coin :"One Rupee King George VI Coin",year:"1944"},
        {coin :"One Rupee Queen Victoria Coin",year:"1893"},
        {coin :"One Rupee Queen Victoria Coin",year:"1893"},
        {coin :"One Rupee Queen Victoria Coin",year:"1862"},
        {coin :"One Rupee Queen Victoria Coin",year:"1862"},
        {coin :"One Rupee King Edward VI Coin",year:"1904"},
        {coin :"One Rupee King Edward VI Coin",year:"1904"},
        {coin :"One Rupee King George VI Coin",year:"1942"},
        {coin :"One Rupee King George VI Coin",year:"1942"},
        {coin :"One Rupee King George V Coin",year:"1912"},
        {coin :"One Rupee King George V Coin",year:"1912"},
        {coin :"Five Rupee Indira Gandhi Coin",year:"1984"},
        {coin :"Five Rupee Indira Gandhi Coin",year:"1984"},
        {coin :"Five Rupee Jawaharlal Neharu Coin",year:"1989"},
        {coin :"Five Rupee Jawaharlal Neharu Coin",year:"1989"},
        {coin :"Ten Rupee Gandhi Coin",year:"1948"},
        {coin :"Ten Rupee Gandhi Coin",year:"1948"},
        {coin :"UAE -coin",year:"N/A"},
        {coin :"UAE -coin",year:"N/A"},
        {coin :"One Paise",year:"1943"},
        {coin :"One Paise",year:"1953"},
        {coin :"One Paise",year:"1953"},
        {coin :"1/2 Anna",year:"1862"},
        {coin :"1/2 Anna",year:"1862"},
        {coin :"N/A",year:"N/A"},
        {coin :"N/A",year:"N/A"},
        {coin :"One Quarter Anna",year:"1887"},
        {coin :"One Quarter Anna",year:"1887"},
        {coin :"Five paise",year:"1989"},
        {coin :"ten naya paise",year:"1962"},
        {coin :"ten paise",year:"1972"},
        {coin :"ten paise",year:"check"},
        {coin :"two paise",year:"1965"},
        {coin :"twenty paise",year:"1985"},
        {coin :"ten paise",year:"1984"},
        {coin :"twenty paise",year:"1986"},
        {coin :"twenty paise",year:"check"},
        {coin :"fifty paise",year:"check"},
        {coin :"fifty paise",year:"1984"},
        {coin :"fifty paise",year:"check"},
        {coin :"fifty paise",year:"1975"},
        {coin :"fifty paise",year:"check"},
        {coin :"twenty paise",year:"1971"},
        {coin :"ten paise",year:"1990"},
        {coin :"twenty paise",year:"check"}

        ]

    useEffect(()=>{
        async function fetch(){
           const response= await axios.get("http://localhost:5402/antiques");
           const result = await response.data;
            setcoins(result);
        }
        fetch();

        
        return ()=>{
            controller.abort();
        }

    },[])
    // const showcoins=()=>{
    //     let arr=[];
    //     for(let index=1; index<47;index++) {
    //         arr.push(<div className='col-lg-4 col-md-6 col-sm-6 col-xl-3 col-xs-12 coinbox'  >
    //              <img src={require(`../coins/${index}.jpg`)} className='carousalimgantique' alt='m' />
    //               <> <h4>{ arr2[index-1].coin }</h4><p>Year : { arr2[index-1].year }</p></>
                
    //              </div>
    //              )
                 
                    
    //     }
    //     return arr;
    //     // return <img src={require(`../coins/3.jpg`)} className='carousalimgantique' alt='m' />
    // }

    // const showcoins2=()=>{
    //     coins.map((item,index)=>{
    //         return <div className='col-lg-4 col-md-6 col-sm-6 col-xl-3 col-xs-12 coinbox'  >{console.log("inside map")}
    //              {/* <img src={require(`../coins/1.jpg`)} className='carousalimgantique' alt='m' /> */}
    //               <h4>{index}</h4><p>Year : </p>
                
    //              </div>
                
            
    //     })
    // }
return(
    <>
   
    <div className="container">
            <div className="row">
            <div  className="heading my-5"><h1>Antique Collections 🗝</h1></div>

                     {/* {showcoins2()} */}
                     {
                         coins.map((item,index)=>{
                            return <div className='col-lg-4 col-md-6 col-sm-6 col-xl-3 col-xs-12 coinbox'  >{console.log("inside map")}
                                 <img src={require(`../coins/${index+1}.jpg`)} className='carousalimgantique' alt='m' />
                                  <h4>{item.coin}</h4><p><b>Year :</b> {item.year} <br/> <b>Metal :</b>{item.metal} </p>
                                
                                 </div>
                                
                            
                        })
                     }
                     {/* {console.log(coins)} */}


            </div>
        </div>
    </>
)
}

export default Antique