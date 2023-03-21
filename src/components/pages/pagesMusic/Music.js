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
                    <div className='col text-center'>
                        <br></br><br></br>
                        <h3>Music Featured In:</h3>
                        <div className='d-flex justify-content-center'>
                            <iframe title='Adarin Farms' src="https://store.steampowered.com/widget/1827730/" frameborder="0" width="552" height="190"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}