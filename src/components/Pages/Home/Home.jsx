import React from 'react'
import { Header } from '../../layouts/Header/Header'
import { Main } from '../../layouts/Main/Main'
import { useContext } from 'react'
import CardContainer from '../../CardContainer/CardContainer'
import ProductContext from '../../Context/Context'

export const Home = () => {
  const { products } = useContext(ProductContext);

 
  return (
    <>
    <Header/>
    <Main>
        <h2 className='text-3xl flex justify-center items-center text-white'>Products</h2>
        <CardContainer product={products} />
    </Main>
    </>
  )
}
