// import React from "react";
// import { animated } from "react-spring";
// import { useAnimation } from "../useAnimation";
// import styles from '../../styles/Sider.module.css'
//  import "bootstrap/dist/css/bootstrap.min.css";


// const LOCAL_STORAGE_KEY = "isSidebarOpen";

// function useSidebar() {
//   const persistedState =
//     typeof window === "undefined"
//       ? false
//       : localStorage.getItem(LOCAL_STORAGE_KEY) === "true";

//   const [isOpen, setIsOpen] = React.useState(false);
//   const toggle = () => setIsOpen(value => !value);

//   // Persist to localStorage
//   React.useEffect(() => {
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(isOpen));
//   }, [isOpen]);

//   // Rehydrate with persisted data
//   React.useEffect(() => {
//     setIsOpen(persistedState);
//   }, []);

//   return { isOpen, toggle };
// }

// function Sider() {
//   const { isOpen, toggle } = useSidebar();
//   const styles = useAnimation(isOpen);

//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <div className="col-4">
//       <animated.div  id={styles.sidebar} style={styles.sidebar}>
//              <div  id={styles.sider_container}>
             
//                  <div id={styles.checkbox}>
//                      <a href="">Artists</a>
//                  <input type="checkbox" name="" id="" /> &nbsp;
//                  <span>search titles only</span>
//                  </div>
      
//                  <div id={styles.side_footer}>
//                    <a href="">reset</a>
//                    <button>update search</button>
//                  </div>
              
//              </div>
            
//     </animated.div>
//     </div>
//       </div>
//       <animated.div className="main" id={styles.main}>
//         <button  id={styles.btn} onClick={toggle}>
//           Toggle
//         </button>
//       </animated.div>
  
//     </div>
//   );
// }

// export default Sider;


import React from 'react';
import styles from '../../styles/post.module.css'

const SideBar = ({ openClass }) => {
  return (
      <div>
  
    <nav id={openClass === 'open' ? styles.opneSidebar : ''}>
    
      <ul id={styles.navlist}>
      <h3>Artists</h3>
        <li>
          <a id={styles.menu_item} href="/">
            Home
          </a>
        </li>

        <li>
          <a id={styles.menu_item} href="/burgers">
            Burgers
          </a>
        </li>

        <li>
          <a id={styles.menu_item} href="/pizzas">
            Pizzas
          </a>
        </li>
        <li>
          <a id={styles.menu_item} href="/desserts">
            Desserts
          </a>
        </li>
      </ul>

    </nav>
    </div>
  );
};

export default SideBar;
