import React from 'react'
import BottomNav from '../Components/BottomNavigation/BottomNav'
import Hero from '../Components/Menu Page/Hero'
import Sections from '../Components/Sections/Sections'

/* Style */
import '../assets/style/Components/App.sass'

function App() {
    return (
        <div className="app-wrapper">
            <Hero />
            <Sections />
            <BottomNav />
        </div>
    )
}

export default App
