import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/Header';
import Row from '../../components/Row';
import OptionSelector from '../../components/OptionSelector';
import RowItem from '../../components/RowItem';
import fetch from 'isomorphic-fetch';

const orderList = [{ id: '1', genre: '평점 순' }, { id: '2', genre: '러닝타임 짧은 순' }, { id: '3', genre: '최신 순' },];

class CategoryApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      movieList: props.data.movieList,
      page: 2,
      isEnd: false,
    };
    this.handleListClick = this.handleListClick.bind(this);
    this.loadImages = this.loadImages.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.loadImages);
  }

  handleListClick(e) {
    if (this.state.isFetching) return;

    this.setState({
      isFetching: true,
      isEnd: false,
      page: 1,
    })

    const el = e.target.parentNode.parentNode.children[0].children[0];
    el.innerHTML = e.target.innerHTML;
    el.setAttribute('data-id', e.target.getAttribute('data-id'));
    e.target.parentNode.classList.toggle('active');

    const options = document.querySelectorAll('.selector-title-wrapper div');
    fetch(`http://localhost:3000/api/movie/?page=1&genre=${options[0].getAttribute('data-id')}&sort=${options[1].getAttribute('data-id')}`)
      .then(r => r.json())
      .then(r => {
        this.setState({
          movieList: r,
          isFetching: false,
          page: this.state.page + 1,
          isEnd: r.length === 0 ? true : false,
        })
      });
  };

  loadImages() {
    if ((window.innerHeight + window.scrollY) < document.body.offsetHeight) return;
    if (this.state.isEnd) return;

    this.setState({
      isFetching: true,
    })

    const options = document.querySelectorAll('.selector-title-wrapper div');
    fetch(`http://localhost:3000/api/movie/?page=${this.state.page}&genre=${options[0].getAttribute('data-id')}&sort=${options[1].getAttribute('data-id')}`)
      .then(r => r.json())
      .then(r => {
        this.setState({
          movieList: [...this.state.movieList, ...r],
          isFetching: false,
          page: this.state.page+1,
          isEnd: r.length === 0 ? true : false,
        })
      });
  }

  render() {
    return (
      <div>
        <Header activeIndex={1} user={this.props.data.user} />
        <div className='category-wrapper'>
          <div className='category-title'>재밌는 영화가 많네요</div>
          <div className='selector-wrapper'>
            <OptionSelector data={this.props.data.genreList} handleListClick={this.handleListClick} />
            <OptionSelector data={orderList} handleListClick={this.handleListClick} />
          </div>
          <div className='category-result-wrapper'>
            {this.state.movieList.map((item, index) => {
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

export default CategoryApp;
