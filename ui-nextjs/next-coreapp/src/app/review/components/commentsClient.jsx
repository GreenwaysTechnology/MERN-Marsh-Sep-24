'use client'

import { Comments } from "./comments"

export default function CommentsClient() {

    return <><h1>
        Comments -Client Component
    </h1>
        {/* refer server component */}
        <Comments/>
    </>

}