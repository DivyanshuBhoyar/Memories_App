import React from "react";
import { Box } from "grommet";
import { Github, Grommet, LinkedinOption, Reactjs } from "grommet-icons";

export default function AboutPage() {
  return (
    <div
      style={{
        width: "70vw",
        fontFamily: "Montserrat",
        fontWeight: 400,

        color: "black",
        margin: "0 auto",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

        alignItems: "center",
        fontSize: "2rem",
      }}
    >
      <Box
        gap="5px"
        direction="row"
        align="center"
        justify="center"
        pad="medium"
      >
        {/* <p>Current Version : 1.0 </p> */}
        Created with{" "}
        <img
          src="https://cdn.discordapp.com/attachments/792429986094907392/811865640423915550/icons8-google-firebase-console-50.png"
          alt="firebase logo"
        />{" "}
        <Reactjs size="50px" color="plain" />{" "}
        <Grommet size="50px" color="plain" /> {"  "}
        <span>by Divyanshu Bhoyar.</span>
      </Box>
      <div className="">
        <LinkedinOption
          href="https://www.linkedin.com/in/divyanshu-bhoyar/"
          color="plain"
        />{" "}
        <Github href="https://github.com/DivyanshuBhoyar" color="plain" />
      </div>
    </div>
  );
}
