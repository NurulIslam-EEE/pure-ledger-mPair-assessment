import React from "react";
import styles from "./sideMenu.module.css";

function DashCard({ config }) {
  //   console.log(config);
  return (
    <div
      className={styles.card_container}
      style={{ background: config.backColor }}
    >
      <h3 className={styles.digit} style={{ color: config.textColor }}>
        20,700 TK
      </h3>
      <div>
        <h3 className={styles.card_title}>Total Debit</h3>
        <p className={styles.card_subTitle}>This Month</p>
      </div>
    </div>
  );
}

export default DashCard;
