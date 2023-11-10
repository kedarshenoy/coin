import {BrowserRouter,Route,Routes} from 'react-router-dom';
import home from './Components/home';
import Mycollections from './Components/Mycollections';
import Antique from './Components/Antique';
import Specialcirculation from './Components/Specialcircul';
import Regular from './Components/Regular';
import Missmint from './Components/Missmint';
import test from './Components/test';
import test2 from './Components/testsecond';
import test3 from './Components/test3';


 const Router =()=> {
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path='/'Component={home} ></Route>
            <Route path='/mycollections'Component={Mycollections} ></Route>
            <Route path='/antique'Component={Antique} ></Route>
            <Route path='/special'Component={Specialcirculation} ></Route>
            <Route path='/regular'Component={Regular} ></Route>
            <Route path='/missmint'Component={Missmint} ></Route>
            <Route path='/test'Component={test} ></Route>
            <Route path='/test2'Component={test2} ></Route>
            <Route path='/test3'Component={test3} ></Route>







        </Routes>
        </BrowserRouter>
        </>
    )

}
export default  Router;