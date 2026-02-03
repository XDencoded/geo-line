import { Pen, Save, Trash2 } from 'lucide-react'
import type { TItem } from '../../../types/item.type'
import scss from './item.module.scss'
import { useActions } from '../../../hooks/useAction'
import { useRef, useState } from 'react'

type TProps = {
  item: TItem
}

export function Item({ item }: TProps) {
  const { deletePosition, updatePosition } = useActions()
  const [isActive, setIsActive] = useState<boolean>(false)
  const refLat = useRef<HTMLInputElement | null>(null)
  const refLon = useRef<HTMLInputElement | null>(null)

  const del = () => {
    deletePosition(item.id)
  }

  const setPosition = () => {
    const latitude = refLat.current
    const longitude = refLon.current

    updatePosition({
      id: item.id,
      latitude: latitude?.value,
      longitude: longitude?.value
    })

		setIsActive(false)

  }

  return (
    <div key={item.id} className={scss.item}>
      <div className={scss.info}>
        <div className={scss.label}>
          <b>Ш</b>{' '}
          {isActive ? (
            <input ref={refLat} defaultValue={item.latitude} />
          ) : (
            item.latitude
          )}
        </div>

        <div className={scss.label}>
          <b>Д</b>{' '}
          {isActive ? (
            <input ref={refLon} defaultValue={item.longitude} />
          ) : (
            item.longitude
          )}
        </div>
      </div>
      <div className={scss.icons}>
        <Trash2 onClick={del} color="red" />
        {isActive ? <Save onClick={setPosition} /> : <Pen onClick={() => setIsActive(true)} />}
      </div>
    </div>
  )
}
