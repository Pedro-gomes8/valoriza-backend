// Faz a comunicacao entre os minha entidade do codigo e a tabela do BD

import { EntityRepository, Repository } from "typeorm";
import { Tag } from "../entities/Tag";

@EntityRepository(Tag)
class TagRepository extends Repository<Tag>{

}
export {TagRepository};