import React from 'react'

const Badge = ({className, text}) => {
  return (
    <div className={`hidden md:block absolute animate-bounce ${className}`}>
        <div className="bg-neutral-900 text-white px-2.5 py-1.5 rounded-lg text-xs lg:text-sm flex items-center shadow-lg">
          <i className="bx bx-check-circle mr-1 text-teal-500" />
          <span>{text}</span>
        </div>
      </div>
  )
}

export default Badge