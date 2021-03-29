import { nanoid } from "nanoid";
import { useState } from "react";
import Page from "../components/Page";

export default function FaciltiesPage() {
  const [st,setSt]=useState([])
  
  return <Page>Facilities <button onClick={()=>{console.log(nanoid(10),st)}}>UUID</button></Page>;
}
