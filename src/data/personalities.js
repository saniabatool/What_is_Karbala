const personalities = [
  {
    id: 1,
    slug: "imam-hussain",
    name: "Imam Hussain (AS)",
    category: "Ahl al-Bayt",
    role: "Leader of Karbala",
    description:
      "Grandson of Prophet Muhammad (PBUH) and the central figure of Karbala.",

    biography: `
Imam Hussain ibn Ali (as) was born on the 3rd of Sha'ban in the year 4 AH (626 CE) in the holy city of Medina. He was the grandson of the Prophet Muhammad (PBUH), the younger son of Ali ibn Abi Talib (as) and Fatima Zahra (sa), and the younger brother of Imam Hassan (as). His life culminated in a profound martyrdom (Shahadat) on the 10th of Muharram, 61 AH at the Battle of Karbala in modern-day Iraq, where he and a small band of 72 companions were killed by the forces of the tyrant Yazid I after being denied water for three days
`,

    roleInKarbala:
      "He led the caravan of truth and stood against oppression despite overwhelming odds.",

    legacy:
      "His enduring legacy is that of the ultimate global symbol of social justice, moral courage, and selfless resistance against tyranny, proving to generations worldwide that standing up for truth outweighs any consequence",

    quote:
      "I have risen only to seek reform in the nation of my grandfather.",
  },

  {
    id: 2,
    slug: "hazrat-abbas",
    name: "Hazrat Abbas (AS)",
    category: "Ahl al-Bayt",
    role: "Standard Bearer",

    description:
      "Half-brother of Imam Hussain (AS) and the flag bearer of Karbala.",

    biography: `
Hazrat Abbas ibn Ali (as) was born on the 4th of Sha'ban in the year 26 AH (647 CE) in the holy city of Medina. He was the son of Ali ibn Abi Talib (as) and Fatima bint Hizam (widely known as Umm ul-Banin), the paternal grandson of Abu Talib, and the fiercely loyal brother of Imam Hassan (as) and Imam Hussain (as). His life culminated in a heroic yet tragic martyrdom (Shahadat) on the 10th of Muharram, 61 AH at the Battle of Karbala in Iraq, where he served as the Commander and Standard-Bearer (Alambardar) of Imam Hussain's army. He was brutally martyred by Umayyad forces while attempting to bring water from the Euphrates River back to the thirsty children of the camp, losing both his arms in the process
`,

    roleInKarbala:
      "He attempted to bring water for the thirsty children and remained steadfast until martyrdom.",

    legacy:
      "His enduring legacy is that of Qamar Bani Hashim (The Moon of the Hashimites), revered globally as the ultimate epitome of loyalty, selflessness, chivalry, and unconditional devotion to his brother and Imam",

    quote:
      "My life and honor are devoted to Hussain.",
  },

  {
    id: 3,
    slug: "bibi-zainab",
    name: "Bibi Zainab (SA)",
    category: "Ahl al-Bayt",
    role: "Voice of Karbala",

    description:
      "Daughter of Imam Ali (AS) and Lady Fatimah (SA), known as the Voice of Karbala.",

    biography: `
Bibi Zainab bint Ali (sa) was born on the 5th of Jamadi al-Awwal in the year 5 AH (626 CE) in the holy city of Medina. She was the granddaughter of the Prophet Muhammad, the eldest daughter of Ali ibn Abi Talib (as) and Fatima Zahra (sa), and the sister of Imam Hassan (as), Imam Hussain (as), and Hazrat Abbas (as). Following the tragic event of Karbala in 61 AH (680 CE)—where she witnessed the martyrdom of her brothers, sons, and nephews—she passed away a few years later around 62 AH or 65 AH (circa 681–685 CE), with her holy shrine located in Damascus
`,

    roleInKarbala:
      "She cared for the survivors and fearlessly spoke the truth in Kufa and Damascus.",

    legacy:
      "Her enduring legacy is that of the Sani-e-Zahra (The Second Fatima)  through her unmatched eloquence, defiant sermons in the courts of Kufa and Damascus, and fearless leadership as the protector of the surviving holy family, she single-handedly shook the foundations of Yazid's empire and preserved the true message of Imam Hussain's sacrifice for eternity",

    quote:
      "I saw nothing but beauty.",
  },

  {
    id: 4,
    slug: "ali-akbar",
    name: "Ali Akbar (AS)",
    category: "Ahl al-Bayt",
    role: "Shabih-e-Payambar",

    description:
      "Eldest son of Imam Hussain (AS), known for his resemblance to the Prophet (PBUH).",

    biography: `
Hazrat Ali Akbar ibn Hussain (as) was born on the 11th of Sha'ban in the year 33 AH (654 CE) in the holy city of Medina. He was the son of Imam Hussain (as) and Bibi Umm Layla (sa), the paternal grandson of Ali ibn Abi Talib (as) and Fatima Zahra (sa), and the brother of Imam Ali Zayn al-Abidin (as) and Hazrat Ali Asghar (as). His life culminated in an intensely heartbreaking martyrdom (Shahadat) as a young man on the 10th of Muharram, 61 AH at the Battle of Karbala in Iraq.After fighting with fierce courage, he was mortally wounded by a lance to his chest and a strike to his head while suffering from severe, agonizing thirst.
`,

    roleInKarbala:
      "He fought bravely in defense of truth and was among the first from Banu Hashim to attain martyrdom.",

    legacy:
      "His enduring legacy is that of Shabih-e-Payambar (The Mirror of the Prophet), celebrated universally for his striking, flawless resemblance in looks, voice, and manners to his great-grandfather, the Prophet Muhammad, and serving as the timeless ultimate icon of youth, devotion, and bravery",

    quote:
      "Truth is worth every sacrifice.",
  },

  {
    id: 5,
    slug: "ali-asghar",
    name: "Ali Asghar (AS)",
    category: "Ahl al-Bayt",
    role: "Youngest Martyr",

    description:
      "The six-month-old son of Imam Hussain (AS).",

    biography: `
Hazrat Ali Asghar ibn Hussain (as) was born on the 9th of Rajab in the year 60 AH (680 CE) in the holy city of Medina. He was the youngest child and infant son of Imam Hussain (as) and Bibi Rubab, the paternal grandson of Ali ibn Abi Talib (as) and Fatima Zahra (sa), and the younger sibling of Hazrat Ali Akbar (as) and Hazrat Sakina (sa). His life came to a devastatingly tragic end in a state of absolute martyrdom (Shahadat) on the 10th of Muharram, 61 AH at the Battle of Karbala in Iraq, when he was just six months old. After suffering from three days of agonizing thirst, Imam Hussain brought him to the battlefield, holding him up to ask the enemy army for a few drops of water for the dying child; instead, Yazid's commander ordered the archer Hurmila to target the infant, who shot a massive three-pronged arrow that pierced the baby's delicate neck from ear to ear while he lay in his father's arms
`,

    roleInKarbala:
      "He symbolized the suffering endured by the family of Imam Hussain (AS).",

    legacy:
      "His enduring legacy is that of Bab al-Hawa'ij (The Gate to the Fulfillment of Needs), revered globally as the youngest and most innocent martyr of Karbala, whose ultimate sacrifice stands as the most undeniable proof of the cruelty of the oppressors and the depth of Imam Hussain's patience.",

    quote:
      "A symbol of purity and innocence.",
  },

  {
    id: 6,
    slug: "imam-zain-ul-abideen",
    name: "Imam Zain-ul-Abideen (AS)",
    category: "Ahl al-Bayt",
    role: "Preserver of Legacy",

    description:
      "The surviving son of Imam Hussain (AS) and the Fourth Imam.",

    biography: `
Imam Ali ibn al-Hussain (as), widely known as Imam Zain al-Abidin (The Adornment of the Worshippers) and Sajjad (The One Prostrating Constantly), was born on the 5th of Shaban in the year 38 AH (658 CE) in the holy city of Medina. He was the son of Imam Hussain (as) and Bibi Shahrbanu (sa), the paternal grandson of Ali ibn Abi Talib (as) and Fatima Zahra (sa), and the elder brother of Hazrat Ali Akbar (as). He was the sole surviving adult male from Imam Hussain's family at the Battle of Karbala in 61 AH (680 CE), saved from the massacre only because he was bedridden with a severe, debilitating illness. Following decades of keeping the message of Karbala alive under intense state surveillance, his life culminated in a tragic martyrdom (Shahadat) by poisoning on the 25th of Muharram in the year 95 AH (713 CE) in Medina, ordered by the Umayyad caliph Al-Walid I, and he was buried in the Al-Baqi cemetery.
`,

    roleInKarbala:
      "He protected the survivors and carried the message of Karbala to future generations.",

    legacy:
      "His enduring legacy is that of the Fourth Shia Imam and the spiritual anchor of the post-Karbala era; through his shattering, eloquent sermons as a prisoner in the courts of Kufa and Damascus, and his timeless collection of profound prayers known as Al-Sahifa al-Sajjadiyya, he institutionalized the remembrance of Karbala, kept true Islamic spirituality alive, and serves globally as the ultimate epitome of patience, devotion, and resilience.",

    quote:
      "Patience and faith are the path to success.",
  },
];

export default personalities;