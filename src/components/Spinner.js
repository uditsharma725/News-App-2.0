import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

export default function Spinner(props) {

    const { mode } = props;
    let color = '#222';
    if(mode === 'moon') color = '#222';
    else color = '#fff';

    return (
        <div className='flex justify-center mt-11 mb-11'>
            <ClipLoader
                color={color}
                loading={true}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}
