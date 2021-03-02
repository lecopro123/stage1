import React, { Component } from 'react';
import './App.css';
import Searchpage from './components/searchpage';
import { connect } from 'react-redux';
import { fetchDocs } from './redux/action';
import { withRouter } from 'react-router-dom';


const mapStateToProps = state => {
  return {
    images: state.images,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchDocs: (search) => dispatch(fetchDocs(search)),
})

class App extends Component {
  constructor(props) {
    super(props);
  }
  /* componentDidMount() {
     //console.log("a")
     this.props.fetchDocs();
 
   }*/
  render() {
    return (
      <Searchpage ser={this.props.fetchDocs} img={this.props.images} />
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
