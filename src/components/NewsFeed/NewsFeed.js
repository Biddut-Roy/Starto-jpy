

const NewsFeed = () => {
  const newsItems = [
    {
      date: '2025.05.15',
      category: 'CONCERT',
      title: '「なにわ男子 LIVE TOUR 2025 \'BON BON VOYAGE\'」公演決定！',
      isNew: true
    },
    {
      date: '2025.05.15',
      category: 'RELEASE',
      title: 'Hey! Say! JUMP New Single Tencore! 全曲試聴スタート！',
      isNew: true
    },
    {
      date: '2025.05.14',
      category: 'INFORMATION',
      title: '増田貴久（NEWS）に関するご報告',
      isNew: false
    },
    {
      date: '2025.05.15',
      category: 'CONCERT',
      title: '「A,B,C-Z CONNECTION Vol.1」公演スケジュール＆会員チケット受付情報',
      isNew: true
    },
    {
      date: '2025.05.15',
      category: 'NEWS',
      title: '「Snow Man Isf Stadium Live Snow World」6/13(金)22時より Netflix 世界独占配信',
      isNew: true
    },
    {
      date: '2025.05.14',
      category: 'NEWS',
      title: '村上信五「村上学線 Closs12（講師：行徳 哲男）」FAMILY CLUB onlineにて主配信が決定！',
      isNew: false
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">最新情報</h1>
      
      <div className="space-y-4">
        {newsItems.map((item, index) => (
          <div 
            key={index}
            className={`border-l-4 ${item.isNew ? 'border-blue-500' : 'border-gray-300'} pl-4 py-3`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-600">{item.date}</span>
                <span className={`text-xs font-semibold px-2 py-1 rounded ${getCategoryColor(item.category)}`}>
                  {item.category}
                </span>
                {item.isNew && (
                  <span className="text-xs bg-red-500 text-white px-1.5 py-0.5 rounded">
                    NEW
                  </span>
                )}
              </div>
              <h2 className="text-base md:text-lg font-medium text-gray-800 flex-1">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper function to determine category color
const getCategoryColor = (category) => {
  switch(category) {
    case 'CONCERT':
      return 'bg-purple-100 text-purple-800';
    case 'RELEASE':
      return 'bg-green-100 text-green-800';
    case 'INFORMATION':
      return 'bg-yellow-100 text-yellow-800';
    case 'NEWS':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default NewsFeed;