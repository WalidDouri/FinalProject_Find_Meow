import React from 'react'
import { Card } from 'antd'
import './CatFormItem.scss'
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faCalendar, faVenus } from '@fortawesome/free-solid-svg-icons'


export default function CatFormItem(props) {
  // const hasCatForms = props.catForms.length > 0;

  // console.log("Cat Form Item",props.catFormItem);
  console.log("------------>",props)
  return (
    <div className="card mb-3" style={{width: '1000px'}}>
      <div className="row no-gutters">
        <div className="col-md-4">
            <Card hoverable>
              
            <img src={props.image} alt="" 
            style={{width:'100%' ,height:'250px'}}/>
            
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
            
            </text>
            </Card>
 
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.age}&nbsp;months old</p>
            {props.gender === 'male' ? <p className="card-text"><FontAwesomeIcon icon={faMars}/>&nbsp;{props.gender}</p> : 
            <p className="card-text"><FontAwesomeIcon icon={faVenus}/>&nbsp;{props.gender}</p>}
            
            <p className="card-text"title={props.last_seen_date }>
            <FontAwesomeIcon icon={faCalendar}/>&nbsp;Last Seen:&nbsp; 
            {new Intl.DateTimeFormat('en-GB', { 
                month: 'long', 
                day: '2-digit',
                year: 'numeric', 
            }).format(new Date(props.last_seen_date))}</p>
            <p className="card-text">
              <small className="text-muted">{props.description}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  }

