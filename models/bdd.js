var mongoose = require('mongoose');

var options = {
    connectTimesoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect('mongodb+srv://hamedAdmin:Manomba.1998@cluster0-poni4.mongodb.net/mymovizapp?retryWrites=true&w=majority', 
    options,
    function(err) {
        console.log(err);
    }
);

module.exports = mongoose;