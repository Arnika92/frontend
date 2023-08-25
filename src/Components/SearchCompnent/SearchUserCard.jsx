import React from 'react'

const SearchUserCard = () => {
  return (
    <div className='cursor-pointer py-2'>
        <div className='flex items-center'>
            <img className='w-10 h-10 rounded-full' src="https://images.pexels.com/photos/17902394/pexels-photo-17902394/free-photo-of-black-and-white-circle-structure.png?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <div className='ml-3'>
                <p>Full name</p>
                <p className='opacity-70'>User name</p>
            </div>
        </div>
    </div>
  )
}

export default SearchUserCard
