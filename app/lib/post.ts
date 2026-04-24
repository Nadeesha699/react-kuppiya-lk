export type Article = {
  id: number;
  title: string;
  slug: string,
  desc: string;
  category: string;
  content: string;
};

export const articles: Article[] = [
  {
    id: 1,
    title: "GTA 6 Leak",
    slug: "gta-6-leak",
    desc: "Map details leaked online",
    category: "Tech",
    content:
      "Recent GTA 6 leaks suggest a massive map expansion including Vice City and surrounding islands. Players might experience improved AI systems, realistic police behavior, and dynamic weather that changes gameplay in real time."
  },
  {
    id: 2,
    title: "From Monsters Theory",
    slug: "from-monsters-theory",
    desc: "Hidden story explained",
    category: "Film",
    content:
      "The monsters in From series may actually be cursed humans trapped in a loop for centuries. Some theories suggest the town itself is a psychological experiment where time resets every night."
  },
  {
    id: 3,
    title: "Red Sea Mystery",
    slug: "red-sea-mystery",
    desc: "Strange natural event",
    category: "Facts",
    content:
      "A rare algae bloom turned parts of the Red Sea into a deep red color. Scientists say it is caused by Noctiluca scintillans, a microscopic organism that glows at night and affects marine life."
  },
  {
    id: 4,
    title: "AI Tool Boom",
    slug: "ai-tool-boom",
    desc: "New AI tools changing world",
    category: "Tech",
    content:
      "AI tools are rapidly transforming industries such as design, programming, education, and filmmaking. Experts believe automation will replace repetitive jobs but also create new creative roles."
  },
  {
    id: 5,
    title: "Movie Secret Scene",
    slug: "movie-secret-scene",
    desc: "Hidden ending explained",
    category: "Film",
    content:
      "Many movies hide secret post-credit scenes that reveal future sequels or hidden storylines. Studios like Marvel popularized this technique to keep audiences engaged after the main story ends."
  },
  {
    id: 6,
    title: "Human Brain Facts",
    slug: "human-brain-facts",
    desc: "How memory works",
    category: "Facts",
    content:
      "The human brain stores memories through neural connections called synapses. Sleep plays a critical role in strengthening memory and removing unnecessary information from the brain."
  },
  {
    id: 7,
    title: "Cyber Attack Rise",
    slug: "cyber-attack-rise",
    desc: "Hackers are evolving",
    category: "Tech",
    content:
      "Cyber attacks are becoming more advanced with AI-powered hacking tools. Companies are now investing heavily in cybersecurity systems to protect sensitive user data and financial systems."
  },
  {
    id: 8,
    title: "Netflix Hidden Codes",
    slug: "netflix-hidden-codes",
    desc: "Secret categories exist",
    category: "Film",
    content:
      "Netflix has hidden category codes that allow users to access thousands of secret genres. These codes unlock niche content that is not visible in the normal browsing interface."
  },
  {
    id: 9,
    title: "Ocean Mystery Signals",
    slug: "ocean-mystery-signals",
    desc: "Unknown sea signals detected",
    category: "Facts",
    content:
      "Scientists have detected unexplained low-frequency signals coming from deep ocean regions. Some believe they are caused by natural tectonic activity, while others explore unknown marine phenomena."
  },
  {
    id: 10,
    title: "Future of AI Jobs",
    slug: "future-of-ai-jobs",
    desc: "What jobs will disappear",
    category: "Tech",
    content:
      "AI is expected to replace many repetitive jobs such as data entry and basic customer service. However, it will also create demand for AI trainers, automation engineers, and digital creators."
  },
  {
    id: 11,
    title: "Film Theory Shock",
    slug: "film-theory-shock",
    desc: "Big twist revealed",
    category: "Film",
    content:
      "A popular film theory suggests that the entire storyline is a reversed timeline, meaning the ending actually happens at the beginning. This completely changes how viewers interpret the movie."
  }, {
    id: 12,
    title: "IPhone 18 Air Battery 2 Days?",
    slug: "iphone-18-air-battery-leak",
    desc: "Apple එකෙන් හොරෙන් එලියට ආපු Document එකක තියෙනවා",
    category: "Tech",
    content: "Weibo එකේ Leak උන Schematic එකකට අනුව iPhone 18 Air එකේ අලුත් Silicon-Carbon Battery එකක් එනවා. ඒකෙන් සාමාන්‍ය Use එකට දවස් 2ක් අල්ලනවා කියලා Test කරලා තියෙනවා. හැබැයි Phone එක 1mm ඝනකම් වෙනවලු. Worth ද?"
  },
  {
    id: 13,
    title: "බළලුන්ට මිනිස්සුන්ගේ අසනීප අඳුරගන්න පුළුවන්",
    slug: "cats-detect-human-illness",
    desc: "උන්ගේ නහයට සුවඳ 14x වැඩියෙන් දැනෙනවා",
    category: "Facts",
    content: "Research වලින් හොයාගෙන තියෙනවා බළලුන්ට Cancer, Diabetes, Epilepsy වගේ ලෙඩ වලට කලින් එන Chemical වෙනස්කම් සුවඳින් අඳුරගන්න පුළුවන්. උඹට අසනීපයක් නම් උන් ළඟට වෙලා ඉන්නේ ඒකයි. අද ඉඳන් බළලව Respect කරපන්."
  },
  {
    id: 14,
    title: "AI එකෙන් ඕනම Photo එකක් 4K කරන්න",
    slug: "free-ai-photo-4k-upscaler",
    desc: "Watermark නෑ, Sign-up නෑ, Limit නෑ",
    category: "Tech",
    content: "Krea.ai කියන Site එකට ගිහින් 'Upscale & Enhance' Tool එක ගනින්. Blur උන, Pixel උන ඕනම Photo එකක් AI එකෙන් 4K Quality එකට හදලා දෙනවා. Midjourney වලින් හදපු Image Print කරන්න ඕන නම් මේක පට්ට."
  },
  {
    id: 15,
    title: "නුවර වැවේ මකරෙක්?",
    slug: "kandy-lake-crocodile-rumor",
    desc: "වීඩියෝ එකක් Viral වෙනවා, ඇත්තද බොරුද?",
    category: "Rumor",
    content: "Social Media වල Share වෙන Video එකක නුවර වැවේ ලොකු සතෙක් පීනනවා වගේ පේනවා. Wildlife එකෙන් කියන්නේ ඒ Monitor Lizard කෙනෙක්, ඒත් මිනිස්සු කියන්නේ මකරෙක් කියලා. උඹ මොකද හිතන්නේ? Video එක Comment කරපන්."
  },
  {
    id: 16,
    title: "Interstellar එකේ වැරදුන Science එක",
    slug: "interstellar-science-mistake",
    desc: "Nolan ටත් වැරදුනා. Einstein ගෙන් අහන්න වුනා",
    category: "film",
    content: "Interstellar එකේ Black Hole එක ලඟට ගියාම කාලය Slow වෙන සීන් එක හරි. ඒත් Miller ගේ Planet එකේ Wave එක 1.2 KM උසයි. එච්චර ලොකු Wave එකක් එන්න නම් Planet එක හැම පැය 1කටම සැරයක් හොල්ලන්න ඕන. එතකොට කාලය Slow වෙන එක වැඩ කරන්නේ නෑ. Kip Thorne සර්ටත් මේක Miss උනා."
  },
  {
    id: 17,
    title: "Thama Film එක Stree 2 එකට Connect වෙන්නේ මෙහෙමයි",
    slug: "thama-stree2-connection",
    desc: "Post-Credit Scene එකේ හිටියේ කවුද?",
    category: "film",
    content: "Stree 2 ඉවර වෙලා Post-Credit Scene එකේ Sarkata ගේ ඔලුව අරන් යන Character එක Nawazuddin Siddiqui. එයා තමයි Thama එකේ Main Vampire. Maddock Universe එකේ දැන් භූතයෝ, Werewolf ලා ඉවර වෙලා Vampires ලා පටන් ගන්න යන්නේ. Avengers: Endgame වගේ Universe Cross-over එකක් 2028 දී එයි."
  }
];