import getHNStories from '../../backend/hn'
import { useEffect, useState } from 'react'

export default function Stories(){
    const [stories, setStories] = useState([])

  useEffect(() => {
    getHNStories().then(data => setStories(data))
  }, [])

  console.log(stories);
  

  return (
    <div >

         <ol className="list-decimal pl-8 ml-8">
      {stories.map(story => {
        return <li key={story.id}>
            <a className='text-slate-900 ' href={story.url}>{story.title}</a>
        </li>
      })}
    </ol>
    </div>
  )
}