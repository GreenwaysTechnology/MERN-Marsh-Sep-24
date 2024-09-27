import FetchPost from "./components/PostDetails";
import FetchPostsUsingSWR from "./components/PostsClientUsingSWR";


export default function PostsPage(){

    return <div>
        <h1>Post Server Component</h1>
        {/* <FetchPost/> */}
        <FetchPostsUsingSWR/>
    </div>
}