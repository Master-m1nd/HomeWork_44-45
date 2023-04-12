function Button({signUpText, preLink, linkText}) {
    return(
        <div className="btns-wrapper">
            <a href="/refresh" className='btn sign-btn'>
                <img className="icon" src='./images/icon.svg' alt='' />
                {signUpText}
            </a>
            <p className="link">
               {preLink}
               <a href="/refresh" target="_blank" className="signUpLink"> {linkText}</a> 
            </p> 
        </div>
    )
}

export default Button;