import React, { useState } from 'react'
import "./main.css"
import img from "../images/1.png"

const Header= () => {
    const[toggle , settoggle]=useState(false)
    const [navtoggle , setnavtoggle] = useState(false)
    const [request , setrequest] = useState(false)
    const [travel , settravel] = useState(false)
    const[local , setlocal] = useState(false)
    const [non , setnon] = useState(false)
    const [approval , setapproval] =  useState(false)
    const[dot , setdot] = useState(false)
    return (
        <>
           <div className="header">
               <div className="left">
                  <div className="image">
                  <img src={img} alt="" />
                  <label class="switch" >
                <input type="checkbox"  onClick={()=>{settoggle(s => !s)}}/>
                <span class="slider round"></span>
                   </label>
                   <div className="toggle" onClick={()=>{setdot(s => !s)}}>
                       <p>...</p>
                   </div>
                  </div>
                   <h1>COOL ASSIST</h1>
                  
               </div>
               <div className="right"  >
               <i class="zmdi zmdi-assignment-account"></i>
               <p>name of user</p>
              <div className="rotate"> <i class="zmdi zmdi-chevron-down"></i></div>
               </div>
                   
              
           </div>

           <div className="right"   style={{display: dot? 'block' :"none"}}>
               <i class="zmdi zmdi-assignment-account"></i>
               <p>name of user</p>
              <div className="rotate"> <i class="zmdi zmdi-chevron-down"></i></div>
               </div>
           <div  style={{display: toggle ? 'block' :"none"}}  className="main_section">
              <div className="main_menu">
                  <ul>
                      <li>
                          <a className="menu_link">
                          <div className="menu_icon" onClick={()=>{setnavtoggle(s=> !s)}}>
                          <i class="zmdi zmdi-home"></i>
                         
                         <p> My Dashboard</p>
                         {
                             navtoggle ? <div className="arrow"><i class="zmdi zmdi-chevron-down"></i></div>: <div className="arrow"><i class="zmdi zmdi-chevron-right"></i> </div>
                         }
                          </div>
                          </a>
                          <ul  style={{display: navtoggle ? 'block' :"none"}} className="sub-link">
                              <li>
                                  <a> link 1</a>
                                  <div className="arrows"><i class="zmdi zmdi-chevron-down"></i></div>
                              </li>
                              <li>
                                  <a> link 1</a>
                                   <div className="arrows"><i class="zmdi zmdi-chevron-down"></i></div>
                              </li>
                          </ul>
                          
                      </li>
                      <li>
                          <a className="menu_link">
                          <div className="menu_icon" onClick={()=>{setrequest(s=> !s)}} >
                          <i class="zmdi zmdi-file-text"></i>
                         <p> My Reqest</p>
                         {
                             request ? <div className="arrow"><i class="zmdi zmdi-chevron-down"></i></div>: <div className="arrow"><i class="zmdi zmdi-chevron-right"></i> </div>
                         }
                          </div>
                          </a>
                          <ul  style={{display: request ? 'block' :"none"}} className="sub-link">
                              <li>
                                  <a> link 1</a>
                                   <div className="arrows"><i class="zmdi zmdi-chevron-down"></i></div>
                              </li>
                              <li>
                                  <a> link 1</a>
                                   <div className="arrows"><i class="zmdi zmdi-chevron-down"></i></div>
                              </li>
                          </ul>
                      </li>
                      <li>
                          <a className="menu_link">
                          <div className="menu_icon" onClick={()=>{settravel(s=> !s)}}>
                          <i class="zmdi zmdi-arrow-missed"></i>
                         
                         <p> My Travel claims</p>
                         {
                             travel? <div className="arrow"><i class="zmdi zmdi-chevron-down"></i></div>: <div className="arrow"><i class="zmdi zmdi-chevron-right"></i> </div>
                         }
                          </div>
                          </a>
                          <ul  style={{display: travel ? 'block' :"none"}} className="sub-link">
                              <li>
                                  <a> link 1</a>
                                   <div className="arrows"><i class="zmdi zmdi-chevron-down"></i></div>
                              </li>
                              <li>
                                  <a> link 1</a>
                                   <div className="arrows"><i class="zmdi zmdi-chevron-down"></i></div>
                              </li>
                          </ul>
                      </li>
                      <li>
                          <a className="menu_link">
                          <div className="menu_icon" onClick={()=>{setlocal(s=> !s)}}>
                          <i class="zmdi zmdi-arrow-missed"></i>
                         
                         <p> Local Travel Claim</p>
                         {
                            local ? <div className="arrow"><i class="zmdi zmdi-chevron-down"></i></div>: <div className="arrow"><i class="zmdi zmdi-chevron-right"></i> </div>
                         }
                          </div>
                          </a>
                          <ul  style={{display: local ? 'block' :"none"}} className="sub-link">
                              <li>
                                  <a> link 1</a>
                                   <div className="arrows"><i class="zmdi zmdi-chevron-down"></i></div>
                              </li>
                              <li>
                                  <a> link 1</a>
                                   <div className="arrows"><i class="zmdi zmdi-chevron-down"></i></div>
                              </li>
                          </ul>
                      </li>
                      <li>
                          <a className="menu_link">
                          <div className="menu_icon" onClick={()=>{setnon(s=> !s)}}>
                          
                          <i class="zmdi zmdi-arrow-missed"></i>
                         
                         <p> Non Travel Claim</p>
                         {
                             non ? <div className="arrow"><i class="zmdi zmdi-chevron-down"></i></div>: <div className="arrow"><i class="zmdi zmdi-chevron-right"></i> </div>
                         }
                          </div>

                          </a>
                          <ul  style={{display: non ? 'block' :"none"}} className="sub-link">
                              <li>
                                  <a> link 1</a>
                                   <div className="arrows"><i class="zmdi zmdi-chevron-down"></i></div>
                              </li>
                              <li>
                                  <a> link 1</a>
                                   <div className="arrows"><i class="zmdi zmdi-chevron-down"></i></div>
                              </li>
                          </ul>
                      </li>
                      <li>
                          <a className="menu_link">
                          <div className="menu_icon" onClick={()=>{setapproval(s=> !s)}}>
                          <i class="zmdi zmdi-check-square"></i>
                         
                         <p> My Approval</p>
                         {
                             approval ? <div className="arrow"><i class="zmdi zmdi-chevron-down"></i></div>: <div className="arrow"><i class="zmdi zmdi-chevron-right"></i> </div>
                         }
                          </div>
                          </a>
                          <ul  style={{display: approval ? 'block' :"none"}} className="sub-link">
                              <li>
                                  <a> link 1</a>
                                   <div className="arrows"><i class="zmdi zmdi-chevron-down"></i></div>
                              </li>
                              <li>
                                  <a> link 1</a>
                                   <div className="arrows"><i class="zmdi zmdi-chevron-down"></i></div>
                              </li>
                          </ul>
                      </li>
                  </ul>
                  </div> 
               
           </div>
        </>
    )
}

export default Header

