import fs from "fs"
import matter from "gray-matter"
import md from "markdown-it"

export async function getStaticPaths() {
    //retrive all our slugs
    const files = fs.readdirSync('posts')
    const paths = files.map((fileName) => ({
        params: {
            slug: fileName.replace('.md', '')
        }
    }))
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { slug }}) {
    const fileName = fs.readFileSync(`/salaries/posts/${slug}.md`, 'utf-8')
    const { data: frontmatter, content } = matter(fileName);
    return {
        props: {
            frontmatter,
            content
        }
    }
}

export default function salary({frontmatter, content}) {
  
    return (
        <div className=" ">
            <h1>{frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{__html: md().render(content)}}></div>
        </div>
    )
}