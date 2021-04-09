import React from 'react';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import './Services.scss';
import '../../constants/information-jose-EN';

export default function Services() {
  return (
    <>
      {/*  {information.services.map((service) => (
        <div key={service.name} className="services__description">
          <div className="title">
            <div className="icon">{service.icon}</div>
            <h4>{service.name}</h4>
          </div>
          <p>{service.description}</p>
        </div>
      ))} */}
      <div className="services__description">
        <div className="title">
          <div className="icon">
            <LocalGroceryStoreIcon />
          </div>
          <h4>Ecommerce</h4>
        </div>
        <p>
          As a website operator,
          you are therefore permanently faced with the challenge of monitoring
          the market and generating unique content with added value for the user
          on the ongoing new product pages. In doing so, you create competitive
          advantages for yourself while remaining visible in the search engines
          and for the user.
        </p>

      </div>
      <div className="services__description">
        <div className="title">
          <div className="icon">
            <ImportantDevicesIcon />
          </div>
          <h4>Web design</h4>
        </div>
        <p>
          These include websites and eCommerce solutions
          focused on usability and responsive design, creative branding
          solutions that inject personality into your business,
          and custom programming for ideas that you need help bringing to fruition.
        </p>
      </div>
    </>
  );
}
