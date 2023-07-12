import React from 'react';
import Link from 'next/link';


const Hello = () => {
    return (
        <div>
            <Link className='text-white' href="/"><h1 className='text-white'>Hello</h1></Link>
        </div>
    );
};



export default Hello;
