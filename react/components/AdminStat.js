import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';

const barData = {
	labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
	datasets: [
		{
			label: '2018년 매출 통계(단위: 천 만원)',
			backgroundColor: 'rgba(255, 206, 86, 0.4)',
			borderColor: 'rgba(255, 206, 86, 1)',
			borderWidth: 1,
			hoverBackgroundColor: 'rgba(255, 206, 86, 1)',
			hoverBorderColor: 'rgba(255, 206, 86, ,1)',
			data: [3.5, 2.1, 7, 5.8, 11.2, 1.2]
		}
	]
};

const dohughtData = {
	labels: [
		'10~20대',
		'30~40대',
		'40~50대',
		'50대~'
	],
	datasets: [{
		data: [59, 24, 12, 5],
		backgroundColor: [
			'#FF6384',
			'#36A2EB',
			'#FFCE56',
			'#4bc0c0'
		],
		hoverBackgroundColor: [
			'#FF6384',
			'#36A2EB',
			'#FFCE56',
			'#4bc0c0'
		]
	}]
};

class AdminStat extends React.Component {
	onclick(i) {
		document.querySelectorAll('canvas')[1-i].classList.add('hidden');
		document.querySelectorAll('canvas')[i].classList.remove('hidden');
		document.querySelectorAll('.chart-cat span')[i].classList.add('active');
		document.querySelectorAll('.chart-cat span')[1-i].classList.remove('active');
	}

	render() {
		return (
			<div>
				<div className='chart-cat'>
					<span onClick={() => this.onclick(0)} className='active'>월별 매출</span>
					<span onClick={() => this.onclick(1)}>연령대별 매출 비율</span>
				</div>
				<Bar data={barData} />
				<Doughnut data={dohughtData} />
			</div>
		);
	}

	componentDidMount() {
		document.querySelectorAll('canvas')[1].classList.add('hidden');
	}
}

export default AdminStat;
