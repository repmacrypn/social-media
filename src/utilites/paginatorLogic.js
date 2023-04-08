export const processPaginatorData = (totalCount, count, currentPage) => {
    let pagesCount = Math.ceil(totalCount / count);
    let curPage = currentPage;
    let slicedPages = [];
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    ((curPage - 3) < 0) ?
        slicedPages = pages.slice(0, 5) :
        slicedPages = pages.slice(curPage - 3, curPage + 2);

    return slicedPages;
};