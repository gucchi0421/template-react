import { Layout } from '~/components/layouts/Layout'
import type { Route } from './+types/_index'

export function meta(_: Route.MetaArgs) {
  return [{ title: 'Home' }, { name: 'description', content: 'Welcome to React Router!' }]
}

export default function Home() {
  return (
    <Layout>
      <h1>Home</h1>
    </Layout>
  )
}
