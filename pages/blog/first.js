import Head from "next/head"
import Link from "next/link"


function First() {
  return (
   <div id="container">
    <div id="grid">
      <div id="card">
        <div id="card_img">
          <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
        </div>
        <div id="card_body">
        <h2> This is the card title </h2>
        </div>
        <div id="card_body">
          <p>This is the card body. I will be writing lots of blog posts that include lots of bodies. And thats how it goes </p> 
          <a href="./blog/first">Read Article</a>
        </div>
      </div>
    </div>
   </div>
  )
}

export default First