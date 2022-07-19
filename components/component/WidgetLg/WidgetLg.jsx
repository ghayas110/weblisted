import React from 'react'
import styles from '../../../styles/WidgetLg.module.css'
import cn from 'classnames';


function WidgetLg() {

    const Button = ({ type }) => {
        return<button className={styles.WidgetLgButton} type >{type}</button>
    };

    return (
        <div className={styles.WidgetLg}>
            <h3 className={styles.WidgetLgTitle}>Latest Transaction</h3>
            <table className={styles.WidgetLgTable}>
                <tr className={styles.WidgetLgTr}>
                    <th className={styles.WidgetLgTh}>Customer</th>
                    <th className={styles.WidgetLgTh}>Amount</th>
                    <th className={styles.WidgetLgTh}>Date</th>
                    <th className={styles.WidgetLgTh}>Status</th>
                </tr>
                <tr className={styles.WidgetLgTr}>
                    <td className={styles.WidgetLgUser}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI4nSX6toZdVgbLo8qsUD1GMRQk4kdH3Hshw&usqp=CAU" alt="" className={styles.WidgetLgImg} />
                        <span className={styles.WidgetLgName}>Susan Carol</span>
                    </td>
                    <td className={styles.WidgetLgDate}>19 july 2022</td>
                    <td className={styles.WidgetLgAmount}>$122.00</td>
                    <td className={styles.WidgetLgStatus}> <Button type="Approved" /></td>
                </tr>
               
                <tr className={styles.WidgetLgTr}>
                    <td className={styles.WidgetLgUser}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI4nSX6toZdVgbLo8qsUD1GMRQk4kdH3Hshw&usqp=CAU" alt="" className={styles.WidgetLgImg} />
                        <span className={styles.WidgetLgName}>Susan Carol</span>
                    </td>
                    <td className={styles.WidgetLgDate}>19 july 2022</td>
                    <td className={styles.WidgetLgAmount}>$122.00</td>
                    <td className={styles.WidgetLgStatus}> <Button type="Declined" /></td>
                </tr>
          
                <tr className={styles.WidgetLgTr}>
                    <td className={styles.WidgetLgUser}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI4nSX6toZdVgbLo8qsUD1GMRQk4kdH3Hshw&usqp=CAU" alt="" className={styles.WidgetLgImg} />
                        <span className={styles.WidgetLgName}>Susan Carol</span>
                    </td>
                    <td className={styles.WidgetLgDate}>19 july 2022</td>
                    <td className={styles.WidgetLgAmount}>$122.00</td>
                    <td className={styles.WidgetLgStatus}> <Button type="Pending" /></td>
                </tr>
             
                <tr className={styles.WidgetLgTr}>
                    <td className={styles.WidgetLgUser}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI4nSX6toZdVgbLo8qsUD1GMRQk4kdH3Hshw&usqp=CAU" alt="" className={styles.WidgetLgImg} />
                        <span className={styles.WidgetLgName}>Susan Carol</span>
                    </td>
                    <td className={styles.WidgetLgDate}>19 july 2022</td>
                    <td className={styles.WidgetLgAmount}>$122.00</td>
                    <td className={styles.WidgetLgStatus}> <Button type="Approved" /></td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLg
