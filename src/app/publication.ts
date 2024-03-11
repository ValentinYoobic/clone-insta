import { User } from './user'

export interface Publication {
    id: number
    content: string[]
    publisher: User
    caption: string | null
    language: 'en' | 'fr' | null
    publicationDate: number
    subtitleType: 'Location' | 'Audio' | null
    audioName: string | null
    artistName: string | null
    location: string | null
    comments: string[]
    likers: User[]
}
