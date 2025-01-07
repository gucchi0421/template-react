import type React from 'react'
import Footer from '~/components/layouts/Footer'
import Header from '~/components/layouts/Header'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
