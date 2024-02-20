<template>
    <div class="about-me">
      <div class="text">
        <div class="about-me2">About Me</div>
        <div class="about-main-text">
          As a junior software developer, I thrive on collaborative projects that
          bring ideas to life. I&#039;ve contributed to diverse teams, crafting a
          Python banking app, developing a tax calculator in Java, and building a
          multiplayer game using JavaScript and Node.js. My passion lies in
          turning innovative concepts into functional code, and I&#039;m excited
          to bring that enthusiasm to your next project. Let&#039;s code something
          exceptional together!
        </div>
      </div>
      <div class="skills-text">
        <div class="skills">Skills</div>
      </div>
    </div>
        <div
          class="expertise-text"
        >
          The main area of expertise is front end development (client side of the web).
        </div>
        <div
          class="sub-text"
        >
          HTML, CSS, JS, building small and medium web applications with Vue or
          React,
          <br />
          custom plugins, features, animations, and coding interactive layouts.
        </div>
        <!-- <div class="home-button"></div>
        <div class="home">Home</div> -->
        <div class="contact-button"></div>
        <div class="contact">Contact</div>
  
      <img class="python" src="../images/python1.png"/>
      <img class="vue" src="../images/vue.png"/>
      <img class="visual-studio-code" src="../images/visual-studio-code.png"/>
      <img class="react" src="../images/react.png"/>
      <img class="nodejs" src="../images/nodejs.png"/>
      <img class="javascript" src="../images/javascript.png"/>
      <img class="java" src="../images/java.png"/>
      <img class="html" src="../images/html5.png"/>
      <img class="git" src="../images/git.png"/>
      <img class="figma" src="../images/figma.png"/>
      <img class="css" src="../images/css3.png"/>
    
    </template>
    <script>
    export default {
      name: "AboutMe",
      components: {},
      props: {},
      data() {},
    };
    </script>
    <style scoped>
    .about-me,
    .about-me * {
      box-sizing: border-box;
    }
    .about-me {
    background: #4b4453;
	padding: 0px 23px 0px 23px;
	height: 100vh;
	width: 1280px;
	position: relative;
	overflow: hidden;
    }
    .text {
      position: absolute;
      inset: 0;
    }
    .about-me2 {
      color: #c34a36;
      text-align: left;
      font-family: "Inter-ExtraBold", sans-serif;
      font-size: 55px;
      font-weight: 800;
      position: absolute;
      left: 454px;
      top: 46px;
    }
    .about-main-text {
      color: #ff8066;
      text-align: left;
      font-family: "Inter-Light", sans-serif;
      font-size: 22px;
      font-weight: 500;
      position: absolute;
      left: 126px;
      top: 146px;
      width: 1064px;
      height: 251px;
    }
    .skills-text {
      position: absolute;
      inset: 0;
    }
    .skills {
      color: #c34a36;
      text-align: left;
      font-family: "Inter-Bold", sans-serif;
      font-size: 22px;
      font-weight: 800;
      position: absolute;
      left: 540px;
      top: 320px;
    }
    .expertise-text {
      color: #ff8066;
      text-align: left;
      font-family: "Inter-Medium", sans-serif;
      font-size: 22px;
      font-weight: 500;
      position: absolute;
      left: 250px;
      top: 386px;
    }
    .sub-text {
      color: #ff8066;
      text-align: left;
      font-family: "Inter-Light", sans-serif;
      font-size: 22px;
      font-weight: 500;
      position: absolute;
      left: 250px;
      top: 437px;
    }
    /* .home-button {
      background: #d9d9d9;
      border-radius: 16px;
      width: 90px;
      height: 32px;
      position: absolute;
      left: 59px;
      top: 10px;
    }
    .home {
      color: #c34a36;
      text-align: left;
      font-family: "Inter-ExtraBold", sans-serif;
      font-size: 22px;
      font-weight: 800;
      position: absolute;
      left: 68px;
      top: 10px;
    } */
    .contact-button {
      background: #d9d9d9;
      border-radius: 16px;
      width: 120px;
      height: 32px;
      position: absolute;
      left: 1150px;
      top: 10px;
    }
    .contact {
      color: #c34a36;
      text-align: left;
      font-family: "Inter-ExtraBold", sans-serif;
      font-size: 22px;
      font-weight: 800;
      position: absolute;
      left: 1160px;
      top: 10px;
      width: 100px;
      height: 22px;
    }
  
    .python {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 126px;
    top: 552px;
    overflow: hidden;
  }
  
  .vue {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 306px;
    top: 552px;
    overflow: visible;
  }
  
  .git {
    width: 120px;
    height: 90px;
    position: absolute;
    left: 486px;
    top: 552px;
    overflow: visible;
  }
  
  .figma {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 1026px;
    top: 552px;
    overflow: visible;
  }
  
  .html {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 666px;
    top: 552px;
    overflow: visible;
  }
  
  .visual-studio-code {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 846px;
    top: 740px;
    overflow: hidden;
  }
  
  .react {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 846px;
    top: 552px;
    overflow: hidden;
  }
  
  .nodejs {
    width: 120px;
    height: 60px;
    position: absolute;
    left: 486px;
    top: 745px;
    overflow: hidden;
  }
  
  .java {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 126px;
    top: 732px;
    overflow: visible;
  }
  
  .css {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 306px;
    top: 732px;
    overflow: visible;
  }
  
  .javascript {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 666px;
    top: 732px;
  }
    </style>
    
    