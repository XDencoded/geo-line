import type {
  UseFormRegister,
  UseFormHandleSubmit,
  UseFormSetValue,
  UseFormReset,
  FieldErrors
} from 'react-hook-form'
import type {TItem} from './item.type'

export interface IHookForm {
  register: UseFormRegister<TItem>
  handleSubmit: UseFormHandleSubmit<TItem>
  errors: FieldErrors<TItem>
  reset: UseFormReset<TItem>
  setValue: UseFormSetValue<TItem>

}