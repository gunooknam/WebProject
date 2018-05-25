import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/Header';
import MainBackground from '../../components/MainBackground';
import Row from '../../components/Row';

const MainApp = (props) => {
  return (
    <div>
      <Header activeIndex={0} user={props.data.user} />
      <MainBackground data={props.data.mainData}/>
      <Row data={props.data.sliderData}/>
      <Row data={props.data.sliderData}/>
      <Row data={props.data.sliderData}/>
      <Row data={props.data.sliderData}/>
      <Row data={props.data.sliderData}/>
      <Row data={props.data.sliderData}/>
      <script dangerouslySetInnerHTML={{
        __html: 'window.PROPS=' + JSON.stringify(props.data)
      }} />
    </div>
  );
}

export default MainApp;
