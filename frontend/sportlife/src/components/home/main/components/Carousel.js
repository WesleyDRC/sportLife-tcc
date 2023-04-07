import './Carousel.module.css'

export default function Carousel(){

	return(
		<div >
			<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src="https://i.imgur.com/1YHrkru.png" className="d-block w-100" alt="imagem 1 do carrossel" />
					</div>
					<div className="carousel-item">
						<img src="https://i.imgur.com/2GR8jeg.png" className="d-block w-100" alt="imagem 2 do carrossel" />
					</div>
					<div className="carousel-item">
						<img src="https://i.imgur.com/5Egfcqm.png" className="d-block w-100" alt="imagem 3 do carrossel" />
					</div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	)
}
