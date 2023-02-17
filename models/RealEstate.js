
const mongoose = require('mongoose');
const realEstateSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    location:{
        province:{
            type:String,
            required:true
        },
        district:{
            type:String,
            required:true
        },
        street:{
            type:String,
            required:true
        }
    },
    price:{
        type:String,
        required:true
    },
    YearBuilt:{
        type:Date,
        default: Date.now
    },
    image:{
        type:Array,
        default:[]
    },
    beds:{
        type:Number
    },
    description:{
        type:String
    },
    status:{
        type:String
    },
    bath:{
        type:Number
    },
    LotSize:{
        type:String
    },
    like:{
        type:Number,
        default:0
    },
    review:{
        type:Number
    }
    // userId:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    // }
},  {
    timestamps:true
});

module.exports = mongoose.model('RealEstate', realEstateSchema);