import React, { ReactNode } from 'react';
import Navbar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';


type ChildrenProps = {
    children : ReactNode
}


export default function Layout(props: ChildrenProps) {
  return (
    <>
        <Navbar />
            { props.children  }
        <Footer />
    </>
  )
}
