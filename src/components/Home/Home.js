import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero";

export default function Home() {
    return <div className="App flex flex-col gap-2 h-full">
        <Hero/>
        <Features/>
        <Footer/>
    </div>
}