import { Home } from "./home"
import { About } from "./about"
import { Skills } from "./skills"
import { Portfolio } from "./portfolio"
import { Contact } from "./contact/contact"

const Main = () => {

    return (
        <main className="main">
            <Home />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
        </main>
    )
}

export default Main