import { useState, useRef, useEffect } from "react";

const SearchBar = () => {
  const suggestionsList = [ "startup", "innovation", "business", "founder", "investment",
    "venture capital", "scalability", "marketing", "branding",
    "funding", "pitch deck", "business model", "disruption",
    "growth hacking", "networking", "mentorship", "bootstrap",
    "incubator", "accelerator", "lean startup", "pivot",
    "MVP (Minimum Viable Product)", "customer acquisition",
    "competitive advantage", "market research", "ROI (Return on Investment)",
    "angel investor", "product-market fit", "seed funding",
    "crowdfunding", "exit strategy", "scaling", "leadership",
    "financial planning", "business plan", "vision", "mission",
    "risk management", "team building", "customer retention",
    "brand positioning", "revenue model", "partnerships",
    "business development", "social entrepreneurship",
    "franchise", "legal structure", "profitability",
    "diversification", "digital marketing", "content marketing",
    "SEO (Search Engine Optimization)", "e-commerce", "growth strategy"];
  
  const [query, setQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    if (query.trim() === "") {
      setFilteredSuggestions([]);
      return;
    }
    const filtered = suggestionsList.filter(item => 
      item.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSuggestions(filtered);
    setShowSuggestions(filtered.length > 0);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-64 mx-auto" ref={searchRef}>
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded-md"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setShowSuggestions(filteredSuggestions.length > 0)}
      />
      {showSuggestions && (
        <ul className="absolute w-full bg-white border border-gray-300 rounded-md mt-1 shadow-md max-h-40 overflow-y-auto">
          {filteredSuggestions.map((item, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => {
                setQuery(item);
                setShowSuggestions(false);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
