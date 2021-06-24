import { getCustomRepository } from "typeorm";
import { TagRepository } from "../repositories/TagsRepository";


interface ITagRequest{
  name: string;

}

class CreateTagService{
    async execute({name}:ITagRequest){
        
        const tagsRepository = getCustomRepository(TagRepository);
        if (!name) throw new Error('Please enter a name')

        const sameName = await tagsRepository.findOne({name});
        if (sameName){
            throw new Error('A tag with the same name already exists')
        }

        const tag = tagsRepository.create({name})
        await tagsRepository.save(tag);

        return tag;

    }
}

export {CreateTagService};