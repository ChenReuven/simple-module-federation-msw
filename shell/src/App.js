import React, { Suspense } from 'react'
const App1 = React.lazy(() => import('app1/App'))
const App2 = React.lazy(() => import('app2/App'))

const App = () => {
  return (
    <div>
      <h1>App 1</h1>
      <Suspense fallback={'loading...'}>
        <App1 />
      </Suspense>
      <h1>App 2</h1>
      <Suspense fallback={'loading...'}>
        <App2 />
      </Suspense>
    </div>
  )
}

export default App
