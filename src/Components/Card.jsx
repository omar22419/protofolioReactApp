
export default function Card(s) {
  const {src}=s;

  return (
    <>
      <div id="card" className="col-lg-4 col-md-6 col-sm-12" onClick={()=>{
        document.getElementById('details').classList.remove('d-none');
      }
      }>
        <div className="position-relative overflow-hidden">
          <img 
            src={src}
            className="w-100 rounded-3 "
            alt=""
          />
          <div className="layer start-0 w-100 h-100 top-0 position-absolute d-flex justify-content-center align-items-center">
            <i className="fa-solid fa-plus fa-5x"></i>
          </div>
        </div>
      </div>
    </>
  );
}
