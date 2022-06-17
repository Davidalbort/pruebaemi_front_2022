import React from 'react';
import {RiGalleryLine} from 'react-icons/ri';
import {AiOutlineFileGif} from 'react-icons/ai';
import {BsEmojiSmile} from 'react-icons/bs';
import CardPost from './CardPost';
import styles from '../styles/components/post.module.scss';

const Post = ({name}) => {
	const array = [1,2,3,4,5,6,7,8,9];
	return (
		<section className={styles.container}>
				<div className={styles.input}>
						<div className={styles.image}>
						<img src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg" alt="imagen de perfil" />
						</div>
						<div className={styles.form}>
								<div className={styles.text}>
									<input type="text" placeholder={`${name}, cuéntele a tus compañeros ¿cómo va tu día laboral?`}/>
									{/* <textarea 
										name="" 
										id="" 
										cols="1" 
										rows="2" 
										placeholder={`${name}, cuéntele a tus compañeros ¿cómo va tu día laboral?`}>

									</textarea> */}
								</div>
								<div className={styles.button}>
										<div className="icons">
											<RiGalleryLine/>
											<AiOutlineFileGif/>
											<BsEmojiSmile/>
										</div>
										<div className="button">
											<button>Publicar</button>
										</div>
								</div>
						</div>
				</div>
				<div className={styles.card} >
					{array && array.map(card => <CardPost/>) }
					
				</div>
		</section>
	)
}
Post.defaultProps = {
	name: 'David Alba',
}

export default Post