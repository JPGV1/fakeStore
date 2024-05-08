import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
ProductProvider
import { Home } from './components/Pages/Home/Home'
import { ProductProvider } from './components/Context/Context'

function App() {
 

  return (
    <>
    <ProductProvider>
      <Home/>
    </ProductProvider>
    </>
  )
}

export default App
