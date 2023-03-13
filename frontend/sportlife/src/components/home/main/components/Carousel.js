export default function Carousel(){

	return(
		<div >
			<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img src="https://i.imgur.com/1YHrkru.png" class="d-block w-100" alt="imagem 1 do carrossel" />
					</div>
					<div class="carousel-item">
						<img src="https://i.imgur.com/ywsZfnj.png" class="d-block w-100" alt="imagem 2 do carrossel" />
					</div>
					<div class="carousel-item">
						<img src="https://i.imgur.com/5Egfcqm.png" class="d-block w-100" alt="imagem 3 do carrossel" />
					</div>
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	)
}
