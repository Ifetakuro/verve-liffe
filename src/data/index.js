import {
  digitalPaymentUri,
  lifestyleUri,
  rewardUri,
  wellnessUri,
} from '../assets';

export const carouselData = [
  {
    id: 2345,
    uri: require('../assets/carousel-1.png'),
    title: 'Your best life starts here',
    description:
      'Smash your goals, control your money, and make every day count!',
  },
  {
    id: 6789,
    uri: require('../assets/carousel-2.png'),
    title: 'Eat Right, Eat Healthy',
    description:
      'Get meal tips that give you the right start to a healthy lifestyle',
  },
  {
    id: 9267,
    uri: require('../assets/carousel-3.png'),
    title: 'The Support System You Always Wished For',
    description:
      'Tips and tricks from professional instructors, connect with fitness buddies from across the world',
  },
];

export const interestData = [
  {
    id: 1,
    title: 'Pop',
    color: '#03435F',
    selected: false,
  },
  {
    id: 2,
    title: 'Crossfit',
    color: '#F23E37',
    selected: false,
  },
  {
    id: 3,
    title: 'Boxing',
    color: '#FFAC4D',
    selected: false,
  },
  {
    id: 4,
    title: 'Bootcamp',
    color: '#03435F',
    selected: true,
  },
  {
    id: 5,
    title: 'Dance',
    color: '#984AE9',
    selected: true,
  },
  {
    id: 6,
    title: 'Acrobatics',
    color: '#64B566',
    selected: false,
  },
  {
    id: 7,
    title: 'Yoga',
    color: '#F23E37',
    selected: false,
  },
  {
    id: 8,
    title: 'Swimming',
    color: '#984AE9',
    selected: false,
  },
  {
    id: 9,
    title: 'Martial Art',
    color: '#03435F',
    selected: false,
  },
  {
    id: 10,
    title: 'Gym Class',
    color: '#FFAC4D',
    selected: true,
  },
  {
    id: 11,
    title: 'Outdoor',
    color: '#64B566',
    selected: false,
  },
  {
    id: 12,
    title: 'Cycling',
    color: '#03435F',
    selected: false,
  },
  {
    id: 13,
    title: 'Volley ball',
    color: '#F23E37',
    selected: false,
  },
  {
    id: 14,
    title: 'Tennis',
    color: '#984AE9',
    selected: false,
  },
  {
    id: 15,
    title: 'Football',
    color: '#03435F',
    selected: false,
  },
  {
    id: 16,
    title: 'Walking',
    color: '#FFAC4D',
    selected: false,
  },
];

export const appDetailsData = [
  {id: 123, title: 'Rewards/Offers', uri: rewardUri},
  {id: 456, title: 'Digital Payments', uri: digitalPaymentUri},
  {id: 789, title: 'Wellness/Fitness', uri: wellnessUri},
  {id: 147, title: 'Lifestyle', uri: lifestyleUri},
];
