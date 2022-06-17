import React from 'react';
import {AiOutlineClose, AiFillPlusSquare} from 'react-icons/ai';

const AddFriends = ({suggested,name}) => {
		let Listfriends = []
		const urlImg= 'https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg';
		const listSuggested = suggested.map(person => (
				<div className="container-suggested">
						<div className="container-image">
								<img src={urlImg} alt="foto de perfil" />
								<AiFillPlusSquare/>
						</div>
						<span>{name}</span>

				</div>
		))
	return (
		<div className='container-modal'>
				<div className="title">
						<span>Tus amigos</span>
						<AiOutlineClose/>
				</div>
				<div className="content">
						<div className="container-sugeridos">
								<h2 className="title">Sugeridos</h2>
								<div className="sugeridos">
									{listSuggested}
								</div>
						</div>
						<div className="container-amigos">

						</div>
				</div>
		</div>
	)
}
AddFriends.defaultProps = {
	suggested: [1,2,3],
	name: 'chanchito',
}

export default AddFriends