import TopTradersTable from "../components/TopTradersTable";

// Sample data for demonstration
const sampleTraders = [
  {
    id: "1",
    name: "John Smith",
    avatar: "/api/placeholder/32/32",
    equity: 200000,
    growthPercentage: 66,
    profit: 212000,
    wonTradePercent: 66,
  },
  {
    id: "2",
    name: "Sarah Johnson",
    avatar: "/api/placeholder/32/32",
    equity: 185000,
    growthPercentage: 58,
    profit: 195000,
    wonTradePercent: 72,
  },
  {
    id: "3",
    name: "Mike Wilson",
    avatar: "/api/placeholder/32/32",
    equity: 175000,
    growthPercentage: 45,
    profit: 180000,
    wonTradePercent: 65,
  },
  {
    id: "4",
    name: "Emily Davis",
    avatar: "/api/placeholder/32/32",
    equity: 165000,
    growthPercentage: 52,
    profit: 172000,
    wonTradePercent: 68,
  },
  {
    id: "5",
    name: "Alex Thompson",
    avatar: "/api/placeholder/32/32",
    equity: 160000,
    growthPercentage: 48,
    profit: 168000,
    wonTradePercent: 70,
    isCurrentUser: true, // This represents the current user
  },
  {
    id: "6",
    name: "Lisa Brown",
    avatar: "/api/placeholder/32/32",
    equity: 155000,
    growthPercentage: 42,
    profit: 162000,
    wonTradePercent: 63,
  },
  {
    id: "7",
    name: "David Chen",
    avatar: "/api/placeholder/32/32",
    equity: 150000,
    growthPercentage: 38,
    profit: 157000,
    wonTradePercent: 61,
  },
  {
    id: "8",
    name: "Rachel Green",
    avatar: "/api/placeholder/32/32",
    equity: 145000,
    growthPercentage: 35,
    profit: 152000,
    wonTradePercent: 59,
  },
  {
    id: "9",
    name: "Tom Anderson",
    avatar: "/api/placeholder/32/32",
    equity: 140000,
    growthPercentage: 32,
    profit: 147000,
    wonTradePercent: 57,
  },
  {
    id: "10",
    name: "Jennifer Lee",
    avatar: "/api/placeholder/32/32",
    equity: 135000,
    growthPercentage: 28,
    profit: 142000,
    wonTradePercent: 55,
  },
];

const Index = () => {
  const handlePageChange = (page: number) => {
    console.log("Page changed to:", page);
  };

  const handleItemsPerPageChange = (items: number) => {
    console.log("Items per page changed to:", items);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <TopTradersTable
        traders={sampleTraders}
        currentPage={1}
        totalPages={10}
        itemsPerPage={10}
        totalItems={100}
        onPageChange={handlePageChange}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
    </div>
  );
};

export default Index;
