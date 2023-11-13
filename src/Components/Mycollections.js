import '../Styles/home.css';
import Modal from "react-modal";
import {useNavigate}from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';
import('../Styles/home.css');
var  customStyles={
    content: {
             top: '50%',
             left: '50%',
             right: 'auto',
             bottom: 'auto',
             marginRight: '-50%',
             transform: 'translate(-50%, -50%)',
             border: '0.5px solid #807474',
            //  width: 'fit-screen',
            maxWidth: '90vw',
            //  width: 'fit-content',
             height:'90vh'
        
            //  width: '350px'

             }
 } 
 
 var Xstyles={
    width:'100%',
    textAlign: 'end',
    padingRight:'5px',
    cursor: 'pointer',
    marginBottom:'5px'
 }



const Mycollections =()=>{
    let [coins,setcoins]=useState([]);
    let [modal,setmodal]=useState(false);
    let [mint,setmint]=useState('');


    const navigate=useNavigate();
    const clickhandler=(route)=>{
        navigate(`/${route}`)
    }

    const callmint=(mintselected)=>{
        axios.get(`http://localhost:5402/mint`).then(result =>{
        // console.log("api output")
        let response =[];
        response=result.data;
        const get=(mintselected)=>{
        let obj={}
        const red= response.forEach((element)=>{
            const arr2=[];
            for(let i=0;i<element.store.length;i++){
               switch (mintselected) {
                case "m":
                    if(element.store[i].mint.m){
                        arr2.push( element.store[i].year)
                        }
                    break;             
                case "h":
                        if(element.store[i].mint.h){
                            arr2.push( element.store[i].year)
                            }
                        break;
                case "n":
                        if(element.store[i].mint.n){
                            arr2.push( element.store[i].year)
                        }
                    break;
                case "k":
                        if(element.store[i].mint.k){
                            arr2.push( element.store[i].year)
                            }
                        break;
                default:
                    break;
               }
               
                    obj[element.coin]=arr2;
            }
            // console.log(obj)
        })
        setcoins(obj);
        console.log(coins)
        return obj;

    }
    //  console.log(get(mintselected))
    get(mintselected)
    }).catch(eroor=>{
        console.log(eroor)
    })
    }


    const availabecoins =Object.keys(coins);
    return (
        <>
        <div className="container">
            <div className="row">
            <div  className="heading my-5"><h1>Kedar's Collections 💸</h1></div>
                
                <div className='col-lg-4 col-md-6 col-sm-6 col-xl-3 col-xs-12 coinbox' onClick={()=>{clickhandler("antique")}} >
                        <img src={require("../coins/5.jpg")} className="carousalimgmyc" alt="m" />
                        <h4>Antique Coins</h4>
                        <p>Total Number of Coins : 32</p>
                     </div>
                <div className='col-lg-4 col-md-6 col-sm-6 col-xl-3 col-xs-12 coinbox'onClick={()=>{clickhandler("special")}} >
                        <img src={require("../coins3/3.jpg")} className="carousalimgmyc" alt="m" />
                        <h4>Special Circulation</h4>
                        <p>Total Number of Coins : 26</p>


                     </div>
                <div className='col-lg-4 col-md-6 col-sm-6 col-xl-3 col-xs-12 coinbox'onClick={()=>{clickhandler("regular")}}>
                        <img src={require("../coins2/2.jpg")} className="carousalimgmyc" alt="m" />
                        <h4>Regular Circulation</h4>
                        <p>Total Number of Coins : 155</p>


                     </div>
                <div className='col-lg-4 col-md-6 col-sm-6  col-xl-3 col-xs-12 coinbox' onClick={()=>{clickhandler("missmint")}}>
                        <img src={require("../missmint/1.jpg")} className="carousalimgmyc" alt="m" />
                        <h4>Miss Mint</h4>
                        <p>Total Number of Coins : 9</p>
                     </div>
                <div className='col-lg-4 col-md-6 col-sm-6 col-xl-3 col-xs-12 coinbox' onClick={()=>{callmint("m"); setmodal(true); setmint("Bombay")}}>
                        <img src={require("../coins/31.jpg")} className="carousalimgmyc" alt="m" />
                        <h4>Bombay Mint</h4>
                        <p>Total Number of Coins : 45</p>
                     </div>
                <div className='col-lg-4 col-md-6 col-sm-6 col-xl-3 col-xs-12 coinbox' onClick={()=>{callmint("h"); setmodal(true); setmint("Hydrabad")}}>
                        <img src={require("../coins/23.jpg")} className="carousalimgmyc" alt="m" />
                        <h4>Hyderabad Mint</h4>
                        <p>Total Number of Coins : 50</p>


                     </div> 
                <div className='col-lg-4 col-md-6 col-sm-6 col-xl-3 col-xs-12 coinbox' onClick={()=>{callmint("k");setmodal(true); setmint("Kolkata")}}>
                        <img src={require("../coins2/1.jpg")} className="carousalimgmyc" alt="m" />
                        <h4>Kolkata Mint</h4>
                        <p>Total Number of Coins : 20</p>


                     </div>
                <div className='col-lg-4 col-md-6 col-sm-6  col-xl-3 col-xs-12 coinbox' onClick={()=>{callmint("n");setmodal(true); setmint("Noida")}}>
                        <img src={require("../coins/42.jpg")} className="carousalimgmyc" alt="m" />
                        <h4>Noida Mint</h4>
                        <p>Total Number of Coins : 30</p>


                     </div>

            </div>
        </div>

        <Modal isOpen={modal} style={customStyles} ariaHideApp={false}  >
            <div onClick={()=>setmodal(false)} style={Xstyles} >❌</div>
            <div style={{display:'block',textAlign:'center'}}>
            {/* <img src={require(`../coins2/${this.state.img}.jpg`)} className='carousalimgantique my-2' alt='m' /> */}
                                         
            <h4>{mint} Mint </h4>
            <table >
                <thead > 
                    <>
                    {
                        availabecoins.map((item,index)=>{
                            return <tr key={index} style={{border:'2px solid black',padding:"5px"}}>
                              <th style={{border:'2px solid black',padding:"5px",cursor:'pointer'}} onClick={()=>{navigate('/regular')}}> {item}</th>
                                <td>
                                {
                              
                                        coins[item].map((item,index)=>{
                                        return  <td key={index} style={{padding:"5px"}}>
                                           • {item}
                                            </td>
                                      })
                                
                        
                            }
                                </td>
                            </tr>
                            
                        })
                    }
                    </>
                </thead>
               
            </table>

         
        
           
        </div>
            </Modal>
        </>
    )
}


export default Mycollections;