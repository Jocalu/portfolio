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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur enim unde quasi ducimus nam?
            {' '}
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur enim unde quasi ducimus nam?
            {' '}

          </p>
        </div>
      </div>
    </>
  );
}
