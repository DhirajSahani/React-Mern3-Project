import { Link } from "react-router-dom"

function Card({blog}){
   
    return ( 
<Link to={`/blog/${blog._id}`}>
<div className="flex px-3 py-3">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full h-35 object-cover" src={blog.image} alt="image not found " />

        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{blog.title}</div>
            <div className="font-bold text-xl mb-2">{blog.subtitle}</div>
            <div className="font-bold text-xl mb-2">{blog.description}</div>
        </div>
    </div>
</div>
</Link>
    )
}

export default Card 