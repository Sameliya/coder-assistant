import React from 'react'

import MainLayout from '../layout/MainLayout'

import frontRoutes from './modules/front'
import backRoutes from './modules/backend'

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [frontRoutes, backRoutes]
}

export default MainRoutes
