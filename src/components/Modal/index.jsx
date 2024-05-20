import { useCallback, useEffect } from 'react';
import './modal.scss';
import { useNavigate } from 'react-router-dom';

const Modal = ({ children }) => {
  const navigate = useNavigate();

  const toggleModal = useCallback(() => {
    navigate('/catalog');
  }, [navigate]);

  const closeModal = e => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  useEffect(() => {
    const handleEsc = ({ code }) => {
      if (code === 'Escape') toggleModal();
    };

    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [toggleModal]);

  return (
    <div className="overlay" onClick={e => closeModal(e)}>
      <div className="modal">{children}</div>
    </div>
  );
};
export default Modal;
