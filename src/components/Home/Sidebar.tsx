import React, { useState, useEffect } from 'react'
import homeIcon from '../../assets/svg/home_icon.svg'

function Sidebar(props) {
    const onBCHome = () => {
        props.onBCHome_();
    };
    const onBCSettings = () => {
        props.onBCSettings_();
    };
    const onBCUser = () => {
        props.onBCUser_();
    };

    return(
        <div className="sidebar">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" onClick={onBCHome} fill="currentColor" width="800" height="800" viewBox="0 0 495.398 495.398" className="sidebarIcon"><path d="m487.083 225.514-75.08-75.08v-86.73c0-15.682-12.708-28.391-28.413-28.391-15.669 0-28.377 12.709-28.377 28.391v29.941L299.31 37.74c-27.639-27.624-75.694-27.575-103.27.05L8.312 225.514c-11.082 11.104-11.082 29.071 0 40.158 11.087 11.101 29.089 11.101 40.172 0l187.71-187.729c6.115-6.083 16.893-6.083 22.976-.018l187.742 187.747a28.337 28.337 0 0 0 20.081 8.312c7.271 0 14.541-2.764 20.091-8.312 11.086-11.086 11.086-29.053-.001-40.158z"/><path d="M257.561 131.836c-5.454-5.451-14.285-5.451-19.723 0L72.712 296.913a13.977 13.977 0 0 0-4.085 9.877v120.401c0 28.253 22.908 51.16 51.16 51.16h81.754v-126.61h92.299v126.61h81.755c28.251 0 51.159-22.907 51.159-51.159V306.79c0-3.713-1.465-7.271-4.085-9.877L257.561 131.836z"/></svg>
            </div>
            <div>
            </div>
            <div style={{textAlign:"center"}}>
                <div onClick={onBCUser} className="sidebarIcon sidebarProfile"></div>
                <svg onClick={onBCSettings} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="sidebarIcon"><path d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"></path></svg>
            </div>
        </div>
    )
}
export default Sidebar;