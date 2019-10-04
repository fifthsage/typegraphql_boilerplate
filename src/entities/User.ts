import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { MaxLength } from "class-validator";
import { Field, ID, ObjectType } from "type-graphql";

export type Role = "GUEST" | "VIEWER" | "USER" | "ADMIN";

@Entity("users")
@ObjectType()
//@Unique(["kakao_auth_id"])
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(type => ID)
  id: number;

  @Column({
    name: "role",
    type: "enum",
    enum: ["GUEST", "VIEWER", "USER", "ADMIN"],
    default: "VIEWER",
    nullable: false
  })
  @Field(type => String)
  role: Role;

  @Column({ name: "user_name", type: "varchar", length: 50, nullable: true })
  @MaxLength(6)
  @Field(type => String)
  userName: string;

  @CreateDateColumn({ name: "created_at", type: "timestamp", nullable: true })
  @Field(type => String)
  createdAt: string;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp", nullable: true })
  @Field(type => String)
  updatedAt: string;
}

export default User;
