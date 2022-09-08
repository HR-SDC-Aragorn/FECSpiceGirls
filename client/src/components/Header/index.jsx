import React, {useState} from 'react';

function Header() {
  const [colorScheme, setColorScheme] = useState("");

  return (
    <div id="website-header-light">
      <h2 id="website-name">Sugar and Spice</h2>
      {/* <span id="website-slogan">...and everything nice!</span> */}
      <div className="color-mode">
        <button type="submit" onClick={() => lightModeOn()}>light-mode</button>
        <button type="submit" onClick={() => darkModeOn()}>dark-mode</button>
      </div>
    </div>
  );
}

export default Header;
