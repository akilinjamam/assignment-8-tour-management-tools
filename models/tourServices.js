const mongoose = require('mongoose');

// schema design

const tourServiceSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'you must have to give name'],
            trim: true,
            unique: [true, 'name must have to be unique'],
            minLength: [2, 'minimum length must have to be 2'],
            maxLength: [10, 'maximum length must have to be 10']
        },

        price: {
            type: Number,
            required: true,
            min: [1000, 'price limit starts from minimum 1000'],
            max: [100000, 'price limit ends from maximum 100000']
        },
        image: {
            type: String,
            required: true
        }

    }, {
    timestamps: true
}
);


tourServiceSchema.methods.logger = function () {
    console.log(`Data saved for: ${this.name}`);
}

// schema model query


const Tours = mongoose.model('Tours', tourServiceSchema);

module.exports = Tours;



