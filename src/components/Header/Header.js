import './Header.scss';
import './Header_tablet.scss';
import './Header_mobile.scss';
import React from 'react';

export default function Header() {
  return (
    <header className='header'>
      <div className="container padding justify-space-between align-center">
        <div className="logo">
          <svg className='logo__svg' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#CC0000"/>
            <g clipPath="url(#clip0_1985_4)">
            <path fill="white" d="M15.5712 25.5999L15.7856 21.4883C15.7887 21.4207 15.7766 21.3533 15.7502 21.2909C15.7238 21.2286 15.6837 21.173 15.633 21.1282C15.5823 21.0834 15.5221 21.0506 15.457 21.0321C15.3919 21.0136 15.3234 21.01 15.2567 21.0214L11.1642 21.7408L11.7169 20.2163C11.7393 20.1556 11.7422 20.0895 11.7251 20.0271C11.708 19.9647 11.6718 19.9092 11.6216 19.8685L7.13843 16.2381L8.14845 15.7665C8.21667 15.7342 8.27077 15.6782 8.30059 15.6089C8.33042 15.5396 8.33392 15.4618 8.31044 15.3901L7.42428 12.6649L10.0065 13.2128C10.0765 13.2274 10.1493 13.2173 10.2127 13.1843C10.2761 13.1513 10.3261 13.0974 10.3543 13.0318L10.8546 11.855L12.8698 14.018C12.9159 14.0666 12.9765 14.0989 13.0425 14.1102C13.1086 14.1214 13.1765 14.111 13.236 14.0804C13.2956 14.0498 13.3437 14.0007 13.373 13.9405C13.4023 13.8803 13.4113 13.8122 13.3987 13.7464L12.4268 8.73439L13.9847 9.63484C14.0213 9.65628 14.0618 9.66998 14.1039 9.67509C14.146 9.6802 14.1887 9.67661 14.2294 9.66455C14.27 9.65249 14.3077 9.63222 14.3402 9.60498C14.3727 9.57774 14.3993 9.54412 14.4182 9.5062L16 6.3999L17.5817 9.5062C17.6007 9.54412 17.6272 9.57774 17.6597 9.60498C17.6922 9.63222 17.7299 9.65249 17.7706 9.66455C17.8112 9.67661 17.8539 9.6802 17.896 9.67509C17.9381 9.66998 17.9787 9.65628 18.0153 9.63484L19.5732 8.73439L18.6013 13.7464C18.5886 13.8122 18.5976 13.8803 18.6269 13.9405C18.6563 14.0007 18.7043 14.0498 18.7639 14.0804C18.8235 14.111 18.8914 14.1214 18.9574 14.1102C19.0234 14.0989 19.084 14.0666 19.1301 14.018L21.1454 11.855L21.6456 13.0318C21.6738 13.0974 21.7238 13.1513 21.7872 13.1843C21.8506 13.2173 21.9235 13.2274 21.9934 13.2128L24.5756 12.6649L23.6895 15.3901C23.666 15.4618 23.6695 15.5396 23.6993 15.6089C23.7292 15.6782 23.7833 15.7342 23.8515 15.7665L24.8615 16.2381L20.3783 19.8685C20.3281 19.9092 20.2919 19.9647 20.2748 20.0271C20.2578 20.0895 20.2606 20.1556 20.283 20.2163L20.8357 21.7408L16.7432 21.0214C16.6765 21.01 16.608 21.0136 16.5429 21.0321C16.4778 21.0506 16.4177 21.0834 16.3669 21.1282C16.3162 21.173 16.2761 21.2286 16.2497 21.2909C16.2233 21.3533 16.2112 21.4207 16.2144 21.4883L16.4288 25.5999H15.5712Z"/>
            </g>
            <defs>
            <clipPath id="clip0_1985_4">
            <rect width="19.2" height="19.2" fill="white" transform="translate(6.3999 6.3999)"/>
            </clipPath>
            </defs>
          </svg>
          <div className='logo__text'>All.ca</div>
        </div>



        <div className='combiner'>
          <nav className="linkset">
            <ul className="linkset__list">
              <li className="linkset__list-item">
                <a href="#" className="linkset__link"
                onClick={(e) => {
                  e.preventDefault()
                  alert("Coming soon...")
                }}>Home</a>
              </li>
              <li className="linkset__list-item">
                <a href="#" className="linkset__link"
                onClick={(e) => {
                  e.preventDefault()
                  alert("Coming soon...")
                }}>.CA Registration</a>
              </li>
              <li className="linkset__list-item">
                <a href="#" className="linkset__link"
                onClick={(e) => {
                  e.preventDefault()
                  alert("Coming soon...")
                }}>Transfers</a>
              </li>
              <li className="linkset__list-item">
                <a href="#" className="linkset__link"
                onClick={(e) => {
                  e.preventDefault()
                  alert("Coming soon...")
                }}>TLDs</a>
              </li>
              <li className="linkset__list-item">
                <a href="#" className="linkset__link"
                onClick={(e) => {
                  e.preventDefault()
                  alert("Coming soon...")
                }}>Support</a>
              </li>
              <li className="linkset__list-item">
                <a href="#" className="linkset__link"
                onClick={(e) => {
                  e.preventDefault()
                  alert("Coming soon...")
                }}>About</a>
              </li>
            </ul>
          </nav>

          <button
            className="sign-in-button"
            onClick={(e) => {
              e.preventDefault()
              alert("Coming soon...")
            }}> Sign In / Register</button>
        </div>
      </div>
    </header>
  )
}
