import React from 'react'

const ExploreMenu = ({isOpen, onClose}) => {
    if (!isOpen) return null;
  return (
    <div className = "fixed inset-0 z-50 flex items-center justify-center bg-blacks/50 p-4">
        <div></div>
        <div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default ExploreMenu