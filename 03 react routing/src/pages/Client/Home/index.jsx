import React from 'react'
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
    <Helmet>
        <title>Home Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
       <div>Home</div>
    </>
 
  )
}

export default Home