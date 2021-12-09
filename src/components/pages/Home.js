import React, { useState, useEffect } from 'react';
import "./Home.css"

function Home() {
    const [searchBarInput, setSearchBarInput] = React.useState("");
    const [androidActive, setAndroidActive] = React.useState(false);
    const [theme, setTheme] = React.useState(false);
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    window.addEventListener('click', function (e) {
        if (document.getElementById('android-input-container').contains(e.target)) {

        } else if (androidActive) {
            setAndroidActive(false);
        }
    });

    const handleKeyDown = (event) => {
        var x = document.getElementById("searchbar-input").value;
        if (event.key === 'Enter') {
            window.open("https://rainbow.me/" + x);
            setSearchBarInput("");
        }
    }
    const phoneScroll = () => {
        if (offsetY >= 1520) {
            return ["fixed", "300px", "flex", (-(offsetY - 1520) - 100).toString(), (-(offsetY - 1520) + 100).toString(), (-(offsetY - 1520) + 210).toString(), "none", "1", "1"];
        }
        else if (offsetY >= 920) {
            return ["fixed", "300px", "flex", "-100", "100", "210", "flex", "1", "1"];
        }
        else if (offsetY >= 420) {
            return ["fixed", "300px", "flex", (-(offsetY - 420) + 400).toString(), (-(offsetY) + 1020).toString(), (-(offsetY * 2) + 2050).toString(), "none", ((offsetY - 500) * 0.01).toString(), ((offsetY - 700) * 0.005).toString()];
        }
        else if (offsetY < 420) {
            return ["relative", "0px", "none", "400", (-(offsetY - 420) + 2000).toString(), (-(offsetY - 420) + 3000).toString(), "none", "0", "0"];
        }
    }
    return (
        <div className={theme ? "homepage-dark" : "homepage-light"}>
            <div className="nav">
                <div className="nav-item a">
                    <img src="assets/logo.png" alt="rainbow logo" className="nav-logo" />
                    <img src="assets/rainbow-logo-text.png" alt="rainbow logo" className="logo-text" />

                </div>
                <div className="nav-item b">
                    <div className="searchbar">
                        <svg fill="none" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7.19824 14.3965C8.48145 14.3965 9.68555 14.0537 10.7402 13.4561L14.0537 16.7783C14.3965 17.1211 14.8711 17.2881 15.3457 17.2881C16.374 17.2881 17.1387 16.4971 17.1387 15.4863C17.1387 15.0205 16.9805 14.5635 16.6289 14.2119L13.3418 10.9248C14.0098 9.83496 14.3965 8.56055 14.3965 7.19824C14.3965 3.25195 11.1533 0 7.19824 0C3.25195 0 0 3.24316 0 7.19824C0 11.1533 3.24316 14.3965 7.19824 14.3965ZM7.19824 11.8652C4.62305 11.8652 2.53125 9.77344 2.53125 7.19824C2.53125 4.63184 4.62305 2.53125 7.19824 2.53125C9.77344 2.53125 11.8652 4.63184 11.8652 7.19824C11.8652 9.77344 9.77344 11.8652 7.19824 11.8652Z" fill="#3C4252" fill-opacity="0.5"></path></svg>
                        <input className="searchbar-input" id="searchbar-input" type="text" placeholder="Search any ENS name or Ethereum address" onKeyDown={handleKeyDown}></input>
                    </div>
                </div>
                <div className="nav-item c">
                    <a href="https://twitter.com/rainbowdotme" rel="noreferrer" target="_blank" className="nav-link twitter">🐦 twitter</a>
                    <a rel="noreferrer" href="https://learn.rainbow.me" target="_blank" className="nav-link learn">🧠 learn</a>
                </div>
            </div>
            <div className="content">
                <h1 className="header">The power of Ethereum at your fingertips 🪐 🖼 ✨</h1>

                <div className="buttons">
                    <a href="https://apps.apple.com/us/app/rainbow-ethereum-wallet/id1457119021" id="app-store-button"><img src="assets/app-store-button.svg" alt="apple app store button" className="apple-store-icon" /></a>

                    <div id="android-input-container" className={androidActive ? "android-button-active" : "android-button"} onClick={() => setAndroidActive(true)}>
                        <h1 className="jointext">Join the Android beta</h1>
                        <input type="text" placeholder="Play Store email" className="android-email" />
                        <div className="android-icon-img" />
                        <div className="android-mail-img" />
                    </div>
                </div>
                <div className="phone-display" style={{ position: `${phoneScroll()[0]}`, marginTop: `${phoneScroll()[1]}`, transform: "translateX(" + `${phoneScroll()[3]}` + "px)" }}>
                    <img src="assets/rainbow-preview.png" alt="" className="phone" />
                    <img src="assets/rainbow-preview.png" alt="" className="phone one" style={{ transform: "translateX(" + `${phoneScroll()[4]}` + "px)", animation: "fadeIn 0.5s ease-in", opacity: `${phoneScroll()[7]}` }} />
                    <img src="assets/rainbow-preview.png" alt="" className="phone two" style={{ transform: "translateX(" + `${phoneScroll()[5]}` + "px)", animation: "fadeIn 0.5s ease-in", opacity: `${phoneScroll()[8]}` }} />
                </div>
                {/* <div className="labels" style={{ display: `${phoneScroll()[6]}` }}>
                    <h1 className="label">
                        Wallet
                    </h1>
                    <h1 className="label">
                        NFT's
                    </h1>
                    <h1 className="label">
                        Dashboard
                    </h1>
                </div> */}
            </div>












            <div className="about">

            </div>
            <div className="side-links" style={{ display: `${phoneScroll()[2]}` }}>
                <a href="https://github.com/rainbow-me/rainbow" rel="noreferrer" target="_blank"><h3>👾 github</h3></a>
                <a href="/media-kit.zip"><h3>⬇️ media kit</h3></a>
                <a href="/terms-of-use"><h3>📜 terms of use</h3></a>
                <a href="/privacy"><h3>🔒 privacy policy</h3></a>
            </div>
            <p className="trademark" style={{ display: `${phoneScroll()[2]}` }}>© Rainbow</p>
            <div className={theme ? "theme-switch-dark" : "theme-switch-light"} onClick={() => setTheme(!theme)}>
                <div className="emoji-light">
                    <p>🌙</p>
                </div>
                <div className="emoji-dark">
                    <p>☀️</p>
                </div>
                <div className={theme ? "theme-switch-ball-dark" : "theme-switch-ball-light"}>
                </div>

            </div>

        </div>
    )
}

export default Home
