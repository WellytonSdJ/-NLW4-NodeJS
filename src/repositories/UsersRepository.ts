import { EntityRepository, Repository } from "typeorm";
import { User } from "../models/User";

@EntityRepository(User) //isso serve pra definir que a UsersRepository será um repositorio
class UsersRepository extends Repository<User> { // o extends serve pra classe UsersRepository poder usar todos os métodos da classe da typeORM conhenha (em repository)

}

export { UsersRepository }