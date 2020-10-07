import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeMailProvider from '@shared/container/providers/MailProvider/fakes/FakeMailProvider';
import SendForgotPasswordEmailService from './SendForgotPasswordEmailService';

describe('SendForgotPasswordEmail', () => {
  it('should be able to recover the password using the email', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeMailProvider = new FakeMailProvider();

    const sendMail = jest.spyOn(fakeMailProvider, 'sendMail');

    const sendForgotPasswordEmail = new SendForgotPasswordEmailService(
      fakeUsersRepository,fakeMailProvider
    );

    await fakeUsersRepository.create({
      name :'Fulando de tal',
      email: 'fulando@detal.com',
      password: '123456'
    })

    await sendForgotPasswordEmail.execute({
      email: 'fulando@detal.com'
    });
    expect(sendMail).toHaveBeenCalled();
  });

  it('should not be able to recover a non-existing user password', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeMailProvider = new FakeMailProvider();

    const sendForgotPasswordEmail = new SendForgotPasswordEmailService(
      fakeUsersRepository,fakeMailProvider
    );


    await expect( sendForgotPasswordEmail.execute({
      email: 'fulando@detal.com'
    })).rejects.toBeInstanceOf(AppError);

  });


});
