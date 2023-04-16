import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { isLogin } from '@/utils/auth'
import { Rootstate } from '@/store'
import './home.scss'

function Home() {
  const dispatch = useDispatch()
  const { name, count } = useSelector((state: Rootstate) => ({
    name: state.user.name,
    count: state.user.count
  }))

  const add = () => {
    dispatch({
      type: 'add',
      payload: {
        count: count + 1
      }
    })
  }

  return (
    <div className="home flex-all-center">
      <h3>鉴权页面</h3>

      <Link to={isLogin() ? `/user/${Date.now()}` : '/login?redirect=/user'} className="link">
        <button className="login-button button button">个人中心</button>
      </Link>

      <br />
      <h3>数据持久化</h3>
      <button onClick={add} className="login-button button">
        count++({count})
      </button>
    </div>
  )
}

export default Home
