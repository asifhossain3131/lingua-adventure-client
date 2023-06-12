import React from 'react';
import './ToggleDarkMode.css'
import { MoonIcon,SunIcon } from "@heroicons/react/24/outline";


const ToggleDarkMode = () => {
    return (
        <div>
  <input type="checkbox" class="checkbox" id="checkbox"/>
  <label for="checkbox" class="checkbox-label">
    <MoonIcon className='fa-moon'></MoonIcon>
    <SunIcon className='fa-sun'></SunIcon>
    <span class="ball"></span>
  </label>
</div>
    )
};

export default ToggleDarkMode;