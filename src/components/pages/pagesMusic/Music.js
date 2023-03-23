import React from 'react';

export default function Music() {
    return (
        <>
            <div><h1>Music</h1></div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col text-center'>
                        <h3>Music Projects</h3>

                        <br></br>
                        <h5>Audio Packs</h5>
                        <div className='d-flex justify-content-center'>
                            <iframe title="itch.io" frameborder="0" src="https://itch.io/embed/1577689" width="552" height="167"><a href="https://alexcook.itch.io/relaxing-pack">Relaxing &amp; Cozy Music Loop Pack by alexcook</a></iframe>
                        </div>

                        <br></br>
                        <h5>Albums</h5>
                        <div className='d-flex justify-content-center'>
                            <iframe title='YouTube' allow="autoplay *; encrypted-media *;" frameborder="0" height="450" style={{width:'100%',maxWidth:'552px',overflow:'hidden',background:'transparent'}} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/ogma-squad-remixes-single/1480953356"></iframe>

                        </div>
                    </div>
                </div>
                <br></br>
                <div className='row'>
                    <div className='col text-center'>
                        <hr></hr><br></br>
                        <h3>Credits</h3>

                        <br></br>
                        <h5>Podcasts</h5>
                        <iframe title='Culture Jumpers Podcast' allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="175" style={{width:'100%',maxWidth:'552px',overflow:'hidden',background:'transparent'}} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                        src="https://embed.podcasts.apple.com/us/podcast/bipoc-gamers-animal-crossing-and-the-mellowverse/id1662703068?i=1000605315075"></iframe>

                        <h5>Video Games</h5>
                        <div className='d-flex justify-content-center'>
                            <iframe title='Adarin Farms' src="https://store.steampowered.com/widget/1827730/" frameborder="0" width="552" height="190"></iframe>
                        </div>

                        <h5>YouTube</h5>
                        <div className='d-flex justify-content-center'>
                            <iframe title='YouTuber Remixes' width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLBCgntvfMeIo5q-PNDp-A5cD92dyd2h8O" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}