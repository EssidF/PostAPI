import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class CommentsService {
  
  constructor(private prisma: PrismaService) {}
 
  create(createCommentDto: CreateCommentDto) {
    return this.prisma.article.create({ data: createCommentDto });  }

  findDrafts() {
    return this.prisma.comment.findMany({ where: { published: false } });
  }

  findAll() {
    return this.prisma.comment.findMany({ where: { published: true } });  }

  findOne(id: number) {
    return this.prisma.comment.findUnique({ where: { id } });  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return this.prisma.comment.update({
      where: { id },
      data: updateCommentDto,
    });  }

  remove(id: number) {
    return this.prisma.comment.delete({ where: { id } });
  }
}
