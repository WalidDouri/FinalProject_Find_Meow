import React from "react";
import { Result, Button } from "antd";
import detectiveCat from './images/detectiveCat.webp.png'


export default function Confirmation() {
  
  
  return (
   
   <div>
      <Result
          img src={detectiveCat}
          title="Submission Complete!!"
          extra={<Button type="primary">Next</Button>}
        />
    </div>
  )
}


