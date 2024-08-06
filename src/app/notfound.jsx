import { Button } from "../MTaitwind";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (

          <div className="flex flex-col my-auto text-xl justify-center text-red-900 font-semibold items-center">
      <h1>Not Found</h1>
      <p>Sorry ,The Page You Looking for does not exit .</p>
   
      <Link className="flex mt-2" href={"/"}> <Button color="red" size="sm">Back Home</Button></Link>
    </div>
  );
}
