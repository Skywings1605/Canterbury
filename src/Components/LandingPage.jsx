import "./LandingPage.css"
import sx from "./images/nandi.png"
import logo from "./images/logo.svg"
import map from "./images/map.png"
import home from "./images/home.png"
import mask1 from "./images/mask1.png"
import mask2 from "./images/mask2.png"
import mask3 from "./images/mask3.png"
import mask4 from "./images/mask4.png"
import garden from "./images/Image.png"
import {Slides}from "./Slider"
import { useEffect, useState } from "react"
import emailjs from 'emailjs-com';

export const LandingPage = () => {
    const [values, setValues] = useState({
        name: "",
        phone: "",
        email: "",
        option: ""
    })
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      emailjs.send('service_h6wdwpk', 'template_5xju3dy', values, 'Do7eU6ZdG80goTEX0')
        .then(response => {
          console.log('SUCCESS!', response);
          setValues({
            name: '',
            email: '',
            role: '',
            message: ''
          });
          setStatus('SUCCESS');
        }, error => {
          console.log('FAILED...', error);
        });
    }
  
    useEffect(() => {
      if(status === 'SUCCESS') {
        setTimeout(() => {
          setStatus('');
        }, 3000);
      }
    }, [status]);
  
    const handleChange = (e) => {
      setValues(values => ({
        ...values,
        [e.target.className]: e.target.value
      }))
      console.log(values)
    }
    return (

        <div>
            
            <div className="top">
                <div className="topText">
                    <h1>Premium Plotted Development at the foot of Nandi Hills</h1>
                    <h2>A JOINT VENTURE PROJECT</h2>
                </div>
            </div>
            <div className="second">
                <h2 className="plots">1200 SQFT PLOTS WITH CLEAR TITLES INSIDE A GATED COMMUNITY</h2>
                <p className="canter">Canterbury Divine Arc is our Premium land bank with closest proximity to the Clubhouse. It is a great investment option for people who like a modern touch engulfed in natural surroundings</p>
            </div>
            <div className="third">
                <div className="wake">
                    Walk up to the hills every morning and take a run through mango orchards or jump in the pool for a few laps
                </div>
            </div>
            <div className="storyDiv">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/RWGrlxLzlik" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <div className="story">
                    <h2>What's the Story</h2>
                    <p>Canterbury Divine Arc is situated inside a resort area which gives you 3 bonus points</p>
                    <p>
                        1. The ambience is always going to be great
                    </p>
                    <p>2. Appreciation is a no brainer because of the footfall</p>
                    <p>
                        3. On days you want to chill, you can always order in
                    </p>
        
                </div>
            </div>
            <div className="plotsinfo">
                <div className="perfectDiv">
                    <p className="perfect">Perfect</p>
                    <h1>30/40 Plots</h1>
                </div>
                <div className="grids">
                    <div className="content">
                        <div className="override">
                            <div className="circle"></div>
                            <svg className="oversvg" xmlns="http://www.w3.org/2000/svg" width="77.45" height="74.202" viewBox="0 0 77.45 74.202">
                            <g id="Group_220" data-name="Group 220" transform="translate(-16302.691 -2935.647)">
                                <path id="Path_235" data-name="Path 235" d="M325.394,160.6a9.54,9.54,0,1,0-9.54,9.54A9.55,9.55,0,0,0,325.394,160.6Zm-15.894,0a6.352,6.352,0,1,1,6.353,6.352A6.359,6.359,0,0,1,309.5,160.6Z" transform="translate(16025.136 2792.277)" fill="#fff"/>
                                <path id="Path_236" data-name="Path 236" d="M243.843,150.615H227.855c3.949-5.213,7.838-11.506,7.838-16.1a17.169,17.169,0,1,0-34.339,0c0,4.6,3.888,10.894,7.836,16.1H195.776l-15.554,40.927h77.45Zm-2.288,3.187,5.87,17.374H227.089V153.8ZM204.539,134.51a13.983,13.983,0,1,1,27.966,0c0,5.994-9.226,17.141-13.983,22.252-4.758-5.112-13.983-16.259-13.983-22.252ZM223.9,188.356H184.845l5.319-13.991H223.9Zm0-17.179H191.372l2.345-6.169v.123H223.9Zm0-9.234H194.883l3.093-8.14h13.737c2.933,3.561,5.413,6.126,5.668,6.387l1.142,1.167,1.14-1.167c.212-.217,1.97-2.041,4.238-4.689v6.442Zm3.188,12.423H248.5l4.726,13.991H227.089Z" transform="translate(16122.469 2818.306)" fill="#fff"/>
                            </g>
                            </svg>
                        </div>
                        <h4>
                        East and West facing plots makes it easier for you to choose from
                        </h4>
                    </div>
                    <div className="content">
                        <div className="override">
                            <div className="circle"></div>
                            <svg className="oversvg" xmlns="http://www.w3.org/2000/svg" width="85.877" height="85.876" viewBox="0 0 85.877 85.876">
                            <g id="Group_177" data-name="Group 177" transform="translate(-16121 -2824)">
                                <path id="Path_232" data-name="Path 232" d="M155.878,210.461a1.34,1.34,0,0,0-.822-1.237L128.219,197.97a1.342,1.342,0,1,0-1.037,2.476l7.882,3.3-9.484,4.107-5.41-2.269-1.037,2.476,3.034,1.272-9.225,3.994-9.225-3.994,3.034-1.272-1.037-2.476-5.41,2.269-9.484-4.107,7.882-3.3a1.342,1.342,0,0,0-1.037-2.476L70.826,209.224A1.342,1.342,0,0,0,70,210.461v6.709c0,.126,5.419,19.153,5.419,19.153a1.341,1.341,0,0,0,2.149.663l5.346-4.455a1.341,1.341,0,0,1,2.081.476l5.253,11.555a1.342,1.342,0,0,0,2.095.463l7.219-6.187a1.293,1.293,0,0,1,1.018-.314,1.324,1.324,0,0,1,.927.529l10.358,13.81a1.342,1.342,0,0,0,2.147,0l10.359-13.81a1.328,1.328,0,0,1,.927-.529,1.3,1.3,0,0,1,1.018.315l7.217,6.185a1.342,1.342,0,0,0,2.095-.463l5.253-11.555a1.341,1.341,0,0,1,2.081-.476l5.346,4.455a1.341,1.341,0,0,0,2.149-.663s5.419-19.026,5.419-19.153V210.46Zm-83.192,2.018L111.6,228.8v3.8L72.686,216.277ZM112.94,226.45l-11.959-5.016,11.959-5.179,11.959,5.179Zm1.342,2.347,38.912-16.318v3.8L114.282,232.6v-3.8Zm24.212-23.608,12.573,5.272-9.639,4.043L129.009,209.3l9.484-4.107Zm-12.9,5.586,12.363,5.183L128.334,220l-12.015-5.2,9.279-4.019Zm-16.033,4.019L97.55,220l-9.626-4.037,12.363-5.183,9.279,4.019Zm-22.176-9.6,9.484,4.107L84.454,214.5l-9.639-4.043,12.573-5.272Zm61.057,28.417-3.764-3.137a4.024,4.024,0,0,0-6.241,1.427l-4.514,9.929-5.861-5.024a4.023,4.023,0,0,0-5.84.642l-9.284,12.378-9.284-12.378a4.026,4.026,0,0,0-5.841-.643l-5.863,5.025L87.442,231.9A4.024,4.024,0,0,0,81.2,230.47l-3.764,3.137L73.4,219.489l39.02,16.364a1.322,1.322,0,0,0,.519.1,1.35,1.35,0,0,0,.514-.117l.005.012,39.02-16.364-4.033,14.118Z" transform="translate(16050.997 2656.477)" fill="#fff"/>
                                <path id="Path_233" data-name="Path 233" d="M268.51,42.937a1.341,1.341,0,0,0,1.1-.58c.558-.807,13.655-19.859,13.655-27.6a14.76,14.76,0,0,0-29.52,0c0,7.741,13.1,26.792,13.655,27.6a1.341,1.341,0,0,0,1.1.58Zm0-40.254a12.091,12.091,0,0,1,12.076,12.076c0,5.225-7.9,18.169-12.076,24.442-4.177-6.273-12.076-19.219-12.076-24.442A12.091,12.091,0,0,1,268.51,2.683Z" transform="translate(15895.427 2824.001)" fill="#fff"/>
                                <path id="Path_234" data-name="Path 234" d="M313.6,51.8a8.051,8.051,0,1,0-8.051,8.051A8.059,8.059,0,0,0,313.6,51.8Zm-13.418,0a5.367,5.367,0,1,1,5.367,5.367A5.373,5.373,0,0,1,300.184,51.8Z" transform="translate(15858.387 2786.959)" fill="#fff"/>
                            </g>
                            </svg>
                        </div>
                        <h4>
                        The premium corner plots are a great option
                        </h4>
                    </div>
                    <div className="content">
                        <div className="override">
                            <div className="circle"></div>
                            <svg className="oversvg" xmlns="http://www.w3.org/2000/svg" width="84.755" height="81.183" viewBox="0 0 84.755 81.183">
                            <g id="Group_221" data-name="Group 221" transform="translate(-16168.029 -3072.056)">
                                <path id="Path_279" data-name="Path 279" d="M149.1,44.627a14.493,14.493,0,0,1-2.979-4.4,15.17,15.17,0,0,1-.207-5.524c.2-2.71.4-5.513-1.034-7.51s-4.22-2.7-6.869-3.341a15.1,15.1,0,0,1-5.172-1.883,14.9,14.9,0,0,1-3.331-4.262c-1.428-2.348-2.907-4.769-5.338-5.5s-4.882.3-7.365,1.314A15.421,15.421,0,0,1,111.38,15a15.424,15.424,0,0,1-5.42-1.531c-2.483-1.034-5.058-2.069-7.365-1.314s-3.91,3.207-5.348,5.555a14.891,14.891,0,0,1-3.331,4.262,15.1,15.1,0,0,1-5.172,1.883c-2.648.641-5.389,1.3-6.869,3.341s-1.251,4.8-1.034,7.51a15.171,15.171,0,0,1-.207,5.524,14.484,14.484,0,0,1-2.979,4.4C71.865,46.738,70,48.91,70,51.517s1.862,4.779,3.662,6.889a14.493,14.493,0,0,1,2.979,4.4,15.17,15.17,0,0,1,.207,5.524c-.2,2.71-.4,5.513,1.034,7.51s4.22,2.7,6.869,3.341a15.1,15.1,0,0,1,5.172,1.883,14.9,14.9,0,0,1,3.331,4.262c1.438,2.348,2.917,4.769,5.348,5.555s4.882-.3,7.365-1.314a15.415,15.415,0,0,1,5.41-1.531,15.424,15.424,0,0,1,5.42,1.531,16.007,16.007,0,0,0,5.689,1.572,5.465,5.465,0,0,0,1.676-.259c2.431-.786,3.91-3.207,5.348-5.555a14.891,14.891,0,0,1,3.331-4.262,15.1,15.1,0,0,1,5.172-1.883c2.648-.641,5.389-1.3,6.869-3.331s1.251-4.81,1.034-7.521a15.17,15.17,0,0,1,.207-5.524,14.484,14.484,0,0,1,2.979-4.4c1.789-2.11,3.652-4.283,3.652-6.889s-1.862-4.779-3.662-6.889Zm-.982,12.93a15.593,15.593,0,0,0-3.227,4.852,16.133,16.133,0,0,0-.269,6.02c.2,2.586.372,5.027-.807,6.652s-3.589,2.224-6.135,2.845h0a15.941,15.941,0,0,0-5.6,2.069,15.767,15.767,0,0,0-3.662,4.624c-1.376,2.245-2.679,4.355-4.645,5s-4.138-.311-6.476-1.283a16.537,16.537,0,0,0-5.917-1.593,16.547,16.547,0,0,0-5.917,1.624c-2.369.972-4.613,1.893-6.476,1.283s-3.269-2.752-4.645-5.027a15.757,15.757,0,0,0-3.652-4.6,15.942,15.942,0,0,0-5.6-2.069c-2.545-.621-4.934-1.2-6.135-2.845s-1.034-4.066-.807-6.652h0a16.133,16.133,0,0,0-.269-6.02,15.592,15.592,0,0,0-3.227-4.852C73,55.655,71.3,53.638,71.3,51.517S73,47.379,74.647,45.465a15.43,15.43,0,0,0,3.227-4.841,16.133,16.133,0,0,0,.269-6.02c-.2-2.586-.372-5.027.807-6.652s3.589-2.224,6.135-2.845h0a15.941,15.941,0,0,0,5.6-2.069,15.767,15.767,0,0,0,3.662-4.624c1.376-2.275,2.679-4.386,4.624-5.027s4.138.311,6.476,1.283a16.544,16.544,0,0,0,5.938,1.676,16.559,16.559,0,0,0,5.917-1.624c2.359-1.025,4.614-1.945,6.5-1.335s3.248,2.752,4.624,5.027a15.757,15.757,0,0,0,3.652,4.6,15.942,15.942,0,0,0,5.6,2.069c2.545.621,4.934,1.2,6.135,2.845s1.034,4.066.807,6.652h0a16.133,16.133,0,0,0,.269,6.02,15.429,15.429,0,0,0,3.227,4.841c1.655,1.934,3.362,4,3.362,6.072s-1.707,4.138-3.352,6.041Z" transform="translate(16099.026 3061.103)" fill="#fff" stroke="#fff" strokeWidth="2"/>
                                <path id="Path_280" data-name="Path 280" d="M271.729,160.036a3.207,3.207,0,0,0-4.345,1.407L254.66,186.331l-7.852-8.772a3.238,3.238,0,0,0-4.82,4.314l11,12.289a3.239,3.239,0,0,0,2.41,1.034h.414a3.228,3.228,0,0,0,2.462-1.738l14.865-29.078a3.186,3.186,0,0,0,.2-2.441,3.1,3.1,0,0,0-1.6-1.9Zm.259,3.755-14.875,29.1a1.935,1.935,0,0,1-3.166.4l-11-12.279a1.945,1.945,0,1,1,2.9-2.586l8.472,9.476a.7.7,0,0,0,.569.207.632.632,0,0,0,.486-.352l13.158-25.737a1.987,1.987,0,0,1,1.128-.962,1.947,1.947,0,0,1,2.328,2.731Z" transform="translate(15953.077 2935.164)" fill="#fff" stroke="#fff" strokeWidth="2"/>
                                <path id="Path_281" data-name="Path 281" d="M182.187,83.087a29.119,29.119,0,1,0,20.57,8.528,29.1,29.1,0,0,0-20.57-8.528Zm0,56.894a27.828,27.828,0,1,1,19.653-8.147,27.8,27.8,0,0,1-19.653,8.147Z" transform="translate(16028.219 3000.433)" fill="#fff" stroke="#fff" strokeWidth="2"/>
                            </g>
                            </svg>

                        </div>
                        <h4>
                        G+1 gives each plot owner the assurance that his view is never blocked
                        </h4>
                    </div>
                    <div className="content">
                        <div className="override">
                            <div className="circle"></div>
                            <svg className="oversvg" xmlns="http://www.w3.org/2000/svg" width="99.877" height="53.265" viewBox="0 0 99.877 53.265">
                            <path id="Path_285" data-name="Path 285" d="M230.465,196.748H215.639V181.275a1.374,1.374,0,0,0-1.37-1.37H199.46V164.418a1.374,1.374,0,0,0-1.37-1.37H165.7a1.374,1.374,0,0,0-1.37,1.37V179.89H149.52a1.374,1.374,0,0,0-1.37,1.37v15.472h-14.81a1.374,1.374,0,0,0-1.37,1.37v16.842a1.374,1.374,0,0,0,1.37,1.37h97.138a1.374,1.374,0,0,0,1.37-1.37V198.117a1.4,1.4,0,0,0-1.385-1.37Zm-17.564-5.7H204.05a1.37,1.37,0,0,0,0,2.739h8.85v2.95H183.28v-14.1h29.635v8.414ZM196.7,165.8v14.1H167.085v-2.348h8.85a1.37,1.37,0,0,0,0-2.739h-8.85v-9H196.7ZM150.89,182.646h29.635v2.348h-8.85a1.37,1.37,0,1,0,0,2.739h8.85v9H150.906V182.646Zm-16.195,28.6h8.85a1.37,1.37,0,1,0,0-2.739h-8.85v-9H164.33v14.1H134.695Zm32.373-11.755h29.619v8.955h-8.85a1.37,1.37,0,1,0,0,2.739h8.85v2.393H167.068Zm62.011,14.1H199.458v-8.4h8.85a1.37,1.37,0,1,0,0-2.739h-8.85V199.5h29.635v14.088Z" transform="translate(-131.971 -163.048)" fill="#fff"/>
                            </svg>
                        </div>
                        <h4>
                        No boundary walls around each plot gives you an unobstructed openness
                        </h4>
                    </div>
                </div>
                <button className="btn">KNOW MORE</button>
            </div>
            <div className="nandiimgdiv">
            <img className="nandiimg" src={sx} alt="img" />

            </div>
            <div className="formmaindiv">
                <img className="gardenimg" src={garden} alt="" />
            </div>
            <div className="formmain">
                <div className="formleft">
                Book your Site visit today
                </div>
                <div className="form ">
                    <h4>GET IN TOUGH</h4>
                    <h4>Call +91 76696 11010</h4>
                    <p>-------- OR --------</p>
                    <label htmlFor="">Name</label><br />
                    <input type="text" onChange={handleChange} value={values.name} className="name" required /><br />
                    <label htmlFor="">Contact No.</label><br />
                    <input type="number" onChange={handleChange} value={values.phone} className="phone" required /><br />
                    <label htmlFor="">Email</label><br />
                    <input type="email" onChange={handleChange} value={values.email} className="email" required/><br />
                    <label htmlFor="">Choose your option</label><br />
                    <select name="cars" onChange={handleChange} value={values.option} className="option" required id="cars">
                        <option value="" disabled>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select><br />
                    <button onClick={handleSubmit} className="formbtn">SUBMIT</button>
                    
                </div>
            </div>
            <div className="yellowdiv">
                <div className="leftyellow">
                    <p className="large">Get Directions on Google Maps</p>
                    <a href="https://g.page/CanterburyCastles?share" target={1}>
                        <button className="whitebtn">CLICK HERE</button>
                    </a>
                </div>
                <div className="rightyellow" >
                     <h1>LOCATION</h1>
                     <h4>Canterbury Divine Arc is located in North Bangalore</h4>
                     <div className="gridloc">
                        <div className="locgrid">
                            <div>
                                <p className="time">3</p>
                                <p>Mins</p>
                            </div>
                            <div>
                                <p className="small">from the foot of</p>
                                <p>Nandi Hills</p>
                            </div>
                        </div>
                        <div className="locgrid">
                            <div>
                                <p className="time">12</p>
                                <p>Mins</p>
                            </div>
                            <div>
                                <p className="small">from</p>
                                <p>Gitanjali International School</p>
                            </div>
                        </div>
                        <div className="locgrid">
                            <div>
                                <p className="time">15</p>
                                <p>Mins</p>
                            </div>
                            <div>
                                <p className="small">from</p>
                                <p>Doddaballapur Police Station</p>
                            </div>
                        </div>
                        <div className="locgrid">
                            <div>
                                <p className="time">16</p>
                                <p>Mins</p>
                            </div>
                            <div>
                                <p className="small">from</p>
                                <p>Prestige Golfshire</p>
                            </div>
                        </div>
                        <div className="locgrid">
                            <div>
                                <p className="time">15</p>
                                <p>Mins</p>
                            </div>
                            <div>
                                <p className="small">from</p>
                                <p>Nandi Train Station</p>
                            </div>
                        </div>
                        <div className="locgrid">
                            <div>
                                <p className="time">15</p>
                                <p>Mins</p>
                            </div>
                            <div>
                                <p className="small">from</p>
                                <p>DMart</p>
                            </div>
                        </div>
                        <div className="locgrid">
                            <div>
                                <p className="time">20</p>
                                <p>Mins</p>
                            </div>
                            <div>
                                <p className="small">from</p>
                                <p>Manipal Hospital Dodabbalapur</p>
                            </div>
                        </div>
                        <div className="locgrid">
                            <div>
                                <p className="time">24</p>
                                <p>Mins</p>
                            </div>
                            <div>
                                <p className="small">from</p>
                                <p>Nandi Upachar</p>
                            </div>
                        </div>
                        <div className="locgrid">
                            <div>
                                <p className="time">25</p>
                                <p>Mins</p>
                            </div>
                            <div>
                                <p className="small">from</p>
                                <p>Stonehill International School</p>
                            </div>
                        </div>
                        <div className="locgrid">
                            <div>
                                <p className="time">25</p>
                                <p>Mins</p>
                            </div>
                            <div>
                                <p className="small">from</p>
                                <p>Indian Paratha Company</p>
                            </div>
                        </div>
                        <div className="locgrid">
                            <div>
                                <p className="time">25</p>
                                <p>Mins</p>
                            </div>
                            <div>
                                <p className="small">from</p>
                                <p>NH7 Refuel</p>
                            </div>
                        </div>
                        <div className="locgrid">
                            <div>
                                <p className="time">30</p>
                                <p>Mins</p>
                            </div>
                            <div>
                                <p className="small">from</p>
                                <p>Bangalore International Airport</p>
                            </div>
                        </div>

                     </div>
                     <div className="lineheight">
                        <br />
                        <p>All your needs are within a</p>
                        <h4>30 mins drive </h4>
                     </div>
                </div>
            </div>
            <div>
            <img className="nandiimg" src={map} alt="" />

            </div>
            <div className="why">
                <h1>WHY</h1>
                <div className="whydiv">
                    <div className="cont">
                        <h4 className="green">CLEAR TITLES</h4>
                        <p>All the land under the Canterbury Banner is safe and ready for registration</p>
                    </div>
                    <div className="cont">
                        <h4 className="green">LIFESTYLE</h4>
                        <p>Your kids lifestyle depends on the decisions you make today</p>
                    </div>
                    <div className="cont">
                        <h4 className="green">BELONG</h4>
                        <p>Be a part of a legacy</p>
                    </div>
                    <div className="cont">
                        <h4 className="green">RETURNS</h4>
                        <p>Every investment should give you a return in kind or in numbers – we give you both!</p>
                    </div>
                    <div className="cont">
                        <h4 className="green">STRATEGIC LOCATION</h4>
                        <p>We are accessible from the Airport Road via NH 7 as well as Doddaballapur</p>
                    </div>
                    <div className="cont">
                        <h4 className="green">GREEN PRINT</h4>
                        <p>We cannot promise you a zero-carbon footprint but we can offer you a greener environment.</p>
                    </div>
                    <div className="cont">
                        <p>Wake up to the beautiful Nandi Hills and plan your workouts based on the weather not on the lockdown</p>
                    </div>
                    <div className="cont">
                        <p>When your home is surrounded by vineyards, the air around you carries a wine country vibe</p>
                    </div>
                    <div className="cont">
                        <p>Live a more sustainable life by not leaving a concrete footprint-with more open ground you get more trees</p>
                    </div>

                </div>
            </div>
            <div className="get">
                <h1>GET A QUOTATION FOR A PLOT</h1>
                <div className="gridloc plotgrid">
                    <div  className="flex">
                        <h3>NO 886</h3>
                        <h3>1200SFT - NORTH FACING - PLOT VALUE 24 LAKHS</h3>
                        <button className="btn">GET A QUOTE</button>
                    </div>
                    <div  className="flex">
                        <h3>NO 902</h3>
                        <h3>3468SFT - N-WEST FACING - PLOT VALUE 73 LAKHS</h3>
                        <button className="btn">GET A QUOTE</button>
                    </div>
                    <div  className="flex">
                        <h3>NO 910</h3>
                        <h3>2594SFT - S-WEST FACING - PLOT VALUE 54 LAKHS</h3>
                        <button className="btn">GET A QUOTE</button>
                    </div>
                    <div  className="flex">
                        <h3>NO 202</h3>
                        <h3>4104SFT - S-WEST FACING - PLOT VALUE 85 LAKHS</h3>
                        <button className="btn">GET A QUOTE</button>
                    </div>
                </div>
            </div>
            <div className="con">
                <div className="flex update">
                    <div><h2>Construction Update</h2></div>
                    <div className="flexdiv"><p>Canterbury Hillview is 100% legally compliant and a completed RERA approved layout. With multiple 1BHK & 3BHK villas being completed, here are some updated images of the layout.</p></div>
                </div>
            </div>
            <div className="dark">
                <Slides/>
            </div>
            <div className="house">
                <div className="houseimg">
                    <img src={home} alt="" />
                </div>
                <div className="houseinfo">
                    <div className="dechight">
                    <p>A well-planned clubhouse will give you different spaces for family, corporates, banquets, sundowners, or a book club catch up -</p>
                    <p className="green">Welcome to the 7-acre Canterbury Clubhouse that has all of this and much more in one integrated space.</p>
                    </div>
                    <div className="flex flexgap last">
                        <div className="leftalin">
                            <h3 className="green">OPEN LAWNS</h3>
                            <ul>
                                <li>Children's Play Area</li>
                                <li>Walkways</li>
                                <li>Waterfall</li>
                                <li>BonFire Pits</li>
                                <li>Stage & Events Arena</li>
                                <li>Jogging Path</li>
                                <li>Pavilion</li>
                                <li>Skating Rink</li>
                            </ul>
                        </div>
                        <div className="leftalin">
                            <h3 className="green">CLUBHOUSE</h3>
                            <ul>
                                <li>Community Seating</li>
                                <li>Swimming pool</li>
                                <li>Indoor games</li>
                                <li>Restaurant</li>
                                <li>Rooms</li>
                                <li>Party Lawn</li>
                                <li>Multipurpose/ Party Hall</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="greenbg">
                <div className="box">
                    <img className="logobottom" src={logo} alt="" />
                    <p>Near Nandi Hills, Melekote Cross, Tubugere Hobli,</p>
                    <p>Doddaballapura Taluk,</p>
                    <p>Bangalore - 561205</p>
                    <p>info@regencyblr.com</p>
                </div>
                <div className="box">
                    <strong>CITY OFFICE</strong>
                    <p>Bangalore Regency Developers Pvt. Ltd.</p>
                    <p>13/2, El-Shaddai, Beside Assisi Church,</p>
                    <p>Hennur Road,</p>
                    <p>Bangalore - 560084</p>
                </div>
            </div>
            <div className="textcenter">
                <p className="p"><strong>CANTERBURY DIVINE ARC</strong></p>
                <div className="green bottem">
                    <p>Buy A Plot     |    Get A Quote    |   Club House    |     Contact Us</p>
                </div>
            </div>
            <div>
            </div>
        </div>
        
    )
}