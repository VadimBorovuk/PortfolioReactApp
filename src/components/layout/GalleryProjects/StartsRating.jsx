import React, {useEffect} from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import './style.scss'

const StartsRating = ({stars}) => {
    return (
        <div className="rating-block">
            <Box component="fieldset" borderColor="transparent">
                <Rating
                    name="read-only"
                    value={stars}
                    readOnly
                />
            </Box>
        </div>
    );
}

export default StartsRating;