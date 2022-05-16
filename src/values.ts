import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class UserBody {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsEmail()
  email: string;
}

export class PostBody {
  @IsNotEmpty()
  title: string;
  @IsOptional()
  @IsString()
  content: string;
  @IsPositive()
  authorId: number;
  @IsBoolean()
  published: boolean;
}
