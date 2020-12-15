import React from 'react';
import './RatingSearch.css';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const RatingSearch = ({ getMoviesByRating }) => {
  return(
    <DropdownButton id="dropdown-basic-button" title="Search Movies By Rating" className="ratings-dropdown" >
      <Dropdown.Item onClick={(event) => getMoviesByRating(event.target.name)} name={[1, 10]} href="#">All Movies</Dropdown.Item>
      <Dropdown.Item onClick={(event) => getMoviesByRating(event.target.name)} name={[1, 2]} href="#rating-1-2">1-2</Dropdown.Item>
      <Dropdown.Item onClick={(event) => getMoviesByRating(event.target.name)} name={[2, 3]} href="#rating-2-3">2-3</Dropdown.Item>
      <Dropdown.Item onClick={(event) => getMoviesByRating(event.target.name)} name={[3, 4]} href="#rating-3-4">3-4</Dropdown.Item>
      <Dropdown.Item onClick={(event) => getMoviesByRating(event.target.name)} name={[4, 5]} href="#rating-4-5">4-5</Dropdown.Item>
      <Dropdown.Item onClick={(event) => getMoviesByRating(event.target.name)} name={[5, 6]} href="#rating-5-6">5-6</Dropdown.Item>
      <Dropdown.Item onClick={(event) => getMoviesByRating(event.target.name)} name={[6, 7]} href="#rating-6-7">6-7</Dropdown.Item>
      <Dropdown.Item onClick={(event) => getMoviesByRating(event.target.name)} name={[7, 8]} href="#rating-7-8">7-8</Dropdown.Item>
      <Dropdown.Item onClick={(event) => getMoviesByRating(event.target.name)} name={[8, 9]} href="#rating-8-9">8-9</Dropdown.Item>
      <Dropdown.Item onClick={(event) => getMoviesByRating(event.target.name)} name={[9, 10]} href="#rating-9-10">9-10</Dropdown.Item>
    </DropdownButton>
  )
  
}

export default RatingSearch;