import React from 'react';

import { Tooltip, Rating as MuiRating } from '@mui/material';

function Rating({ readOnly, value, precision, tooltip }) {
  if (tooltip && tooltip.length) {
    return (
      <Tooltip disableTouchListener title={tooltip}>
        <div>
          <MuiRating readOnly={readOnly} value={value} precision={precision} />
        </div>
      </Tooltip>
    );
  }

  return <MuiRating readOnly={readOnly} value={value} precision={precision} />;
}

export default Rating;
