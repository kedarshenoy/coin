import {useNavigate} from "react-router-dom"
import { Component } from "react";
 class Test2class extends Component{
     
     render(){
        const navigate=this.props.navigate;
        return(
            <>
            <button onClick={()=>{navigate('/test2')}} className="mx-5 my-5">Navigate</button>
            </>
        )
    }
 }

 const Test2 =()=>{
    const navigate =useNavigate();
    return (
        <Test2class navigate={navigate}/>
    )
 }

 export default Test2