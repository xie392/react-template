import './login.scss'
import { FormEventHandler } from 'react'

function Login() {
  const [username, setUsername] = useState('123')
  const [password, setPassword] = useState('123')

  const navigate = useNavigate()
  const location = useLocation()
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    const params = new URLSearchParams(location.search)?.get('redirect')
    navigate(`${params || '/'}`)
    setCookie('TOKEN', '123')
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <h2 className="login-heading">React Template</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="username" className="login-label">
            用户名
          </label>
          <input
            type="text"
            id="username"
            className="login-input"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="请输入用户名"
          />

          <label htmlFor="password" className="login-label">
            密码
          </label>
          <input
            type="password"
            id="password"
            className="login-input"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="请输入密码"
          />

          <button type="submit" className="login-button">
            登&nbsp;录
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
