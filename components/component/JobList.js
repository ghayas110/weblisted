// import React from 'react';
// import styles from '../../styles/Home.module.css';
// import { useRouter } from 'next/router';
// import { useDispatch } from 'react-redux';
// import  selectJob  from '../features/ResSlice';
// import Link from 'next/link'

// export const JobList = ({obj}) =>{
//     console.log(obj); 
//     const router = useRouter();
//     const  dispatch = useDispatch();
//     const openJob=()=>{
//         let payload = obj
//          dispatch(selectJob(payload));
//         router.push('/', obj)
//       }
//       function handleClickedd() {
//         router.push({ pathname: "/", state: obj });
        
//       }
//       console.log(obj);
//   return (
    
//     <table className="table">
//       <thead className={styles.header_1}>
//         <tr>
//           {/* <th scope="col"></th> */}
//           <th className={styles.th_1}>Jobs</th>
//           <th></th>
//           {/* <th></th> */}
//           {/* <th></th> */}
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td onClick={openJob}>{obj?.data().Accfin}</td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>admin / office</td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>arch / engineering</td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>art / media / design</td>
//           <td> </td>
//         </tr>
//         <tr>
//           <td>biotech / science</td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>business / mgmt</td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>customer service</td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>education</td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>etc / misc</td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>food / bev / hosp</td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>general labor</td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>government</td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>human resources</td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>legal / paralegal</td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>manufacturing</td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>marketing / pr / ad</td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>nonprofit sector</td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>real estate</td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>retail / wholesale</td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>sales / biz dev</td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>salon / spa / fitness</td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>security</td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>skilled trade / craft</td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>software / qa / dba</td>
//           <td></td>
//         </tr>
//         {/* <tr>
//           <td>systems / network</td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>technical support</td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>transport</td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>tv / film / video</td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>web / info design</td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>writing / editing</td>
//           <td></td>
//         </tr> */}
//       </tbody>
//     </table>
 
//   )
// }
