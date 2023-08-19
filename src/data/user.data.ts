import { IUser } from "@/interfaces/User";
import bcrypt from "bcryptjs";

const defaultPassword = "123456";

export const exampleUsers: IUser[] = [
  {
    fullname: "Jose Rafael Berenguer",
    email: "jberenguer@mail.com",
    password: bcrypt.hashSync(defaultPassword),
  },
  {
    fullname: "Paul Vilar",
    email: "pvillar@mail.com",
    password: bcrypt.hashSync(defaultPassword),
  },
  {
    fullname: "Toni Torres",
    email: "ttorres@mail.com",
    password: bcrypt.hashSync(defaultPassword),
  },
  {
    fullname: "Sandra Peralta",
    email: "speralta@mail.com",
    password: bcrypt.hashSync(defaultPassword),
  },
];