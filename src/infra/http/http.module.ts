import { ReadNotification } from './../../app/use-cases/read-notification';
import { Module } from '@nestjs/common';

import { SendNotification } from '@app/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { CancelNotification } from './../../app/use-cases/cancel-notification';
import { CountRecipientNotifications } from './../../app/use-cases/count-recipient-notifications';
import { GetRecipientNotifications } from './../../app/use-cases/get-recipients-notifications';
import { UnreadNotification } from './../../app/use-cases/unread-notification';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
