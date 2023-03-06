import Information from './Information'

import { TbTruckDelivery } from "react-icons/tb";
import { MdPhoneInTalk } from "react-icons/md";
import { TbCurrencyDollarOff } from "react-icons/tb";
import { TbReplaceFilled } from "react-icons/tb";

import styles from "./InfoBox.module.css";

export default function InfoBox() {
  return(
	<div className={styles.container}>
		<Information  icon={<TbTruckDelivery />} titleInfo="FRETE GRÁTIS" details="A partir de R$300,00"/>
		<Information  icon={<TbReplaceFilled />} titleInfo="TROCA GRÁTIS" details="Não ficou legal? Troque em até 7 dias"/>
		<Information  icon={<MdPhoneInTalk />} titleInfo="ATENDIMENTO" details="Alguma dúvida? Chama a gente no chat!"/>
		<Information  icon={<TbCurrencyDollarOff />} titleInfo="PAGAMENTO SEGURO" details="Pague com cartão de crédito, pix ou boleto!"/>
	</div>
	)
}
