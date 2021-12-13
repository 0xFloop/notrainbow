import React, { useState, useEffect } from 'react';
import { $, jQuery } from 'jquery';
import "./Home.css";


function Home() {

    const [searchBarInput, setSearchBarInput] = React.useState("");
    const [androidActive, setAndroidActive] = React.useState(false);
    const [theme, setTheme] = React.useState(false);
    const [offsetY, setOffsetY] = useState(0);
    const [initialOffset, setInitialOffset] = useState(0);

    const handleScroll = () => setOffsetY(window.pageYOffset);
    const createOffsetY = () => {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
        let rect = document.querySelector('.phone-display').getBoundingClientRect()["y"]
        setInitialOffset(rect);
        console.log(rect + " printing from createOffsetY()" + initialOffset);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        createOffsetY();

    }, [initialOffset]);

    window.addEventListener('click', function (e) {
        if (document.getElementById('android-input-container').contains(e.target) || document.getElementById('android-input-container-bottom').contains(e.target)) {
            setAndroidActive(true);

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
    let intViewportHeight = window.innerHeight;
    let intViewportWidth = window.innerWidth;

    // var phone = $('.one').offset().top;

    const phoneScroll = () => {
        var phoneWidth = intViewportHeight * 0.425;
        if (window.pageYOffset - initialOffset >= intViewportHeight * 3.75) {
            return ["fixed", "63vh", "flex", "-10000px", "-10000", "-10000", "none", "0", "0", "", "", "", "", "", "", "", "-10000", "absolute", (intViewportHeight * 3.75 + initialOffset).toString() + "px", "0"];
        }
        else if (window.pageYOffset - initialOffset >= intViewportHeight * 3.1) {
            return ["fixed", "53vh", "flex", "-10000px", "-10000", "-10000", "none", "0", "0", "", "0", "0", "0", "0", "0", "0", "-10000", "fixed", "0", "0"];
        }
        else if (window.pageYOffset - initialOffset >= intViewportHeight * 2.1) {
            return ["fixed", "53vh", "flex", (-(window.pageYOffset - (intViewportHeight * 2 + initialOffset)) * 2).toString() + "px", (-(window.pageYOffset - (intViewportHeight * 2 + initialOffset)) * 2).toString(), (-(window.pageYOffset - (intViewportHeight * 2 + initialOffset)) * 2).toString(), "none", "1", "1", "flex", (-((window.pageYOffset - (intViewportHeight * 2.35 + initialOffset)) * 1.33) + intViewportHeight).toString(), (-((window.pageYOffset - (intViewportHeight * 2.35 + initialOffset)) * 2.66) + intViewportHeight * 2).toString(), (-((window.pageYOffset - (intViewportHeight * 2.35 + initialOffset)) * 4) + intViewportHeight * 3).toString(), (-((window.pageYOffset - (intViewportHeight * 2.35 + initialOffset)) * 5.33) + intViewportHeight * 4).toString(), (-((window.pageYOffset - (intViewportHeight * 2.35 + initialOffset)) * 6.66) + intViewportHeight * 5).toString(), (-((window.pageYOffset - (intViewportHeight * 2.35 + initialOffset)) * 8) + intViewportHeight * 6).toString(), "-10000", "fixed", "0", "0"];
        }
        else if (window.pageYOffset - initialOffset >= intViewportHeight * 2) {
            return ["fixed", "53vh", "flex", (-(window.pageYOffset - (intViewportHeight * 2 + initialOffset)) * 2).toString() + "px", (-(window.pageYOffset - (intViewportHeight * 2 + initialOffset)) * 2).toString(), (-(window.pageYOffset - (intViewportHeight * 2 + initialOffset)) * 2).toString(), "flex", "1", "1", "none", "-10000", "-10000", "-10000", "-10000", "-10000", "-10000", "-10000", "fixed", "", "0"];
        }
        else if (window.pageYOffset - initialOffset >= intViewportHeight) {
            return ["fixed", "53vh", "flex", "0", "0", "0", "flex", "1", "1", "none", "-10000", "-10000", "-10000", "-10000", "-10000", "-10000", "-10000", "fixed", "", "0"];
        }
        else if (window.pageYOffset - initialOffset > 0) {
            console.log((window.innerHeight + " " + (window.pageYOffset - initialOffset)));
            return ["fixed", "53vh", "flex", (-((window.pageYOffset - initialOffset) * 0.425) + phoneWidth).toString() + "px", (-(window.pageYOffset - initialOffset) + intViewportHeight).toString(), (-(window.pageYOffset - initialOffset) * 2 + intViewportHeight * 2).toString(), "none", ((window.pageYOffset - initialOffset) * 0.01).toString(), ((window.pageYOffset - initialOffset) * 0.005).toString(), "none", "-10000", "-10000", "-10000", "-10000", "-10000", "-10000", "-10000", "fixed", "", "0"];
        }
        else if (window.pageYOffset <= initialOffset) {
            console.log(window.pageYOffset + " " + initialOffset)
            return ["relative", "0px", "none", "100%", (-(window.pageYOffset - initialOffset) + intViewportHeight).toString(), (-(window.pageYOffset - initialOffset) + intViewportHeight * 2).toString(), "none", "0", "0", "none", "-10000", "-10000", "-10000", "-10000", "-10000", "-10000", "-10000", "fixed", "", ""];
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
                <div className="phone-display" style={{ position: `${phoneScroll()[0]}`, bottom: `${phoneScroll()[19]}` }}>
                    <img src="assets/phone1.png" alt="" id="phone" className="phone" style={{ transform: "translateX(" + `${phoneScroll()[3]}` + ")" }} />
                    <img src="assets/phone2.png" alt="" className="phone one" style={{ transform: "translateX(" + `${phoneScroll()[4]}` + "px)", animation: "fadeIn 0.75s ease-in-out", opacity: `${phoneScroll()[7]}` }} />
                    <img src="assets/phone3.png" alt="" className="phone two" style={{ transform: "translateX(" + `${phoneScroll()[5]}` + "px)", animation: "fadeIn 0.75s ease-in-out", opacity: `${phoneScroll()[8]}` }} />
                </div>
                <div className="about" style={{ position: `${phoneScroll()[17]}`, top: `${phoneScroll()[18]}` }}>
                    <h1 className="about-title" style={{ animation: "fadeIn 1s ease-in-out", transform: "translateX(" + `${phoneScroll()[10]}` + "px)" }} >What is <span style={{ animation: "multicolor 2s infinite" }}>Rainbow</span> Wallet?</h1>
                    <h3 className="line first" style={{ animation: "fadeIn 1.25s ease-in-out", display: `${phoneScroll()[9]}`, transform: "translateX(" + `${phoneScroll()[11]}` + "px)" }} >Rainbow is a fun, simple, and secure mobile app that allows you to
                    </h3>
                    <h3 className="line second" style={{ animation: "fadeIn 1.05s ease-in-out", display: `${phoneScroll()[9]}`, transform: "translateX(" + `${phoneScroll()[12]}` + "px)" }} >1️⃣ Create an Ethereum wallet
                    </h3>
                    <h3 className="line third" style={{ animation: "fadeIn 1.1s ease-in-out", display: `${phoneScroll()[9]}`, transform: "translateX(" + `${phoneScroll()[13]}` + "px)" }} >2️⃣ Collect NFTs
                    </h3>
                    <h3 className="line fourth" style={{ animation: "fadeIn 1.15s ease-in-out", display: `${phoneScroll()[9]}`, transform: "translateX(" + `${phoneScroll()[14]}` + "px)" }} >3️⃣ Explore the new world of Web3
                    </h3>
                    <h3 className="line fourth" style={{ animation: "fadeIn 1.2s ease-in-out", display: `${phoneScroll()[9]}`, transform: "translateX(" + `${phoneScroll()[15]}` + "px)" }} >And so much more!
                    </h3>
                    <h3 className="line fifth" style={{ animation: "fadeIn 1.25s ease-in-out", display: `${phoneScroll()[9]}`, transform: "translateX(" + `${phoneScroll()[16]}` + "px)" }} >Download the app or join our Android beta today!
                    </h3>
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
                <div className="buttonsbottom">
                    <a href="https://apps.apple.com/us/app/rainbow-ethereum-wallet/id1457119021" id="app-store-button"><img src="assets/app-store-button.svg" alt="apple app store button" className="apple-store-icon" /></a>

                    <div id="android-input-container-bottom" className={androidActive ? "android-button-active" : "android-button"} onClick={() => setAndroidActive(true)}>
                        <h1 className="jointext">Join the Android beta</h1>
                        <input type="text" placeholder="Play Store email" className="android-email" />
                        <div className="android-icon-img" />
                        <div className="android-mail-img" />
                    </div>
                </div>
                <img src="assets/largerainbow.png" alt="" className="bottomrainbow" />
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
