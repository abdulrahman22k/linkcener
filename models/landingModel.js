const mongoose = require('mongoose');

const landingSchema = new mongoose.Schema({
  url: {
    type: String,
    required: [true, 'Please Enter Your Url!'],
    unique: true,
  },
  background: {
    type: String,
    default: '#1d7dd2',
  },
  bio: {
    type: String,
    default:
      'Lorem, ipsum dolor sit amet consectetur adipisicing dicta obcaecati deserunt eaque?',
  },
  font: {
    type: String,
    default: 'Roboto',
  },
  color: {
    type: String,
    default: '#222222',
  },
  logo: {
    type: String,
    default: 'empty.jpg',
  },
  title: {
    type: String,
    default: 'linksCenter',
  },
  textColor: {
    type: String,
    default: '#fff',
  },
  buttonShadowColor: {
    type: String,
    default:'#222'
  },
  buttonShadowSize: {
    type:Number,
    default: 0,
  },
  buttonTextColor:{
    type:String,
    default: '#222',
  },
  buttonBackgroundColor:{
    type:String,
    default: '#fff',
  },
  buttonBorderRadius:{
    type:Number,
    default: '8',
  },
  buttonIconColor:{
   type:String,
   default: '#1d7dd2',
  },
  button: [
    {
      link: String,
      text: {
        type: String,
      },
      icon: {
        type: String,
      },
    },
  ],
  profileImage:{
    type: String,
    default: 'empty.jpg',
  },
  photo: [
    {
      imageSrc: {
        type: String,
      },
      descrepction: String,
      link: String,
    },
  ],
  videoSrc: String,
  iconColor:{
    type: String,
    default: '#fff',
  },
  icon: [
    {
      link: String,
      name: String,
    },
  ],
});

const Landing = mongoose.model('Landing', landingSchema);
module.exports = Landing;
