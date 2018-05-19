import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Header';
import MainBackground from '../components/MainBackground';
import Row from '../components/Row';
// import '../css/main.css';
// import mysql from 'mysql';

const App = () => {
  return (
    <div>
      <Header />
      <MainBackground />
      <Row />
      <Row />
      <Row />
      <Row />
    </div>
  );
}

export default App;
