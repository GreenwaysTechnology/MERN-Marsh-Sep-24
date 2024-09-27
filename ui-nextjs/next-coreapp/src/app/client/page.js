import MyClient from "./myclient";
import MyServer from "./myserver";


export default function ClientPage(){
    return <>
        <MyClient>
            {/* pass server component as pro */}
            <MyServer/>
        </MyClient>
    </>
}