import React from 'react';
import ReactDom from 'react-dom'

function Modal({ open, children, onClose }) {
//  const { isOpen, openModal, closeModal, Modal } = useModal()
  if (!open) return null;
  return (
    <div>
    {children}
    </div>
  )
}

export default Modal;
