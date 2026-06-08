import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*', // In production, restrict this to your frontend URL
  },
})
export class NotificationsGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    // Optionally log connection
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  // Client emits this to join their personal notification room
  @SubscribeMessage('joinUserRoom')
  handleJoinUserRoom(
    @MessageBody() userId: string,
    @ConnectedSocket() client: Socket,
  ) {
    if (userId) {
      client.join(userId);
      console.log(`Client ${client.id} joined room ${userId}`);
    }
  }

  // Called by NotificationsService to emit to a specific user
  sendNotificationToUser(userId: string, notification: any) {
    this.server.to(userId).emit('notification', notification);
  }
}
