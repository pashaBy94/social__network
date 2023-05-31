import React from "react";
import st from './NavBar.module.css'
import { NavLink } from "react-router-dom";
export default class NavBar extends React.Component{
    render(){
        return(
            <nav className={st.nav}>
                <ul>
                    <li><NavLink to='/profile' className={nD =>nD.isActive?st.active: ''}>Профиль</NavLink></li>
                    <li><NavLink to='/dialogs' className={nD=>nD.isActive?st.active: ''}>Сообщения</NavLink></li>
                    <li><NavLink to='/users' className={nD=>nD.isActive?st.active: ''}>Друзья</NavLink></li>
                    <li><NavLink to='/news' className={nD=>nD.isActive?st.active: ''}>Новости</NavLink></li>
                    <li><NavLink to='/musics' className={nD=>nD.isActive?st.active: ''}>Музыка</NavLink></li>
                    <li><NavLink to='/musics' className={nD=>nD.isActive?st.active: ''}>Фотографии</NavLink></li>
                    <li><NavLink to='/musics' className={nD=>nD.isActive?st.active: ''}>Видко</NavLink></li>
                    <li><NavLink to='/musics' className={nD=>nD.isActive?st.active: ''}>Игры</NavLink></li>
                    <li><hr /></li>
                    <li><NavLink to='/musics' className={nD=>nD.isActive?st.active: ''}>Webmoney</NavLink></li>
                    <li><hr /></li>
                    <li><NavLink to="/settings" className={nD=>nD.isActive?st.active: ''}>Настройки</NavLink></li>
                </ul>
            </nav>
        )
    }
}

