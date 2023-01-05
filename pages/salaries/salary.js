import matter from "gray-matter"
import fs from "fs"
import React, {useState, useEffect} from "react"
import Link from "next/link"

export async function getStaticProps(){
    const files = fs.readdirSync('posts')
    const posts = files.map((fileName) => {
        const slug = fileName.replace('.md', '')
        const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8')
        const {data: frontmatter} = matter(readFile)

        return {
            slug,
            frontmatter
        }
    })

    return {
        props: {
            posts
        }
    }
}

export default function salary({posts}) {

    return (
        <div> 
            {posts.map(({slug, frontmatter}) => (
                <div key={slug} className="">
                <Link href={`/salaries/${slug}`}>
                    <a>
                        
                    </a>
                </Link>
                </div>
            ))}
            <h1>{posts.title}</h1>
            <p>{salary.description}</p>
        </div>
    )
}
