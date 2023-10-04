// import {Routes,Route} from 'react-router';
// import { Navigate, useNavigate } from 'react-router-dom';

// const Protectedroute = ({auth, component:Component, ...rest}) => {

//     const navigate = useNavigate();
//     return (
//         <div>

//             <Route {...rest} render={(props)=>{
//                 if(auth) return <Component {...props} />
//                 if(!auth) return <Navigate to={{path : '/', state : {from : props.location}}} />
//             }} />
//         </div>
//     );
// }

// export default Protectedroute;

import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../context/authcontext";
function ProtectedRoute(props) {
  const { user } = useUser();
  if (user) return props.page;
  return <Navigate to="/" />;
}

export default ProtectedRoute;
