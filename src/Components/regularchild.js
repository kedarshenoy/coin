import Modal from "react-modal";
import axios from 'axios'
import { Component } from "react";
import('../Styles/home.css')
var  customStyles={
    content: {
             top: '50%',
             left: '50%',
             right: 'auto',
             bottom: 'auto',
             marginRight: '-50%',
             transform: 'translate(-50%, -50%)',
             border: '0.5px solid #807474',
             width: 'fit-content',
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

class Regularchild extends Component{
    constructor(){
        super();
        this.state={
            data:[],
            modal:false,
            img:1,
            coin:undefined,
            store:undefined,
            totalcoin:0
        }
    }
    componentDidMount(){
        axios.get("http://localhost:5402/regular").then(result=>{
        this.setState({
            data:result.data.data
        })
        // console.log(result.data.data);
    }).catch(error=>{
        console.log(error);
    })
        
    }

     findcoin =(coinselected)=>{
        axios.get(`http://localhost:5402/special/${coinselected}`)
        .then(
            result=>{
                // console.log(result.data[0])
            this.setState({
                coin:result.data[0].coin,
                store:result.data[0].store
            })
        }).catch(error=>console.log(error))

     

    }
   
    render(){
        return(
            <>
            {
                this.state.data.map((item,index)=>{
                                return(
                                    <div className='col-lg-4 col-md-6 col-sm-6 col-xl-3 col-xs-12 coinbox' key={index} 
                                     onClick={()=>{this.setState({modal:true, img:index+1});  this.findcoin(item.coin) }} >
                                         <img src={require(`../coins2/${index+1}.jpg`)} className='carousalimgantique' alt='m' />
                                         <h4>{item.coin}</h4><p>Total : {item.count} coins</p>
                                        <p></p>
                                    </div>
                                )
                                
                                
                            })
            }
            <Modal isOpen={this.state.modal} style={customStyles} ariaHideApp={false}  >
            <div onClick={()=>this.setState({modal:false})} style={Xstyles} >❌</div>
            <div style={{display:'block',textAlign:'center'}}>
            <img src={require(`../coins2/${this.state.img}.jpg`)} className='carousalimgantique my-2' alt='m' />
                                         
            <h4>{this.state.coin}</h4>

            { 
            this.state.store
            ?
            <table >
                <thead style={{border:'2px solid black',padding:"5px"}}>
                    <tr>
                    <th style={{border:'2px solid black',padding:"10px"}}>Year 📅</th>
                    <th style={{border:'2px solid black',padding:"10px"}}>Mumbai ◆</th>
                    <th style={{border:'2px solid black',padding:"10px"}}>Hyderabad ⭐</th>
                    <th style={{border:'2px solid black',padding:"10px"}}>Noida ⚫ </th>
                    <th style={{border:'2px solid black',padding:"10px"}}>Kolkata _</th>
                    </tr >

                </thead>
                <tbody style={{border:'2px solid black'}}>
                {this.state.store.map((item,index)=>{
                        return (
                           
                            <tr key={index} style={{border:'2px solid black'}}  ><th >{item.year}</th>
                           <td style={{border:'2px solid black'}}>{ item.mint.m ?"✔":"❌" }</td>
                           <td style={{border:'2px solid black'}}>{ item.mint.h ?"✔":"❌" }</td>
                           <td style={{border:'2px solid black'}}>{ item.mint.n ?"✔":"❌" }</td>
                           <td style={{border:'2px solid black'}}>{ item.mint.k ?"✔":"❌" }</td>
                           </tr>
                          
                        )
                })}
                </tbody>
                 
              
            
                 
            </table>

            :<p>not available</p>
    }
        
           
        </div>
            </Modal>
            </>
        )
    }
}

export default Regularchild;
