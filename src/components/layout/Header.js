import React from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
export const Header = () => {
    return(
        <header className="header" data-tesid="header">
            <nav>
                <div className="logo">
                    <img src="/images/logo.png" />
                </div>
                <div className="settings">
                    <ul>
                        <li>+</li>
                        <li>+</li>
                        <li><FaPizzaSlice></FaPizzaSlice></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}