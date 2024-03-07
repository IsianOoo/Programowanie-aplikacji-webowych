import { IUser } from './User.type'
import './UserList.style.css'

type Props = {
	list: IUser[]
}
const UserList = (props: Props) => {
	const { list } = props

	return (
		<div>
			User list
			<table>
				<tr>
					<th>Name</th>
					<th>Description</th>
                    <th>Action</th>
					
				</tr>
				{list.map((users) => {
                    console.log(users);
					return (
						<tr key={users.id}>
							<td>{`${users.name}`}</td>
							<td>{`${users.desc}`}</td>
							<td>Actions</td>
						</tr>
					)
				})}
			</table>{' '}
		</div>
	)
}

export default UserList
