#!/usr/bin/node
const notifications = require('../notifications.json');



function getAllNotificationsByUser(userId) {
  // return a list containing all the context objects from the notifications.json data when the author id is the same as the userId
  return notifications.filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);

}

module.exports = getAllNotificationsByUser;
