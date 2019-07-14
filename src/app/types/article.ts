export interface IArticle {
    articleid: number;
    articletag: string;
    articletitle: string;
    articlepreviewimg: string;
    articlefeatureimg: string;
    articleabstract: string;
    articleauthor: string;
    articledate: Date;
    articlereadduration: number;
    articlebody: IParagraph[];
    articleclapnum: number;
}

export interface IArticleRecord {
    articleId: number;
    articleTag: string;
    articleCollectionId: number;
    articleDisplayTitle: string;
    articleDisplaySubtitle: string;
    articleFeatureImage: string;
}

export interface IParagraph {
    paragraphnum: number;
    paragraphcontent: string;
}
