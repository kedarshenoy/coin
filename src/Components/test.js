import {useNavigate} from "react-router-dom"
const Test=()=>{
    const navigate =useNavigate();
    return(
        <>
        <button onClick={()=>{navigate('/test2')}} className="mx-5 my-5">Navigate</button>
        </>
    )
}
export default Test;