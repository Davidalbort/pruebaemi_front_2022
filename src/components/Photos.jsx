import React from 'react';
import {AiOutlineCamera} from 'react-icons/ai';
import styles from '../styles/components/photos.module.scss';

const Photos = ({photos}) => {
	const urlImg= 'https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg';
	const listPhotos = photos.map(photo => (
		<figure>
			<img src={urlImg} alt='Imagen de perfil'/>
		</figure>
	))
	return (
		<section className={styles.container} >
			<h1>Fotos</h1>
			<div className={styles.images}data-photo={photos}>
				{listPhotos}
			</div>
			<div className={styles.button}>
				<button><AiOutlineCamera/>{`	 Añadir fotos`}</button>
			</div>
		</section>
	)
}
Photos.defaultProps ={
	photos:[1,2,3,4,5,6,7,8],
}

export default Photos
