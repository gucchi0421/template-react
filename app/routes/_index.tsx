import { Link, type MetaFunction } from 'react-router'
import { Layout } from '~/components/layouts/Layout'

export const meta: MetaFunction = () => {
  return [{ title: 'Home' }, { name: 'description', content: 'Welcome to our app!' }]
}

export default function Home() {
  return (
    <Layout>
      <h1>Home</h1>
      <Link to="/about">To About</Link>
    </Layout>
  )
}
