import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import SearchTopics from './pages/Search/SearchTopics'

export default () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='' element={ <Home /> }/>
          <Route path="/search" element={ <SearchTopics /> }/>
        </Routes>
      </BrowserRouter>
  )
}
