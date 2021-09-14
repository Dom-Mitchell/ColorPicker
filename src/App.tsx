import React, { useState } from 'react'
import image from './icons/header/dai5.svg'

export function App() {
  const [hue, setHue] = useState(Math.floor(Math.random() * 361))

  function _HueChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()

    const newHue = event.target.value

    setHue(Number(newHue))
  }

  const [saturation, setSaturation] = useState(Math.floor(Math.random() * 101))

  function _SaturationChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()

    const newSaturation = event.target.value

    setSaturation(Number(newSaturation))
  }

  const [lightness, setLightness] = useState(Math.floor(Math.random() * 101))

  function _LightnessChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()

    const newLightness = event.target.value

    setLightness(Number(newLightness))
  }

  const [alpha, setAlpha] = useState(1)

  function _AlphaChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()

    const newAlpha = event.target.value

    setAlpha(Number(newAlpha))
  }

  function _RandomButtonClick() {
    setHue(Math.floor(Math.random() * 361))
    setSaturation(Math.floor(Math.random() * 101))
    setLightness(Math.floor(Math.random() * 101))
    setAlpha(1)
  }

  // if ( alpha  < 1) {
  const newBackgroundColor = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`
  const newStyle = { backgroundColor: newBackgroundColor }
  // }

  return (
    <div>
      <header>
        <img src={image} className="logo" aria-hidden="true" alt="Dom Logo" />
        <div>
          <h1>
            Color Theory
            <br />
            Or, Is It
            <br />
            Color Picker?
          </h1>
        </div>
        <p>
          Who really knows? Play <br />
          around and have <br />
          fun...
        </p>
      </header>

      <div className="organizer">
        <div className="color-box-container">
          <h2>Color</h2>
          <div className="color-box" style={newStyle}></div>
          <button onClick={_RandomButtonClick} className="random">
            <span className="random-span"></span>
            <p>Randomize!</p>
          </button>
        </div>
        <ul>
          <li>
            <h3>H</h3>
            <input
              type="range"
              min="0"
              max="360"
              step="1"
              value={hue}
              onChange={_HueChangeInput}
            />
            <h3>{hue}</h3>
          </li>
          <li>
            <h3>S</h3>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={saturation}
              onChange={_SaturationChangeInput}
            />
            <h3>{saturation}</h3>
          </li>
          <li>
            <h3>L</h3>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={lightness}
              onChange={_LightnessChangeInput}
            />
            <h3>{lightness}</h3>
          </li>
          <li>
            <h3>A</h3>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={alpha}
              onChange={_AlphaChangeInput}
            />
            <h3>{alpha}</h3>
          </li>
        </ul>

        <h3 className="hsla">
          hsla({hue}, {saturation}%, {lightness}%, {alpha})
        </h3>
      </div>
    </div>
  )
}
