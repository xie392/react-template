import { useSelector, useDispatch } from 'react-redux'
import { Rootstate } from '@/store'
import { Button } from '@douyinfe/semi-ui'
import styles from './index.module.scss'

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
        name: 'test',
        count: count + 1
      }
    })
  }

  return (
    <div className="flex-all-center">
      <p className={styles.text}>Hello world</p>
      <p className={styles.text}>持久化存储count:{count}</p>
      <Button type="primary" onClick={add}>
        count++
      </Button>
    </div>
  )
}

export default Home
