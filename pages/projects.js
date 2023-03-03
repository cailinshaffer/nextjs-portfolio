export default function Project() {
    return (
    <div className="card">
    <div className='row g-3'>

        <div className="col-md-4 col-6" style={{width: '18rem', height: '20rem', backgroundColor: 'rgba(255, 255, 255'}}>
            <img className="mx-auto mt-2" style={{width: '17rem', height: '13rem'}} src="/sustainable.png"
            alt='Sustainable'/>
            <div className="card-body">
                <h5 className="card-title">Sustain-Able</h5>
                <a href={'https://main--vermillion-melba-389997.netlify.app/'} className="btn" style={{backgroundColor: '#000', color: '#f7f9fb'}}>Sustain-Able Link</a>
            </div>
         </div>


        <div className="col-md-4 col-6" style={{width: '18rem', height: '20rem', backgroundColor: 'rgba(255, 255, 255'}}>
            <img className="mx-auto mt-2" style={{width: '17rem', height: '13rem'}} src="/petfinder.png"
            alt='Pet Finder'/>
            <div className="card-body">
                <h5 className="card-title">Pet Finder</h5>
                <a href={'https://ga-cs-petfinder.herokuapp.com/'} className="btn" style={{backgroundColor: '#000', color: '#f7f9fb'}}>Pet Finder Link</a>
            </div>
        
        </div>


        <div className="col-md-4 col-6" style={{width: '18rem', height: '20rem', backgroundColor: 'rgba(255, 255, 255'}}>
            <img className="mx-auto mt-2" style={{width: '17rem', height: '13rem'}} src="/memorygame.png"
            alt='Memory Game'/>
            <div className="card-body">
                <h5 className="card-title">Memory Game</h5>
                <a href={'https://cailinshaffer.github.io/Memory-Game/'} className="btn" style={{backgroundColor: '#000', color: '#f7f9fb'}}>Memory Game Link</a>
            </div>
        
        </div>
    </div>
    </div>
    )
}