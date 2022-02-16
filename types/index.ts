export interface IPost {
    title: string,
    slug: ISlug,
    releaseDate: Date,
    author: string,
    category: string,
    keywords: string,
    image: object,
    imageDescription: string,
    description: any,
    content?: object,
}

export interface IFProject {
    title: string,
    slug: string,
    releaseDate: Date,
    icon: string,
    iconDescription: string,
    type: string,
    author: string,
    keywords: string,
    highlights: String[],
    buttons: IButton[],
    features: IFeature[],
    screenshots: String[],
    content: string, 
}
export interface IScreenshot {
    title: string,
    image: string,
    imageDescription: string
}
export interface IFeature {
    title: string,
    description: string,
    icon: string
}

export interface IHighlight {
    title: string,
}
export interface IButton {
    title: string,
    url: string,
}

export interface IMeta {
    title: string,
    description: string,
    keywords: string,
    author: string,
    date: Date,
    url: string,
    image: string,
}

export interface ISlug {
    _type: string,
    current: string
}