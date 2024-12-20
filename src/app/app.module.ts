import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConceptsManualModule } from 'src/concepts-manual/concepts';

@Module({
  imports: [ConceptsManualModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
