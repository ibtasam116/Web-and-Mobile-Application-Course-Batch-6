import Clients from "./home_sections/clients/clients";
import Digital_services from "./home_sections/digital_services/digital_services";
import Home_about from "./home_sections/home_about/home_about";
import Home_header from "./home_sections/home_header/home_header";
import Home_ideas from "./home_sections/home_ideas/home_ideas";
import Latest_work from "./home_sections/latest_work/latest_work";
import Plans from "./home_sections/plans/plans";
import Professionals from "./home_sections/professionals/professionals";
import Blog from "./home_sections/blog/blog";

export default function Home() {
    return (
        <>
            <Home_header />
            <Digital_services />
            <Home_about />
            <Home_ideas />
            <Latest_work />
            <Professionals />
            <Plans />
            <Clients />
            <Blog />
        </>
    )
}
