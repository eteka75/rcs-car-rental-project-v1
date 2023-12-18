import React from 'react'

export default function DashMain({ children, ...props }) {
  return (
    <div className="col-span-8 sm:col-span-7 lg:lg:col-span-8">
      <div className="py-12">
        <div className="flex-grow text-gray-800"></div>
        <main {...props} className="px-4 sm:px-6 space-y-6">
          {children}
        </main>
      </div>
    </div>
  )
}
