#!/usr/bin/node
import notifications from '../notifications.json';
import { schema, normalize } from 'normalizr';



export default function getAllNotificationsByUser(userId) {
  // return a list containing all the context objects from the notifications.json data when the author id is the same as the userId
  return notifications.filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);

}

const user = new schema.Entity('users');

const messages = new schema.Entity('messages', {}, {
  idAttribute: 'guid',
});

const notificationSchema = new schema.Entity('notifications', {
  author: user,
  context: messages,
});

export const normalizedData = normalize(notifications, [notificationSchema]);
