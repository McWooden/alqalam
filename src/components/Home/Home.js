import Footer from "./Footer";
import Hero from "./Hero";
import Menu from "./Menu";

export default function Home() {
    return <div className="App flex flex-col gap-2">
        <Hero/>
        <Menu/>
        <Footer/>
    </div>
}