import React, { Component } from 'react';
import { render } from 'react-dom';
import './RatingSearch.css';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const RatingSearch = (props) => {
  return(
    <DropdownButton id="dropdown-basic-button" title="Dropdown button" onSelect={() => props.getMoviesByRating}>
      <Dropdown.Item value={[0, 10]} href="#/action-1">All Movies</Dropdown.Item>
      <Dropdown.Item value={[1, 2]} href="#/action-1">1-2</Dropdown.Item>
      <Dropdown.Item value={[2, 3]} href="#/action-2">2-3</Dropdown.Item>
      <Dropdown.Item value={[3, 4]} href="#/action-3">3-4</Dropdown.Item>
      <Dropdown.Item value={[4, 5]} href="#/action-4">4-5</Dropdown.Item>
      <Dropdown.Item value={[5, 6]} href="#/action-5">5-6</Dropdown.Item>
      <Dropdown.Item value={[6, 7]} href="#/action-6">6-7</Dropdown.Item>
      <Dropdown.Item value={[7, 8]} href="#/action-7">7-8</Dropdown.Item>
      <Dropdown.Item value={[8, 9]} href="#/action-8">8-9</Dropdown.Item>
      <Dropdown.Item value={[9, 10]} href="#/action-9">9-10</Dropdown.Item>
    </DropdownButton>
  )
}

/*class RatingSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  getMoviesByRating = (event) => {
    const ratingMinMax = event.target.value;
    const moviesInRange = this.props.movies.filter(movie => {
      return movie.rating >= ratingMinMax[0] && movie.rating <= ratingMinMax[1]
      // we want to pass in an array containing a minimum and maximum value in order to get movies with ratings within a range
    })
    this.setState({movies: moviesInRange})
  }

  render() {
    return(
      <DropdownButton id="dropdown-basic-button" title="Dropdown button" onSelect={getMoviesByRating}>
        <Dropdown.Item value={[1, 2]} href="#/action-1">1-2</Dropdown.Item>
        <Dropdown.Item value={[2, 3]} href="#/action-2">2-3</Dropdown.Item>
        <Dropdown.Item value={[3, 4]} href="#/action-3">3-4</Dropdown.Item>
        <Dropdown.Item value={[4, 5]} href="#/action-4">4-5</Dropdown.Item>
        <Dropdown.Item value={[5, 6]} href="#/action-5">5-6</Dropdown.Item>
        <Dropdown.Item value={[6, 7]} href="#/action-6">6-7</Dropdown.Item>
        <Dropdown.Item value={[7, 8]} href="#/action-7">7-8</Dropdown.Item>
        <Dropdown.Item value={[8, 9]} href="#/action-8">8-9</Dropdown.Item>
        <Dropdown.Item value={[9, 10]} href="#/action-9">9-10</Dropdown.Item>
      </DropdownButton>
    )
  }
} */

export default RatingSearch;