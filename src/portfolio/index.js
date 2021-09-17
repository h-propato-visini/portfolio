import React from 'react';
import './style.scss'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Estudios from '../Data/Estudios.json'
import Experiencia from '../Data/Experiencia.json'
import Stack from '../Data/Stack.json'
import Language from '../Data/Language.json'
import Proyectos from '../Data/Proyectos.json'


class Portfolio extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className='navbar'>
          <ul className='navbarList'>
            <a href="#Experiencia"><li className='navbarLi'>Experiencia</li></a>
            <a href="#Estudios"><li className='navbarLi'>Estudios</li></a>
            <a href="#Hernan"><li className='navbarLi main'>Hernan</li></a>
            <a href="#Stack"><li className='navbarLi'>Stack</li></a>
            <a href="#Proyectos"><li className='navbarLi'>Proyectos</li></a>
          </ul>
        </header>
        <div className='profileContainer'>
            <h1 id='Hernan'>HERNAN PROPATO VISINI</h1>
            <img className= 'profileImg'src='https://media-exp1.licdn.com/dms/image/C4E03AQGezkgRBKK3PQ/profile-displayphoto-shrink_200_200/0/1624546252003?e=1637193600&v=beta&t=L6VVfQokXKm7n64qok3IcGQK8gupUNXjDYOeQ6szk04'/>
            <h2>Full Stack Developer</h2>
            <div className='socialNetwork'>
                <FontAwesomeIcon className='icon' icon={faGithub}/>
                <FontAwesomeIcon className='icon' icon={faLinkedin}/>
                <FontAwesomeIcon className='icon' icon={faEnvelope}/>
            </div>
        </div>
        <div className='mainContainer'>
            <h4 id='Experiencia'>EXPERIENCIA</h4>
            <div className='cardContainer'>
                {Experiencia.map((item)=> {
                    return (
                    <div className='card'>
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
                {Estudios.map((item)=> {
                    return (
                    <div className='card'>
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
                    {Stack.map((item)=> {
                        return (
                            <div className='imgStack'>
                                <img src={item.image}/> 
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='Container'>
                <h4>IDIOMAS</h4>
                    <div className='languageContainer'>
                        {Language.map((item)=> {
                            return (
                            <div className='language'>
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
                {Proyectos.map((item)=> {
                    return (
                    <a href={`https://github.com/h-propato-visini/${item.url}`} target="_blank">
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
      </React.Fragment>
    )
  }
}

export default Portfolio