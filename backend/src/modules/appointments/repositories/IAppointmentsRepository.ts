import Appointment from '../infra/typeorm/entities/Appointment';

export default interface IAppointmentsRepository {
  findByDate(sate: Date): Promise<Appointment | undefined>;
}
