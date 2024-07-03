import React from 'react'
import './nav.css'
import Filelink from "./file.zip"

const nav = () => {
  return (
    <nav>
      <div className='logo' >
        <img className='image' src="https://imgs.search.brave.com/1tkVRf1uC7LGdLaLOasZmLnvd22f2M1B7akfXXyVde0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/dnMtY29kZS5zdmc" alt="" />
        <h2><a className='home'style={{color:"white",textDecoration:"none"}} href="https:/google.com">Visual Studio Code</a></h2>
        <ol>
          <li><a href="https://code.visualstudio.com/docs">Docs</a></li>
          <li><a href="https://code.visualstudio.com/updates/v1_90">Updates</a></li>
          <li><a href="https://code.visualstudio.com/blogs/2024/06/24/extensions-are-all-you-need">Blog</a></li>
          <li><a href="https://code.visualstudio.com/blogs/2024/06/24/extensions-are-all-you-need">Extensions</a></li>
          <li><a href="https://code.visualstudio.com/docs/supporting/faq">FAQ</a></li>
          <li><a href="https://code.visualstudio.com/learn">Learn</a></li>
          <li><a href="https:/google.com">Search</a></li>
        </ol>
      </div>
      <div className="right">
        <input type="text" placeholder='Search docs'/>
        <button><a href={Filelink} download={Filelink} >Download</a></button>
      </div>
    </nav>
  )
}

export default nav
