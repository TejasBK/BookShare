var React = require('react');

var UserActions = require('../actions/user_actions');
var CurrentUserState = require('../mixins/current_user_state');

var LoginForm = React.createClass({

  mixins: [CurrentUserState],

  getInitialState: function(){
    return {form: "login"};
  },

  handleSubmit: function(event){
    event.preventDefault();
    UserActions[this.state.form]({
      username: this.state.username,
      password: this.state.password
    });
  },

  logout: function(event){
    event.preventDefault();
    UserActions.logout();
  },

  setForm: function(event){
    this.setState({form: event.currentTarget.value});
  },
  usernameChange: function(event){
    this.state.username = event.target.value;
  },
  passwordChange: function(event){
    this.state.password = event.target.value;
  },
  greeting: function(){
    console.log(this.state);
		if (!this.state.currentUser) {
			return;
		}
		return (
			<div>
				<h2>Hi, {this.state.currentUser.username}!</h2>
				<input type="submit" value="logout" onClick={this.logout}/>
			</div>
		);
	},

  errors: function(){
    if (!this.state.userErrors){
      return;
    }
    var err = this.state.userErrors;
    return (
      <ul>
        {Object.keys(err).map(function(key, i) {
          return (<li key={i}> {err[key]} </li>);
        })
      }
      </ul>
    );
  },

  form: function(){
    if (this.state.currentUser){
      return;
    }
    return (
      <div id="form">
        <form onSubmit={this.handleSubmit}>

          <section>
            <label>Username&nbsp;
              <input type="text" onChange={this.usernameChange}></input><br/>
            </label>
            <br/>
            <label>
              Password&nbsp;
              <input type="password" onChange={this.passwordChange}></input><br/>
            </label>
          </section>
          <br/>
          <section>
            <label> Login
              <input type="Radio" name="action" value="login" onChange={this.setForm}/>
            </label>
            <label> SignUp
              <input type="Radio" name="action" value="signup" onChange={this.setForm}/>
            </label>
          </section>
            <br/>
          <input type="submit" value="Submit"/>

        </form>
      </div>
    );//return
  },//form
  render: function(){
    return (<div id='login-form'>
      {this.greeting()}
      {this.form()}
      {this.errors()}
    </div>);
  }
});

module.exports = LoginForm;