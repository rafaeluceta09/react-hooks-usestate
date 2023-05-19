import React from 'react'

export const ShowButton = React.memo(({incrementNum}) => {

    console.log('entrando al component show Button')

  return (
    <>
        <button
        className="btn btn-primary"
        onClick={ () =>{ 
                        incrementNum(); 
                    } 
                } >
                + 1  
         </button></>
  )
})
