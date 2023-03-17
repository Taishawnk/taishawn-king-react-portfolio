import React, { Component } from 'react';
import moment from 'moment';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Taishawn Kings React</h1>
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
      </div>
    );
  }
}
//diffrent componets come together to create the entire app this app.js component is the main component and all other components are nested inside this one  