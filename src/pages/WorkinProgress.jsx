import Sidebar from "../component/custom/Sidebar";
import picture from "../images/picture.png"

const WorkinProgress=()=>{
    return(
        <>
         <div className="row" >
            <div className="col-2 bg-white vh-100 rounded-end-5">
                <Sidebar />

            </div>
            <div className="col-10 ">
                <div className="text-center">
           <img src={picture}></img>
          </div>
    
            </div>
         </div>
        </>
    )
}
export default WorkinProgress;