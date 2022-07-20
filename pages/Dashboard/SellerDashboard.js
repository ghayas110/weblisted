import React from 'react'
import Sidebar from '../../components/component/Siderbar/Sidebar'
import Topbar from '../../components/component/Topbar/Topbar'
import styles from '../../styles/SellerDashboard.module.css'
import Home from '../Home/Home'
import UserList from '../UserList/UserList';


function SellerDashboard() {
  return (
    <div>
      <Topbar />
      <div className="container" id={styles.container}>
        <Sidebar />
        <Home />  
      </div>

    </div>
  )
}

export default SellerDashboard