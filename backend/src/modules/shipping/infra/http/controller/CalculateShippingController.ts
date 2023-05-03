import { Request, Response } from "express"
import { calcularPrecoPrazo } from "correios-brasil";

export default class CalculateShippingController {
    public async handle(request: Request, response: Response): Promise<Response> {
        try {
            const {
                sCepDestino,
            } = request.body

            const sCepOrigem = process.env.ZIP_CODE_ORIGIN
            const nCdFormato = "1"
            const nCdServico =  ["04014"]
            const nVlPeso =  "1"
            const nVlComprimento =  "20"
            const nVlAltura = "20"
            const nVlLargura = "20"
            const nVlDiametro = "0"

            const res = await calcularPrecoPrazo({
                sCepOrigem,
                sCepDestino,
                nVlPeso,
                nCdFormato,
                nVlComprimento,
                nVlAltura,
                nVlLargura,
                nCdServico,
                nVlDiametro
            })
            return response.json(res)

        } catch ( error ) {
            console.log(error);
        }
    }
}
