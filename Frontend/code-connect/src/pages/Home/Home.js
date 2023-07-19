import { Component } from "react";
import Navbar from "../../components/Navbar";
import "./style.module.css"
import Posts from "../../components/Posts";
import SideBar from "../../components/SideBar";
import AdditionalContent from "../../components/AdditionalContent";

class Home extends Component{
    render(){
        return <div>
            <Navbar/>
            <div class="container">
            <SideBar/>
            <Posts/>
            <AdditionalContent/>
            </div>
            </div>
    }
}
export default Home;