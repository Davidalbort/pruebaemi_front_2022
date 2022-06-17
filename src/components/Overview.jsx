import React from 'react'
import {BiEdit} from 'react-icons/bi';
import {HiOutlineMail} from 'react-icons/hi';
import {MdOutlineCall} from 'react-icons/md';
import {AiOutlineEdit} from 'react-icons/ai';
import styles from '../styles/components/overview.module.scss';

const Overview = () => {
  return (
    <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.edit}>
            <div className="container-edit">
              <BiEdit/>
            </div>
          </div>
          <div className="title">
          <h1>Junto lo hacemos mejor</h1>

          </div>
          <div className={styles.icons}>
            <div className="container-icons">
              <HiOutlineMail/>
            </div>
            <div className="container-icons">
              <MdOutlineCall/>
            </div>
          </div>
        </div>
        <section className={styles.content}>
          <div className={styles.image}>
            <img src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg" alt="imagen de perfil" />
          </div>
          <div className={styles.information}>
            <div className={styles.names}>
              <div className="title">
                <div className="name">
                  <h1>David Alba</h1>
                  <h3>Frontend Developer</h3>
                </div>
              </div>
              <div className={styles.follow}>
                <div className="following">
                  <span>35</span>
                  <p>Siguiendo</p>
                </div> 
                <div className="followers">
                  <span>35</span>
                  <p>Seguidores</p>
                </div>
              </div>
            </div>
            <div className={styles.description}>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, saepe sint aliquam explicabo 
                pariatur harum nam quae. Perferendis, aliquam eligendi ut reiciendis accusantium fugiat fuga 
                ipsum error quidem ab pariatur.
              </p>
              <AiOutlineEdit/>
            </div>
          </div>
        </section>

          
    </div>
  )
}

export default Overview