import { DuaCategory } from '../types/dua';

const duaData: DuaCategory[] = [
  {
    id: 'salah',
    name: 'Salah Adhkar',
    description: 'Supplications and remembrance related to prayer',
    icon: 'pray',
    duas: [
      {
        id: 'salah-1',
        title: 'Dua before Wudu',
        arabic: 'بِسْمِ اللَّهِ',
        transliteration: 'Bismillah',
        translation: 'In the name of Allah',
        audioUrl: 'https://audio.example.com/bismillah.mp3',
        reference: 'Abu Dawud'
      }
    ]
  },
  {
    id: 'ramadan',
    name: 'Ramadan Adhkar',
    description: 'Supplications for the blessed month of Ramadan',
    icon: 'moon',
    duas: [
      {
        id: 'ramadan-1',
        title: 'Dua for Breaking Fast',
        arabic: 'ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الأَجْرُ إِنْ شَاءَ اللَّهُ',
        transliteration: 'Dhahabadh-dhama\'u wabtallatil \'urooqu wa thabatal-ajru insha\'Allah',
        translation: 'The thirst has gone, the veins are moistened and the reward is confirmed, if Allah wills',
        audioUrl: 'https://audio.example.com/iftar.mp3',
        reference: 'Abu Dawud'
      }
    ]
  },
  {
    id: 'morning-evening',
    name: 'Morning & Evening',
    description: 'Daily morning and evening remembrance',
    icon: 'sun',
    duas: []
  },
  {
    id: 'sleep',
    name: 'Sleep Adhkar',
    description: 'Supplications before sleeping and after waking',
    icon: 'moon-icon',
    duas: []
  },
  {
    id: 'general',
    name: 'General Duas',
    description: 'Common everyday supplications',
    icon: 'book',
    duas: []
  }
]

export default duaData;