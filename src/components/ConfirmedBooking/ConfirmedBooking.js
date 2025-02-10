import { useEffect, useState } from 'react';
import './ConfirmedBooking.styles.css';
import restaurant from '../../assets/restaurant.jpg';
import location from '../../assets/booking/location.svg';
import { Link as LinkR } from 'react-router-dom';

const ConfirmedBooking = () => {
  const [reservedDetails, setReserveDetails] = useState('');

  useEffect(() => {
    const data = localStorage.getItem('Bookings');
    if (data !== null) setReserveDetails(JSON.parse(data));
  }, []);

  return (
    <section name='booking-confirmation' className='booking-confirmation'>
      <img src='./Logo.svg' alt='logo' className='confirmation-logo' />
      <div className='confirmation-image-container'>
        <img
          src={restaurant}
          alt='Little Lemon Restaurant'
          className='confirmation-image'
        />
      </div>

      <h1 className='confirmation-confirmed'>Your reservation is confirmed!</h1>
      <h2 className='confirmation-reserved'>Modern Restaurant & Bar</h2>
      <div className='confirmation-details-container'>
        <h2>
          DATE:{' '}
          <span className='confirmation-details'>{reservedDetails.date}</span>
        </h2>
        <h3>
          TIME:{' '}
          <span className='confirmation-details'>{reservedDetails.time}</span>
        </h3>
        <h3>
          GUESTS:{' '}
          <span className='confirmation-details'>{reservedDetails.guests}</span>
        </h3>
        <h3>
          OCCASION:
          <span className='confirmation-details'>
            {' '}
            {reservedDetails.occasion}
          </span>
        </h3>
      </div>

      <div className='confirmation-location'>
        <img src={location} alt='location' className='location-logo' />
        Little Lemon, 2548 Matthews Street
        <br />
        Chicago, Illinois - 60631
        <a
          href='https://maps.app.goo.gl/nHrKcgX1Cmixq9ED7'
          target={'_blank'}
          rel='noreferrer'
        >
          <p>Get Directions</p>
        </a>
      </div>

      <LinkR to='/' className='confirmation-home'>
        Go Home
      </LinkR>
    </section>
  );
};

export default ConfirmedBooking;
