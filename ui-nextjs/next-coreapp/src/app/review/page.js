import CommentsClient from "./components/commentsClient";
import { Review } from "./components/review";

export default function ReviewPage(){

    return <div>
         <h1>Review Page</h1>
         <Review/>
         {/* Comment client*/}
         <CommentsClient/>
    </div>
}