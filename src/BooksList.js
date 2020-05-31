import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import AllBookShelves from './AllBookShelves'

class BooksList extends Component {
     static propTypes = {
		  books: PropTypes.array.isRequired,
		  onChangeBookShelf: PropTypes.func.isRequired
	     }

	render(){
        let shelves = ["wantToRead","read","currentlyReading"]

		return(
			<div>
			    <AllBookShelves shelves={shelves} books={this.props.books} onChangeShelf={this.props.onChangeBookShelf} />
				<div className="open-search">
	              <Link to="/search">Search a book</Link>
	            </div>
			</div>

			)
	}
}

export default BooksList