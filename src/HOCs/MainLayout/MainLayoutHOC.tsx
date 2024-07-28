import style from './main.module.scss'
import TopBar from 'src/components/TopBar/TopBar'

const MainLayoutHOC = ({ children }: { children: JSX.Element }) => {
  return (
    <div className={`${style['main-div-container']}`}>
      <TopBar />
      {children}
    </div>
  )
}

export default MainLayoutHOC
