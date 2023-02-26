import { client } from './sanity.client'

export interface User {
  email: string
  name: string
}

export const createUserInSanity = async (user: User) => {
  const { name, email } = user

  const existingUser = await client.fetch(
    `*[_type == "user" && email == $email][0]`,
    { email }
  )

  if (existingUser) {
    console.log('User already exists in Sanity')
    return
  }

  const doc = {
    _type: 'user',
    name,
    email,
  }
  try {
    const response = await client.create(doc)
    console.log('User created in Sanity', response)
  } catch (error) {
    console.error('Error creating user in Sanity', error)
  }
}
