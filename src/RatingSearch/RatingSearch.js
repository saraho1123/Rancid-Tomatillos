import React, { Component } from 'react';
import { render } from 'react-dom';
import './RatingSearch.css';
import { Dropdown, DropdownButton } from 'react-bootstrap';

class RatingSearch extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render() {
    return(
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        <Dropdown.Item href="#/action-1">1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-6">Something else</Dropdown.Item>
        <Dropdown.Item href="#/action-7">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-8">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-9">Something else</Dropdown.Item>
      </DropdownButton>
    )
  }
}

export default RatingSearch;