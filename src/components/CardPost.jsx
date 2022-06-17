import React from 'react';
import {AiOutlineComment} from 'react-icons/ai';
import {BiLike} from 'react-icons/bi';
import styles from '../styles/components/cardpost.module.scss';

const CardPost = ({name,email,content,comments,likes,className}) => {
	return (
		<article className={styles.container}>
			<div className={styles.image}>
				<img src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg" alt="imagen de perfil" />
			</div>
			<div className="card-content">
				<div className={styles.title}>
					<h3>{name}</h3>
					<span>{`${email} 15 m`}</span>
				</div>
				<div className={styles.text}>
					<p>{content}</p>
				</div>
				<div className={styles.notification}>
					<div className="card-comments">
						<AiOutlineComment/>
						<span>{comments}</span>
					</div>
					<div className="card-likes">
						<BiLike/>
						<span>{likes}</span>
					</div>

				</div>
			</div>		
		</article>
	)
}
CardPost.defaultProps ={
	name: "David Alba",
	email: '@davidalbort',
	content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat quidem, vitae doloremque 
	quisquam amet facere accusantium cum exercitationem? Pariatur quaerat nam ab excepturi natus laboriosam 
	iste ad error repellat maiores!`,
	comments:'5',
	likes: '7',


}

export default CardPost