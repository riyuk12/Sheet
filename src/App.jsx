import React from "react"
import ExportSheet from "./Sheet"
import {useState ,useEffect } from "react";
import './App.css'

 


function App() {
  
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InR1bHNpLmdlaGxvdEBwcnVkZW50Yml0LmNvbSIsImVtYWlsIjoidHVsc2kuZ2VobG90QHBydWRlbnRiaXQuY29tIiwiZXhwIjoxNjg2MjA0ODIxfQ.dYS17xiJg-xp4mE_v20M1ZdYFja4ZKRM3TXvwTY5XCo";
  fetch(
    `https://prudentbit.immunefiles.com/content/dashboard/linkgraph?tenant=${
      window.location.hostname.split(".")[0]
    }`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Access-Control-Request-Headers": true,
      },
    }
  ).then((response) => {
    response.json().then((data) => {
      console.log(data);
    });
  });


  
// [[["Name","UserName","UserEmail","UserMobileNo.","Dateoffirstloign","Department","2factorauthentication","Totallinkgenrated"]],[["Logintime  ","Loginouttime","LoginIP  ","Loginlocation","Loginauth(success/failed)","Devicescurrentlyloggedin","Overalldevicesloggedin"]],[["FileName","FIleSize","File/Folder(type)","Fileuploadedon ","Filecreatedon","FileDeletedon","UserIp"]],[["GroupName","GroupOwner","GroupCreatedon","Groupmember","Groupdeletedon"]],[["FileName","fileSize","File/Folder(type)","filesharedon","Filesharedwith","Filesharedonemail","GroupName(ifsharedingroup)","Permissionallowedonfile"]],[["FileName","LinkTitle","Link","Linkcreatedon","Linksharedmethod","Ifsharedonmail","IPwhichhaveaccessthelink"]],[["FIlerequestedfrommail","Ipwhichhaveaccessthelink","Filerequested(timespan)","Filesubmited(timespan)","filerequested1","filerequested2","filerequested3"]],[["FIlerequestedfrommail","Ipwhichhaveaccessthelink","Filerequested(timespan)","Filesubmited(time span)"]]]



  return (
    <>
      <ExportSheet data={[[["name","last"],["rajat","bose"],["rajat1","bose1"]],[["id","prod"],["1","prod1"],["2","prod2"]]]}/>
    </>
  )
}

export default App
