//= Functions & Modules
// Others
import { useState, useEffect } from "react";
import classNames from "classnames";

//= React components
// Own
import { useConstructor } from "../../../utils/useConstructor";
// Packages
import Link from "next/link";

const ButtonClasses =
    "hover:no-underline flex items-center justify-center border border-[#d9d9d9] text-sm hover:bg-gray-50";

const PrevNextButtonsClasses = "h-6 w-6";

export type PaginationProps = {
    showPrevButton?: boolean;
    showNextButton?: boolean;
    prevLabel?: string;
    nextLabel?: string;

    rangeDisplayed?: number;
    marginRangeDisplayed?: number;

    count: number;
    currentPage: number;
    baseURL: string;

    onPageChange: (newPage: number) => any;
};

export default function Pagination({
    showPrevButton = true,
    showNextButton = true,
    prevLabel = "<",
    nextLabel = ">",
    rangeDisplayed = 2,
    marginRangeDisplayed = 1,
    count,
    currentPage,
    baseURL,
    onPageChange,
}: PaginationProps) {
    const [labels, setLabels] = useState<any[]>([]);

    const calculateLabels = (count: number, currentPage: number) => {
        let labels: any[] = [{ type: 0, page: 1 }];

        let pageIndex = currentPage - rangeDisplayed;

        if (currentPage == 1) {
            pageIndex = currentPage;
        } else {
            if (pageIndex == 0 || pageIndex == 1) {
                pageIndex = 2;
            } else if (pageIndex > marginRangeDisplayed + 1) labels.push({ type: 1, key: (pageIndex + 1) * 231 });

            for (; pageIndex < currentPage && pageIndex > 1; ++pageIndex) {
                labels.push({ type: 0, page: pageIndex });
            }

            labels.push({ type: 0, page: pageIndex });
        }

        if (pageIndex != count) {
            ++pageIndex;

            for (let maximum = currentPage + rangeDisplayed; pageIndex <= count && pageIndex <= maximum; ++pageIndex) {
                labels.push({ type: 0, page: pageIndex });
            }

            if (pageIndex + 1 <= count) {
                labels.push({ type: 1, key: (pageIndex + 1) * 231 }, { type: 0, page: count });
            } else if (pageIndex == count) {
                labels.push({ type: 0, page: count });
            }
        }

        return labels;
    };

    const internalOnPageChange = (newPage: number) => {
        setLabels(calculateLabels(count, newPage));
        onPageChange(newPage);
    };

    useConstructor(() => {
        setLabels(calculateLabels(count, currentPage));
    });

    useEffect(() => {
        setLabels(calculateLabels(count, currentPage));
    }, [count, currentPage]);

    return (
        <div className="flex justify-center items-center mt-4 gap-2">
            {showPrevButton && currentPage != 1 && (
                <Link 
                    href={baseURL.replace("PAGE_NUMBER", (currentPage - 1).toString())}
                    rel="prev" 
                    className={`${ButtonClasses} ${PrevNextButtonsClasses}`}
                    onClick={() => internalOnPageChange(currentPage - 1)}
                >
                    {prevLabel}
                </Link>
            )}
            {labels.map((labelData) => {
                if (labelData.type == 0) {
                    return (
                        <Link 
                            href={baseURL.replace("PAGE_NUMBER", labelData.page.toString())} 
                            key={labelData.page} 
                            className={classNames(`${ButtonClasses} min-w-[2.5rem] h-10`, {
                                "border-blue-500 text-blue-500": labelData.page == currentPage,
                            })}
                            onClick={() => internalOnPageChange(labelData.page)}
                        >
                            {labelData.page}
                        </Link>
                    );
                } else {
                    return <span key={labelData.key}>...</span>;
                }
            })}
            {showNextButton && labels.length && currentPage != labels[labels.length - 1].page && (
                <Link
                    href={baseURL.replace("PAGE_NUMBER", (currentPage + 1).toString())}
                    rel="next"
                    className={`${ButtonClasses} ${PrevNextButtonsClasses}`}
                    onClick={() => internalOnPageChange(currentPage + 1)}
                >
                    {nextLabel}
                </Link>
            )}
        </div>
    );
}
