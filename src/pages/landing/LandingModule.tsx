import React from 'react'
import style from './landing.module.scss'
import imagen from '../../assets/web-dev-icon.jpg'

import MainLayoutHOC from 'src/HOCs/MainLayout/MainLayoutHOC'

const LandingModule = () => {
  return (
    <MainLayoutHOC>
      <div className={`${style['container-principal']}`}>
        <div className={`${style['body-container']}`}>
          <h1 className={`${style['h1-title-intro']}`}>
            Me llamo Héctor Balan y soy desarrollador de aplicaciones web y movil para llevar a cabo
            los distintos proyectos que surjan partiendo de una idea laborando actualmente para la
            empresa DaCodes.
          </h1>
          <br />
          <div className={`${style['img-container-div']}`}>
            <img src={imagen} />
          </div>
        </div>
      </div>
    </MainLayoutHOC>
  )
}

export default React.memo(LandingModule)
