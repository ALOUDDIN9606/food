import { FC } from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from '../pages/Layout'
import Hero from '../components/Hero'
import Saved from '../components/Saved'
import Details from '../pages/Details'

const Router:FC = () => {
  return (
    <>
        {
            useRoutes([
                {
                    path: "/",
                    element: <Layout/>,
                    children: [
                        {
                            path: "/",
                            element: <Hero/>
                        },
                        {
                            path: "/saved",
                            element: <Saved/>
                        },
                        {
                            path: "/recipes/:id",
                            element: <Details/>
                        }
                    ]
                }
            ])
        }
    </>
  )
}

export default Router