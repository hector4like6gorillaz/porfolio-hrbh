import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NormalRoute from './NormalRoute'
import PrivateRoute from './PrivateRoute'
import LandingModule from 'src/pages/landing/LandingModule'
import CatalogoModule from 'src/pages/catalogo/CatalogoModule'
import TecnologiasModule from 'src/pages/tecnologias/TecnologiasModule'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NormalRoute />}>
          <Route path='/' element={<LandingModule />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path='/catalogo' element={<CatalogoModule />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path='/tecnologias' element={<TecnologiasModule />} />
        </Route>

        <Route path='*' element={<div> 404 </div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
