import React from 'react'

export const Home = () => {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" type="email" name="email" size="28" />
      <label htmlFor="password">Password:</label>
      <input id="password" type="" name="password" size="28" />
    </form>
  )
}