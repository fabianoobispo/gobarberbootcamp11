import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import AuthenticateUserService from './CreateUserService';

describe('Authenticate', () => {
  it('should be able to Authenticate', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const authenticateUser = new AuthenticateUserService(
      fakeUsersRepository,
    );

    const response = await authenticateUser.execute({
      name :'Fulando de tal',
      email: 'fulando@detal.com',
      password: '123456'
    });
    expect(user).toHaveProperty('id');
  });




});
