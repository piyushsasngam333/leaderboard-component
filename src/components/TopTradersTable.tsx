import React, { useState } from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";

// TypeScript interfaces
interface Trader {
  id: string;
  name: string;
  avatar: string;
  equity: number;
  growthPercentage: number;
  profit: number;
  wonTradePercent: number;
  isCurrentUser?: boolean;
}

interface TopTradersTableProps {
  traders: Trader[];
  currentPage?: number;
  totalPages?: number;
  itemsPerPage?: number;
  totalItems?: number;
  onPageChange?: (page: number) => void;
  onItemsPerPageChange?: (items: number) => void;
}

// Crown/Medal icons for top 3 positions
const CrownIcon = ({
  className,
  color,
}: {
  className?: string;
  color: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 19 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <path
        d="M3.48581 9.64477C4.06369 9.76174 4.78091 10.0378 5.34217 10.6208C5.77364 11.0518 6.00603 11.6044 6.23527 12.1133C6.23527 12.1133 6.18351 11.9156 6.16661 11.6108C6.13924 11.3042 6.10215 10.8989 6.07028 10.4945C6.03319 10.0891 6.00133 9.68472 5.97305 9.38334C5.97707 9.08221 5.98036 8.87796 5.98036 8.87796C5.54572 8.86682 4.44038 8.77642 3.75195 7.81011C3.54126 7.50387 3.37382 7.13509 3.28235 6.7634C3.21271 6.39013 3.18858 6.00324 3.18329 5.66275C3.18932 4.97928 3.28057 4.45621 3.28057 4.45621C3.28057 4.45621 3.66606 4.50189 4.13768 4.70274C4.61362 4.90973 5.1809 5.27279 5.55429 5.8823C5.82518 6.30685 5.92979 6.78863 6.02235 7.24675C6.02235 7.24675 6.02217 7.15509 6.03544 7.01727C6.05393 6.88036 6.07449 6.70068 6.10028 6.52193C6.14755 6.15827 6.19481 5.79461 6.19481 5.79461C6.06301 5.56141 5.86079 5.17579 5.74049 4.69127C5.64543 4.21655 5.62093 3.64633 5.76405 3.07302C5.91753 2.28591 6.50326 1.70895 6.91991 1.32888C7.35747 0.952454 7.72807 0.774554 7.72807 0.774554C7.72807 0.774554 7.89003 1.17471 8.0037 1.72814C8.13215 2.28954 8.1218 2.96686 7.9943 3.66687C7.87258 4.17924 7.60124 4.62239 7.31038 4.99207C7.04044 5.3654 6.77282 5.66367 6.57848 5.85075C6.57848 5.85075 6.47465 6.53872 6.41266 7.23399C6.39342 7.93132 6.37942 8.62957 6.37942 8.62957C6.5102 8.18885 6.71354 7.73384 7.03554 7.40193C7.4975 6.91657 8.17513 6.77067 8.66871 6.72202C9.17707 6.68134 9.55891 6.74795 9.55891 6.74795C9.55891 6.74795 9.55295 6.84393 9.52558 7.00085C9.4982 7.15777 9.44419 7.37473 9.40039 7.6258C9.30234 8.12613 9.07777 8.73375 8.61581 9.21911C7.96061 9.97798 6.87741 10.1933 6.43456 10.2292C6.43456 10.2292 6.50625 11.0233 6.5718 11.8216C6.73176 12.6041 6.8917 13.3866 6.8917 13.3866C6.91246 12.8351 7.01988 12.2501 7.30284 11.7713C7.75555 11.1226 8.42577 10.8029 8.97695 10.6404C9.53336 10.4787 9.96733 10.4628 9.96733 10.4628C9.96733 10.4628 10.0112 10.8909 9.98252 11.4572C9.99838 12.0151 9.90659 12.7267 9.51938 13.3707C8.94343 14.3859 7.80207 14.9037 7.33392 15.0538C7.33392 15.0538 7.57805 15.7863 7.82218 16.5188C8.14775 17.2169 8.47855 17.9161 8.47855 17.9161C8.35765 17.2805 8.25542 16.5997 8.5239 15.9566C8.85479 15.1412 9.50281 14.6398 10.0682 14.3342C10.6335 14.0285 11.1076 13.9064 11.1076 13.9064C11.1076 13.9064 11.2859 14.3364 11.3616 14.9532C11.4722 15.5547 11.5879 16.3132 11.3095 17.1055C10.9395 18.3615 9.81025 19.2425 9.35249 19.5184C9.35249 19.5184 9.737 20.1568 10.1522 20.7736C10.6218 21.3568 11.0862 21.9391 11.0862 21.9391C10.777 21.2707 10.4578 20.5359 10.614 19.7331C10.7644 18.7783 11.3474 18.0931 11.8799 17.6362C12.4185 17.175 12.9031 16.9307 12.9031 16.9307C12.9031 16.9307 13.1942 17.3319 13.4252 17.9543C13.524 18.2841 13.6953 18.5997 13.7788 18.9861C13.8746 19.364 13.9185 19.7921 13.8714 20.2474C13.8066 21.6698 12.7938 22.9646 12.4015 23.3597C12.4015 23.3597 12.554 23.5048 12.7784 23.7326C12.8936 23.8444 13.0219 23.9745 13.1648 24.1127C13.321 24.2369 13.4929 24.3639 13.6587 24.4952C14.3287 25.011 15.0039 25.5276 15.0039 25.5276L14.7868 25.8455C14.7868 25.8455 13.8198 25.1162 12.874 24.3584C12.4417 23.9326 12.0084 23.5121 11.6869 23.1919C11.5257 23.0344 11.388 22.8972 11.2961 22.8057C11.2052 22.709 11.162 22.6476 11.162 22.6476C10.7395 22.9997 9.46231 24.0489 7.74194 23.5602C6.65194 23.2892 5.78335 22.3669 5.13462 21.5746C4.97551 21.3744 4.83118 21.1821 4.70072 21.0031C4.58778 20.8163 4.49916 20.6445 4.42691 20.5025C4.27717 20.2177 4.20175 20.0321 4.20175 20.0321C4.20175 20.0321 4.66997 19.758 5.37558 19.6062C5.72884 19.5277 6.13599 19.4801 6.56881 19.5017C6.99025 19.5267 7.45487 19.6132 7.94857 19.7801C8.74516 20.0646 9.37217 20.6106 9.93326 21.1019C9.93326 21.1019 9.80073 20.9656 9.6612 20.7149C9.50939 20.4728 9.31191 20.1527 9.10919 19.8317C8.90647 19.5107 8.70376 19.1896 8.55809 18.9432C8.4238 18.6934 8.34656 18.5183 8.34656 18.5183C7.88132 18.7443 6.54113 19.3514 5.15548 18.5815C4.25981 18.1234 3.69533 17.1571 3.29817 16.3441C3.10573 15.9332 2.94353 15.5653 2.87316 15.2889C2.80279 15.0126 2.77354 14.8404 2.77354 14.8404C2.77354 14.8404 3.2417 14.6903 3.88855 14.6899C4.21152 14.6924 4.57792 14.7239 4.95337 14.8272C5.34635 14.9227 5.75544 15.0803 6.13673 15.3354C6.74222 15.7267 7.18135 16.2992 7.54658 16.8318C7.54658 16.8318 7.5225 16.7845 7.48728 16.7083C7.45821 16.6277 7.41983 16.5079 7.37373 16.3705C7.28244 16.0904 7.15344 15.7176 7.02968 15.3456C6.90591 14.9737 6.77077 14.6052 6.69085 14.3217C6.63368 14.0315 6.59147 13.8409 6.59147 13.8409C6.12198 13.9369 4.85455 14.1577 3.8297 13.2352C3.51939 12.9439 3.22276 12.5741 3.05033 12.1721C2.87791 11.7702 2.7528 11.3441 2.6693 10.9576C2.49706 10.1838 2.47463 9.57079 2.47463 9.57079C2.47463 9.57079 2.90793 9.5278 3.48581 9.64477Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="19" height="26" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const TopTradersTable: React.FC<TopTradersTableProps> = ({
  traders = [],
  currentPage = 1,
  totalPages = 10,
  itemsPerPage = 10,
  totalItems = 100,
  onPageChange = () => {},
  onItemsPerPageChange = () => {},
}) => {
  const [selectedItemsPerPage, setSelectedItemsPerPage] =
    useState(itemsPerPage);

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Get rank styling based on position
  const getRankStyling = (index: number, isCurrentUser?: boolean) => {
    const position = index + 1;

    if (isCurrentUser) {
      return {
        barColor: "bg-gradient-to-r from-blue-500 to-cyan-400",
        bgGradient:
          "bg-gradient-to-r from-transparent via-blue-500/20 to-transparent",
        textColor:
          "bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent",
        badgeColor:
          "bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent",
        badgeBg: "bg-blue-500/10",
      };
    }

    switch (position) {
      case 1:
        return {
          barColor: "bg-yellow-400",
          bgGradient:
            "bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent",
          textColor: "text-slate-100",
          badgeColor: "text-yellow-300",
          badgeBg: "bg-yellow-400/10",
        };
      case 2:
        return {
          barColor: "bg-gray-300",
          bgGradient:
            "bg-gradient-to-r from-transparent via-gray-300/30 to-transparent",
          textColor: "text-slate-100",
          badgeColor: "text-gray-300",
          badgeBg: "bg-gray-300/10",
        };
      case 3:
        return {
          barColor: "bg-orange-400",
          bgGradient:
            "bg-gradient-to-r from-transparent via-orange-400/30 to-transparent",
          textColor: "text-slate-100",
          badgeColor: "text-orange-300",
          badgeBg: "bg-orange-400/10",
        };
      default:
        return {
          barColor: "bg-orange-400",
          bgGradient: "",
          textColor: "text-slate-100",
          badgeColor: "text-slate-400",
          badgeBg: "bg-blue-500/10",
        };
    }
  };

  // Generate pagination numbers
  const generatePaginationNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1, 2, 3);
      if (currentPage > 4) pages.push("...");
      if (currentPage > 3 && currentPage < totalPages - 2) {
        pages.push(currentPage);
      }
      if (currentPage < totalPages - 3) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-7xl mx-auto p-6 min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header Section */}
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-3">
          <div className="flex w-11 h-11 flex-col justify-center items-center rounded-lg border border-cyan-400 bg-cyan-400/5 shadow-[0px_0px_16px_0px_rgba(25,213,251,0.12)] shadow-cyan-400/10">
            <div className="flex justify-center items-center relative">
              <CrownIcon
                className="w-4 h-6 transform rotate-[10deg]"
                color="#06B6D4"
              />
              <CrownIcon
                className="w-4 h-6 transform rotate-[-170deg] absolute left-4"
                color="#06B6D4"
              />
            </div>
          </div>
          <h1 className="text-slate-100 text-2xl font-medium tracking-tight">
            Top Traders
          </h1>
        </div>
      </div>

      {/* Table Container */}
      <div className="flex p-8 flex-col items-center gap-8 w-full rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-slate-800/50 via-slate-900/80 to-slate-800/50 backdrop-blur-sm">
        {/* Table Header */}
        <div className="flex flex-col items-start gap-6 w-full">
          <div className="flex p-1 items-center gap-[72px] w-full rounded-xl">
            <div className="flex w-[84px] pr-2 justify-center items-center gap-2.5">
              <div className="flex-1 text-slate-400 text-right text-sm font-normal tracking-tight">
                Place
              </div>
            </div>
            <div className="flex pr-8 items-center gap-8 flex-1">
              <div className="w-[180px] text-slate-400 text-sm font-normal tracking-tight">
                Trader
              </div>
              <div className="flex items-center gap-8 flex-1">
                <div className="flex-1 text-slate-400 text-right text-xs font-normal tracking-tight">
                  Equity
                </div>
                <div className="flex-1 text-slate-400 text-right text-xs font-normal tracking-tight">
                  Growth Percentage
                </div>
                <div className="flex-1 text-slate-400 text-right text-xs font-normal tracking-tight">
                  Profit
                </div>
                <div className="flex-1 text-slate-400 text-right text-xs font-normal tracking-tight">
                  Won Trade Percent
                </div>
              </div>
            </div>
          </div>

          {/* Table Rows */}
          <div className="flex flex-col items-start gap-4 w-full">
            {traders.map((trader, index) => {
              const ranking = getRankStyling(index, trader.isCurrentUser);
              const position = index + 1;

              return (
                <div key={trader.id} className="relative w-full group">
                  <div className="flex p-2 pr-8 items-center gap-[72px] w-full rounded-lg border border-cyan-400/20 bg-gradient-to-r from-slate-800/60 to-slate-700/40 hover:from-slate-700/70 hover:to-slate-600/50 transition-all duration-200">
                    {/* Background gradient overlay */}
                    {ranking.bgGradient && (
                      <div
                        className={`absolute left-0 top-0 w-[225px] h-[58px] opacity-30 ${ranking.bgGradient} rounded-lg`}
                      />
                    )}

                    {/* Rank Section */}
                    <div className="flex items-center gap-8 relative z-10">
                      <div
                        className={`w-0.5 h-[42px] rounded-full ${ranking.barColor}`}
                      />
                      <div className="w-[51px] h-[26px] relative opacity-80">
                        {position <= 3 ? (
                          <>
                            <CrownIcon
                              className="w-4 h-6 transform rotate-[10deg] absolute left-0 top-0"
                              color="#E2E8F0"
                            />
                            <CrownIcon
                              className="w-4 h-6 transform rotate-[-170deg] absolute left-8 top-0"
                              color="#E2E8F0"
                            />
                          </>
                        ) : (
                          position > 4 && (
                            <div className="w-4 h-6 opacity-50 absolute left-0 top-0" />
                          )
                        )}
                        <div
                          className={`absolute left-[19px] top-0 w-3 h-[22px] text-center text-lg font-medium tracking-tight ${ranking.textColor}`}
                        >
                          {position}
                        </div>
                      </div>
                    </div>

                    {/* Trader Info & Data */}
                    <div className="flex items-center gap-8 flex-1 relative z-10">
                      <div className="flex w-[180px] items-center gap-3">
                        <div className="w-8 h-8 flex-shrink-0">
                          <img
                            src={trader.avatar || "/api/placeholder/32/32"}
                            alt="Avatar"
                            className="w-8 h-8 rounded-full ring-2 ring-slate-600/50"
                          />
                        </div>
                        <div className="flex-1 text-slate-100 text-lg font-medium tracking-tight truncate">
                          {trader.name}
                        </div>
                      </div>

                      <div className="flex items-center gap-8 flex-1">
                        <div className="flex-1 text-slate-400 text-right text-sm font-semibold tracking-tight">
                          {formatCurrency(trader.equity)}
                        </div>
                        <div className="flex justify-end items-center gap-2.5 flex-1">
                          <div
                            className={`flex py-1 px-2 justify-center items-center gap-2.5 rounded-full ${ranking.badgeBg} ring-1 ring-white/10`}
                          >
                            <div
                              className={`text-sm font-semibold tracking-tight ${ranking.badgeColor}`}
                            >
                              {trader.growthPercentage}%
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 text-slate-400 text-right text-sm font-semibold tracking-tight">
                          {formatCurrency(trader.profit)}
                        </div>
                        <div className="flex justify-end items-center flex-1">
                          <div className="text-slate-400 text-sm font-semibold tracking-tight">
                            {trader.wonTradePercent}%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* "You" Label */}
                  {trader.isCurrentUser && (
                    <div className="absolute left-[81px] top-[20px] text-slate-100 text-center text-sm font-semibold z-20 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                      You
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center w-full">
          {/* Items Per Page */}
          <div className="flex justify-center items-center gap-1">
            <div className="text-slate-100 text-center text-xs font-normal tracking-tight">
              Traders per page:
            </div>
            <div className="flex h-11 py-3 px-4 pr-3 justify-center items-center gap-2 rounded-lg border border-cyan-400/20 bg-cyan-400/5 hover:bg-cyan-400/10 transition-colors cursor-pointer">
              <div className="text-slate-100 text-sm font-semibold">
                {selectedItemsPerPage}
              </div>
              <ChevronDownIcon className="w-5 h-5 text-slate-100" />
            </div>
          </div>

          {/* Page Info */}
          <div className="text-slate-500 text-center text-xs font-normal tracking-tight">
            {String((currentPage - 1) * itemsPerPage + 1).padStart(2, "0")} -{" "}
            {String(Math.min(currentPage * itemsPerPage, totalItems)).padStart(
              2,
              "0",
            )}{" "}
            top traders of {totalItems}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-2">
            <div className="flex h-[38px] py-1 justify-center items-center gap-1">
              <div className="text-slate-100 text-center text-sm font-semibold">
                First
              </div>
            </div>

            <button
              onClick={() => onPageChange(Math.max(1, currentPage - 1))}
              className="flex w-8 h-8 p-3 justify-center items-center gap-2 rounded-lg border border-cyan-400/20 bg-cyan-400/5 hover:bg-cyan-400/10 transition-colors"
            >
              <ChevronLeftIcon className="w-5 h-5 text-slate-400" />
            </button>

            {generatePaginationNumbers().map((page, index) => (
              <button
                key={index}
                onClick={() =>
                  typeof page === "number" ? onPageChange(page) : undefined
                }
                className={`flex w-8 h-8 p-3 justify-center items-center gap-2 rounded-lg border border-cyan-400/20 transition-colors ${
                  page === currentPage
                    ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white border-transparent"
                    : "bg-cyan-400/5 hover:bg-cyan-400/10"
                }`}
              >
                <div
                  className={`text-sm font-semibold ${
                    page === currentPage ? "text-white" : "text-slate-400"
                  }`}
                >
                  {page}
                </div>
              </button>
            ))}

            <button
              onClick={() =>
                onPageChange(Math.min(totalPages, currentPage + 1))
              }
              className="flex w-8 h-8 p-3 justify-center items-center gap-2 rounded-lg border border-cyan-400/20 bg-cyan-400/5 hover:bg-cyan-400/10 transition-colors"
            >
              <ChevronRightIcon className="w-5 h-5 text-slate-400" />
            </button>

            <div className="flex h-[38px] py-1 justify-center items-center gap-1">
              <div className="text-slate-100 text-center text-sm font-semibold">
                Last
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopTradersTable;
