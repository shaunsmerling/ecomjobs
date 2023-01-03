import React, {useState, useEffect} from 'react'
import Markdown from "markdown-to-jsx"


export default function Salaries() {

    const filename = 'influencer-marketing-manager-salary.md'
    const [post, setPost] = useState('')


    useEffect(() => {
        import(`../../markdown/${filename}`)
        .then(res => {
            fetch(res.default)
            .then(res => res.text())
            .then(res => setPost(res))
            .catch(err => console.log(err))
        })
      
    }, [])

    return (
        <div>
            <Markdown>
                {post}
            </Markdown>

        </div>
    )
}

