import React from "react"
import { withPageAuthRequired } from '@auth0/nextjs-auth0'

export default function employers() {
    return (
        <h1>
            Employers Only!
        </h1>
    )
}


export const getServerSideProps = withPageAuthRequired();