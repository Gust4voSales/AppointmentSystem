import { EntityRepository, Repository } from "typeorm"
import {Service} from '../models/Service'

@EntityRepository(Service) 
export class ServiceRepository extends Repository<Service> {
}