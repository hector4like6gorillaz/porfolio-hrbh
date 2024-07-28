import MainLayoutHOC from 'src/HOCs/MainLayout/MainLayoutHOC'
import style from './catalogo.module.scss'
import Carousel from 'src/components/carousell/Carousel'
import { catalogCarouselData } from 'src/utils/carousel-constants'
import { Fragment } from 'react'

const CatalogoModule = () => {
  return (
    <MainLayoutHOC>
      <div className={`${style['container-catalog']}`}>
        <div className={`${style['body-container']}`}>
          {catalogCarouselData.map((item, index) => {
            return (
              <Fragment key={index + item.description}>
                <h1 className={`${style['h1-title']}`}>{item.proyectName} </h1>
                <Carousel datas={item.images} movile={item.movile} />
                <p className={`${style['p-description']}`}>{item.description}</p>
                <div className={`${style['line']}`}></div>
              </Fragment>
            )
          })}
        </div>
      </div>
    </MainLayoutHOC>
  )
}

export default CatalogoModule
