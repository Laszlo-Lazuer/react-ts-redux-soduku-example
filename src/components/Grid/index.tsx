import React, { FC } from 'react'

const Grid: FC = () => {
  // Other on the way

  return (
    <div data-cy="grid-container">
      {[...Array(9)].map((_, rowIndex) => (
        <div data-cy="grid-row-container">
          {[...Array(9)].map((_, colIndex) => (
            <div data-cy="block"></div>
          ))}
        </div>
      ))}
    </div>
  )
}