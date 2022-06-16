import React from 'react'
import {BiEdit} from 'react-icons/bi';
import {HiOutlineMail} from 'react-icons/hi';
import {MdOutlineCall} from 'react-icons/md';
import {AiOutlineEdit} from 'react-icons/ai';


const Overview = () => {
  return (
    <div>
        <div className="background-image">
          <div className="icon-edit">
            <BiEdit/>
          </div>
          <div className="title">
          <span>Junto lo hacemos mejor</span>

          </div>
          <div className="icons">
            <HiOutlineMail/>
            <MdOutlineCall/>
          </div>
        </div>
        <section className='content'>
          <div className='content-image'>
            <img src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg" alt="imagen de perfil" />
          </div>
          <div className="content-information">
            <div className="title">
              <div className="name">
                <h1>David Alba</h1>
                <h3>Frontend Developer</h3>
              </div>
              <div className="follow">
                <div className="following">
                  <span>35</span>
                  <p>Siguiendo</p>
                </div> 
                <div className="followers">
                  <span>35</span>
                  <p>Seguidores</p>
                </div>
              </div>
              <div className="description">
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, saepe sint aliquam explicabo 
                  pariatur harum nam quae. Perferendis, aliquam eligendi ut reiciendis accusantium fugiat fuga 
                  ipsum error quidem ab pariatur.
                </p>
                <AiOutlineEdit/>
              </div>
            </div>
          </div>
        </section>

          
    </div>
  )
}

export default Overview