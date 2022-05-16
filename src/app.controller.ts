import { Body, Controller, Get, HttpCode, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { PostBody, UserBody } from './values';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @HttpCode(200)
  @Get('posts')
  async getPosts(@Res() res: Response) {
    const posts = await this.appService.getPosts();
    res.json(posts);
  }

  @HttpCode(200)
  @Get('profiles')
  async getProfiles(@Res() res: Response) {
    const profiles = await this.appService.getProfile();
    res.json(profiles);
  }

  @HttpCode(200)
  @Get('users')
  async getUsers(@Res() res: Response) {
    const profiles = await this.appService.getUsers();
    res.json(profiles);
  }

  @HttpCode(201)
  @Post('users')
  async createUsers(@Body() body: UserBody, @Res() res: Response) {
    const user = await this.appService.createUsers(body);
    res.json(user);
  }

  @HttpCode(201)
  @Post('posts')
  async createPost(@Body() body: PostBody, @Res() res: Response) {
    const post = await this.appService.createPosts(body);
    res.json(post);
  }
}
