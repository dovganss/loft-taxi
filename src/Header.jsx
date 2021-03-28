import React from 'react'

export const Header = ({navigateTo}) => {
  return 
  <header>
  <nav>
    <ul>
      <li>
        <button 
        onClick={() => {
          navigateTo("home");
          }}
          >
          Home
        </button>
      </li>
      <li>
        <button 
        onClick={() => {
          navigateTo("map");
          }}
          >
          Map
        </button>
      </li>
      <li>
        <button 
        onClick={() => {
          navigateTo("profile");
          }}
          >
          Profile
        </button>
      </li>
    </ul>
  </nav>
</header>
}