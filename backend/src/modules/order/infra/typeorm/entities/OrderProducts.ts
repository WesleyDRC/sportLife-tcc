import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { OrderDetails } from "./OrderDetails";
import { Product } from "../../../../products/infra/typeorm/entities/Product";
import { v4 as uuidv4 } from "uuid";

enum ShippingStatus {
  PENDING = "pending",
  PROCESSING = "processing",
  IN_TRANSIT = "in_transit",
  DELIVERED = "delivered",
  CANCELED = "canceled",
}

@Entity("order_products")
export class OrderProducts {
  @PrimaryColumn({
    type: "varchar",
    length: 255,
  })
  id: string;

  @Column({
    type: "int",
  })
  quantity: number;

  @Column({
    type: "float",
  })
  price: number;

	@Column({
		type: "varchar",
		length: 2
	})
	size: string;

  @Column({
    type: "enum",
    enum: ShippingStatus,
    default: ShippingStatus.PENDING,
  })
  shippingStatus: ShippingStatus;

  @Column()
  product_id: string;

  @Column()
  order_id: string;

  @ManyToOne((type) => OrderDetails)
  // nome da coluna que esta referenciando na tabela
  @JoinColumn({ name: "order_id" })
  order: OrderDetails;

  @ManyToOne((type) => Product, {
    eager: true,
  })
  @JoinColumn({ name: "product_id" })
  product: Product;

  constructor() {
    if (!this.id) this.id = uuidv4();
  }
}
