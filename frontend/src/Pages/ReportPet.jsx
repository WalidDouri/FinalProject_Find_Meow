import React from 'react'
import SubmitForm from '../components/SubmitForm'
// import ProgressBar from '../components/ProgressBar'

import './ReportPet.scss'

export default function ReportPet() {
  return (
    <section>
      <div className='report'>
      {/* <ProgressBar/> */}
        <div>
          <h1>THIS IS THE REPORT pET PAGE</h1>
            <SubmitForm />
        </div>
      </div>
    </section>
  )
}

