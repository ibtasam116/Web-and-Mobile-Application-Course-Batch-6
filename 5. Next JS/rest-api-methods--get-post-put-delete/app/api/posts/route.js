// Three methods of Send data
/*
1. Body
2. Param
3. Query
*/

import { NextResponse } from "next/server"

var posts = [
    {
        id: 1,
        title: 'Next JS 13',
        description: 'A detail description',
        image: 'nextjs13.png'
    },
    {
        id: 2,
        title: 'Typescript',
        description: 'A detail description',
        image: 'typescript.png'
    },
]

export const GET = () => {
    return NextResponse.json(posts);
}

// body method
export const POST = async (req) => {
    const body = await req.json()
    posts.push(body);
    // return NextResponse.json({ message: "Post Created" })
    return NextResponse.json(posts)
}

// Query method
export const DELETE = (req) => {
    const id = new URL(req.url).searchParams.get("id")
    console.log("Id", id);
    posts = posts.filter((post) => post.id != id)
    // return NextResponse.json({ message: "Post Deleted", id: id })
    return NextResponse.json(posts)
}

// body method

export const PUT = async (req) => {
    const body = await req.json();

    posts = posts.map((post) => {
        if (post.id == body.id) {
            return body
        }
        else {
            return post
        }
    })

    return NextResponse.json({ Message: "Post Updated" })
}