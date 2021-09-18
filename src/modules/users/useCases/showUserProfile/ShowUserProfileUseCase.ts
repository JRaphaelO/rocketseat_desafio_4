import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const findUser = this.usersRepository.findById(user_id);

    if (!findUser) {
      throw new Error("User is not exists");
    }

    return findUser;
  }
}

export { ShowUserProfileUseCase };
