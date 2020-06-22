import React from "react";
//import { robots } from "../robots";

const Card = ({name,id,email, uni,grad})=> {
    return  (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            
            <img src= {`https://robohash.org/${id}?size=200x200`} alt="robots" />
            
            <div>
                <h2 className="tc">{name}</h2>
                <p className="tc">{email}</p>
                <p className="tc dark-blue">{uni}</p>
            </div>
        </div>
    );
}
export default Card;

//destructuring
// const Card = ({name, email, id})=> {
//     return  (
//         <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
//             <img src={`https://robohash.org/${id}?size=200x200`} alt="robots"/>
//             <div>
//                 <h2 className="tc">{name}</h2>
//                 <p className="tc">{email}</p>
//             </div>
//         </div>
//     );
// }