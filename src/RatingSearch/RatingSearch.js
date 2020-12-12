import React, { Component } from 'react';
import './RatingSearch.css';
import { Dropdown, DropdownButton } from 'react-bootstrap';

// const RatingSearch = (props) => {
//   return(
//     <DropdownButton id="dropdown-basic-button" title="Dropdown button" onSelect={() => props.getMoviesByRating}>
//       <Dropdown.Item  /* onSelect={() => props.resetMovieCards} */ value={[0, 10]} href="#/action-1">All Movies</Dropdown.Item>
//       <Dropdown.Item value={[1, 2]} href="#/action-1">1-2</Dropdown.Item>
//       <Dropdown.Item value={[2, 3]} href="#/action-2">2-3</Dropdown.Item>
//       <Dropdown.Item onClick={() => props.getMoviesByRating()} value="3,4" href="#/action-3">3-4</Dropdown.Item>
//       <Dropdown.Item value={[4, 5]} href="#/action-4">4-5</Dropdown.Item>
//       <Dropdown.Item value={[5, 6]} href="#/action-5">5-6</Dropdown.Item>
//       <Dropdown.Item value={[6, 7]} href="#/action-6">6-7</Dropdown.Item>
//       <Dropdown.Item value={[7, 8]} href="#/action-7">7-8</Dropdown.Item>
//       <Dropdown.Item value={[8, 9]} href="#/action-8">8-9</Dropdown.Item>
//       <Dropdown.Item value={[9, 10]} href="#/action-9">9-10</Dropdown.Item>
//     </DropdownButton>
//   )
// }

class RatingSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
  }

  // getMoviesByRating = (ratingMinMax) => {
  //   const range = ratingMinMax.split(",");
  //   const moviesInRange = this.props.movies.filter(movie => {
  //     return movie.rating >= range[0] && movie.rating <= range[1]
  //     // we want to pass in an array containing a minimum and maximum value in order to get movies with ratings within a range
  //   })
  //   this.setState({moviesByRating: moviesInRange})
  // }

  handleChange = (rating) => {
    // event.preventDefault();
    // this.setState({value: event});
    // console.log('value', this.state.value)
    this.props.getMoviesByRating(rating);
  }

  render() {
    return(
    <DropdownButton id="dropdown-basic-button" title="Dropdown button" >
      <Dropdown.Item onClick={(event) => this.handleChange(event.target.name)} name={[1, 10]} href="/">All Movies</Dropdown.Item>
      <Dropdown.Item onClick={(event) => this.handleChange(event.target.name)} name={[1, 2]} href="#rating-1-2">1-2</Dropdown.Item>
      <Dropdown.Item onClick={(event) => this.handleChange(event.target.name)} name={[2, 3]} href="#rating-2-3">2-3</Dropdown.Item>
      <Dropdown.Item onClick={(event) => this.handleChange(event.target.name)} name={[3, 4]} href="#rating-3-4">3-4</Dropdown.Item>
      <Dropdown.Item onClick={(event) => this.handleChange(event.target.name)} name={[4, 5]} href="#rating-4-5">4-5</Dropdown.Item>
      <Dropdown.Item onClick={(event) => this.handleChange(event.target.name)} name={[5, 6]} href="#rating-5-6">5-6</Dropdown.Item>
      <Dropdown.Item onClick={(event) => this.handleChange(event.target.name)} name={[6, 7]} href="#rating-6-7">6-7</Dropdown.Item>
      <Dropdown.Item onClick={(event) => this.handleChange(event.target.name)} name={[7, 8]} href="#rating-7-8">7-8</Dropdown.Item>
      <Dropdown.Item onClick={(event) => this.handleChange(event.target.name)} name={[8, 9]} href="#rating-8-9">8-9</Dropdown.Item>
      <Dropdown.Item onClick={(event) => this.handleChange(event.target.name)} name={[9, 10]} href="#rating-9-10">9-10</Dropdown.Item>
    </DropdownButton>
    )
  }
}

export default RatingSearch;