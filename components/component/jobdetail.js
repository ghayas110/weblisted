import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
// import styles from '../styles/joblist.module.css'
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { selectJob } from '../features/ResSlice';
import {faStar} from "@fortawesome/free-solid-svg-icons";

export const jobdetail = ({obj}) => {
    console.log(obj); 
    const router = useRouter();
    const  dispatch = useDispatch();
    const openJob=()=>{
        let payload = obj
         dispatch(selectJob(payload));
        router.push('/', obj)
      }
      function handleClickedd() {
        router.push({ pathname: "/", state: obj });
        
      }
      console.log(obj);
  return (
    <>
    
    </>
  )
}
