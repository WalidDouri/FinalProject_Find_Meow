import React from 'react'
import SearchForm from '../components/SearchForm'
// import '../SearchForm.scss'

import './SearchPet.scss'


export default function ReportPet() {
  return (
    <div className='searchpet'>
      {/* <Navbar /> */}
      <h1>THIS IS THE SEARCH PET PAGE</h1>
      <h2> talk to team about date range for search</h2>
      <SearchForm />
      <div className="search-result-list">Search Result List</div>
    </div>
  )
}
