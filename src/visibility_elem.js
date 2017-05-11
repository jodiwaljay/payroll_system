import React, { Component } from 'react';
import './App.css';

function Welcome(props) {
  var style = {
      display: props.visibility

    };
  return <div><h1 style = {style} >Hello, {props.name}</h1></div>;
}

const element = React.createElement(Welcome, {name : 'red', visibility: 'inline'});

export default element;
