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
