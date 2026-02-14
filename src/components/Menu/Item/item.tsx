import { MapPinPen, MapPinX } from 'lucide-react'
import { useActions } from '../../../hooks/useAction'
import type { TItem } from '../../../types/item.type'
import scss from './item.module.scss'
import { useAppSelector } from '../../../hooks/useSelector'

type TProps = {
  item: TItem
}

export function Item({ item }: TProps) {
  const { changesPoint, getPoint } = useActions()
  const { currentPoint } = useAppSelector(state => state.point)

  return (
    <div key={item.id} className={scss.item}>
      <div className={scss.info}>
        <div className={scss.label}>
          <b>Ш:</b>
          <p>{item.latitude}</p>
        </div>
        <div className={scss.label}>
          <b>Д:</b>
          <p>{item.longitude}</p>
        </div>
      </div>
      <div className={scss.icons}>
        {!currentPoint?.id && (
          <>
            <MapPinX
              onClick={() => changesPoint({ ...item, type: 'del' })}
              color="red"
            />
            <MapPinPen onClick={() => getPoint({ ...item, type: 'update' })} />{' '}
          </>
        )}
      </div>
    </div>
  )
}
