import {Button, Input, Space} from "antd";
import {SearchOutlined} from "@ant-design/icons";

function TableSearchPanel({params}) {
	const {selectedKeys, setSelectedKeys, confirm, clearFilters} = params;

	return (
		<div style={{ padding: 8 }}>
			<Input
				placeholder={`Search`}
				value={selectedKeys[0]}
				onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
				onPressEnter={() => confirm()}
				style={{ marginBottom: 8, display: 'block' }}
			/>
			<Space>
				<Button
					type="primary"
					onClick={() => confirm()}
					icon={<SearchOutlined />}
					size="small"
					style={{ width: 90 }}
				>
					Search
				</Button>
				<Button onClick={() => {
					clearFilters();
					confirm();
				}} size="small" style={{ width: 90 }}>
					Reset
				</Button>
			</Space>
		</div>
	);
}

export default TableSearchPanel;