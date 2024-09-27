'use client'

// import MyServer from "./myserver"

export default function MyClient(props){

    return <>
        {/* <MyServer/> */}
        <h1>Client Component</h1>
        {props.children}
    </>

}