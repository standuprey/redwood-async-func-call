import { executeAsync } from 'src/lib/executeAsync'

export const something = async () => {
  await executeAsync({ someArgs: true })
  return true
}
