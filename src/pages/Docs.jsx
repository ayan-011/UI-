import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react"; // added Menu + X icons

// 👇 Sample Documentation Structure
const docs = {
  animals: {
    title: "Animals",
    subtopics: [
      { id: "mammals", title: "Mammals", content: "Mammals are warm-blooded animals with fur or hair. ..." },
      { id: "birds", title: "Birds", content: "Birds have feathers, wings, and most can fly. ..." },
      { id: "fish", title: "Fish", content: "Fish are aquatic animals that breathe through gills. ..." },
    ],
  },
  plants: {
    title: "Plants",
    subtopics: [
      { id: "trees", title: "Trees", content: "Trees are tall plants with a trunk and branches." },
      { id: "flowers", title: "Flowers", content: "Flowers are the reproductive parts of many plants." },
      { id: "grasses", title: "Grasses", content: "Grasses are monocot plants with narrow leaves." },
    ],
  },
  technology: {
    title: "Technology",
    subtopics: [
      { id: "computers", title: "Computers", content: "Computers process data and execute instructions." },
      { id: "internet", title: "Internet", content: "The Internet connects computers globally." },
      { id: "ai", title: "Artificial Intelligence", content: "AI simulates human intelligence in machines." },
    ],
  },
};

// 👇 Sidebar Menu Data (with collapsible categories)
const menu = [
  {
    id: "nature",
    label: "Nature",
    children: [
      { id: "animals", label: "Animals" },
      { id: "plants", label: "Plants" },
    ],
  },
  {
    id: "science",
    label: "Science & Tech",
    children: [
      { id: "technology", label: "Technology" },
    ],
  },
];

export default function Docs() {
  const [openMenus, setOpenMenus] = useState({});
  const [activeDoc, setActiveDoc] = useState("animals");
  const [activeSubtopic, setActiveSubtopic] = useState(docs["animals"].subtopics[0].id);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sectionRefs = useRef({});
  const middleRef = useRef(null);

  // IntersectionObserver for Right Sidebar
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSubtopic(entry.target.id);
        });
      },
      { root: middleRef.current, threshold: 0, rootMargin: "-20% 0px -80% 0px" }
    );

    docs[activeDoc].subtopics.forEach((sub) => {
      if (sectionRefs.current[sub.id]) {
        observer.observe(sectionRefs.current[sub.id]);
      }
    });

    return () => observer.disconnect();
  }, [activeDoc]);

  const toggleMenu = (id) => setOpenMenus((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="flex h-screen overflow-hidden bg-zinc-900 text-white">
      {/* Mobile Top Bar */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-zinc-800 border-b border-zinc-700">
        <h2 className="text-lg font-bold">Docs</h2>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Left Sidebar */}
      <div
        className={`fixed lg:static top-0 left-0 h-full w-3/4 max-w-xs bg-zinc-900 p-4 z-20 transform transition-transform duration-300 
        ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:w-1/5 overflow-y-auto`}
      >
        <h2 className="text-lg font-bold mb-3">Docs Menu</h2>
        <ul className="space-y-2">
          {menu.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => toggleMenu(item.id)}
                className="flex justify-between w-full px-2 py-1 rounded hover:bg-zinc-800"
              >
                {item.label}
                {openMenus[item.id] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {openMenus[item.id] && (
                <ul className="ml-4 mt-2 space-y-1">
                  {item.children.map((child) => (
                    <li key={child.id}>
                      <button
                        onClick={() => {
                          setActiveDoc(child.id);
                          setMobileMenuOpen(false); // auto close on mobile select
                        }}
                        className={`w-full text-left px-2 py-1 rounded ${
                          activeDoc === child.id ? "bg-zinc-700 font-bold" : "hover:bg-zinc-800"
                        }`}
                      >
                        {child.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Middle Content */}
      <div
        ref={middleRef}
        className="flex-1 overflow-y-auto p-6 space-y-20 h-screen scroll-smooth"
      >
        <h1 className="text-3xl font-bold mb-6">{docs[activeDoc].title}</h1>
        {docs[activeDoc].subtopics.map((sub) => (
          <section
            key={sub.id}
            id={sub.id}
            ref={(el) => (sectionRefs.current[sub.id] = el)}
            className="scroll-mt-20"
          >
            <h2 className="text-2xl font-bold mb-3">{sub.title}</h2>
            <p className="leading-relaxed text-gray-300">{sub.content}</p>
          </section>
        ))}
      </div>

      {/* Right Sidebar */}
      <div className="hidden lg:block w-1/5 bg-zinc-800 p-4">
        <h2 className="text-lg font-bold mb-3">On this page</h2>
        <ul className="space-y-2">
          {docs[activeDoc].subtopics.map((sub) => (
            <li key={sub.id}>
              <a
                href={`#${sub.id}`}
                className={`block px-2 py-1 rounded ${
                  activeSubtopic === sub.id
                    ? "text-blue-500 font-bold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {sub.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
