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
      {props.data.user ? (<Row data={props.data.sliderData.slice(0, 15)} text={`${props.data.user.nickname}님을 위한 추천 영화`}/>) : null}
      <Row data={props.data.sliderData.slice(15, 30)} text='무비하이 TOP 10!'/>
      <Row data={props.data.sliderData.slice(30, 45)} text='보고 또 봐도 재밌는 작품'/>
      <Row data={props.data.sliderData.slice(45, 60)} text='#공포'/>
      <Row data={props.data.sliderData.slice(60, 75)} text='#코메디'/>
      <Row data={props.data.sliderData.slice(75, 90)} text='#멜로'/>
      <Row data={props.data.sliderData.slice(90, 104)} text='#액션'/>
      <script dangerouslySetInnerHTML={{
        __html: 'window.PROPS=' + JSON.stringify(props.data)
      }} />
    </div>
  );
}

export default MainApp;
