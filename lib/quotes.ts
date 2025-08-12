// data/quotes.ts
export type Quote = {
  id: number;
  text: string;
  character:string;
  image:string;
};

export const quotes: Quote[] = [
  //Tanjiro
  { 
    id:1,
    text: 'No matter how weak or unworthy you feel, keep living.', 
    character: 'Tanjiro Kamado' ,
    image: '/characters/Tanjiro-chibi.png'
  },
  { 
    id:2,
    text: 'To protect those who are precious to me, I’ll make my body into a shield.', 
    character: 'Tanjiro Kamado',
    image: '/characters/Tanjiro-chibi.png'
  },
  { 
    id:3,
    text: 'The bond between Nezuko and me can’t be severed by anyone!', 
    character: 'Tanjiro Kamado',
    image: '/characters/Tanjiro-chibi.png'
  },
  { 
    id:4,
    text: 'Don’t give up. Even if it’s painful, even if it’s agonizing, don’t give up.', 
    character: 'Tanjiro Kamado',
    image: '/characters/Tanjiro-chibi.png'
  },
  { 
    id:5,
    text: 'The flames of determination will never be extinguished.', 
    character: 'Kyojuro Rengoku',
    image: '/characters/Rengoku-chibi.png'
  },
  { 
    id:6,
    text: 'A lesson learned through pain is worth a thousand lectures.', 
    character: 'Kyojuro Rengoku',
    image: '/characters/Rengoku-chibi.png'
  },
  { 
    id:7,
    text: 'Those who regret their words and deeds are the ones who truly know the meaning of being human.', 
    character: 'Tanjiro Kamado',
    image: '/characters/Tanjiro-chibi.png'
  },
  { 
    id:8,
    text: 'I’ll become stronger, no matter how many times I fall.', 
    character: 'Tanjiro Kamado',
    image: '/characters/Tanjiro-chibi.png'
  },

  //Nezuko
  { 
    id:9,
    text: 'Family is what drives me forward.', 
    character: 'Nezuko Kamado',
    image: '/characters/Nezuko-chibi.png'
  },
  { 
    id:10,
    text: 'Even in silence, I’ll fight to protect those I love.', 
    character: 'Nezuko Kamado',
    image: '/characters/Nezuko-chibi.png'
  },


  // Zenitsu
  { 
    id:11,
    text: 'Don’t stop. Run. Run. Run!', 
    character: 'Zenitsu Agatsuma',
    image: '/characters/Zenitsu-chibi.png'
  },
  { 
    id:12,
    text: 'Stop acting weak. You are capable of more than you think.', 
    character: 'Zenitsu Agatsuma',
    image: '/characters/Zenitsu-chibi.png'
  },
  { 
    id:13,
    text: 'Even if I am afraid, I will still move forward.', 
    character: 'Zenitsu Agatsuma',
    image: '/characters/Zenitsu-chibi.png'
  },

  //Inosuke
  { 
    id:14,
    text: 'I’ll headbutt the limits of my strength until they break!', 
    character: 'Inosuke Hashibira', 
    image: '/characters/Inosuke-chibi.png'
  },
  { 
    id:15,
    text: 'I don’t care who you are, I’ll defeat you with my instincts.', 
    character: 'Inosuke Hashibira',
    image: '/characters/Inosuke-chibi.png'
  },

  //Rengoku
  { 
    id:16,
    text: 'Set your heart ablaze.',
    character: 'Rengoku Kyojuro',
    image: '/characters/Rengoku-chibi.png'
  },
  { 
    id:17,
    text: 'The strong should aid and protect the weak. That’s the duty of the powerful.',
    character: 'Kyojuro Rengoku',
    image: '/characters/Rengoku-chibi.png'
  },
  { 
    id:18,
    text: 'A lesson without pain is meaningless.',
    character: 'Kyojuro Rengoku',
    image: '/characters/Rengoku-chibi.png'
  },
  { 
    id:19,
    text: 'When you lose your way, remember why you started.',
    character: 'Kyojuro Rengoku',
    image: '/characters/Rengoku-chibi.png'
  },
  { 
    id:20,
    text: 'Life is fleeting, but the bonds we forge will remain.',
    character: 'Kyojuro Rengoku',
    image: '/characters/Rengoku-chibi.png'
  },
  { 
    id:21,
    text: 'The flames of determination will never be extinguished.',
    character: 'Kyojuro Rengoku',
    image: '/characters/Rengoku-chibi.png'
  },

  //Giyu
  { 
    id:22,
    text: 'Feel the rage. The powerful, pure rage of not being able to forgive will become your strength.', 
    character: 'Giyu Tomioka', 
    image: '/characters/Giyu-chibi.png'
  },
  { id:23,
    text: 'I am a Hashira. I protect humanity with my blade.', 
    character: 'Giyu Tomioka',
    image: '/characters/Giyu-chibi.png' 
  },

  //Shinobu
  { id:24,
    text: 'Those who do not wield a blade cannot know the pain of the ones who do.', 
    character: 'Shinobu Kocho',
    image: '/characters/Shinobu-chibi.png'
  },
  { id:25,
    text: 'Kindness is stronger than steel.', 
    character: 'Shinobu Kocho',
    image: '/characters/Shinobu-chibi.png'
  },

  //Muichiro
  { 
    id:26,
    text: 'A single decision can change the flow of your life.',
    character: 'Muichiro Tokito',
    image: '/characters/Muichiro-chibi.png'
  },

  //Mitsuri
  { 
    id:27,
    text: 'Love is what gives me strength.', 
    character:'Mitsuri Kanroji',
    image: '/characters/Mitsuri-chibi.png'},
  { 
    id:28,
    text: 'I fight with love in my heart!', 
    character: 'Mitsuri Kanroji' ,
    image: '/characters/Mitsuri-chibi.png'
  },

  //Obanai
  { 
    id:29,
    text: 'The bonds we protect are stronger than fear.', 
    character: 'Obanai Iguro',
    image: '/characters/Obanai-chibi.png'
  },


  //Sanemi
  { 
    id:30,
    text: 'Fear is something to conquer, not to live by.', 
    character: 'Sanemi Shinazugawa',
    image: '/characters/Sanemi-chibi.png'
  },

  //Kanao
  { 
    id:31,
    text: 'Training is the path to growth.', 
    character: 'Kanao Tsuyuri',
    image: '/characters/Kanao-chibi.png'
  },

  //Urokodaki
  { 
    id:32,
    text: 'You must master a single thing. That is your only hope.', 
    character: 'Sakonji Urokodaki',
    image: '/characters/Urokodaki-chibi.png'
  },

];
