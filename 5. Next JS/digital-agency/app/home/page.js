import Digital_services from "./home_sections/digital_services/digital_services";
import Home_about from "./home_sections/home_about/home_about";
import Home_header from "./home_sections/home_header/home_header";
import Home_ideas from "./home_sections/home_ideas/home_ideas";

export default function Home() {
    return (
        <>
            <Home_header />
            <Digital_services />
            <Home_about />
            <Home_ideas />
        </>
    )
}
