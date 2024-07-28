import { useNavigate } from 'react-router-dom'
import style from './topbar.module.scss'

const TopBar = () => {
  const routerNavigation = [
    { name: 'Catalogo', nav: '/catalogo' },
    //{ name: 'Contacto', nav: '/contacto' },
    { name: 'Tecnologias', nav: '/tecnologias' },
  ]
  const navigate = useNavigate()
  return (
    <div className={`${style['container-top-bar']}`}>
      <p className={`${style['p-name-left']}`} onClick={() => navigate('/')}>
        Hector Balan
      </p>
      <div className={`${style['div-rigth-side']}`}>
        {routerNavigation.map((item, index) => {
          return (
            <p
              key={index + item.name}
              className={`${style['p-title-right']}`}
              onClick={() => navigate(item.nav)}
            >
              {item.name}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default TopBar
