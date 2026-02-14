export type TItem = {
  id?: string
  longitude: number
  latitude: number
  type?: 'del' | 'update' | 'add' | null
}
