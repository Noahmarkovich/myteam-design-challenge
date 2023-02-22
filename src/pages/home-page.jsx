import { AppHeader } from '../cmps/app-header.jsx'
import { Intro } from '../cmps/intro.jsx'
import { Info } from '../cmps/info.jsx'
import { List } from '../cmps/list.jsx'
import { Footer } from '../cmps/footer.jsx'
import { Contact } from '../cmps/contact.jsx'

export function HomePage(){

    return<section className="home-page main-layout">

        <AppHeader/>
        <Intro/>
         <Info/>
        <List/>
        <Contact/>
        <Footer/> 
        </section>
}