function Footer() {
  return (
    <div className="mx-auto max-w-screen-lg">
      <div className="w-full border-b border-gray-200 pb-3">
        <ul className="flex">
          <li className="footerLang pl-2">English(UK)</li>
          <li className="footerLang">नेपाली</li>
          <li className="footerLang">हिन्दी</li>
          <li className="footerLang">Espanol</li>
          <li className="footerLang">Portugues</li>
          <li className="footerLang">Francais</li>
          <li className="footerLang">Deutch</li>
          <li className="footerLang">Italiano</li>
          <li className="footerLang">العربية</li>
          <li className="footerLang">中文(简体)</li>
          <li className="footerLang">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap">
        <p className="footerShits">Sign Up</p>
        <p className="footerShits">Log In</p>
        <p className="footerShits">Messenger</p>
        <p className="footerShits">Instagram Lite</p>
        <p className="footerShits">Watch</p>
        <p className="footerShits">Places</p>
        <p className="footerShits">Games</p>
        <p className="footerShits">Marketplace</p>
        <p className="footerShits">Jobs</p>
        <p className="footerShits">Portal</p>
        <p className="footerShits">Developer Info</p>
        <p className="footerShits">Cookies</p>
        <p className="footerShits">Help</p>
        <p className="footerShits">2021</p>
      </div>
      <p className="text-xs font-light p-2 mt-5">
        Developed using React Js and Firebase.
      </p>
    </div>
  );
}

export default Footer;
