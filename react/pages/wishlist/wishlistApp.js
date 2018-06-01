import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/Header';
import Row from '../../components/Row';
import OptionSelector from '../../components/OptionSelector';
import RowItem from '../../components/RowItem';
import fetch from 'isomorphic-fetch';
import FaSearch from 'react-icons/lib/fa/search';

const orderList = [{ id: '1', genre: '평점 순' }, { id: '2', genre: '러닝타임 짧은 순' }, { id: '3', genre: '최신 순' },];

class WishlistApp extends React.Component {
  render() {
    return (
      <div>
        <Header activeIndex={1} user='22' />
        <div className='category-wrapper'>
          <div className='category-title'>{this.props.data.user.nickname}님이 구입한 영화</div>
          <div className='category-result-wrapper'>
            {this.props.data.data.map((item, index) => {
              return item.small_backdrop_path == 'https://image.tmdb.org/t/p/originalnull'
                ? null
                : <RowItem key={item.id} data={item} />;
            })}
          </div>
        </div>
        <script dangerouslySetInnerHTML={{
          __html: 'window.PROPS=' + JSON.stringify(this.props.data)
        }} />
      </div>
    );
  }
}

export default WishlistApp;
