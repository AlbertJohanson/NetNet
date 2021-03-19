import React from 'react'
import BottomNav from './BottomNavigation/BottomNav'
import Hero from './Menu Page/Hero'
import Sections from './Sections/Sections'

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
