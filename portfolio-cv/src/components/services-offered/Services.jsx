import React from 'react';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import './Services.scss';

export default function Services() {
  return (
    <>
      <div className="services__description">
        <div className="icon">
          <LocalGroceryStoreIcon />
        </div>

        <div>
          <h4>Ecommerce</h4>
          <p>
            In eCommerce, competition is fierce; the offers are short-lived
            and transparent for the user. As a website operator,
            you are therefore permanently faced with the challenge of monitoring
            the market and generating unique content with added value for the user
            on the ongoing new product pages. In doing so, you create competitive
            advantages for yourself while remaining visible in the search engines
            and for the user.
          </p>
        </div>

      </div>
      <div className="services__description">
        <div className="icon">
          <ImportantDevicesIcon />
        </div>

        <div>
          <h4>Web design</h4>
          <p>
            These include websites and eCommerce solutions
            focused on usability and responsive design, creative branding
            solutions that inject personality into your business,
            and custom programming for ideas that you need help bringing to fruition.
          </p>
        </div>
      </div>
    </>
  );
}
