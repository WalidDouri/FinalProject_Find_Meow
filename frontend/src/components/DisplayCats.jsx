import React from 'react'
import { Card } from 'antd';
import "./DisplayCats.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export default function DisplayCats({ apples, cats }) {
  const { Meta } = Card;
  const displayInfo = () => {
    // const { apples } = props;

    if (apples.length > 0) {
      return (
        apples.map((setDetail, index) => {
          return (
            <>
              <div className="displayCat">
                <Link to={`/post/${setDetail.id}`}>
                  <Card
                    hoverable
                    style={{ width: 260 }}
                    cover={<img alt="example" src={setDetail.image} />}
                  >
                    <Meta title={setDetail.cat_name} description={setDetail.status} />
                    <br></br>
                    <p>Last Seen: <FontAwesomeIcon icon={faMapMarker} /> {setDetail.last_seen_city}</p>
                  </Card>
                </Link>
              </div>
            </>
          )
        })
      )
    } else {
      return (
        <h3>No Cats yet xD</h3>
      )
    }
  }
  return (
    <>
      {displayInfo()}
    </>
  )
}




{/* <div className="setDetail" key={setDetail.id}>
                <h3 className="setDetail__title">{setDetail.cat_name}</h3>
                <p className="Gender__body">{setDetail.gender}</p>
                {/* <p className="setDetail__body">{setDetail.content}</p> */}
//   <p className="Address__body">{setDetail.last_seen_address}</p>
//   <p className="City__body">{setDetail.last_seen_city}</p>
//   <p className="Postal_Code__body">{setDetail.last_seen_postal_code}</p>
//   <span className="setDetail__fadeOut"></span>
// </div> */}



{/* <Card style={{ width: '10rem' }}>
<Card.Img variant="top" src={setDetail.image} />
<Card.Body>
<Card.Title>{setDetail.cat_name}</Card.Title>
<Card.Text>
  <p>{setDetail.status}</p>
  <p>{setDetail.last_seen_city}</p>
</Card.Text>
{/* <Button variant="primary">Go somewhere</Button> */}
// </Card.Body>
// </Card> */}