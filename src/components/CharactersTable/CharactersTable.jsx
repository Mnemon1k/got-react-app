import {Link} from "react-router-dom";
import { Table, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import TableSearchPanel from "../TableSearchPanel/TableSearchPanel";

function CharactersTable({characters, loading, pageSize, currentPage, totalPages, setPageSize, setCurrentPage}) {
	const getAge = (date) => {
		let dateArr = Array.from(date.matchAll(/\d+/g));

		if (dateArr.length === 1){
			return dateArr[0][0];
		} else if (dateArr.length === 2){
			return Math.ceil((Number(dateArr[0][0]) + Number(dateArr[1][0])) / 2);
		}else {
			return false;
		}
	}

	const onChange = ({current, pageSize}, filter, sorter, extra)=>{
		// onChange callback of Table component calls also on filter event and etc.
		// So we need to react only on 'paginate' action
		if (extra.action === 'paginate'){
			setPageSize(pageSize);
			setCurrentPage(current);
		}
	}

	const columns = [
		{
			title: 'Character',
			dataIndex: 'character',
			key: 'character',
			width: 500,
			render: (item, {name, aliases}) => {
				// API gives [''] instead of [], so i use aliases.join(', ').length to check if there is something inside
				return aliases.join(', ').length ?
					name.length ?
						name + ' - ' + aliases.join(', ')
						:
						aliases.join(', ')
					:
					name
			},
		},
		{
			title: 'Alive',
			dataIndex: 'alive',
			key: 'alive',
			width: 220,
			render: (item, {born, died}) => {
				if (!died && !born) return 'Unknown';
				if (!born) return 'No';
				if (!died) return 'Yes';

				born = getAge(born);
				died = getAge(died);

				if (died && born) {
					return `No, died at ${died - born} years old`;
				}else{
					return 'Unknown';
				}
			},
		},
		{
			title: 'Gender',
			dataIndex: 'gender',
			key: 'gender',
			onFilter: (value, record) => (value.filter((item)=>(record.gender.toLowerCase() === item.toLowerCase())).length),
			// onFilter: (value, record) => (record.gender.toLowerCase() === value.toLowerCase()),
			filters: [
				{ text: 'Male', value: ['male'] },
				{ text: 'Female', value: ['female'] },
				{ text: 'Any', value: ['male', 'female'] },
			],
		},
		{
			title: 'Culture',
			dataIndex: 'culture',
			key: 'culture',
			filterDropdown: (params) => (<TableSearchPanel params={params}/>),
			filterIcon: <SearchOutlined />,
			onFilter: (value, record) => (record['culture'].toLowerCase().includes(value.toLowerCase())),
			render: (item, {culture}) => {
				return culture || <Typography.Text type="secondary">Unknown</Typography.Text>
			},
		},
		{
			title: 'Allegiances',
			dataIndex: 'allegiances',
			key: 'allegiances',
			width: 160,
			render: (item, {allegiances}) => {
				return allegiances.length ? (
					<div className="items-offset">
						{allegiances.map((item)=>(
							<Link key={item} to={'house/' + item.split('/houses/')[1]}>
								House
							</Link>
						))}
					</div>
				) : (
					<Typography.Text type="secondary">No allegiances</Typography.Text>
				)
			},
		}
	];

	return (
		<Table
			columns={columns}
			rowKey='url'
			bordered
			loading={loading}
			onChange={onChange}
			tableLayout={'auto'}
			pagination={{
				"current": currentPage,
				"pageSize": pageSize,
				"total": totalPages*pageSize,
				pageSizeOptions: [10,25,50]
			}}
			scroll={{x: 800}}
			dataSource={characters}
		/>
	);
}

export default CharactersTable;