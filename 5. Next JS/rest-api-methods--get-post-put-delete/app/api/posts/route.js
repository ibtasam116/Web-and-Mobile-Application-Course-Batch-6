const { NextResponse } = require("next/server")

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