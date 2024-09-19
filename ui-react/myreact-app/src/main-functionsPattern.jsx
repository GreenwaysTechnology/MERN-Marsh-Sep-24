
import { createRoot } from 'react-dom/client'


//functional component
// function Heading() {
//     return <h1>
//         Hello React
//    </h1>

// }
// const Heading = () => {
//     return <h1>
//         Hello React
//     </h1>
// }
const Heading = () => <h1>
    Hello React
</h1>


//createRoot(document.getElementById('root')).render(Heading())
createRoot(document.getElementById('root')).render(<Heading></Heading>)
