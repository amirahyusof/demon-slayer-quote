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

  { 
    id:33,
    text: 'The past makes us who we are today.',
    character: 'Tanjiro Kamado',
    image: '/characters/Tanjiro-chibi.png'
  },
  { 
    id:34,
    text: 'Every breath brings us closer to victory.',
    character: 'Tanjiro Kamado',
    image: '/characters/Tanjiro-chibi.png'
  },

  { 
    id:35,
    text: 'Through darkness, we find light.',
    character: 'Nezuko Kamado',
    image: '/characters/Nezuko-chibi.png'
  },

  { 
    id:36,
    text: 'True strength comes when you protect others.',
    character: 'Zenitsu Agatsuma',
    image: '/characters/Zenitsu-chibi.png'
  },
  { 
    id:37,
    text: 'Sometimes the bravest thing is to keep going.',
    character: 'Zenitsu Agatsuma',
    image: '/characters/Zenitsu-chibi.png'
  },

  { 
    id:38,
    text: 'The wild boar never backs down!',
    character: 'Inosuke Hashibira',
    image: '/characters/Inosuke-chibi.png'
  },


  { 
    id:39,
    text: 'Your spirit is your greatest weapon.',
    character: 'Kyojuro Rengoku',
    image: '/characters/Rengoku-chibi.png'
  },

  { 
    id:40,
    text: 'Silence speaks louder than words.',
    character: 'Giyu Tomioka',
    image: '/characters/Giyu-chibi.png'
  },

  { 
    id:41,
    text: 'Each scar tells a story of survival.',
    character: 'Sanemi Shinazugawa',
    image: '/characters/Sanemi-chibi.png'
  },
  
  { 
    id:42,
    text: 'The path of the sword is endless.',
    character: 'Sakonji Urokodaki',
    image: '/characters/Urokodaki-chibi.png'
  },

  // Tanjiro
  {
    id: 43,
    text: 'Kindness is not weakness, it is strength hidden in compassion.',
    character: 'Tanjiro Kamado',
    image: '/characters/Tanjiro-chibi.png',
  },
  {
    id: 44,
    text: 'If you can’t stand, crawl. If you can’t crawl, cling to life.',
    character: 'Tanjiro Kamado',
    image: '/characters/Tanjiro-chibi.png',
  },

  // Nezuko
  {
    id: 45,
    text: 'Even as a demon, I will never harm humans.',
    character: 'Nezuko Kamado',
    image: '/characters/Nezuko-chibi.png',
  },
  {
    id: 46,
    text: 'My brother’s warmth keeps me human.',
    character: 'Nezuko Kamado',
    image: '/characters/Nezuko-chibi.png',
  },

  // Zenitsu
  {
    id: 47,
    text: 'Even cowards can protect the people they love.',
    character: 'Zenitsu Agatsuma',
    image: '/characters/Zenitsu-chibi.png',
  },
  {
    id: 48,
    text: 'When I sleep, I become the person I dream of being.',
    character: 'Zenitsu Agatsuma',
    image: '/characters/Zenitsu-chibi.png',
  },
  {
    id: 49,
    text: 'True bravery is facing fear head-on.',
    character: 'Zenitsu Agatsuma',
    image: '/characters/Zenitsu-chibi.png',
  },

  // Inosuke
  {
    id: 50,
    text: 'My body moves faster than my thoughts!',
    character: 'Inosuke Hashibira',
    image: '/characters/Inosuke-chibi.png',
  },
  {
    id: 51,
    text: 'The mountain raised me, and I’ll fight like the mountain!',
    character: 'Inosuke Hashibira',
    image: '/characters/Inosuke-chibi.png',
  },

  // Rengoku
  {
    id: 52,
    text: 'Honor your responsibilities with your life.',
    character: 'Kyojuro Rengoku',
    image: '/characters/Rengoku-chibi.png',
  },
  {
    id: 53,
    text: 'The light of determination will never fade.',
    character: 'Kyojuro Rengoku',
    image: '/characters/Rengoku-chibi.png',
  },
  {
    id: 54,
    text: 'Fight with a smile, so others won’t lose hope.',
    character: 'Kyojuro Rengoku',
    image: '/characters/Rengoku-chibi.png',
  },

  // Giyu
  {
    id: 55,
    text: 'Mercy is for those who protect life, not take it.',
    character: 'Giyu Tomioka',
    image: '/characters/Giyu-chibi.png',
  },
  {
    id: 56,
    text: 'The water flows, steady and unwavering.',
    character: 'Giyu Tomioka',
    image: '/characters/Giyu-chibi.png',
  },

  // Shinobu
  {
    id: 57,
    text: 'Smiles can hide pain, but kindness heals it.',
    character: 'Shinobu Kocho',
    image: '/characters/Shinobu-chibi.png',
  },
  {
    id: 58,
    text: 'Even poison can become medicine in the right hands.',
    character: 'Shinobu Kocho',
    image: '/characters/Shinobu-chibi.png',
  },

  // Muichiro
  {
    id: 59,
    text: 'The mist clears only for those who focus.',
    character: 'Muichiro Tokito',
    image: '/characters/Muichiro-chibi.png',
  },
  {
    id: 60,
    text: 'Forgetfulness isn’t weakness—it’s freedom from burdens.',
    character: 'Muichiro Tokito',
    image: '/characters/Muichiro-chibi.png',
  },

  // Mitsuri
  {
    id: 61,
    text: 'My love makes me strong, not fragile!',
    character: 'Mitsuri Kanroji',
    image: '/characters/Mitsuri-chibi.png',
  },
  {
    id: 62,
    text: 'Everyone deserves love, even in a world of demons.',
    character: 'Mitsuri Kanroji',
    image: '/characters/Mitsuri-chibi.png',
  },

  // Obanai
  {
    id: 63,
    text: 'Duty binds me tighter than these bandages.',
    character: 'Obanai Iguro',
    image: '/characters/Obanai-chibi.png',
  },
  {
    id: 64,
    text: 'The serpent strikes with precision and loyalty.',
    character: 'Obanai Iguro',
    image: '/characters/Obanai-chibi.png',
  },

  // Sanemi
  {
    id: 65,
    text: 'Scars are proof I’ve survived battles others couldn’t.',
    character: 'Sanemi Shinazugawa',
    image: '/characters/Sanemi-chibi.png',
  },
  {
    id: 66,
    text: 'Rage can protect, but it must be controlled.',
    character: 'Sanemi Shinazugawa',
    image: '/characters/Sanemi-chibi.png',
  },

  // Kanao
  {
    id: 67,
    text: 'Choices define us more than fate.',
    character: 'Kanao Tsuyuri',
    image: '/characters/Kanao-chibi.png',
  },
  {
    id: 68,
    text: 'My heart will decide, not a coin toss.',
    character: 'Kanao Tsuyuri',
    image: '/characters/Kanao-chibi.png',
  },

  // Urokodaki
  {
    id: 69,
    text: 'Masks hide faces, but not determination.',
    character: 'Sakonji Urokodaki',
    image: '/characters/Urokodaki-chibi.png',
  },
  {
    id: 70,
    text: 'Breath is the core of all strength.',
    character: 'Sakonji Urokodaki',
    image: '/characters/Urokodaki-chibi.png',
  },

  // Doubling down to fill till 100 with varied characters:
  {
    id: 71,
    text: 'Demons fear the light, but humans carry their own.',
    character: 'Tanjiro Kamado',
    image: '/characters/Tanjiro-chibi.png',
  },
  {
    id: 72,
    text: 'Even a coward can roar like thunder when it matters.',
    character: 'Zenitsu Agatsuma',
    image: '/characters/Zenitsu-chibi.png',
  },
  {
    id: 73,
    text: 'The boar charges straight through fear!',
    character: 'Inosuke Hashibira',
    image: '/characters/Inosuke-chibi.png',
  },
  {
    id: 74,
    text: 'Love burns brighter than any flame.',
    character: 'Mitsuri Kanroji',
    image: '/characters/Mitsuri-chibi.png',
  },
  {
    id: 75,
    text: 'The mist hides, but it also protects.',
    character: 'Muichiro Tokito',
    image: '/characters/Muichiro-chibi.png',
  },
  {
    id: 76,
    text: 'Calm water reflects even the darkest sky.',
    character: 'Giyu Tomioka',
    image: '/characters/Giyu-chibi.png',
  },
  {
    id: 77,
    text: 'Even poison can flower into beauty.',
    character: 'Shinobu Kocho',
    image: '/characters/Shinobu-chibi.png',
  },
  {
    id: 78,
    text: 'Set your heart ablaze, and guide others in the dark.',
    character: 'Kyojuro Rengoku',
    image: '/characters/Rengoku-chibi.png',
  },
  {
    id: 79,
    text: 'Fear dies the moment you draw your sword.',
    character: 'Sanemi Shinazugawa',
    image: '/characters/Sanemi-chibi.png',
  },
  {
    id: 80,
    text: 'Silent resolve speaks louder than any words.',
    character: 'Kanao Tsuyuri',
    image: '/characters/Kanao-chibi.png',
  },
  {
    id: 81,
    text: 'Strength is born from protecting, not destroying.',
    character: 'Tanjiro Kamado',
    image: '/characters/Tanjiro-chibi.png',
  },
  {
    id: 82,
    text: 'Even asleep, my blade will strike true.',
    character: 'Zenitsu Agatsuma',
    image: '/characters/Zenitsu-chibi.png',
  },
  {
    id: 83,
    text: 'Wild instincts are my weapon!',
    character: 'Inosuke Hashibira',
    image: '/characters/Inosuke-chibi.png',
  },
  {
    id: 84,
    text: 'Love never wavers, even in battle.',
    character: 'Mitsuri Kanroji',
    image: '/characters/Mitsuri-chibi.png',
  },
  {
    id: 85,
    text: 'The mist clears with focus and patience.',
    character: 'Muichiro Tokito',
    image: '/characters/Muichiro-chibi.png',
  },
  {
    id: 86,
    text: 'Still water runs the deepest.',
    character: 'Giyu Tomioka',
    image: '/characters/Giyu-chibi.png',
  },
  {
    id: 87,
    text: 'A butterfly’s wings can carry a thousand hopes.',
    character: 'Shinobu Kocho',
    image: '/characters/Shinobu-chibi.png',
  },
  {
    id: 88,
    text: 'Flames are fleeting, but their warmth lingers.',
    character: 'Kyojuro Rengoku',
    image: '/characters/Rengoku-chibi.png',
  },
  {
    id: 89,
    text: 'Wind can tear down walls—or guide the lost.',
    character: 'Sanemi Shinazugawa',
    image: '/characters/Sanemi-chibi.png',
  },
  {
    id: 90,
    text: 'Even in silence, resolve speaks loudly.',
    character: 'Kanao Tsuyuri',
    image: '/characters/Kanao-chibi.png',
  },

  // Fill extra 91–100 with variety
  {
    id: 91,
    text: 'The mask does not define the warrior.',
    character: 'Sakonji Urokodaki',
    image: '/characters/Urokodaki-chibi.png',
  },
  {
    id: 92,
    text: 'Hope shines even in the deepest night.',
    character: 'Tanjiro Kamado',
    image: '/characters/Tanjiro-chibi.png',
  },
  {
    id: 93,
    text: 'Thunder only strikes once—but it leaves its mark.',
    character: 'Zenitsu Agatsuma',
    image: '/characters/Zenitsu-chibi.png',
  },
  {
    id: 94,
    text: 'Strength isn’t in muscle, but in spirit!',
    character: 'Inosuke Hashibira',
    image: '/characters/Inosuke-chibi.png',
  },
  {
    id: 95,
    text: 'Even if love is fragile, it can still protect.',
    character: 'Mitsuri Kanroji',
    image: '/characters/Mitsuri-chibi.png',
  },
  {
    id: 96,
    text: 'Clear your mind, and the mist will part.',
    character: 'Muichiro Tokito',
    image: '/characters/Muichiro-chibi.png',
  },
  {
    id: 97,
    text: 'Water adapts to any shape—it cannot be broken.',
    character: 'Giyu Tomioka',
    image: '/characters/Giyu-chibi.png',
  },
  {
    id: 98,
    text: 'Even venom can be used for healing.',
    character: 'Shinobu Kocho',
    image: '/characters/Shinobu-chibi.png',
  },
  {
    id: 99,
    text: 'A heart set ablaze will never falter.',
    character: 'Kyojuro Rengoku',
    image: '/characters/Rengoku-chibi.png',
  },
  {
    id: 100,
    text: 'The wind never stops—it keeps moving forward.',
    character: 'Sanemi Shinazugawa',
    image: '/characters/Sanemi-chibi.png',
  },

];
