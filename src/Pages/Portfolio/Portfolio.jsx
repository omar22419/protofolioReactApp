import Card from '../../Components/Card'

export default function Portfolio() {
   
    const detail= document.getElementById('details');
    window.addEventListener('click',function(e){
        if(e.target==detail){
            detail.classList.add('d-none')
        }
    });
    return (
     <>
        <section className='container vh-100 mb-5'>
            <div className="header text-center text-uppercase my-4">
                <h1 className='fw-bold'>portfolio component</h1>
                <div className="mb-3 d-flex justify-content-center align-items-center">
                    <div className="decore me-3"></div>
                    <i className="fa-solid fa-star"></i>
                    <div className="decore ms-3"></div>
                </div>
            </div>
            <div className="row g-5">
                <Card index={1}/>
                <Card index={2}/>
                <Card index={3}/>
                <Card index={1}/>
                <Card index={2}/>
                <Card index={3}/>
            </div>
        </section>
        <div id='details' className={`position-fixed start-0 w-100 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center top-0 z-3 d-none`}>
            <img src={`src/assets/images/1.png`} className='imag' alt="" />
       </div>
    </>
  )
}
