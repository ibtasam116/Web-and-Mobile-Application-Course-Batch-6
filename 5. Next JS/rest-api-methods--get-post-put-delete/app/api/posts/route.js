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
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABICAMAAAD7y5rAAAAAZlBMVEX///8AAAAeHh7W1tb5+flzc3Ph4eEXFxfs7Oz29vatra2qqqo1NTXp6enl5eXy8vJhYWGHh4ejo6O1tbXFxcVcXFx5eXlUVFTLy8sICAhsbGxHR0eUlJS7u7tmZmYQEBAnJyc9PT0CErB1AAADRklEQVRogcWaa3eyMAzHE8qq3KzgFRGV7/8lF/TZI7QphZ3jkhfbjrb+6D/NpXUAH7Picx89ZVqGu25FsHAVwsqo3MqorI8i2PgkgoXbWQRblSLYcy6CTWolwm0qEWzZiGBb3EhgNaYS2DjfSmBhi2buUKX8DlGsFVAoPlQqbEHzk5TS47GIuPZgY2SthDVixow/4xdAzk9C7BzuzceN8PLl2GUHsEfU7vA70s/yPfKG9WCe1QggPnDn5SaeRyrRDdMbWuWgqFee6U/u3qc0cX0ugA7t5J85r2hcxRNcneJlMXeD1uo0PuwxIS4pxCo9xaXlRcM349z1eJBbIBt3k1x62KFKJboNZJBLWZXb09NcEw2Cacfssxlc+OKUnuYOg4kCmsk+M7gJp3SAOwimE3JFdwaXHv6wmAsNvvrVK7LlYA4Xjq7SQa5+BdPZkwBmcQliKx3kQoq1AVN7Et4sLj21rXSYCxeatPWknZlc2ibWYxO3iBPbRkOSGm+48hTdAPd/BOQ4PsQRN3IM96Mx5FvrleVcZSlN3NyxaJyW1zUbuou4FA8jpZmt5lhDZbTzvDebC009VHrGvrriwzycAriYuxklgDCXvKvIPR4Pz+dSZzZQOshNHs/8eMU7648FXMq0b1SQe8HXAbvhW7Ql3GKgdIib/URucf9NXRgHbfZWOsDVb7+2XH/JcROKwrjNlMultPcDC3CHrd0RO3dpDFehSaLmQh2Dw30rPc2l6vv+1CRngonlJrsH/Tq6XOpZdjO4VuvOBRPPVViqhNG536YmyDVonTgrtwjzOsP+gHSOYrjmX56e4h6c0Dk5dZTh6ueS4go5LqWhNMCl/GgfYczdbmVH3DiN0yZuEarGQFuzXGov1zBVF5R9Wuht3ydNL1ejot6e4jw54Ipms9w4Or24VeraHpKILQWlJcJY5/7P4rkO02cqlksLSr3n34acy1/adOO+khKLP19lGfte2SudZpy1pqr42+VNVQ03hMl+ccnSCN2pFjI3Qv32FPoiphRSOu6ElF7XIneNVJmElIYjdz32F9aFGugPmZZSOpW5tScXC+1p8ByqP25KSukd05L/iVX+6v1RM0JfmcNGqCJ+4F8ivgEjFiRfYLGsmAAAAABJRU5ErkJggg=='
    },
    {
        id: 2,
        title: 'Typescript',
        description: 'A detail description',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAC6CAMAAAAu0KfDAAAAY1BMVEUxeMb///8zesfz9vsndMUSbcLD1OupwuT9/f9ynNMsdsX4+v0fccNGhMvo7/hPh8zb5PO3y+gAZsDK2e6Vs91mltJ+pNdUi80AacE/f8mfuuCOrtvg6PS9z+nT3vBbj84AYb7KNErvAAAF5klEQVR4nO2d6XKrIBSAUUAjYhJFccvS93/Kq6ZpciMuRElw5nx/2ulo+tUej4dFQM6DEIs0i5ClRFkqcPiki/6+w57kCSXs24pDMEITLj3cVxeSUuR+228cl1EqxYt6WJX822Lz4G4VPqvjgFsbKK8wHuCHOs7pt4V0oDm+q4cBtTzI/8elQfirXm0kzB/w6qYu3M3E+R1WilYdy81d9OayS9yoe5u6Re9Qz0Gh3Ka6DBHeTkZ/hnGMRLKpxHjHTQRKNxkvTcSkKCPflngPkiFr6/MJ2FbFAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgFFYA+GUt9DmCyHtT1b88EUMfjIhnLnR4ZDJ1O+oahnkh6hEpPkTVlB3l6J2J5QfgtoX+53zAj56VR0cOF1sL7xl+FHf3SVFVMdH/Gr97B+n12JR5BB3+OPncTr0rh5JovMpnDox3J8Wvc67XP34qk5oJCa9b0RLYmZ9dR75s8+1Sp3x4DT/XJvUCalmxopt6ozMDxa71BnXM7dIvag0z7VGnWa659qiTkqN3GKXehFrn2uJOs/2g8eE+Jfw/2LMEvWhvLg7CV/miBaUl3lQnS9P1c0ideY6OyUqCeVxv+osOirNRX1omhiEIdYV8LTgufQvuxXUEZKBiqz/UDwrDwyyW/lHlOkFp+VrWc4Y5VHghyuoNw2WPrzo19o+Vx76uzAXV+V0HFBlWcsIK9uKYaG6GqpQH/09/NI3D2UxeDwreLzrl/oroK+uaBKJ0ZU7WCIPJtZT0VYninipxxcdcc2sBKOrzlRJ9vqVRY101UmpUM+/sl6KtvpBof6dpaS0AyZSqJ+HE4xBVgmYff6Ny6591VUZxvG+sW6afl5XNqdj9vk7VT+vK56mDZdIXQoYRF99oF26r9mHA15fPVCrOzsvK8gnVyHTVz8MtkyxcJMPhry2+mDEdIicfWzVWn31sbZpw0VGy8cCDKkzPtEjcEmv9BNBr6+OSDQyitFxOl8T8/JvqCMqJ9TbOzYyfse+o+7+zOktFfkqo3frqncLeE6zqw5GF8p8T524c9ydU23ywr+n3tS+5znuoeeaqw7eVEeMpnPcnV1kbJ3Pd9URKq6jj6Y/pKmAf1/dpWU8leBbwnS1aQ5rqbe9osGcuzWszcT7EvWmJnDljBGO0Ew/zSL1Vp5kM+SXzW8wo97K/+Te1A1rZOXsxeptl2KRV+oW650wMBAyK6ijbpJG7akGSO4IA1lmHfXujr2OpBts4LKvpd4NwCAxeOV9m9VROwgQqMfImqbT+qMDq6o3H1dW6gsfrr/w98rqiPBAPVEmsF69nfygdE83oD7gHm9BHVFV09XbhDpXVfJiE+qIKlKkBepsulvOTYSV6ugcTXaIJoqSwPv+I4nj/eTOUqqAsSDD8L2DYzJafytvUwvyOm+1jjIZLqeYMjmuPyz8nnojfx3auY5RqShjbKhh+D0YjlnEeE+fUFfZt3S0oHLkjzg++TIn7YSv7m2Kbps+GklFYnTau9QqdcfZHT2/zkqetNDyWscD9bqJvphl6p0V3p+Op5b9fnBi+LG0oG3aU5/DzsTmSJ9RP5oYhf+MupFJJx9RT41M9fmEuoHE+CH1sy3969rqxmb5mFbHKTc1iLfKxNhhLpm5yUn682Hq+e5YmpwSpt/Ao0l2wWMd0nfvk/wxO1rdLzv8qd/Hk6jyxl4ydZz9JQ7oeKws3QmPcT9+4Synm/ysqW6D1Bcqf3xqq0m3GH2AsmiFjRN701ZcNOu/TDgl5eEayLqKY0+0eLGfyuCal2Ry72+SrbBdpcbr3/1z7+9CdN+177S374HPeXbSdMubhOIN7uSLbluzbnhDXMf7+FTaFWDtNsRb3vx5w1tub3mj8y1vL+/gfFNZhuZd9YBuVcNkh7c9MB7c6p6buhNW5UYCnrv3pRPQvVwTsikxLQ/5tt58dKb+qTvYkzyZLNi+ByM04dJ7FMkP9bbbUqSZtTtZR1kq8HOz5h9bbVgQThvMMwAAAABJRU5ErkJggg=='
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

// Query method      syntax   ?id=1
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