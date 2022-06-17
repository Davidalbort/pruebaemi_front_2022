import React from 'react'
import CardPost from '../components/CardPost'
import Navigation from '../components/Navigation'
import Overview from '../components/Overview'
import Post from '../components/Post'
import Modal from '../modal/Modal'
import Aside from './Aside';
import styles from '../styles/containers/profile.module.scss';

const Profile = () => {
  return (
    <div className={styles.container}>
        <Navigation/>
        <Overview/>
        <div className={styles.main}>
          <div className={styles.post}>
            <Post/>
            

          </div>
          <div className={styles.side}>
            <Aside/>
          </div>
        </div>
          
        <Modal>
          hola
        </Modal>
    </div>
  )
}

export default Profile