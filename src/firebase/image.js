import React from 'react'
import './image.css'
import Firestores from './firestore'
export default function Image() {
    const {docs} = Firestores('image')
    
    
    return (
        <div className="Grid">
            {
            docs?.map((op,i)=>
                (
                    <div className='wrap'  key={op.id}>
                    <div className="imgBx">
                        <img src={op.url}  />
                    </div>

                </div>
                )
            )
        }
        </div>
    )
}
