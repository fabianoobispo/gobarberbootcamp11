import Appointment from '../infra/typeorm/entities/Appointment';
import ICreateAppointemntDTO from '../dtos/ICreateAppointmentDTO'

export default interface IAppointmentsRepository {
  create(data: ICreateAppointemntDTO): Promise<Appointment>
  findByDate(sate: Date): Promise<Appointment | undefined>;
}
