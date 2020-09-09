// import React,{useState,useEffect} from 'react'
// import { getuser } from './helper/apicalls';


// const User=()=>{
//     const [values, setValues] = useState({
//         name: '',
//         email:'',
//         accountNo: '',
//         ammount:'',
//         error: '',
//     })
//     const getuserInfo=()=>{
//         const { name, email,amount, accountNo, error } = values; 
//         setValues({ ...values, error: false});
//         getuser().then((data) => {
//             if(data){
    
//             }
//         })
//         }
        
//     return (
//         <div>
//          {getuserInfo()}
//          <p>name</p>
//          <p>name</p>
//         </div>
//     )
// }

// export default User;