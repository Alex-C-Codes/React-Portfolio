import React from 'react';

export default function Music() {
    return (
        <>
            <div><h1>Music</h1></div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col text-center'>
                        <h3>Video Game Compositions</h3>
                        <div className='d-flex justify-content-center'>
                            <iframe title="itch.io" frameBorder="0" src="https://itch.io/embed/1577689" width="552" height="167"><a href="https://alexcook.itch.io/relaxing-pack">Relaxing &amp; Cozy Music Loop Pack by alexcook</a></iframe>
                        </div>
                    </div>
                    {/* <div className='col text-center'>
                        <h3>Pop Music</h3>
                    </div> */}
                </div>
            </div>
        </>
    );
}