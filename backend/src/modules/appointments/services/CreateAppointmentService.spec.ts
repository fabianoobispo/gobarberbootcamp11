import AppError from '@shared/errors/AppError';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentServices from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentServices(
      fakeAppointmentsRepository,
    );

    const appointment = await createAppointment.execute({
      date :new Date(),
      provider_id: '42343453'
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('42343453');
  });

 it('should not be able to create two appointment on the same time', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentServices(
      fakeAppointmentsRepository,
    );
    const appointmentDate = new Date(2020, 4, 10, 11);

    await createAppointment.execute({
      date :appointmentDate,
      provider_id: '42343453'
    });

    expect(createAppointment.execute({
      date :appointmentDate,
      provider_id: '42343453'
    })).rejects.toBeInstanceOf(AppError)
  });
});
