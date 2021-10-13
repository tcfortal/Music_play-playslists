import React from 'react';



const Footer = () => {
    const data = new Date();


    return (
        
<footer className="footer py-4 bg-black">

<p className="m-0 text-center text-white fixed">Copyright &copy; {data.toLocaleDateString()}  </p>

</footer>

    )
}

export default Footer;