
import scss from './controller.module.scss'
import { Form } from '../form/form'

export function Controller() {
  return (
    <div className={scss.controllers}>
      <h1 className={scss.title}>Панель управления</h1>
      <Form />
    </div>
  )
}
