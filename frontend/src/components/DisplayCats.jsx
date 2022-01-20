import React from 'react'

export default function DisplayCats({apples, cats}) {

    const displayInfo = () => {
      // const { apples } = props;

      if (apples.length > 0) {
        return (
          apples.map ((setDetail, index) => {
            console.log(setDetail);
            return (
              <div className="setDetail" key={setDetail.id}>
                <h3 className="setDetail__title">{setDetail.cat_name}</h3>
                <p className="Gender__body">{setDetail.gender}</p>
                {/* <p className="setDetail__body">{setDetail.content}</p> */}
                <p className="Address__body">{setDetail.last_seen_address}</p>
                <p className="City__body">{setDetail.last_seen_city}</p>
                <p className="Postal_Code__body">{setDetail.last_seen_postal_code}</p>
                <span className="setDetail__fadeOut"></span>
              </div>
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
    { displayInfo()}
    </>
  )
}
