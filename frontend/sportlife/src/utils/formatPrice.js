export default function priceBRL(value) {
	return value ? value.toLocaleString("pt-br", {
			style: "currency",
			currency: "BRL",
	}) : "0".toLocaleString("pt-br", {
			style: "currency",
			currency: "BRL",
	})
}
