import { MapPinPen, MapPinPlus } from 'lucide-react'
import { useAppForm } from '../../hooks/useAppForm'
import scss from './form.module.scss'
import { randomId } from '../../utils/random'
import { useAppSelector } from '../../hooks/useSelector'
import { useMemo } from 'react'

export function Form() {
  const { handleSubmit, onSubmit, register, errors, setValue } = useAppForm()
  const { currentPoint } = useAppSelector(state => state.point)

  useMemo(() => {
    if (currentPoint) {
      setValue('id', currentPoint.id)
      setValue('type', currentPoint.type)
      setValue('latitude', currentPoint.latitude)
      setValue('longitude', currentPoint.longitude)
    }
  }, [currentPoint])

  return (
    <form className={scss.form} onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register('id', { value: randomId() })} />
      <input type="hidden" {...register('type', { value: 'add' })} />
      <div className={scss.inp}>
        <b>Ш</b>
        <input style={errors.latitude && {color: 'red'}} type="text" {...register('latitude', { max: 90, min: -90 })} />
      </div>
      <div className={scss.inp}>
        <b>Д</b>
        <input type="text" {...register('longitude')} />
      </div>

      <button type="submit" className={scss.btn}>
        {!!currentPoint?.id ? (
          <>
            Редактировать <MapPinPen />
          </>
        ) : (
          <>
            Добавить <MapPinPlus />
          </>
        )}
      </button>
    </form>
  )
}
