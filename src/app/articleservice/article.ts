export interface IArticle{
    articleid: number,
    articletag: string,
    articletitle: string,
    articlepreviewimg: string,
    articlefeatureimg: string,
    articleabstract: string,
    articleauthor: string,
    articledate: Date,
    articlereadduration: number,
    articlebody: IParagraph[]
}

export interface IParagraph {
    paragraphnum: number;
    paragraphcontent: string;
}