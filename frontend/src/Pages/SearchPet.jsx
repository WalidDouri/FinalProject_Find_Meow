import React, {useState} from 'react'
import SearchForm from '../components/SearchForm'
import DisplayCats from '../components/DisplayCats'
// import '../SearchForm.scss'

import './SearchPet.scss'


export default function ReportPet() {
  const [apples, setApples] = useState([])


  const styleObj ={
    fontSize: 35,
    textAlign: 'center',
    paddingTop: 10,
  }

  return (
    <div className='searchpet'>
      
      <h1>THIS IS THE SEARCH PET PAGE</h1>
      <h2> talk to team about date range for search</h2>
      <SearchForm onApples={setApples}/>
      <div className="search-text" style={styleObj}>Search Result List</div>
      <div id="search-result-list">
        <DisplayCats apples={apples}/>
        
      </div>
    </div>
  )
}
