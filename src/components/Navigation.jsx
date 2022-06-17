import React from 'react';
import { IoMdNotificationsOutline} from 'react-icons/io';
import styles from '../styles/components/navigation.module.scss'

const Navigation = () => {
  return (
    <nav className={styles.container}>
        <section className={styles.menu}>
          <div className="nav-menu-title">
            <span> Tiempo de trabajo activo :</span>
            <span> 5:50</span>
          </div>
          <div className={styles.button}>
            <label form='oficina'>
              Oficina
            </label>
              <input id='oficina' type="radio" name='options'/>
            <label form='almuerzo'>Almuerzo</label>
            <input id='almuerzo' type="radio" name='options'/>
            <label form='descanso'>Descanso</label>
            <input id='descanso' type="radio" name='options'/>
            <label form='Reunión'>Reunión</label>
            <input id='Reunión' type="radio" name='options'/>

          </div>
        </section>
        <section className={styles.icon}>
          <IoMdNotificationsOutline/>

          

          <div className='container-image'>
            <img src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg" alt="imagen de perfil" />
          </div>
          <input id='logout' type="radio"/>
          <label form='logout'>Cerrar Sesión
          </label>
        </section>
    </nav>
  )
}

export default Navigation