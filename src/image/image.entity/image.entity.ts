/* eslint-disable prettier/prettier */
/* archivo: src/image/image.entity.ts */
import { ArtworkEntity } from "src/artwork/artwork.entity/artwork.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ImageEntity {
   @PrimaryGeneratedColumn("uuid")
   id: string;
   @Column()
   source: string;
   @Column()
   altText: string;
   @Column()
   height: number;
   @Column()
   width: number;

   @ManyToOne(() => ArtworkEntity, artwork => artwork.images)
   artwork: ArtworkEntity;
}
/* archivo: src/image/image.entity.ts */