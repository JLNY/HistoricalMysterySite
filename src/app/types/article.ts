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
    articleUpdateTime: Date;
    articleReadTime: number;
    userFirstName: string;
    userLastName: string;
}

export interface IArticleContent {
    articleId: number;
    paragraphNumber: number;
    paragraphEmbedContent: string;
}

export interface IArticleCreateRequest {
    articleAuthorId: number;
    articleCollectionId: number;
    articleTag: string;
    articleDisplayTitle: string;
    articleDisplaySubtitle: string;
    articleFeatureImage: string;
    articleUpdateTime: Date;
    articleReadTime: number;
    articleContent: IParagraph[];
}

export interface IParagraph {
    paragraphnum: number;
    paragraphembedcontent: string;
}
