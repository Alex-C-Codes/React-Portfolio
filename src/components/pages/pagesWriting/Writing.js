import React from 'react';

export default function Writing() {
    return (
        <>
            <div><h1>Writing</h1></div>
            {/* <div>
                <h3 className='text-center'>Blog</h3>
            </div> */}
            <div>
                <h3 className='text-center'>Original Jokes</h3>
                <div className='d-flex justify-content-center' style={{fontSize:'2vmax'}}>
                    <ul>
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