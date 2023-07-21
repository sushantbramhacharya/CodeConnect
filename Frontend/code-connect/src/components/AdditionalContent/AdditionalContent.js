import React, { Component } from 'react';
import styles from "./AdditionalContent.module.css";
class AdditionalContent extends Component{
render() {
  return (
    <div className={styles["additional-content"]}>
      <div className={styles["additional-section"]}>
        <div className={styles["add-cont"]}>
          <ul>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Community Guidelines</a>
            </li>
            <li>
              <a href="#">Cookies Policy</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">Language</a>
            </li>
            <li>
              <a href="#">Copyright Policy</a>
            </li>
          </ul>
        </div>

        <div className={styles["add-logo"]}>
          <img src="/assets/logo.png" alt="logo" />
        </div>

        <img src="" alt="" />
      </div>
    </div>
  );
}
}


export default AdditionalContent;
