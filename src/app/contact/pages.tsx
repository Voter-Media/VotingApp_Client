import React from 'react';
import './styles/normalize.css';
import './styles/skeleton-dark.css';
import './styles/skeleton-auto.css';
import './styles/brands.css';

const FindKendru: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="column" style={{ marginTop: '10%' }}>
          <p>Linking the creators</p>
          <a
            className="button button-github"
            href="https://github.com/pawandai"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            <img className="icon" aria-hidden="true" alt="GitHub Logo" />
            Pawan Awasthi
          </a>
          <br />
          <a
            className="button button-github"
            href="https://github.com/RoshanDahal123"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            Roshan Dahal
          </a>
          <br />
          <a
            className="button button-github"
            href="https://github.com/StellarSync"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            Kendra Pokhrel
          </a>
          <br />
          <a
            className="button button-github"
            href="https://github.com/2222anish22"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            Anish Neupane
          </a>
          <br />
        </div>
      </div>
    </div>
  );
};

export default FindKendru;

