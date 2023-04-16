import { IsDateString, IsString} from "class-validator";

export class CreateTaskDto {
    @IsString()
    readonly title: string;
    @IsString()
    readonly description: string;
    @IsDateString()
    readonly dueDate: Date;
}
