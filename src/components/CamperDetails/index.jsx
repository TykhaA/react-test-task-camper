import { Outlet, useNavigate, useParams } from 'react-router-dom';
import './camper-details.scss';
import { getCamperDeatailApi } from 'api/requests';
import { useEffect, useState } from 'react';
import Modal from 'components/Modal';
import sprite from 'image/icons.svg';
import Reviews from 'components/Reviews';
import Features from 'components/Features';
import Form from 'components/Form';

const CamperDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [tab, setTab] = useState('Features');
  const navigate = useNavigate();

  useEffect(() => {
    id &&
      getCamperDeatailApi(id).then(data => {
        setItem(data);
      });
  }, [id]);

  const handleTabs = e => {
    if (e.target !== e.currentTarget) setTab(e.target.innerHTML);
  };

  const close = () => {
    navigate('/catalog');
  };

  return (
    <>
      <Modal className="modal">
        <button onClick={close} className="modal__btn" type="button">
          <svg width="32" height="32">
            <use href={sprite + '#icon-cross'}></use>
          </svg>
        </button>
        <div className="list-info__title">{item.name}</div>
        <div className="list-info__review">
          <span className="list-info__review-item">
            <svg width="16" height="15">
              <use href={sprite + '#icon-rating'}></use>
            </svg>
            {item.rating} ({item.reviews?.length} Reviews){' '}
          </span>
          <span className="list-info__icon-wrap">
            <svg width="16" height="16">
              <use href={sprite + '#icon-location'}></use>
            </svg>
            {item.location}
          </span>
        </div>
        <div className="list-info__title">€{item.price?.toFixed(2)}</div>
        <div className="gallery">
          {item.gallery?.map(img => (
            <img src={img} alt={img} key={img} />
          ))}
        </div>
        <div>{item.description}</div>
        <ul className="tabs" onClick={handleTabs}>
          <li className={'tabs_item ' + (tab === 'Features' && 'active')}>
            Features
          </li>
          <li className={'tabs_item ' + (tab === 'Reviews' && 'active')}>
            Reviews
          </li>
        </ul>
        <hr className="modal__hr" />
        <div className="tabs_wrapper">
          <div className="tabs_content">
            {tab === 'Features' && <Features item={item}></Features>}
            {tab === 'Reviews' && <Reviews reviews={item.reviews}></Reviews>}
          </div>
          <div className="tabs_form">
            <Form></Form>
          </div>
        </div>
      </Modal>
      <Outlet></Outlet>
    </>
  );
};

export default CamperDetails;
