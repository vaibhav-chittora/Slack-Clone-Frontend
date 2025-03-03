import { UserButton } from '@/components/atoms/UserButton/UserButton'
import { useFetchWorkspace } from '@/hooks/apis/workspaces/useFetchWorkspace'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {

    const { isFetching, workspaces } = useFetchWorkspace();
    const navigate = useNavigate()

    useEffect(() => {
        if (isFetching) return
        console.log("workspaces in Home", workspaces)

        if (workspaces.length === 0 || !workspaces) {
            console.log("No workspaces found")
            return
        } else {
            navigate(`/workspaces/${workspaces[0]._id}`)
        }
    }, [isFetching, workspaces, navigate])

    return (

        <>
            <h1>Home</h1>
            <UserButton />
        </>
    )
}

export default Home