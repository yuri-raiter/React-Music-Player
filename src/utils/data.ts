import { v4 as uuid4 } from 'uuid'

export const library = [
   {
      id: uuid4(),
      name: "Nightfall",
      author: 'INOSSI',
      album: require('../images/albums/nightfall.jpg').default,
      track: require('../audios/nightfall.mp3').default
   },
   {
      id: uuid4(),
      name: "Pharoah",
      author: 'Tatami',
      album: require('../images/albums/tatami.jpg').default,
      track: require('../audios/pharoah.mp3').default
   },
   {
      id: uuid4(),
      name: 'Chrome',
      author: 'Infraction',
      album: require('../images/albums/infraction.jpg').default,
      track: require('../audios/chrome.mp3').default
   },
   {
      id: uuid4(),
      name: 'Ultraviolet',
      author: 'Infraction',
      album: require('../images/albums/infraction.jpg').default,
      track: require('../audios/ultraviolet.mp3').default
   },
   {
      id: uuid4(),
      name: 'Adventure is Calling',
      author: 'Vens Adams',
      album: require('../images/albums/adventure.jpg').default,
      track: require('../audios/adventure-is-calling.mp3').default
   },
   {
      id: uuid4(),
      name: 'Summer Memories',
      author: 'extenz',
      album: require('../images/albums/extenz.jpg').default,
      track: require('../audios/summer-memories.mp3').default
   },
   {
      id: uuid4(),
      name: 'Serenity',
      author: 'Ilya Kuznetsov',
      album: require('../images/albums/serenity.jpg').default,
      track: require('../audios/serenity.mp3').default
   },
   {
      id: uuid4(),
      name: 'On a Journey',
      author: 'A.T.M',
      album: require('../images/albums/atm.jpg').default,
      track: require('../audios/on-a-journey.mp3').default
   },
   {
      id: uuid4(),
      name: 'Heroes Tonight',
      author: 'Janji (feat. Johnning)',
      album: require('../images/albums/heroes.jpg').default,
      track: require('../audios/heroes-tonight.mp3').default
   },
   {
      id: uuid4(),
      name: 'Spatial',
      author: 'Fugu Vibes',
      album: require('../images/albums/fugu.jpg').default,
      track: require('../audios/spatial.mp3').default
   },
   {
      id: uuid4(),
      name: "Hero's Time",
      author: 'Paulo Kalazzi',
      album: require('../images/albums/kalazzi.jpg').default,
      track: require('../audios/heros-time.mp3').default
   }
]