import React, {useState} from 'react'
import SearchForm from '../components/SearchForm'
import DisplayCats from '../components/DisplayCats'
// import '../SearchForm.scss'

import './SearchPet.scss'


export default function ReportPet() {
  const [apples, setApples] = useState([])

  return (
    <div className='searchpet'>
      {/* <Navbar /> */}
      <h1>THIS IS THE SEARCH PET PAGE</h1>
      <h2> talk to team about date range for search</h2>
      <SearchForm onApples={setApples}/>
      <div className="search-result-list">Search Result List</div>
        <DisplayCats apples={apples}/>
    </div>
  )
}
