var React = require('react');

var ClientActions = require('../actions/client_actions');
var BookIndexItem = require('./book_index_item');
var BookStore = require('../stores/book_store');

var Books = React.createClass({
  getInitialState: function(){
    return {books: []};
  },

  componentDidMount: function(){
    this.bookListener = BookStore.addListener(this.getBooks);
    ClientActions.fetchAllBooks();
  },

  componentWillUnmount: function(){
    this.bookListener.remove();
  },

  getBooks: function(){
    this.setState({books: BookStore.all()});
  },

  render: function(){
    return (<div className="book-index">
      <ul>
        {
          this.state.books.map(function(book){
          return (<BookIndexItem key={book.id} book={book}/>);
        })
      }
      </ul>
    </div>);
  }
});

module.exports = Books;
