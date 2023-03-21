import React from 'react';

export default function Music() {
    return (
        <>
            <div><h1>Music</h1></div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col text-center'>
                        <h3>Music Projects</h3>
                        <div className='d-flex justify-content-center'>
                            <iframe title="itch.io" frameBorder="0" src="https://itch.io/embed/1577689" width="552" height="167"><a href="https://alexcook.itch.io/relaxing-pack">Relaxing &amp; Cozy Music Loop Pack by alexcook</a></iframe>
                        </div>
                    </div>
                    {/* <div className='col text-center'>
                        <h3>Pop Music</h3>
                    </div> */}
                </div>
                {/* <hr
                    style={{
                    background: "#000000",
                    height: "1px",
                    border: "none",
                    }}
                /> */}
                <br></br>
                <div className='row'>
                    <div className='col text-center'>
                        <hr></hr><br></br>
                        <h3>Credits</h3>
                        {/* <hr
                            style={{
                            background: "#000000",
                            height: "1px",
                            border: "none",
                            }}
                        /> */}

                        <h5>Video Games</h5>
                        <div className='d-flex justify-content-center'>
                            <iframe title='Adarin Farms' src="https://store.steampowered.com/widget/1827730/" frameborder="0" width="552" height="190"></iframe>
                        </div>

                        <h5>YouTube Content</h5>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/6XkYSp6lDxk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/L3PFBNhiwoU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/4HHcwiHgd40" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                    </div>
                </div>
            </div>
        </>
    );
}