
import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {

    @ApiProperty()
    user: BigInteger;
  
    @ApiProperty({ required: false })
    article:BigInteger;
  
    @ApiProperty()
    body: string;
  
    @ApiProperty({ required: false, default: false })
    published?: boolean = false;


    

}
