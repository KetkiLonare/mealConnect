const mongoose = require('mongoose');

const dbConnect = () => {
  mongoose.connect('mongodb+srv://juhi:SrIKpqNPuOtVHnsh@kohinoor-dev.bherp.mongodb.net/foodManagement?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = { dbConnect };