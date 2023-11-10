import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import {useNavigate} from "react-router-dom"
import { Carousel } from 'react-responsive-carousel';
import '../Styles/home.css'


const Home = ()=>{
   const navigate= useNavigate();

   const Mycollections=()=>{
      navigate('/mycollections')
   }
    return (
        <>
        
        
        <div className="container">
            <div className="row">
                <div  className="heading my-5"><h1>Kedar's Collections 💸</h1></div>
                <div className="col-lg-4 col-sm-6" onClick={()=>{Mycollections()}}>

                <Carousel  infiniteLoop={true} showThumbs={false} autoPlay={true} interval={2500}  showStatus={false} >
                    <div >
                        <img src={require("../coins/1.jpg")} className="carousalimg" alt="m" />
                     </div>
                    

                     <div >
                        <img src={require("../coins/2.jpg")} className="carousalimg" alt="m" />
                     </div>

                     <div >
                        <img src={require("../coins/3.jpg")} className="carousalimg" alt="m" />
                     </div>

                     <div >
                        <img src={require("../coins/4.jpg")} className="carousalimg" alt="m" />
                     </div>

                     <div >
                        <img src={require("../coins/5.jpg")} className="carousalimg" alt="m" />
                     </div>

                     <div >
                        <img src={require("../coins/6.jpg")} className="carousalimg" alt="m" />
                     </div>

                     <div >
                        <img src={require("../coins/7.jpg")} className="carousalimg" alt="m" />
                     </div>

                     <div >
                        <img src={require("../coins/8.jpg")} className="carousalimg" alt="m" />
                     </div>

                     <div >
                        <img src={require("../coins/9.jpg")} className="carousalimg" alt="m" />
                     </div>

                     <div >
                        <img src={require("../coins/10.jpg")} className="carousalimg" alt="m" />
                     </div>

                 </Carousel>
                </div>
                {/* first carousal ends here */}
                <div className="col-lg-4 col-sm-6" onClick={()=>{Mycollections()}}>
                <Carousel  infiniteLoop={true} showThumbs={false} autoPlay={true} interval={2500}  showStatus={false} >
                    <div >
                        <img src={require("../coins/11.jpg")} className="carousalimg" alt="m" />
                     </div>
                    

                     <div >
                        <img src={require("../coins/12.jpg")} className="carousalimg" alt="m" />
                     </div>

                     <div >
                        <img src={require("../coins/13.jpg")} className="carousalimg" alt="m" />
                     </div>

                     <div >
                        <img src={require("../coins/14.jpg")} className="carousalimg" alt="m" />
                     </div>

                     <div >
                        <img src={require("../coins/15.jpg")} className="carousalimg" alt="m" />
                     </div>

                     <div >
                        <img src={require("../coins/16.jpg")} className="carousalimg" alt="m" />
                     </div>

                     <div >
                        <img src={require("../coins/17.jpg")} className="carousalimg" alt="m" />
                     </div>

                     <div >
                        <img src={require("../coins/18.jpg")} className="carousalimg" alt="m" />
                     </div>

                     <div >
                        <img src={require("../coins/19.jpg")} className="carousalimg" alt="m" />
                     </div>

                     <div >
                        <img src={require("../coins/20.jpg")} className="carousalimg" alt="m" />
                     </div>

                 </Carousel>
                </div>
                {/* second carousal ends here */}
                <div className="col-lg-4 col-sm-6" onClick={()=>{Mycollections()}}>
                <Carousel  infiniteLoop={true} showThumbs={false} autoPlay={true} interval={2500}  showStatus={false} >
                    <div >
                        <img src={require("../coins/21.jpg")} className="carousalimg" alt="m" />
                     </div>
                    
                     <div >
                        <img src={require("../coins/22.jpg")} className="carousalimg" alt="m" />
                     </div>

                     <div >
                        <img src={require("../coins/23.jpg")} className="carousalimg" alt="m" />
                     </div>

                     <div >
                        <img src={require("../coins/24.jpg")} className="carousalimg" alt="m" />
                     </div>

                     <div >
                        <img src={require("../coins/25.jpg")} className="carousalimg" alt="m" />
                     </div>

                     <div >
                        <img src={require("../coins/26.jpg")} className="carousalimg" alt="m" />
                     </div>

                     <div >
                        <img src={require("../coins/27.jpg")} className="carousalimg" alt="m" />
                     </div>

                     <div >
                        <img src={require("../coins/28.jpg")} className="carousalimg" alt="m" />
                     </div>

                     <div >
                        <img src={require("../coins/29.jpg")} className="carousalimg" alt="m" />
                     </div>

                     <div >
                        <img src={require("../coins/1.jpg")} className="carousalimg" alt="m" />
                     </div>

                 </Carousel>
                </div>
                {/* third carousal ends here */}
                
                <div className="btndiv my-4"  >
                  <span className="btn btn-danger" onClick={()=>{Mycollections()}}> My Collections😵</span>
                </div>

            </div>
            
        </div>
        
        </>
    )
}

export default Home;