
export interface KindnessAct {
  id: string;
  category: string;
  act: string;
}

export const kindnessActs: KindnessAct[] = [
  // For Strangers
  { id: '1', category: 'strangers', act: 'Hold the door open for someone behind you' },
  { id: '2', category: 'strangers', act: 'Give a genuine compliment to a cashier or service worker' },
  { id: '3', category: 'strangers', act: 'Let someone go ahead of you in line' },
  { id: '4', category: 'strangers', act: 'Leave a positive review for a small local business' },
  { id: '5', category: 'strangers', act: 'Smile and say hello to someone you pass on the street' },
  { id: '6', category: 'strangers', act: 'Help someone carry heavy bags or groceries' },
  { id: '7', category: 'strangers', act: 'Pay for the coffee of the person behind you' },
  { id: '8', category: 'strangers', act: 'Give directions to someone who looks lost' },
  { id: '9', category: 'strangers', act: 'Leave encouraging sticky notes in public places' },
  { id: '10', category: 'strangers', act: 'Thank a delivery driver or postal worker' },

  // For Friends & Family
  { id: '11', category: 'friends', act: 'Send an unexpected "thinking of you" text to a friend' },
  { id: '12', category: 'friends', act: 'Call a family member you haven\'t spoken to in a while' },
  { id: '13', category: 'friends', act: 'Offer to help a friend with a task they\'ve been putting off' },
  { id: '14', category: 'friends', act: 'Bring someone their favorite snack or treat' },
  { id: '15', category: 'friends', act: 'Write a heartfelt thank you note to someone special' },
  { id: '16', category: 'friends', act: 'Listen without judgment when someone needs to vent' },
  { id: '17', category: 'friends', act: 'Share a favorite memory with an old friend' },
  { id: '18', category: 'friends', act: 'Offer to babysit for a parent who needs a break' },
  { id: '19', category: 'friends', act: 'Cook or bake something special for a loved one' },
  { id: '20', category: 'friends', act: 'Create a playlist for someone based on their mood' },

  // For Yourself
  { id: '21', category: 'yourself', act: 'Take 10 deep breaths and practice gratitude' },
  { id: '22', category: 'yourself', act: 'Write down three things you\'re proud of today' },
  { id: '23', category: 'yourself', act: 'Take a relaxing bath or shower with your favorite music' },
  { id: '24', category: 'yourself', act: 'Go for a mindful walk in nature' },
  { id: '25', category: 'yourself', act: 'Treat yourself to something small that brings joy' },
  { id: '26', category: 'yourself', act: 'Practice positive self-talk in the mirror' },
  { id: '27', category: 'yourself', act: 'Read a few pages of a book you enjoy' },
  { id: '28', category: 'yourself', act: 'Stretch your body and appreciate what it does for you' },
  { id: '29', category: 'yourself', act: 'Organize a small space to create calm in your environment' },
  { id: '30', category: 'yourself', act: 'Call or video chat with someone who makes you laugh' },

  // For the Environment
  { id: '31', category: 'environment', act: 'Pick up litter in your neighborhood, even if it\'s not yours' },
  { id: '32', category: 'environment', act: 'Use a reusable water bottle instead of buying plastic' },
  { id: '33', category: 'environment', act: 'Plant a seed or care for a houseplant' },
  { id: '34', category: 'environment', act: 'Donate items you no longer need instead of throwing them away' },
  { id: '35', category: 'environment', act: 'Walk or bike instead of driving for a short trip' },
  { id: '36', category: 'environment', act: 'Turn off lights and electronics when not in use' },
  { id: '37', category: 'environment', act: 'Support a local farmer\'s market or sustainable business' },
  { id: '38', category: 'environment', act: 'Recycle properly and help others learn how' },
  { id: '39', category: 'environment', act: 'Share resources or tools with neighbors instead of buying new' },
  { id: '40', category: 'environment', act: 'Choose to repair something instead of replacing it' },
];

export const motivationalQuotes = [
  "Kindness is a language which the deaf can hear and the blind can see. - Mark Twain",
  "No act of kindness, no matter how small, is ever wasted. - Aesop",
  "Be kind whenever possible. It is always possible. - Dalai Lama",
  "Kindness is the sunshine in which virtue grows. - Robert Green Ingersoll",
  "A single act of kindness throws out roots in all directions. - Amelia Earhart",
  "The best way to find yourself is to lose yourself in the service of others. - Gandhi",
  "Kindness begins with the understanding that we all struggle. - Charles Glassman",
  "Carry out a random act of kindness with no expectation of reward. - Princess Diana",
];
