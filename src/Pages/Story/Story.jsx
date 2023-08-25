import React from 'react'
import StoryViewer from '../../Components/StoryComponents/StoryViewer'

const Story = () => {
const story=[
    {
        image:"https://images.pexels.com/photos/15065935/pexels-photo-15065935/free-photo-of-city-people-art-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        image:"https://images.pexels.com/photos/17902394/pexels-photo-17902394/free-photo-of-black-and-white-circle-structure.png?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        image:"https://images.pexels.com/photos/16791614/pexels-photo-16791614/free-photo-of-playa.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        image:"F:\cdac assingments\webteh\Assignment\a.jpg"
    }
]

  return (
    <div>
        <StoryViewer stories = {story} />
    </div>
  )
}

export default Story