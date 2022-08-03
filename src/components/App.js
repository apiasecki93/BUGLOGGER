import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import LogItem from './LogItem'
import AddLogItem from './AddLogItem'
import Alert from 'react-bootstrap/Alert'

const App = () => {
	const [logs, setLogs ] = useState([
		{
			_id: 1,
			title: 'Bug 1',
			priority: 'low',
			user: 'Brad',
			created: new Date().toString()
		},
		{
			_id: 2,
			title: 'Bug 2',
			priority: 'moderate',
			user: 'Filip',
			created: new Date().toString()
		},{
			_id: 3,
			title: 'Bug 2',
			priority: 'high',
			user: 'Szymon',
			created: new Date().toString()
		},
		
	])

	function addItem(item) {
		if(item.text === '' || item.user === '' || item.priority === '') {
			showAlert('Please fill in all fields', 'danger')
			return false
		}

		item._id = Math.floor(Math.random() * 90000) + 10000
		item.created = new Date().toString()
		setLogs([...logs, item])
		showAlert('Log Added')

	}

	const [alert, setAlert] = useState({
		show: false,
		message: '',
		variant: 'success'
	})

	function showAlert(message, variant='success', seconds = 3000) {
		setAlert({
			show: true,
			message,
			variant
		})

		setTimeout(() => {
			setAlert({
				show: false,
				message: '',
				variant: 'success'
			})
		}, seconds)
	}

	function deleteItem(_id) {
		setLogs(logs.filter(log => log._id !== _id))
		showAlert('Log Deleted', 'danger')
	}


	return (
		<Container>
			<AddLogItem addItem={addItem} />
			{alert.show && <Alert variant={alert.variant}>{alert.message}</Alert>}
			<Table>
				<thead>
					<tr>
						<th>Priority</th>
						<th>Log Text</th>
						<th>User</th>
						<th>Created</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{logs.map(log => (
						<LogItem key={log._id} log={log} deleteItem={deleteItem}/>
					))}
				</tbody>
			</Table>
		</Container>
	)
}

export default App
