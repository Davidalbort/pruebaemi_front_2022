import React from 'react';
import {RiContactsBook2Line} from 'react-icons/ri';
import styles from '../styles/components/friends.module.scss';

const Friends = ({friends}) => {
  const urlImg= 'https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg';
  const listFriends = friends.map(friend => (
    <div className={styles.image}>
      <div>
      <img src={urlImg} alt='imagen de perfil' />

      </div>
      <span>David Alba</span>
    </div>
  ))
  return (
    <section className={styles.container}>
        <h1>Amigos</h1>
			<div className={styles.containerimages} data-photo={friends}>
				{listFriends}
			</div>
			<div className={styles.button}>
				<button><RiContactsBook2Line/>{`	 Ver tus contactos`}</button>
			</div>
	
    </section>
  )
}
Friends.defaultProps ={
  friends: [1,2,3,4,5,6,7,8]
}

export default Friends