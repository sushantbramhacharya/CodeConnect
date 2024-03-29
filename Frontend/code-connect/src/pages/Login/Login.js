import React, { Component } from 'react';
import styles from './Login.module.css';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {  email, password } = this.state;
    axios.post('http://localhost/test/auth.php', {  email, password }, { withCredentials: true })
      .then((response) => {
        if(response.data==="Success")
        {
          
        }
      })
      .catch((error) => {

        console.error('Error:', error);
      });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  
    
  componentDidMount()
  {  
      let texts = [
          "<!--HTML-->\n<html>\n<body>\n<h1>Welcome To Code Connect</h1>\n</body>\n</html>",
          "//JavaScript\nconsole.log(\"Code Connect\");",
          "#Python\nprint(\"Code Connect\")",
          "//JAVA\npublic class CodeConnect {\npublic static void main(String[] args) {\n   System.out.println(\"Code Connect\");\n    }\n}"
      ];

      let delay = 100;
      if(window.innerWidth<1303)
      {
          console.log(window.innerWidth)
          texts = [
              "//PHP\n<?php \necho \"Code Connect\";\n?>",
              "//Ruby\nputs \"Hello, World!\";",
              "#Python\nprint(\"Code Connect\")",
              
          ];
      }
      let animationElement = document.getElementById("typing-animation");

      function typeWriter(text, index, lineIndex) {
          if (index < text.length) {
          if (text.charAt(index) === '\n') {
              animationElement.innerHTML += "<br>";
              lineIndex++;
          } else {
              animationElement.innerHTML += text.charAt(index);
          }
          index++;
          setTimeout(function() {
              typeWriter(text, index, lineIndex);
          }, delay);
          } else {
          setTimeout(function() {
              animationElement.innerHTML = "";
              var nextTextIndex = (texts.indexOf(text) + 1) % texts.length;
              typeWriter(texts[nextTextIndex], 0, 0);
          }, 1000); 
          }
}
  

  typeWriter(texts[0], 0, 0);


    }
    
  render() {
    const { email, password } = this.state;
    return <div className={styles["main"]}>
      <div className={styles["left"]}>
        <img className={styles["logo"]} src="./assets/logo.png" alt="logo" />
        <p id="typing-animation" className={styles["code"]} ></p>

      </div>
      <div className={styles["right"]}>
        <form className={styles["login-form"]} onSubmit={this.handleSubmit}>
          <img className={styles["logo"]+" "+styles["mbl-logo"]} src="./assets/logo.png" alt="logo" />
          <label htmlFor="email">Email</label>
          <input className={styles["inputs"]} value={email} onChange={this.handleChange} type="email" name="email" placeholder="Enter Your Email" id="email" />
          <label htmlFor="password">
            Password <a className={styles["link"]} href="">Forgot?</a>
          </label>
          <div className={styles["inputs"]}>
            <input value={password} onChange={this.handleChange} type="password" name="password" placeholder="Enter Your Password" id="password" />
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path
                d="M12 5.75C4.5 5.75 1.5 12.5 1.5 12.5C1.5 12.5 4.5 19.25 12 19.25C19.5 19.25 22.5 12.5 22.5 12.5C22.5 12.5 19.5 5.75 12 5.75Z"
                stroke="#BEBEBF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              />
              <path
                d="M12 16.25C14.0711 16.25 15.75 14.5711 15.75 12.5C15.75 10.4289 14.0711 8.75 12 8.75C9.92893 8.75 8.25 10.4289 8.25 12.5C8.25 14.5711 9.92893 16.25 12 16.25Z"
                stroke="#BEBEBF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              />
            </svg>
          </div>
          <br />
          <button className={styles["login"]} name="login">Login Now</button>
          <br />
          {/* <button className={styles["login-social"]+" "+styles["login"]} name="login-social">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
              <path
                d="M19.805 10.7305C19.805 10.0507 19.7499 9.36724 19.6323 8.69849H10.2V12.5493H15.6014C15.3773 13.7913 14.6571 14.8899 13.6025 15.5881V18.0867H16.825C18.7173 16.345 19.805 13.7729 19.805 10.7305Z"
                fill="#4285F4"
              />
              <path
                d="M10.1999 20.5008C12.897 20.5008 15.1714 19.6152 16.8286 18.0867L13.6061 15.588C12.7096 16.198 11.5521 16.5434 10.2036 16.5434C7.59474 16.5434 5.38272 14.7833 4.58904 12.417H1.26367V14.9928C2.96127 18.3696 6.41892 20.5008 10.1999 20.5008Z"
                fill="#34A853"
              />
              <path
                d="M4.5854 12.417C4.16651 11.175 4.16651 9.8302 4.5854 8.58824V6.01245H1.2637C-0.154633 8.8381 -0.154633 12.1671 1.2637 14.9928L4.5854 12.417Z"
                fill="#FBBC04"
              />
              <path
                d="M10.1999 4.45805C11.6256 4.436 13.0035 4.97247 14.036 5.95722L16.8911 3.10218C15.0833 1.40459 12.6838 0.471278 10.1999 0.500674C6.41892 0.500674 2.96127 2.63185 1.26367 6.01234L4.58537 8.58813C5.37538 6.21811 7.59107 4.45805 10.1999 4.45805Z"
                fill="#EA4335"
              />
            </svg>
            Login Now
          </button> */}
          <br />
          <p className={styles["sign-up"]}>
            Don't have an account ? <a className={styles["link"]} href="">Sign Up</a>
          </p>
        </form>
      </div>
    </div>;
  };
}

export default Login;
