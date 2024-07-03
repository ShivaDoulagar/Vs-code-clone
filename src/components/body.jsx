import React from "react";
import Filelink from "./file.zip"


const body = () => {
  return (
    <div>
      <div className="first_page" style={{overflowX:'hidden', background: "linear-gradient(135deg,rgb(14,15,15),rgb(20,20,20))",paddingBottom:'4vh'}}>
        <div
          className="version"
          style={{
            display: "flex",
            backgroundColor: "transparent",
            width: "100vw",
            justifyContent: "center",
            paddingLeft:'4vw',
            paddingRight:'4vw',
            alignItems: "center",
            marginBottom:'6vh'
          }}
        >
          <h4 style={{ color: "rgb(154,162,180)" }}>
            <a style={{ color: "rgb(2,121,213)" }} href="https://code.visualstudio.com/updates/v1_90">
              Version 1.90
            </a>{" "}
            is now availabe! Read about the new features and fixes from April.
          </h4>
        </div>
        <div
          className="download_page "
          style={{
            width: "100%",
            height: "70vh",
            display:'flex',
            paddingLeft:'2vw',
            paddingRight:'2vw',
            backgroundColor: "transparent",
          }}
        >
          <div
              style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                width:"40%",
                textAlign:'center',
                flexDirection:'column',
                marginTop:"2vh"
              }} >
            <span
              style={{
                backgroundColor: "transparent",
                padding: "10px",
                border: "1px solid gray",
                color: "white",
                borderRadius: "12px",
                fontSize:'16px'
              }}
            >
              Free.Built on open source.Runs on everywhere.
            </span>
            <span><h1 style={{color:'white',fontSize:"8vh"}} >Code editing.Refinded.</h1></span>
            <button style={{
              height:'60px',
              cursor:'pointer',
              fontSize:'20px',
              width:'340px'
            }}> <a href={Filelink} download={Filelink} >Download for Windows</a></button>
            <div
          className="version"
          style={{
            display: "flex",  
            backgroundColor: "transparent",
            width: "100vw",
            justifyContent: "center",
            alignItems: "center",
            marginBottom:'6vh'
          }}
        >
          <h4 style={{ color: "rgb(154,162,180)" }}>
            <a style={{ color: "rgb(2,121,213)",textDecoration:'Underline' }} href="https:/google.com">
              Web,Insiders edition,or other platforms
            </a>{" "}
            
          </h4>
        </div>
          </div>
          <div style={{width:'50%',paddingRight:'4vw'}} >
            <img style={{width:'100%'}} src="https://code.visualstudio.com/assets/home/home-screenshot-mac-2x-v2.png" alt="" />
          </div>
        </div>
      </div>
      <div className="second" style={{
        width:'100vw',
        height:'40vh',
        paddingTop:'50px',
        display:"flex",
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor: "rgb(14,15,15)",
        paddingBottom:'4vh'
      }} >
        <div style={{
          width:'35vw',
          height:'38vh',
          display:'flex',
          paddingLeft:'40px',
          paddingRight:'40px',
          alignItems:'center',
          flexDirection:'column',

        }} >
          <h2 style={{fontSize:'34px',
            color:'white'
          }}>Code in any language</h2>
          <p style={{
            fontSize:'20px',
            color:'gray'
          }}>VS Code supports almost every major programming language. Several ship in the box, like JavaScript, TypeScript, CSS, and HTML, but extensions for others can be found in the VS Code Marketplace.</p>
        </div>
        <div style={{
          width:'35vw',
          height:'38vh',
          display:'flex',
          flexDirection:'column',
          justifyContent:'space-between',
          padding:'20px'
        }} >
            <div style={{display:'flex',width:'34vw',justifyContent:'space-between'}} >
                  <div style={{display:'flex',alignItems:'center',marginLeft:'34px',marginRight:'34px'}}>
                    <img width={40} height={40} src="https://code.visualstudio.com/assets/home/language-js.png" alt="" />
                    <h4 style={{fontSize:'44',color:'gray'}} >Java script</h4>
                  </div>
                  <div style={{display:'flex',alignItems:'center',marginLeft:'34px',marginRight:'34px'}}>
                    <img width={40} height={40} src="https://code.visualstudio.com/assets/home/language-ts.png" alt="" />
                    <h4 style={{fontSize:'44',color:'gray'}} >Type Script</h4>
                  </div>
                  <div style={{display:'flex',alignItems:'center',marginLeft:'34px',marginRight:'34px'}}>
                    <img width={40} height={40} src="https://code.visualstudio.com/assets/home/language-python.png" alt="" />
                    <h4 style={{fontSize:'44',color:'gray'}} >Python</h4>
                  </div>
            </div>
            <div style={{display:'flex',width:'34vw',justifyContent:'space-between'}} >
                  <div style={{display:'flex',alignItems:'center',marginLeft:'34px',marginRight:'34px'}}>
                    <img width={40} height={40} src="https://code.visualstudio.com/assets/home/language-cs.png  " alt="" />
                    <h4 style={{fontSize:'44',color:'gray'}} >C#</h4>
                  </div>
                  <div style={{display:'flex',alignItems:'center',marginLeft:'34px',marginRight:'34px'}}>
                    <img width={40} height={40} src="https://code.visualstudio.com/assets/home/language-cpp.png" alt="" />
                    <h4 style={{fontSize:'44',color:'gray'}} >C++</h4>
                  </div>
                  <div style={{display:'flex',alignItems:'center',marginLeft:'34px',marginRight:'34px'}}>
                    <img width={40} height={40} src="https://code.visualstudio.com/assets/home/language-html.png" alt="" />
                    <h4 style={{fontSize:'44',color:'gray'}} >HTML</h4>
                  </div>
            </div>
            <div style={{display:'flex',width:'34vw',justifyContent:'space-between'}} >
                  <div style={{display:'flex',alignItems:'center',marginLeft:'34px',marginRight:'34px'}}>
                    <img width={40} height={40} src="https://code.visualstudio.com/assets/home/language-java.png" alt="" />
                    <h4 style={{fontSize:'44',color:'gray'}} >Java</h4>
                  </div>
                  <div style={{display:'flex',alignItems:'center',marginLeft:'34px',marginRight:'34px'}}>
                    <img width={40} height={40} src="https://code.visualstudio.com/assets/home/language-json.png" alt="" />
                    <h4 style={{fontSize:'44',color:'gray'}} >JSON</h4>
                  </div>
                  <div style={{display:'flex',alignItems:'center',marginLeft:'34px',marginRight:'34px'}}>
                    <img width={40} height={40} src="https://code.visualstudio.com/assets/home/language-php.png" alt="" />
                    <h4 style={{fontSize:'44',color:'gray'}} >PHP</h4>
                  </div>
            </div>
            <div style={{display:'flex',width:'34vw',justifyContent:'space-between'}} >
                  <div style={{display:'flex',alignItems:'center',marginLeft:'34px',marginRight:'34px'}}>
                    <img width={40} height={40} src="https://code.visualstudio.com/assets/home/language-markdown.png" alt="" />
                    <h4 style={{fontSize:'44',color:'gray'}} >Markdown</h4>
                  </div>
                  <div style={{display:'flex',alignItems:'center',marginLeft:'34px',marginRight:'34px'}}>
                    <img width={40} height={40} src="https://code.visualstudio.com/assets/home/language-powershell.png" alt="" />
                    <h4 style={{fontSize:'44',color:'gray'}} >Powershell</h4>
                  </div>
                  <div style={{display:'flex',alignItems:'center',marginLeft:'34px',marginRight:'34px'}}>
                    <img width={40} height={40} src="https://code.visualstudio.com/assets/home/language-yaml.png" alt="" />
                    <h4 style={{fontSize:'44',color:'gray'}} >YAML</h4>
                  </div>
            </div>
        </div>
      </div>
      <div className="second" style={{
        width:'100vw',
        height:'90vh',
        paddingTop:'50px',
        display:"flex",
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor: "rgb(14,15,15)",
        paddingBottom:'4vh'
      }} >
        <div style={{
          width:'35vw',
          height:'38vh',
          display:'flex',
          paddingLeft:'40px',
          paddingRight:'40px',
          alignItems:'center',
          flexDirection:'column',

        }} >
          <h2 style={{fontSize:'34px',
            color:'white'
          }}>Code with extensions</h2>
          <p style={{
            fontSize:'20px',
            color:'gray'
          }}>Whether you're a beginner or an expert, we've got you covered. Choose from hundreds of extensions to power up your VS Code experience.</p>
          <h4 style={{ color: "rgb(154,162,180)" }}>
            <a style={{ color: "rgb(2,121,213)" ,textDecoration:'Underline'}} href="https:/google.com">
              Learn more about extensions.
            </a>{" "}
            
          </h4>
        </div>
        <div style={{
          width:'35vw',
          height:'38vh',
          display:'flex',
          flexDirection:'column',
          justifyContent:'space-between',
          padding:'20px'
        }} >
            <div style={{display:'flex',width:'37vw',justifyContent:'space-between',marginBottom:'10px'}} >
                  <div style={{width:'30%',marginLeft:'0.3vw',marginRight:'0.2vw',justifyContent:'center',border:'1px solid white',borderRadius:'10px',color:'white',display:'flex',paddingLeft:'1vw',paddingRight:'1.8px'}}>
                    <div style={{paddingTop:'2vh',paddingRight:'1vw'}}><img style={{width:'1.35vw'}} src="https://code.visualstudio.com/assets/images/python-extension.png" alt="" /></div>
                    <div><h4>Python</h4><p style={{color:'gray'}} >adds rich language support for pyhton</p></div>
                  </div>

                  <div style={{width:'30%',marginLeft:'0.3vw',marginRight:'0.2vw',justifyContent:'center',border:'1px solid white',borderRadius:'10px',color:'white',display:'flex',paddingLeft:'1vw',paddingRight:'1.8px'}}>
                    <div style={{paddingTop:'2vh',paddingRight:'1vw'}}><img style={{width:'1.35vw'}} src="https://code.visualstudio.com/assets/images/copilot-extension.png" alt="" /></div>
                    <div><h4>GitHub Copilot</h4><p style={{color:'gray'}} >Your AI pair programmer</p></div>
                  </div>

                  <div style={{width:'30%',marginLeft:'0.3vw',marginRight:'0.2vw',justifyContent:'center',border:'1px solid white',borderRadius:'10px',color:'white',display:'flex',paddingLeft:'1vw',paddingRight:'1.8px'}}>
                    <div style={{paddingTop:'2vh',paddingRight:'1vw'}}><img style={{width:'1.35vw'}} src="https://code.visualstudio.com/assets/images/c-extension.png" alt="" /></div>
                    <div><h4>C/C++</h4><p style={{color:'gray'}} >Add's rich support for C/C++</p></div>
                  </div>
            </div>
            <div style={{display:'flex',width:'37vw',justifyContent:'space-between',marginBottom:'10px',opacity:"0.7"}} >
            <div style={{width:'30%',marginLeft:'0.3vw',marginRight:'0.2vw',justifyContent:'center',border:'1px solid white',borderRadius:'10px',color:'white',display:'flex',paddingLeft:'1vw',paddingRight:'1.8px'}}>
                    <div style={{paddingTop:'2vh',paddingRight:'1vw'}}><img style={{width:'1.35vw'}} src="https://code.visualstudio.com/assets/images/jupyter-extension.png" alt="" /></div>
                    <div><h4>Jupyter</h4><p style={{color:'gray'}} >Language support for Jupyter Notebooks</p></div>
                  </div>

                  <div style={{width:'30%',marginLeft:'0.3vw',marginRight:'0.2vw',justifyContent:'center',border:'1px solid white',borderRadius:'10px',color:'white',display:'flex',paddingLeft:'1vw',paddingRight:'1.8px'}}>
                    <div style={{paddingTop:'2vh',paddingRight:'1vw'}}><img style={{width:'1.35vw'}} src="https://code.visualstudio.com/assets/images/gitlens-extension.png" alt="" /></div>
                    <div><h4>GitLens</h4><p style={{color:'gray'}} >Super charge your git exprience</p></div>
                  </div>

                  <div style={{width:'30%',marginLeft:'0.3vw',marginRight:'0.2vw',justifyContent:'center',border:'1px solid white',borderRadius:'10px',color:'white',display:'flex',paddingLeft:'1vw',paddingRight:'1.8px'}}>
                    <div style={{paddingTop:'2vh',paddingRight:'1vw'}}><img style={{width:'1.35vw'}} src="https://code.visualstudio.com/assets/images/prettier-extension.png" alt="" /></div>
                    <div><h4>Prettier</h4><p style={{color:'gray'}} >A code format for consistent styling</p></div>
                  </div>
            </div>
            <div style={{display:'flex',width:'37vw',justifyContent:'space-between',marginBottom:'10px',opacity:'0.5'}} >
            <div style={{width:'30%',marginLeft:'0.3vw',marginRight:'0.2vw',justifyContent:'center',border:'1px solid white',borderRadius:'10px',color:'white',display:'flex',paddingLeft:'1vw',paddingRight:'1.8px'}}>
                    <div style={{paddingTop:'2vh',paddingRight:'1vw'}}><img style={{width:'1.35vw'}} src="https://code.visualstudio.com/assets/images/github-pull-requests-extension.png" alt="" /></div>
                    <div><h4>GitHub Codespaces</h4><p style={{color:'gray'}} >Fully configured dev environments in the cloud</p></div>
                  </div>

                  <div style={{width:'30%',marginLeft:'0.3vw',marginRight:'0.2vw',justifyContent:'center',border:'1px solid white',borderRadius:'10px',color:'white',display:'flex',paddingLeft:'1vw',paddingRight:'1.8px'}}>
                    <div style={{paddingTop:'2vh',paddingRight:'1vw'}}><img style={{width:'1.35vw'}} src="https://code.visualstudio.com/assets/images/github-pull-requests-extension.png" alt="" /></div>
                    <div><h4>GitHub pull Requests</h4><p style={{color:'gray'}} >Collaborate on Issues and Pull requests </p></div>
                  </div>

                  <div style={{width:'30%',marginLeft:'0.3vw',marginRight:'0.2vw',justifyContent:'center',border:'1px solid white',borderRadius:'10px',color:'white',display:'flex',paddingLeft:'1vw',paddingRight:'1.8px'}}>
                    <div style={{paddingTop:'2vh',paddingRight:'1vw'}}><img style={{width:'1.35vw'}} src="https://code.visualstudio.com/assets/images/remote-extension.png" alt="" /></div>
                    <div><h4>Remote Development</h4><p style={{color:'gray'}} >Open folders in a container on a remote machine</p></div>
                  </div>
            </div>
        </div>
      </div>
      <div style={{display:'flex',alignItems:'center',backgroundColor:'rgb(14,14,14)',padding:'3vw',justifyContent:'space-around'}}>
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'30vw'}}>
            <h4 style={{color:'white',fontSize:'2.4em'}}>Code with Github copilot</h4>
            <p style={{color:'gray',fontSize:'1.2em'}}>Write code faster and smarter with GitHub Copilot, your AI pair programmer.</p>
            <h4 style={{ color: "rgb(154,162,180)" }}>
            <a style={{ color: "rgb(2,121,213)",textDecoration:'Underline' }} href="https:/google.com">
              Try Github copiolot for free for 30 days
            </a>{" "}
          </h4>
          </div>
          <div><img width={834} src="https://code.visualstudio.com/assets/home/swimlane-copilot.png" alt="" /></div>
        </div>  
    </div>
  );
};

export default body;

