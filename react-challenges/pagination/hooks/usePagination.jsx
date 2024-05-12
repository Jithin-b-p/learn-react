import { useMemo } from "react";
import { range } from "../lib/rangeForPagination";

export const usePagination = ({
  totalCount,
  currentPage,
  pageSize,
  siblingCount = 1,
}) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    // pagecount is determined as sibilingCount + firstPage + lastPage + currentPage + 2 * DOTS
    const totalPageNumbers = siblingCount + 5;

    /*
    case: 1
    If the number of pages is less than the page numbers we want to show in our paginationComponent, we return the range [1...totalPageCount]
    */

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    // caculate left and right sibiling index and make sure they are within range 1 to totalPageCount
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSibilingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    const showLeftDots = leftSiblingIndex > 2;
    const showRightDots = rightSibilingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    // case 2: not left dots to show. but right dots to be shown.
    if (!showLeftDots && showRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, "...", totalPageCount];
    }

    // case 3: no right dots to show but left dots to be shown
    if (showLeftDots && !showRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );

      return [firstPageIndex, "...", ...rightRange];
    }

    // case 4: both left and right dots to be shown

    if (showLeftDots && showRightDots) {
      let middleRange = range(leftSiblingIndex, rightSibilingIndex);

      return [firstPageIndex, "...", ...middleRange, "...", lastPageIndex];
    }
  }, [totalCount, currentPage, pageSize, siblingCount]);

  return paginationRange;
};
