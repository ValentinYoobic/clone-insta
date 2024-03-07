import { User } from './user'

export interface Publication {
    id: number
    content: string[]
    publisher: User
    caption: string
    language: 'en' | 'fr' | null
    publicationDate: number
    subtitle: {
        text: string
        subtitleType: 'Location' | 'Audio' | null
    } | null
    audioName: string | null
    location: string | null
    comments: []
    likers: User[]
}