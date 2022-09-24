import React, { Suspense } from 'react'
const Header = React.lazy(() => import('header/App'))
const Footer = React.lazy(() => import('footer/App'))
const Content = React.lazy(() => import('content/App'))

const App = () => {
  return (
    <div style={{ margin: 10, bordeRadius: 10, border: '1px solid #999' }}>
      <Suspense fallback={'loading...'}>
        <Header />
      </Suspense>
      <Suspense fallback={'loading...'}>
        <Content />
      </Suspense>
      <Suspense fallback={'loading...'}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
