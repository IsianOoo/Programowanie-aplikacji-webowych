import { useState } from 'react'
import './Home.style.css'
import { IUser,dummyUserList } from './User.type'
import UserList from './UserList'

const Home = () => {
    
    const [userList,setUserList] = useState(dummyUserList as IUser[])
	return (
		<>
			<article className='article-header'>
				<header>
					<h1>CRUD Application</h1>
				</header>
			</article>
			<section className='section-content'>
                <div>this is content part</div>
                <UserList list={userList}/>
            </section>
		</>
	)
}

export default Home
