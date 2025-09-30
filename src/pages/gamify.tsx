import { useEffect, useState } from 'react';
import { Crown, Trophy, TrendingUp, Info } from 'lucide-react';

interface User {
  id: number;
  address: string;
  deposit: number;
  yield_: number;
}

const MonkeyTreeLeaderboard = () => {
  const [showLegend, setShowLegend] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [userPosition, setUserPosition] = useState(0)
  const [users, setUsers] = useState<User[]>([
    { id: 1, address: '0x1234567890abcdef1234567890abcdef12345678', deposit: 45000, yield_: 2250 },
    { id: 2, address: '0xabcdef1234567890abcdef1234567890abcdef12', deposit: 38000, yield_: 1900 },
    { id: 3, address: '0x9876543210fedcba9876543210fedcba98765432', deposit: 32000, yield_: 1600 },
    { id: 4, address: '0xfedcba9876543210fedcba9876543210fedcba98', deposit: 28000, yield_: 1400 },
    { id: 5, address: '0x1111222233334444555566667777888899990000', deposit: 25000, yield_: 1250 },
    { id: 6, address: '0x0000999988887777666655554444333322221111', deposit: 22000, yield_: 1100 },
    { id: 7, address: '0xaaaa1111bbbb2222cccc3333dddd4444eeee5555', deposit: 18000, yield_: 900 },
    { id: 8, address: '0x5555eeee4444dddd3333cccc2222bbbb1111aaaa', deposit: 15000, yield_: 750 },
    { id: 9, address: '0x6666ffff7777aaaa8888bbbb9999cccc0000dddd', deposit: 12000, yield_: 600 },
    { id: 10, address: '0xdddd0000cccc9999bbbb8888aaaa7777ffff6666', deposit: 8000, yield_: 98 }
  ]);

  const wallet = '0x5555eeee4444dddd3333cccc2222bbbb1111aaaa'

  useEffect(() => {
    const fetchData = async () => {
      const userId = users.find(user => user.address === wallet)
      setUserPosition(userId?.id ?? 0)
    }

    fetchData()
  }, []);

  // Configuration
  const BANANA_RATIO = 100; // 1 banana per 100 yield tokens
  const MAX_BANANAS_DISPLAY = 50;

  const formatAddress = (address: string) => {
    return `${address.slice(0, 5)}...${address.slice(-4)}`;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const calculateBananas = (yield_: number) => {
    return Math.min(Math.floor(yield_ / BANANA_RATIO), MAX_BANANAS_DISPLAY);
  };

  const getMonkeyEmoji = (index: number) => {
    const monkeys = ['🐒', '🐵', '🙈', '🙉', '🙊'];
    return monkeys[index % monkeys.length];
  };

  const getBranchPosition = (index: number, total: number) => {
    const isLeft = index % 2 === 0;
    const heightPercent = ((total - index) / total) * 80 + 10; // 10-90% height
    return { isLeft, heightPercent };
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="w-6 h-6 text-yellow-400 animate-pulse" />;
      case 2: return <Trophy className="w-5 h-5 text-gray-400" />;
      case 3: return <Trophy className="w-5 h-5 text-amber-600" />;
      default: return null;
    }
  };

  const UserCard = ({ user, onClose }: { user: User; onClose: () => void; }) => (
    <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 max-w-sm w-full shadow-2xl transform animate-scale-in">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            {getRankIcon(user.id)}
            <span className="text-2xl">{getMonkeyEmoji(user.id - 1)}</span>
            <span className="text-xl font-bold text-gray-800">#{user.id}</span>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl cursor-pointer"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-3">
          <div>
            <p className="text-sm text-gray-600 font-mono">{formatAddress(user.address)}</p>
          </div>
          
          <div className="bg-white rounded-lg p-3 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Deposit:</span>
              <span className="font-semibold text-green-600">{formatCurrency(user.deposit)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Yield Earned:</span>
              <span className="font-semibold text-blue-600">{formatCurrency(user.yield_)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Bananas:</span>
              <div className="flex items-center gap-1">
                <span className="font-semibold text-yellow-600">{calculateBananas(user.yield_)}</span>
                <span className="text-lg">🍌</span>
              </div>
            </div>
          </div>
          
          <div className="text-center p-3 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg">
            <p className="text-sm text-gray-700">
              Keep climbing! 🌳 Higher deposit = Higher position
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const BananaCluster = ({ count, isLeft }: { count: number; isLeft: boolean }) => {
    const bananas = Array.from({ length: count }, (_, i) => (
      <span
        key={i}
        className="inline-block text-sm animate-pulse"
        style={{
          animationDelay: `${i * 0.2}s`,
          transform: `translate(${(i % 3) * 8}px, ${Math.floor(i / 3) * 8}px)`
        }}
      >
        🍌
      </span>
    ));

    return (
      <div className={`absolute ${isLeft ? '-left-12' : '-right-12'} top-1/2 transform -translate-y-1/2 flex flex-wrap w-10 h-10`}>
        {bananas}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 via-sky-200 to-green-200 relative overflow-hidden">
      {/* Sky and clouds background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-white text-4xl animate-float">☁️</div>
        <div className="absolute top-20 right-20 text-white text-3xl animate-float" style={{animationDelay: '2s'}}>☁️</div>
        <div className="absolute top-32 left-1/3 text-white text-2xl animate-float" style={{animationDelay: '4s'}}>☁️</div>
      </div>

      {/* Header */}
      <div className="relative z-10 p-6 text-center">
        <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
          🌳 Monkey Tree Leaderboard 🐒
        </h1>

        <div className='flex items-center justify-center space-x-2 my-4'>
          <button
            onClick={() => setShowLegend(!showLegend)}
            className="bg-white/20 backdrop-blur-sm cursor-pointer text-white px-4 py-2 rounded-full hover:bg-white/30 transition-all flex items-center gap-2 mx-auto"
          >
            <Info size={16} />
            How it works
          </button>

          <button 
            className='bg-white/20 grid place-items-center backdrop-blur-sm cursor-pointer text-white px-4 py-2 rounded-full hover:bg-white/30 transition-all flex items-center gap-2 mx-auto'
            disabled={true}
          >
            You are #{userPosition}
          </button>
        </div>
      </div>

      {/* Legend */}
      {showLegend && (
        <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md shadow-2xl">
            <h3 className="text-xl font-bold mb-4 text-gray-800">How the Tree Works</h3>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <TrendingUp className="text-green-600" size={16} />
                <span>Higher deposit = Higher position on tree</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🍌</span>
                <span>1 banana per 100 USDC earned</span>
              </div>
              <div className="flex items-center gap-2">
                <Crown className="text-yellow-400" size={16} />
                <span>Top 3 positions get special rank icons</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🐒</span>
                <span>Click monkeys to see detailed stats</span>
              </div>
            </div>
            <button
              onClick={() => setShowLegend(false)}
              className="mt-4 bg-green-500 text-white cursor-pointer px-4 py-2 rounded-lg hover:bg-green-600 transition-colors w-full"
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      {/* Tree Container */}
      <div className="relative flex-1 flex justify-center items-end px-4 pb-20">
        <div className="relative" style={{ height: `${Math.max(600, users.length * 80)}px`, width: '400px' }}>
          
          {/* Tree Crown */}
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 text-6xl animate-sway">
            🌳
          </div>

          {/* Tree Trunk */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-amber-800 to-amber-900 rounded-b-3xl shadow-lg"
            style={{ 
              width: '60px', 
              height: '100%',
              background: 'linear-gradient(to bottom, #92400e, #78350f, #451a03)'
            }}
          >
            {/* Tree texture lines */}
            <div className="absolute inset-0 opacity-30">
              {Array.from({length: 10}, (_, i) => (
                <div 
                  key={i}
                  className="absolute bg-amber-950 rounded-full"
                  style={{
                    width: '2px',
                    height: '20px',
                    left: '50%',
                    top: `${i * 10}%`,
                    transform: 'translateX(-50%)'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Branches and Monkeys */}
          {users.map((user, index) => {
            const { isLeft, heightPercent } = getBranchPosition(index, users.length);
            const bananaCount = calculateBananas(user.yield_);
            
            return (
              <div
                key={user.id}
                className="absolute"
                style={{
                  top: `${100 - heightPercent}%`,
                  left: '50%',
                  transform: 'translateX(-50%)'
                }}
              >
                {/* Branch */}
                <div
                  className={`absolute top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-amber-800 to-amber-700 rounded-full shadow-md ${
                    isLeft ? 'right-8' : 'left-8'
                  }`}
                  style={{
                    width: '120px',
                    height: '12px',
                    transformOrigin: isLeft ? 'right center' : 'left center',
                    transform: `translateY(-50%) rotate(${isLeft ? '-15deg' : '15deg'})`
                  }}
                />

                {/* Leaves on branch */}
                <div
                  className={`absolute top-1/2 transform -translate-y-1/2 ${
                    isLeft ? 'right-2' : 'left-2'
                  }`}
                  style={{
                    transform: `translateY(-50%) translateX(${isLeft ? '40px' : '-40px'})`
                  }}
                >
                  <span className="text-green-500 text-xl animate-sway">🍃</span>
                </div>

                {/* Monkey and User Info */}
                <div
                  className={`absolute top-1/2 transform -translate-y-1/2 flex items-center gap-2 ${
                    isLeft ? 'right-16 flex-row-reverse' : 'left-16'
                  }`}
                >
                  {/* Rank and Monkey */}
                  <div 
                    className="relative cursor-pointer hover:scale-110 transition-transform group"
                    onClick={() => setSelectedUser({...user})}
                  >
                    <div className="flex items-center gap">
                        <span className={`bg-white p-1 rounded-full ${user.id > 3 && 'hidden' }`}>
                            {getRankIcon(user.id)}
                        </span>
                      <span className="text-3xl animate-bounce" style={{animationDelay: `${index * 0.5}s`}}>
                        {getMonkeyEmoji(user.id - 1)}
                      </span>
                    </div>
                    
                    {/* Hover tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-gray-700 z-100 text-xs rounded px-2 py-1 whitespace-nowrap pointer-events-none">
                      Click for details
                    </div>

                    {/* Bananas */}
                    {bananaCount > 0 && (
                      <BananaCluster count={bananaCount} isLeft={isLeft} />
                    )}
                  </div>

                  {/* User Info Card */}
                  <div className={`${user.address === wallet ? 'bg-green-200/90' : 'bg-green-100/90'} backdrop-blur-sm rounded-lg p-2 shadow-lg ${
                    isLeft ? 'text-right' : 'text-left'
                  }`}>
                    <div className="text-xs font-semibold text-gray-800">
                      #{index + 1} {user.address === wallet && '(YOU)'}
                    </div>
                    <div className="text-xs text-gray-600 font-mono">
                      {formatAddress(user.address)}
                    </div>
                    <div className="text-xs text-green-600 font-semibold">
                      {formatCurrency(user.deposit)}
                    </div>
                    <div className="flex items-center gap-1 text-xs justify-center mt-1">
                      <span className='text-gray-700'>{bananaCount}</span>
                      <span>🍌</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-green-600 to-green-400">
        <div className="absolute inset-0 opacity-50">
          {Array.from({length: 20}, (_, i) => (
            <span 
              key={i}
              className="absolute text-green-800"
              style={{
                left: `${i * 5}%`,
                bottom: `${Math.random() * 60}px`,
                fontSize: `${12 + Math.random() * 8}px`
              }}
            >
              🌱
            </span>
          ))}
        </div>
      </div>

      {/* User Detail Modal */}
      {selectedUser && (
        <UserCard
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes sway {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        @keyframes scale-in {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-sway { animation: sway 4s ease-in-out infinite; }
        .animate-scale-in { animation: scale-in 0.3s ease-out; }
      `}</style>
    </div>
  );
};

export default MonkeyTreeLeaderboard;