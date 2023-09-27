import { NextResponse } from "next/server"

var posts = [
    {
        id: 1,
        title: "NextJS 13",
        description: "A detail description of NextJS 13",
        image: "nextjs.png"
    },
    {
        id: 2,
        title: "AI",
        description: "A detail description of AI",
        image: "ai.png"
    }
]

export const GET = () => {
    return NextResponse.json(posts)
}

export const POST = () => {
    return NextResponse
}