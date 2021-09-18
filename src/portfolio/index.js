import React from 'react';
import './style.scss'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Estudios from '../Data/Estudios.json'
import Experiencia from '../Data/Experiencia.json'
import Stack from '../Data/Stack.json'
import Language from '../Data/Language.json'
import Proyectos from '../Data/Proyectos.json'


class Portfolio extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            newClass : 'ocultar'
        }
    }

    handleClick() {
        if(this.state.newClass == 'ocultar') {
            this.setState({
                newClass: 'mostrar'
            })
        } else {
            this.setState({
                newClass: 'ocultar'
            })
        }
    }
  render() {
    return (
      <React.Fragment>
        <header className='navbar'>
          <ul className='navbarList ocultarMob'>
            <a href="#Experiencia"><li className='navbarLi'>Experiencia</li></a>
            <a href="#Estudios"><li className='navbarLi'>Estudios</li></a>
            <a href="#Hernan"><li className='navbarLi main'>Hernan</li></a>
            <a href="#Stack"><li className='navbarLi'>Stack</li></a>
            <a href="#Proyectos"><li className='navbarLi'>Proyectos</li></a>
          </ul>
          <div className='ocultarDesk'>
            <FontAwesomeIcon icon={faBars} className='menuIcon' onClick={()=>{this.handleClick()}}/>  
            <a href="#Her"><h1>Hernan Propato Visini</h1></a>
            <div className={this.state.newClass}>
                <ul>
                    <a href="#Experiencia"><li onClick={()=>{this.handleClick()}} className='navbarLi'>Experiencia</li></a>
                    <a href="#Estudios"><li onClick={()=>{this.handleClick()}}className='navbarLi'>Estudios</li></a>
                    <a href="#Stack"><li onClick={()=>{this.handleClick()}}className='navbarLi'>Stack</li></a>
                    <a href="#Proyectos"><li onClick={()=>{this.handleClick()}} className='navbarLi'>Proyectos</li></a>
                </ul>
            </div>
          </div>
        </header>
        <div id='Her' className='profileContainer'>
            <h1 className='ocultarMob' id='Hernan'>HERNAN PROPATO VISINI</h1>
            <img className= 'profileImg'src='https://media-exp1.licdn.com/dms/image/C4E03AQGezkgRBKK3PQ/profile-displayphoto-shrink_200_200/0/1624546252003?e=1637193600&v=beta&t=L6VVfQokXKm7n64qok3IcGQK8gupUNXjDYOeQ6szk04'/>
            <h2>Full Stack Developer</h2>
            <div className='socialNetwork'>
                <a href='https://github.com/h-propato-visini' target='_blank'><FontAwesomeIcon className='icon' icon={faGithub}/></a>
                <a href='https://www.linkedin.com/in/hernan-propato-visini-1ba691215/' target='_blank'><FontAwesomeIcon className='icon' icon={faLinkedin}/></a>
                <a href='mailto:hpropatovisini@gmail.com' target='_blank'><FontAwesomeIcon className='icon' icon={faEnvelope}/></a>
            </div>
        </div>
        <div className='mainContainer'>
            <h4 id='Experiencia'>EXPERIENCIA</h4>
            <div className='cardContainer'>
                {Experiencia.map((item, key)=> {
                    return (
                        <div className='card' key={key}>
                        <div className='imgContainer'>
                                <img src={item.image}/> 
                            </div>
                            <p className='company'>{item.Empresa}</p>
                            <p className='cargo'>{item.Puesto}</p>
                            <p className='age'>{item.Año}</p>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className='mainContainer'>
            <h4 id='Estudios'>ESTUDIOS</h4>
            <div className='cardContainer'>
                {Estudios.map((item, key)=> {
                    return (
                        <div className='card' key={key}>
                            <div className='imgContainer'>
                                <img src={item.image}/> 
                            </div>
                            <p className='company'>{item.lugar}</p>
                            <p className='cargo'>{item.carrera}</p>
                            <p className='age'>{item.año}</p>
                            <p className='age'>{item.estado}</p>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className='abilities'>
            <div className='Container'>
                <h4 id='Stack'>STACK</h4>
                <div className='stackContainer'>
                    {Stack.map((item, key)=> {
                        return (
                            <div className='imgStack' key={key}>
                                <img src={item.image}/> 
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='Container'>
                <h4>IDIOMAS</h4>
                    <div className='languageContainer'>
                        {Language.map((item, key)=> {
                            return (
                            <div className='language' key={key}>
                                <div className='imgLanguage'>
                                    <img src={item.image}/> 
                                </div>
                                <div>
                                    <span>{item.level}</span>
                                </div>
                            </div>
                            )
                        })}
                    </div>
            </div>
        </div>
        <div className='mainContainer'>
            <h4 id='Proyectos' className='projectH4'>PROYECTOS PERSONALES</h4>
            <div className='projectContainer'>
                {Proyectos.map((item, key)=> {
                    return (
                    <a href={`https://github.com/h-propato-visini/${item.url}`} target="_blank" key={key}>
                        <div className='project'>
                            <p className='title'>{item.title}</p>
                            <p className='description'>{item.description}</p>
                            <p className='code'>{item.code}</p>
                        </div>
                    </a>
                    )
                })}
            </div>
        </div>
        <footer>
            <p>Made by Hernan</p>
        </footer>
      </React.Fragment>
    )
  }
}

export default Portfolio