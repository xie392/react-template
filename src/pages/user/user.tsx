import { useSelector } from 'react-redux'
import { Rootstate } from '@/store'
import './user.scss'

function User() {
  const { name } = useSelector((state: Rootstate) => ({
    name: state.user.name
  }))
  const { id } = useParams()

  return (
    <div className="flex-all-center user">
      <h3>{name}</h3>
      <br />
      <p>url参数:{id}</p>
      <Link to="/" className="link">
        <button className="login-button button button">回到首页</button>
      </Link>
    </div>
  )
}

export default User
