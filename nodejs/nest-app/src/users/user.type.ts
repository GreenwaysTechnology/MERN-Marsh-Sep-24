
// export class User {
//     id: number
//     name: string
// }

export interface User {
    id: number
    name: string
    email?:string
    status?: boolean
    location?: string
}