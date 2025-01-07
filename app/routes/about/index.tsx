import { useState } from 'react'
import { Link, type MetaFunction } from 'react-router'
import { Layout } from '~/components/layouts/Layout'

export const meta: MetaFunction = () => {
  return [{ title: 'Home' }, { name: 'description', content: 'Welcome to our app!' }]
}

export default function About() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <Layout>
      <h1>About</h1>
      <p>This is the About page.</p>
      <button type="button" onClick={handleClick}>
        クリック回数: {count}
      </button>
    </Layout>
  )
}
