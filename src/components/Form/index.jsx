import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './form.scss';
import Button from 'components/Button';

const Form = () => {
  const [startDate, setStartDate] = useState(null);
  const handleSubmit = e => {
    e.target.reset();
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form_title">Book your campervan now</div>
      <div className="form_subtitle">
        Stay connected! We are always ready to help you.
      </div>
      <div className="wrap_field">
        <input
          className="field"
          type="text"
          name="name"
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </div>
      <div className="wrap_field">
        <input
          className="field"
          type="mail"
          placeholder="Email"
          name="mail"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          required
        />
      </div>
      <DatePicker
        showIcon
        selected={startDate}
        dateFormat="dd/MM/yyyy"
        onChange={date => setStartDate(date)}
        placeholderText="Booking date"
        icon={
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8333 3.33331H4.16667C3.24619 3.33331 2.5 4.07951 2.5 4.99998V16.6666C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6666V4.99998C17.5 4.07951 16.7538 3.33331 15.8333 3.33331Z"
              stroke="#101828"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.3335 1.66669V5.00002"
              stroke="#101828"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.6665 1.66669V5.00002"
              stroke="#101828"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.5 8.33331H17.5"
              stroke="#101828"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      />
      <div className="wrap_field">
        <textarea
          className="field field_textarea"
          name="comment"
          placeholder="Comment"
        />
      </div>
      <Button text={'Send'} type={'color send'} />
    </form>
  );
};
export default Form;
