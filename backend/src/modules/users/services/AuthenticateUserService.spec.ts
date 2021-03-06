import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import AuthenticateUserService from './AuthenticateUsersService';
import CreateUserService from './CreateUserService';

describe('Authenticate', () => {
  it('should be able to Authenticate', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUser = new CreateUserService(
      fakeUsersRepository, fakeHashProvider
    );
    const authenticateUser = new AuthenticateUserService(
      fakeUsersRepository,fakeHashProvider
    );

    const user = await createUser.execute({
      name: 'Fulando de tal',
      email: 'fulando@detal.com',
      password: '123456'
    })

    const response = await authenticateUser.execute({
      email: 'fulando@detal.com',
      password: '123456'
    });
    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should not be able to Authenticate with non existing user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();


    const authenticateUser = new AuthenticateUserService(
      fakeUsersRepository,fakeHashProvider
    );

    await expect(authenticateUser.execute({
      email: 'fulando@detal.com',
      password: '123456'
    })).rejects.toBeInstanceOf(AppError);

  });

  it('should not be able to Authenticate with wrong password', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUser = new CreateUserService(
      fakeUsersRepository, fakeHashProvider
    );
    const authenticateUser = new AuthenticateUserService(
      fakeUsersRepository,fakeHashProvider
    );

    await createUser.execute({
      name: 'Fulando de tal',
      email: 'fulando@detal.com',
      password: '123456'
    })


    await expect(authenticateUser.execute({
      email: 'fulando@detal.com',
      password: 'wrong-password'
    })).rejects.toBeInstanceOf(AppError);

  });

});
