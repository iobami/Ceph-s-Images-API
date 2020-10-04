const Task = require('./api/models/todoListModel');
const db = require('./db/db');

const imageUpload = (payload) => {
  const new_task = new Task(payload);
  return new_task.save();
};

const batchUpload = async () => {
  for (const imageObject of db) {
    try {
      const response = await imageUpload(imageObject);
      if (response) console.log('done');
    } catch (error) {
      console.log(error.message);
      console.log(JSON.stringify(imageObject));
    }
  }
  console.log('finished');
};

module.exports = {
  batchUpload,
};