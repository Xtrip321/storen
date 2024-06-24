import React from 'react'

export const DirectBtn = ({title , blinPath}) => {
  return (
    <>
    <a href={blinPath} className="direct-button">{title}</a>
    </>
  )
}
