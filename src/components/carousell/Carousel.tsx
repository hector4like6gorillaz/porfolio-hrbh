import { useState } from 'react'
import style from './carousel.module.scss'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const Carousel = ({ datas, movile = false }: { datas: string[]; movile?: boolean }) => {
  const [pictures, setpictures] = useState(0)

  const nextImg = (side: string) => {
    switch (side) {
      case '+':
        setpictures(pictures + 1)
        if (pictures + 1 > datas.length - 1) setpictures(0)
        break
      case '-':
        setpictures(pictures - 1)
        if (pictures - 1 < 0) setpictures(datas.length - 1)
        break

      default:
        break
    }
  }

  return (
    <div className={`${style['container-carousel']}`}>
      <div className={`${style['img-container']} ${movile && style['img-movile']}`}>
        <img
          className={`${style['img-cosito']} ${
            movile ? style['img-cosito-h'] : style['img-cosito-w']
          }`}
          src={datas[pictures]}
        />
        <div
          className={`${style['div-arrow']} ${style['arrow-left']}`}
          onClick={() => nextImg('-')}
        >
          <ChevronLeftIcon className={`${style['color-chevrons']}`} />{' '}
        </div>
        <div
          className={`${style['div-arrow']} ${style['arrow-right']}`}
          onClick={() => nextImg('+')}
        >
          <ChevronRightIcon className={`${style['color-chevrons']}`} />
        </div>
      </div>
    </div>
  )
}

export default Carousel
