import { LocateFixed } from 'lucide-react'
import { useRef } from 'react'
import { useActions } from '../../hooks/useAction'
import scss from './controller.module.scss'

export function Controller() {
  const { createPosition } = useActions()
  const refSH = useRef<null | HTMLInputElement>(null)
  const refD = useRef<null | HTMLInputElement>(null)

  const setPosition = () => {
    let longitude: HTMLInputElement | null = refD.current
    let latitude: HTMLInputElement | null = refSH.current

    if (!longitude?.value && !latitude?.value) return

    createPosition({
      longitude: Number(longitude?.value),
      latitude: Number(latitude?.value)
    })
    if (longitude && latitude) {
      longitude.value = ''
      latitude.value = ''
    }
  }

  return (
    <div className={scss.controllers}>
      <h1 className={scss.title}>Панель управления</h1>
      <div className={scss.form}>
        <div className={scss.inp}>
          <b>Ш</b>
          <input ref={refSH} type="number" min={-90} max={90} />
        </div>
        <div className={scss.inp}>
          <b>Д</b>
          <input ref={refD} type="number" />
        </div>
        <button onClick={setPosition} className={scss.btn}>
          Добавить <LocateFixed />
        </button>
      </div>
    </div>
  )
}
