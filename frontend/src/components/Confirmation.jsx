import React from "react";
import { Result, Button } from "antd";
import detectiveCat from './images/detectiveCat.webp.png'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';


export default function Confirmation() {
  const { id } = useParams();

  return (
    <div>
      <Result
        img src={detectiveCat}
        title="Submission Complete!!"
        extra={
          <Link to={`/post/${id}`}>
            <Button type="primary">
              Next
            </Button>
          </Link>
        }
      />
    </div >
  )
}


