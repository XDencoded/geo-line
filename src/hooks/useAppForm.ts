import { useMemo } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import type { TItem } from '../types/item.type'
import { useActions } from './useAction'

export const useAppForm = () => {
  const { changesPoint, getPoint } = useActions()
  const formMethods = useForm<TItem>({
    mode: 'onChange'
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isValidating },
    reset,
    setValue
  } = formMethods

  const onSubmit: SubmitHandler<TItem> = data => {
    if (data) {
      changesPoint(data)
      getPoint(null)
      reset()
    }
  }

  return useMemo(
    () => ({
      register,
      handleSubmit,
      errors,
      setValue,
      reset,
      onSubmit,
      isValid,
      formMethods
    }),
    [errors, isValidating]
  )
}