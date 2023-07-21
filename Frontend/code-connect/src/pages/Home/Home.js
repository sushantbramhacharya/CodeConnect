import { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";

import Posts from "../../components/Posts/Posts";
import SideBar from "../../components/SideBar/SideBar";
import AdditionalContent from "../../components/AdditionalContent/AdditionalContent";
import Messages from "../../components/Messages/Messages";
import styles from "./Home.module.css";


class Home extends Component{
    render(){
        return <div>
            <Navbar/>
            <div className={styles["container"]}>
            <SideBar/>
            <Messages/>
            {/* <Posts/> */}
            <AdditionalContent/>
            </div>
            </div>
    }
}
export default Home;