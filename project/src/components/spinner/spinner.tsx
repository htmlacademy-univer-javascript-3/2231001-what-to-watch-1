import { FC } from 'react';
import './spinner.css';

const Spinner: FC = () => (
  <div className="spinner__background" data-testid='spinner'>
    <div className="spinner__container">
      <svg className="spinner" viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
      </svg>
    </div>
  </div>
);

export default Spinner;
