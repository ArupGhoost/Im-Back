import './NewPract.scss';


const NewPract = () => {
    return (
        <>
          <div className='navbar'>
              <div className='navbar_main_child'>
              <h2>
              <a  href='!' className='brand'>GPR</a>
              </h2>
              </div>
              <div className='navbar_child'>
                  <ul>
                      <li><a href=''>Home</a></li>
                      <li><a href=''>Products</a></li>
                      <li><a href=''>Orders</a></li>
                      <li><a href=''>Join</a></li>
                      </ul>
              </div>
          </div>
          <div className='main'>
             <div className='child'>
                 <img  src='https://images.ctfassets.net/u0haasspfa6q/5anrKPrBjFkQOGIowyYEFu/0af93dd82909934bf5938002ebf80858/best_landscape_photography_apps'
                     alt=''
                 />
                 <h1>Im Back</h1>
                 </div>
          </div>  
        </>
    )
}

export default NewPract
