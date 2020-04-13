import ReactGA from 'react-ga';
import React from 'react';

const GA = () => (
    <div>
      <ReactGA.OutboundLink
        eventLabel="myLabel"
        to="http://www.example.com"
        target="_blank"
        trackerNames={['tracker2']}
      >
        My Link
      </ReactGA.OutboundLink>
    </div>
  );

export default GA