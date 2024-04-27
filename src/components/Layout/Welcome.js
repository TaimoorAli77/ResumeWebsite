import React, { useEffect, useState } from 'react';
import '../css/layout.css'
import { Vortex } from 'react-loader-spinner'
const Welcome = () => {
    const [load, setSetLoad] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setSetLoad(false)
        }, 3000);

    }, [])
    return (
        <>
            {load && (

                <div className='bgColor'>
                    <div className='flexContainer'>
                        <h1 className='text-center text-primary'>Taimoor Ali</h1>
                        {/* <h2 className='text-center'>Welcome's you to his Resume Website</h2> */}
                        <div
                            className='text-center'>

                            <Vortex
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="vortex-loading"
                                wrapperStyle={{}}
                                wrapperClass="vortex-wrapper"
                                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                            />
                        </div>
                    </div>

                </div>
            )
            }

        </>
    );
}

export default Welcome;
