import React, { useState } from "react";
import Modal from 'react-modal';
import { IoMdClose } from "react-icons/io";

export const SideBar = () => {
    const[modalIsOpen, setModalIsOpen] =useState(false)
    
    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen)
    }
  return (
    <>
      <aside className="sidebar">
      <div className="logo">
        <a>
          <img style={{width:"40px", height:"40px"}} src="https://c1.klipartz.com/pngpicture/965/913/sticker-png-book-watercolor-watercolor-painting-oil-paint-paint-brushes-acrylic-paint-drawing-pencil-artist.png" alt="" />
          Brand<b>Colors</b>
        </a>
      </div>
      <div className="description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam,
        autem!
      </div>
      <nav className="menu">
        <ul>
          <li>
            <a onClick={toggleModal}>About Brand Colors</a>
          </li>
        </ul>
      </nav>
      </aside>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        className="about-modal"
        overlayClassName="about-modal-overlay"
      >
         <button className="closeBtn"onClick={toggleModal}>
            <IoMdClose /></button>
        <h3>About BradColor</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero blanditiis autem, tempora nihil vero repudiandae asperiores aspernatur id qui labore.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus ullam delectus facilis, nobis suscipit enim expedita similique, quaerat iusto distinctio numquam cupiditate sint voluptatem consequuntur officiis? Sunt, dolor ullam. Molestias?</p>
      </Modal>
    </>
  );
};
