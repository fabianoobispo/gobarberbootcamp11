import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../models/User';
import AppError from '../errors/AppError';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const useRepository = getRepository(User);

    const checkUserExists = await useRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new AppError('Email addres already used.');
    }

    const hashPassword = await hash(password, 8);

    const user = useRepository.create({
      name,
      email,
      password: hashPassword,
    });

    await useRepository.save(user);
    return user;
  }
}

export default CreateUserService;