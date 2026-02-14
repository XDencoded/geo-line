export function randomId() {
  const code: string = '1234567890qwertyuiopasdfghjklzxcvbnm'
  let id: string = ''

  for (let i = 0; i <= 6; i++) {
    const index = Math.floor(Math.random() * code.length)
    id += code[index]
  }

  return id
}
