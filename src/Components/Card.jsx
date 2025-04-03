import { Link } from "react-router-dom"

function Card({blog}){
   
    return ( 

<div className="flex px-3 py-3">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={`http://localhost:3000/` + blog.image}alt="Sunset in the mountains" />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{blog.title + blog.subtitle}</div>
            <p className="text-gray-700 text-base">
                {blog.description}
            </p>
        </div>
    </div>
</div>
    )
}

export default Card 