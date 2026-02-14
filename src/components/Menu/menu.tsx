import { useAppSelector } from '../../hooks/useSelector'
import { Item } from './Item/item'
import scss from './manu.module.scss'

export function Menu() {
  const { points } = useAppSelector(state => state.point)

  const items = points.map(item => <Item key={item.id} item={item} />)

  return (
    <>
      {!!points.length && (
        <div className={scss.menu}>
          <h1 className={scss.title}>Список добавленных точек</h1>
          <div className={scss.box}>{items}</div>
        </div>
      )}
    </>
  )
}
