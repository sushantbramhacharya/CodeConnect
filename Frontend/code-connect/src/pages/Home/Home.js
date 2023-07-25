import { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Posts from "../../components/Posts/Posts";
import SideBar from "../../components/SideBar/SideBar";
import AdditionalContent from "../../components/AdditionalContent/AdditionalContent";
import Messages from "../../components/Messages/Messages";
import styles from "./Home.module.css";

function endpointCheck(endpoint) {
    if(endpoint==='/')
    {
        return <Posts/>
    }
    else if(endpoint==="/messages")
    {
        return <Messages/>
    }
}
class Home extends Component{
    

        constructor()
        {
            super();
            this.state={
                userData:{}
            };
        }
    componentDidMount()
    {
        const that=this;
        fetch("http://localhost/test/user.php")
        .then(resp=>resp.json())
        .then((data)=>{
        that.setState({userData:data});
        })
        .catch((err)=>{
        console.log(err);
        })
    }

    render(){
        const {userData}=this.state;
        if(Object.keys(userData).length===0)
        {
            return <div></div>;
        }
        
        return <div>
            <Navbar/>
            <div className={styles["container"]}>
            <SideBar userData={userData}/>
            {endpointCheck(this.props.endpoint)}
            <AdditionalContent/>
            </div>
            </div>
    }
}
export default Home;