import { useAppSelector } from '../../hooks/useSelector'
import scss from './manu.module.scss'
import { Item } from './Item/item'

export function Menu() {
  const { position } = useAppSelector(state => state.position)

  const items = position.map(item => <Item item={item} />)
  return (
    <>
      {!!position.length && (
        <div className={scss.menu}>
          <h1 className={scss.title}>Список добавленных точек</h1>
          <div className={scss.box}>{items}</div>
        </div>
      )}
    </>
  )
}
