
'use client'

import { useRouter } from "next/navigation"

export function DashBoardNavigator() {
    const router = useRouter()
    return <>
        <button style={{backgroundColor:'red'}} onClick={() => {
            router.push('/dashboard')
        }}>GoToDasbhoard</button>
    </>
}