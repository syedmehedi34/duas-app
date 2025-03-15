import { useState } from "react";
import { DuaProvider } from "./context/DuaContext";
import { Categories } from "./types/dua";
import { useDua } from "./context/DuaContext";
import { CategoryCard } from "./components/CategoryCard";
import { DuaCard } from "./components/DuaCard";
import { ArrowLeft } from "lucide-react";

function DuaApp() {
  const { categories, getCategoryDuas } = useDua();
  const [selectedCategory, setSelectedCategory] = useState<Categories | null>(
    null
  );

  const selectedCategoryData = selectedCategory
    ? getCategoryDuas(selectedCategory)
    : null;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-emerald-600 text-white py-6 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold">Islamic Duas & Adhkar</h1>
          <p className="mt-2 text-emerald-100">
            A collection of authentic supplications and remembrance
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {selectedCategory ? (
          <div>
            <button
              onClick={() => setSelectedCategory(null)}
              className="flex items-center space-x-2 text-emerald-600 mb-6 hover:text-emerald-700"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Categories</span>
            </button>

            <h2 className="text-2xl font-semibold mb-6">
              {selectedCategoryData?.name}
            </h2>

            <div className="space-y-4">
              {selectedCategoryData?.duas.map((dua) => (
                <DuaCard key={dua.id} dua={dua} />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onClick={() => setSelectedCategory(category.id as Categories)}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

function App() {
  return (
    <DuaProvider>
      <DuaApp />
    </DuaProvider>
  );
}

export default App;
