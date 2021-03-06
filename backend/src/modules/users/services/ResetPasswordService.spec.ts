import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeUserTokensRepository from '../repositories/fakes/FakeUserTokensRepository';
import ResetPasswordService from './ResetPasswordService';

let fakeUsersRepository: FakeUsersRepository;
let fakeUserTokensRepository: FakeUserTokensRepository;
let resetPassword: ResetPasswordService;


describe('ResetPasswordService', () => {
  beforeEach(() => {
     fakeUsersRepository = new FakeUsersRepository();
     fakeUserTokensRepository = new FakeUserTokensRepository();
     resetPassword = new ResetPasswordService(
      fakeUsersRepository,fakeUserTokensRepository,
    );

  });
  it('should be able to reset the password ', async () => {
    const user = await fakeUsersRepository.create({
      name :'Fulando de tal',
      email: 'fulando@detal.com',
      password: '123456'
    });
    const userToken = await fakeUserTokensRepository.generate(user.id);

    await resetPassword.execute({
      password: '123123',
      token: userToken.token,
    });

    const updateUser = await fakeUsersRepository.findById(user.id);
    expect(updateUser?.password).toBe('123123');
  });



});
