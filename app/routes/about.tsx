import { Layout } from '~/components/layouts/Layout'
import type { Route } from './+types/about'

export function meta(_: Route.MetaArgs) {
  return [{ title: 'About' }, { name: 'description', content: 'Welcome to React Router!' }]
}

export default function About() {
  return (
    <Layout>
      <h1>About</h1>
    </Layout>
  )
}
