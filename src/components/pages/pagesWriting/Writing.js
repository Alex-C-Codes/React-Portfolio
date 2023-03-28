import React from 'react';

export default function Writing() {
    return (
        <>
            <div><h1>Writing</h1></div>
            {/* <div>
                <h3 className='text-center'>Blog</h3>
            </div> */}

            <h3 className='text-center'>Standup Comedy</h3>
        
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <img src={require('../../../assets/images/laughingskull.png')} style={{
                borderRadius:"50%",
                width:"125px",
                height:"125px",
                }} alt="Profile" />
            </div>
            <br></br>

            <div>
                <div className='d-flex justify-content-center' style={{fontSize:'2vmax'}}>
                    <ul>
                        {/* <li>
                            <p>
                                Some people are pro Capitalism. Others are anti-Capitalism. But it's odd to me that no-one's ever considered Lowercase-ism.<br></br>Written: 3/7/23
                            </p>
                        </li> */}
                        <li>
                            <p>
                                I'm single right now. But someday I'd like to be multiple. Not quite there yet.<br></br>Written: 9/5/22
                            </p>
                        </li>
                        <li>
                            <p>
                                There’s a lot of pop psychology out there today. I’m more into alternative and punk psychology myself.<br></br>Written: 9/5/22
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}