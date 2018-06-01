import React from 'react';
import AdminHeader from '../../components/AdminHeader';
import MovieRegisterForm from '../../components/MovieRegisterForm';
import AdminStat from '../../components/AdminStat';
import FaPlusCircle from 'react-icons/lib/fa/plus-circle';
import FaTrash from 'react-icons/lib/fa/trash';
import FaAlignRight from 'react-icons/lib/fa/align-left';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class MovieRegisterApp extends React.Component {
    constructor(props) {
        super();

        this.state = {
            isFetching: false,
            movieList: props.data,
            page: 2,
            isEnd: false,
            modalIsOpen: false,
            movie: {},
        };

        this.search = this.search.bind(this);
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.modify = this.modify.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    openModal(item) {
        this.setState({
            modalIsOpen: true,
            movie: item,
        });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    modify(id, description) {
        fetch(`/api/movie?id=${this.state.movie.id}&description=${this.state.movie.description}`, { method: 'PUT' })
            .then(r => {
                alert('수정되었습니다.');
                this.setState({ modalIsOpen: false });
                window.location.reload();
            })
    }
    closeModal(id, description) {
        this.setState({ modalIsOpen: false });
    }

    search() {
        if (this.state.isFetching) return;

        this.setState({
            isFetching: true,
            isEnd: false,
        })

        const title = document.querySelector('.admin-search').value;
        fetch(`/api/movie/?page=0&genre=-1&sort=1&title=${title}`)
            .then(r => r.json())
            .then(r => {
                this.setState({
                    movieList: r,
                    isFetching: false,
                    page: this.state.page + 1,
                    isEnd: r.length === 0 ? true : false,
                    movie: {},
                })
                console.log(r);
            });
    }

    onMouseOver(e) {
        e.currentTarget.childNodes[3].style = 'visibility: visible';
    }

    onMouseOut(e) {
        e.currentTarget.childNodes[3].style = 'visibility: hidden';
    }

    onDelete(id, title) {
        if (confirm(`${title}\n삭제할까요?`)) {
            fetch(`/api?id=${id}`, { method: 'DELETE' })
                .then(r => {
                    alert('삭제되었습니다.');
                    window.location.reload();
                })
        }
    }

    onChange(e, prop) {
        this.setState({
            movie: Object.assign(this.state.movie, {
                [prop]: e.target.value,
            })
        });
    }

    render() {
        return (
            <div>
                <AdminHeader title='영화 관리' />
                <div className='admin-wrapper'>
                    <div>
                        <AdminStat />
                        <hr />
                        <div className='admin-search-wrapper'><input onChange={this.search} className='admin-search' placeholder='영화 검색' /></div>
                        <div className='result-header'>
                            <span>제목</span>
                            <span>개봉일</span>
                            <span>매출</span>
                        </div>
                        <div className='admin-result'>
                            {this.state.movieList.map((item) => {
                                return (
                                    <div key={item.id} onMouseOver={(e) => this.onMouseOver(e)} onMouseOut={(e) => this.onMouseOut(e)}>
                                        <span>{item.title}</span>
                                        <span>{item.release_date.toString().slice(0, 10)}</span>
                                        <span>{`100`}</span>
                                        <span className='admin-settings'><FaTrash onClick={() => this.onDelete(item.id, item.title)} /><FaAlignRight onClick={() => this.openModal(item)} /></span>
                                    </div>
                                );
                            })}
                        </div>
                        <Modal
                            isOpen={this.state.modalIsOpen}
                            onAfterOpen={this.afterOpenModal}
                            onRequestClose={this.closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >
                            <h2 ref={subtitle => this.subtitle = subtitle}>{`정보 수정`}</h2>
                            <div><textarea value={this.state.movie.description} onChange={(e) => this.onChange(e, 'description')} /></div>
                            <button onClick={this.modify}>수정</button>
                            <button onClick={this.closeModal}>close</button>
                        </Modal>
                    </div>
                </div>
                <span className='plus-icon-wrapper'><a href='/admin/movie'><FaPlusCircle size={70} /></a></span>
                <script dangerouslySetInnerHTML={{
                    __html: 'window.PROPS=' + JSON.stringify(this.props.data)
                }} />
            </div>
        );
    }
};

export default MovieRegisterApp;
