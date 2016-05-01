var React = require('react');
//react router
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;
//actions
var ClientActions = require('../actions/client_actions');
var UserActions = require('../actions/user_actions');
//stores
var UserStore = require('../stores/user_store');
//components
var BookIndexItem = require('./book_index_item');
var BookStore = require('../stores/book_store');
var BookForm = require('./book_form');
var UsersIndex = require('./user_index');

var Books = React.createClass({

  getInitialState: function(){
    return {books: [], showForm: false, currentUser: {}};
  },

  componentWillMount: function(){
    this.userBooksListener = BookStore.addListener(this.getUserBooks);
    ClientActions.fetchUserBooks();
  },

  componentWillUnmount: function(){
    this.userBooksListener.remove();
  },

  getUser: function(){
    this.setState({currentUser: UserStore.currentUser()});
  },

  getUserBooks: function(){
    this.setState({books: BookStore.all()});
  },
  addBook: function(){
    this.setState({showForm: true});
  },
  displayForm: function(){
    if(this.state.showForm){
      return <BookForm/>;
    }
    else{
      return (<button  className="bk-button" onClick={this.addBook}>
        Add a new book to my collection!
      </button>);
    }
  },

  render: function(){

    if (!this.state.books || !UserStore.currentUser()){
      return (<div>Loading</div>);
      //Insert loading icon here
    }

    var self = this;

      return (<div className="book-index">
      {this.displayForm()}
      {this.props.children}

        <ul className="books-index">
          {
            self.state.books.map(function(book){
                return (
                  <div key={book.id}>
                    <BookIndexItem book={book}/>
                  </div>);
            })
          }
        </ul>

        <div><UsersIndex/></div>

      </div>);
  }
});

module.exports = Books;
