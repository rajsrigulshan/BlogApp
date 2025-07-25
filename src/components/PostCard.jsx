import { Link } from "react-router-dom";
import service from "../appwrite/config";


function PostCard({$id,title,featuredImage}){
    <Link to={`/post/${$id}`}>
        <div className="w-full bg-green-100 rounded-xl p-4">
            <div className="w-full justify-center mb-4">
                <img src={service.getFilePreview(featuredImage)} alt={title} className="rounded-xl"/>
            </div>
            <h2 className="text-xl font-bold">{title}</h2>

        </div>
    </Link>
}

export default PostCard;