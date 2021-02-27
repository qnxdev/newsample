import { useState } from "react";
import Page from "../components/Page";

export default function DeptPage() {

  let a = [1, 3, 43, "dfjgh", [434, 43], { name: "df" }]; // create array

  let b = []; // create 2nd array

  a.map(function (i) {
    //maps through array a
    b.push(
        typeof(i)
        ); //eachn item's type pushed to array  b
  });

  return (
    <Page>
      Dept
      <br />
      {a[a.length-1].toString()}
    </Page>
  );
}
