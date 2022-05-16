import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PostBody, UserBody } from './values';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) {}

  async getProfile() {
    return this.prismaService.profile.findMany();
  }

  async getUsers() {
    return this.prismaService.user.findMany({
      include: { posts: true, profile: true },
    });
  }

  async getPosts() {
    return this.prismaService.post.findMany({ where: { published: true } });
  }

  async createUsers(userBody: UserBody) {
    return await this.prismaService.user.create({
      data: {
        name: userBody.name,
        email: userBody.email,
      },
    });
  }

  async createPosts(postsBody: PostBody) {
    return await this.prismaService.post.create({
      data: {
        title: postsBody.title,
        content: postsBody.content,
        authorId: postsBody.authorId,
        published: postsBody.published,
      },
    });
  }
}
