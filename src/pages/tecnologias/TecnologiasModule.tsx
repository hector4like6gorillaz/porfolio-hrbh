import MainLayoutHOC from 'src/HOCs/MainLayout/MainLayoutHOC'
import style from './tecno.module.scss'

import react from 'src/assets/tecnos/reac.png'
import next from 'src/assets/tecnos/next.jpg'
import flutter from 'src/assets/tecnos/flut.png'
import { Fragment } from 'react'

const TecnologiasModule = () => {
  const tecnos = [react, next, flutter]
  return (
    <MainLayoutHOC>
      <div className={`${style['container-tecnologies']}`}>
        <div className={`${style['body-contaier']}`}>
          <h1 className={`${style['h1-tite']}`}>Tecnologias</h1>
          <p className={`${style['p-content']}`}>
            Las tecnologias que he estado utilizando a lo largo de estos 4 años han sido Reactjs,
            NextJs y Flutter/dart
          </p>
          <br />
          {tecnos.map((item, index) => {
            return (
              <Fragment key={index + item}>
                <div className={`${style['div-container-img']}`}>
                  <img className={`${style['img']}`} src={item} />
                </div>
                <br />
                <br />
                <br />
              </Fragment>
            )
          })}
        </div>
      </div>
    </MainLayoutHOC>
  )
}

export default TecnologiasModule
