import React, { Component } from 'react';
import styles from './Messages.module.css';
class Messages extends Component{
    render() {
        return  <div className={styles["messenger"]}>
        <div className={styles["message-section"]}>
            <div className={styles["message-profile"]}>
                <div>
                    <img className={styles["message-pic"]} src="/assets/guni.png" />
                    <p>Guniverere</p>
                </div>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="6" viewBox="0 0 22 6" fill="none">
                        <path
                            d="M3.22222 1C2 1 1 2 1 3.22222C1 4.44444 2 5.44444 3.22222 5.44444C4.44444 5.44444 5.44444 4.44444 5.44444 3.22222C5.44444 2 4.44444 1 3.22222 1Z"
                            fill="black" stroke="#292D32" />
                        <path
                            d="M18.7779 1C17.5557 1 16.5557 2 16.5557 3.22222C16.5557 4.44444 17.5557 5.44444 18.7779 5.44444C20.0001 5.44444 21.0001 4.44444 21.0001 3.22222C21.0001 2 20.0001 1 18.7779 1Z"
                            fill="black" stroke="#292D32" />
                        <path
                            d="M11.0001 1C9.77783 1 8.77783 2 8.77783 3.22222C8.77783 4.44444 9.77783 5.44444 11.0001 5.44444C12.2223 5.44444 13.2223 4.44444 13.2223 3.22222C13.2223 2 12.2223 1 11.0001 1Z"
                            fill="black" stroke="#292D32" />
                    </svg>
                </a>
            </div>
        </div>

        <div className={styles.messages}>
            <div className={styles.message}>
                <img className={styles["message-pic"]} src="/assets/guni.png" />
                <div>
                    <p className={styles["messager-user-name"]}>Guniverere - <span>2:00pm</span> </p>
                    <div className={styles["message-text"]}>
                        <p>Hello</p>
                        <p>How are you doing?</p>
                        <p>Which Programming language is best</p>
                    </div>
                </div>
            </div>

        </div>
        <div className={styles["enter-message"]}>
            <input type="text" className={styles["message-input"]} placeholder="Search..."/>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="44" viewBox="0 0 43 44" fill="none">
                <path
                    d="M26.4296 43.0236C23.7956 43.0236 20.0678 41.1709 17.1212 32.309L15.5139 27.4874L10.6923 25.8802C1.85274 22.9336 0 19.2058 0 16.5717C0 13.96 1.85274 10.2099 10.6923 7.24104L29.644 0.92385C34.3763 -0.661028 38.3273 -0.192262 40.7605 2.21854C43.1936 4.62934 43.6623 8.60269 42.0775 13.335L35.7603 32.2866C32.7914 41.1709 29.0636 43.0236 26.4296 43.0236ZM11.7415 10.4331C5.53591 12.5091 3.32601 14.9645 3.32601 16.5717C3.32601 18.179 5.53591 20.6344 11.7415 22.6881L17.3668 24.5631C17.8579 24.7194 18.2597 25.1212 18.4159 25.6123L20.291 31.2375C22.3446 37.4431 24.8224 39.653 26.4296 39.653C28.0368 39.653 30.4922 37.4431 32.5682 31.2375L38.8854 12.2859C40.0238 8.84824 39.8229 6.03564 38.372 4.58469C36.921 3.13375 34.1084 2.95517 30.6931 4.0936L11.7415 10.4331Z"
                    fill="#939393" />
                <path
                    d="M17.2551 26.8845C16.8309 26.8845 16.4068 26.7283 16.0719 26.3934C15.4246 25.7461 15.4246 24.6746 16.0719 24.0273L24.0633 16.0136C24.7107 15.3662 25.7821 15.3662 26.4295 16.0136C27.0768 16.6609 27.0768 17.7324 26.4295 18.3797L18.4381 26.3934C18.1256 26.7283 17.6792 26.8845 17.2551 26.8845Z"
                    fill="#939393" />
            </svg>
        </div>
    </div>;
    }
}

export default Messages;