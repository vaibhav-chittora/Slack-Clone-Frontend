import { UserButton } from '@/components/atoms/UserButton/UserButton'
import { useFetchWorkspace } from '@/hooks/apis/workspaces/useFetchWorkspace'
import React, { useEffect } from 'react'

function Home() {

    const { isFetching, workspaces } = useFetchWorkspace();

    useEffect(() => {
        if (isFetching) return
        console.log("workspaces in Home", workspaces)

        if (workspaces.length === 0 || !workspaces) {
            console.log("No workspaces found")
            return
        }
    }, [isFetching, workspaces])

    return (

        <>
            <h1>Home</h1>
            <UserButton />
        </>
    )
}

export default Home