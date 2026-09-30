export interface TitleItem {
  id: string;
  title: string;
  subtitle?: string;
  type: 'series' | 'movie';
  image: string;
  heroImage?: string;
  matchScore: number;
  year: number;
  rating: 'TV-MA' | 'TV-14' | 'PG-13' | 'TV-PG' | 'R' | 'PG' | 'G';
  durationOrSeasons: string;
  quality: '4K Ultra HD' | '1080p HD' | 'HDR';
  audio?: string;
  tags: string[];
  description: string;
  cast: string[];
  creator?: string;
  progressPercent?: number;
  rank?: number;
  badge?: string;
  episodes?: {
    id: number;
    title: string;
    duration: string;
    description: string;
    image: string;
  }[];
}

export const BILLBOARD_TITLE: TitleItem = {
  id: 'chronovoid',
  title: 'CHRONOVOID',
  subtitle: 'ORIGINS OF THE FRACTURE',
  type: 'series',
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCymVi8TMoeWtf1LAEokLhejv7-HOYABt7OzchKNPCgwpIlOX4hezBuOd0I20NpnHaCKQgVpIbB8rYKame4bnBqvVm-uHZeEbwb0M4lBoAC4AODF77nmS9-iv_zY3TDtgokRKJ6sRPrPlG1DcxDKFDFXeN7K1UbgEWxepK729pOm3dLDsJkJixgDfCdjH1t3j9nGLAt9SCbvQlSFE_5fYQ9qeel6gj8fbzAyYrLm8X4X2M4OS6IDctlBQ',
  heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCymVi8TMoeWtf1LAEokLhejv7-HOYABt7OzchKNPCgwpIlOX4hezBuOd0I20NpnHaCKQgVpIbB8rYKame4bnBqvVm-uHZeEbwb0M4lBoAC4AODF77nmS9-iv_zY3TDtgokRKJ6sRPrPlG1DcxDKFDFXeN7K1UbgEWxepK729pOm3dLDsJkJixgDfCdjH1t3j9nGLAt9SCbvQlSFE_5fYQ9qeel6gj8fbzAyYrLm8X4X2M4OS6IDctlBQ',
  matchScore: 99,
  year: 2025,
  rating: 'TV-MA',
  durationOrSeasons: '1 Season',
  quality: '4K Ultra HD',
  audio: 'Dolby Atmos • 5.1',
  tags: ['Mind-Bending', 'Sci-Fi Thriller', 'Dark Mystery', 'Cosmic Horror'],
  description: 'When an unexplainable temporal tear fractures an isolated Pacific Northwest research town, an enigmatic youth with kinetic capabilities allies with four determined outcasts to stop an insidious cosmic entity before reality collapses.',
  cast: ['Maya Lin-Vance', 'David O\'Reilly', 'Elena Cruz', 'Thomas Sterling'],
  creator: 'The Duffer Brothers & Marcus Shaw',
  episodes: [
    {
      id: 1,
      title: 'Chapter One: The Oregon Rift',
      duration: '54m',
      description: 'On a freezing October dusk in Blackwood Ridge, gravitational oscillations trigger a blackout. An unusual signal ripples across radio frequencies.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCymVi8TMoeWtf1LAEokLhejv7-HOYABt7OzchKNPCgwpIlOX4hezBuOd0I20NpnHaCKQgVpIbB8rYKame4bnBqvVm-uHZeEbwb0M4lBoAC4AODF77nmS9-iv_zY3TDtgokRKJ6sRPrPlG1DcxDKFDFXeN7K1UbgEWxepK729pOm3dLDsJkJixgDfCdjH1t3j9nGLAt9SCbvQlSFE_5fYQ9qeel6gj8fbzAyYrLm8X4X2M4OS6IDctlBQ'
    },
    {
      id: 2,
      title: 'Chapter Two: Kinetic Resonance',
      duration: '49m',
      description: 'Marcus tests the limits of his kinetic sensitivity while local sheriffs investigate an inverted crater at the abandoned radio telescope.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPcB7n2Us5DG1skaj8lykiJyvma49LKwcP-mKBTgUJZVSAAa1fdA74xIu7P84cZeHF-2P8gbkN_06RU76OEwANVZt1fucms6WbZV7PdWaQE-frT0VHPQGkUAu_Qr-P2zo_pAugz-1Vb2FcytnMw6qz-bIERP45PjosLFXMsiW2VhgWHDmF0c1__HZLpe0azFOebRbwacGg1xd2Rh-P2VyLZbEMe3dNZaSl--asjaHvC1WrgezsKEtDNw'
    },
    {
      id: 3,
      title: 'Chapter Three: Echoes of the Void',
      duration: '58m',
      description: 'A shadowy federal task force quarantines the valley as the fracture pulses crimson aurora borealis across the mountain range.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVFVoGVa6NE5VsPJUlQlBaYg0VYplkiSZotiaCpWGCUw4im6J5lpEWCQU1EWp72LurSRI0hRkA9kCY0NO3DKtysvd8OmhaV04YBmch-OcOWtkxS67Hcs5W2SIT2iGQiiwSk2Abi0DkqCmmnt6OsztQC2Dlu3Hb09t69Aa-UHJMdgDPmbhbbsBEcibJp1Lkls9dVAbnL9-0rjF3GvkvuwIvIf34FQTqk_iOo0Rw1_px2-MVcjW_Ms8okw'
    }
  ]
};

export const CONTINUE_WATCHING_TITLES: TitleItem[] = [
  {
    id: 'cw-1',
    title: 'Neon Detective: Shinjuku Files',
    subtitle: 'Synapse Override',
    type: 'series',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAW2QTDuEm0t-DTpMa-rscpI7oajJ0DkZqdUMj7ybgCdjKjR1Sq9Wzux-5aB7qcJzLjvv_5uk-NiU3_666jM1lPWlekfqmINO0tWpbzc3Hrei1ydJNvjntXWltcP4LvJxkwrMuVN-OGNtNFCxrjaTQicBvqzXUhKrTptRe3UwVNf7r3g_BtSyPk7DrRwHEPi_ZldSIsEIphk1z8S2XduybeRoUvveQKQU5CRu8wji2dtYWQI9YKKt_zvw',
    matchScore: 96,
    year: 2024,
    rating: 'TV-MA',
    durationOrSeasons: 'S2:E4',
    quality: '4K Ultra HD',
    progressPercent: 72,
    tags: ['Cyberpunk', 'Neo-Noir', 'Synthetics', 'Investigation'],
    description: 'In neon-flooded 2089 Tokyo, an outcast synthetic investigator with ocular modifications unearths an executive memory wiping syndicate.',
    cast: ['Kenji Sato', 'Renata Santos', 'Aria Chen']
  },
  {
    id: 'cw-2',
    title: 'Crimson Shadow',
    subtitle: 'Shadow of the Realm',
    type: 'movie',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwYXgubM6T7S-bAc788VaBaEF01cVYsjhdbS2OeEksjklF3IToe66ByClaGwOXtyyPM57I8diYKVcOsTBpk2mYYH_8uiZPzLPvDuTTJUbcT5-5R4lJqyfUm1rU9W-QCiDGQk6s1TNemgB_AXBYVqbpmK2ARDJhZ69rKV0zolkI9ooNQ_CWtnd_mgbEeVivy9cpQtRgzcgy3JgNF9_SQ7MAX0WQdmfT74ErNziplouWAceBau845SiHuQ',
    matchScore: 94,
    year: 2024,
    rating: 'TV-MA',
    durationOrSeasons: '1h 14m left',
    quality: 'HDR',
    progressPercent: 38,
    tags: ['Dark Fantasy', 'Medieval', 'Swords & Sorcery'],
    description: 'Under a blood moon, an exiled paladin wielding a cursed embers blade defends a crumbling fortress from demonic shadows.',
    cast: ['Torin Vance', 'Isolde Gray', 'Brynjar Thorne']
  },
  {
    id: 'cw-3',
    title: 'Abyss Watcher',
    subtitle: 'Abyssal Depth: Protocol',
    type: 'series',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7kelfuRJTLl6nDeXejJ5M2OJBh6XyvE4N60RIQbFrLyRBnYppHRmRwtJnYlV_zYcXgOvJUspe-q2QN0tdkri_ucq9uU8pXEgtg0YvcdFXIWc-nXJcWovpx0xaM5KRAYwr_PoSZPbRUbna7cCnKudL_Lh2BjAgNZRDp9B5mPk73tdCI4zA5uCVYXRPf0VAMq-HoQMg1LU1Lbmrjh_T3TdcwTYvKs2QsPs6gIbYu7TuYd0svEYgRJKLyw',
    matchScore: 98,
    year: 2024,
    rating: 'TV-MA',
    durationOrSeasons: 'S1:E8',
    quality: '4K Ultra HD',
    progressPercent: 88,
    tags: ['Deep Ocean', 'Claustrophobic Thriller', 'Submarine'],
    description: 'A deep-sea research crew encounters a colossal, unknown biological anomaly lurking in the Mariana Trench.',
    cast: ['Gabriel Silva', 'Claire Novak', 'Zayn Farooq']
  },
  {
    id: 'cw-4',
    title: 'Gilded Heist',
    subtitle: 'The Geneva Extraction',
    type: 'movie',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZEr4s_vkFG4ysJF8CERiEPEpRFHOjV-mAnJOYVtVQ0qRcury1rq1Gkpxs9q9XBgS1W-64KCZebJAm_lja7kfAvQRAZEVvokw3QhCwPM1955V2riqXml8RPtNfKilG7SlPSy_rowT8fKryraZFNVP9_UJFTUv0xwA2VleqNJh3RthMQZ1tDs58EEgNbNAii8HLm2avJneCSdY3fP9L2_QxW-T9VsaLcwvexitIFTm9yWWdfLc1OdWI3g',
    matchScore: 91,
    year: 2024,
    rating: 'PG-13',
    durationOrSeasons: '42m left',
    quality: '1080p HD',
    progressPercent: 52,
    tags: ['Action Thriller', 'Stealth Heist', 'High Stakes'],
    description: 'An elite acrobat thief executes the most daring laser grid bypass in Swiss private banking history.',
    cast: ['Chloe Delacroix', 'Julian Banks', 'Mateo Ricci']
  },
  {
    id: 'cw-5',
    title: 'Rustlands: Road Out',
    subtitle: 'Convoy Alpha',
    type: 'series',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPYkgaG6RdnEeBU8jvqrKdlT1nNba6iTFMHgJvsdHqXpmwNLk3PLOT4yhvZjxmziqMtT6Ytl3X-zLNy7q-d4BjiqraWnN_T5Y5HyAglaAcXQzg7h_B4qWQgfxINYTjqVJcTcYMTSBS2TFuj2T_vxGxIlkArbBe4HG2JO2VY703gv5guB7VDUIJK1-McwNYuZFB3v6fl3kY_1PaJFa4CfnUC-2nQ6tLGYgEBPt69qewWYVoJvKKDlRsRw',
    matchScore: 89,
    year: 2023,
    rating: 'TV-MA',
    durationOrSeasons: 'S3:E1',
    quality: '1080p HD',
    progressPercent: 18,
    tags: ['Post-Apocalyptic', 'High Octane', 'Survival'],
    description: 'Armored muscle cars race across scorched salt flats in a desperate sprint toward the last clean freshwater aquifer.',
    cast: ['Rory McAllister', 'Sienna Cruz', 'Klaus Weber']
  }
];

export const TRENDING_TITLES: TitleItem[] = [
  {
    id: 'tr-1',
    title: 'The Blackwood Verdict',
    type: 'series',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvbNI3rL_REczWF6T2pLhJ2p3GnWX7gT4xSe6Bm2mduG-yF360o5Yfs8sdaxAOgFlSHgQJJadLhwfPsYRzhfkz3J0fhxCswz8PEGzrKYpd98_al3n8DWJaf6eg0cwGSc17EINjrrrsO6YtzZvjDnxZKeLeg2a0joOfKW3DA41Drbh1pyXzqrgNfxx9Sqr3ZxeEVsJTo9v_UOMqSa1Bu4FL6e0SNrGISqZNM_LkIUho285oKYrJYpmSNQ',
    matchScore: 98,
    year: 2025,
    rating: 'TV-MA',
    durationOrSeasons: '4 Seasons',
    quality: '4K Ultra HD',
    badge: 'New Season',
    tags: ['Legal Thriller', 'Courtroom Drama', 'Political Intrigue'],
    description: 'A federal defense attorney risks disbarment and assassination to present encrypted evidence dismantling a national intelligence cabal.',
    cast: ['William Sterling', 'Rachel Adams', 'Harold Finch']
  },
  {
    id: 'tr-2',
    title: 'Apogee: Station Zero',
    type: 'movie',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBo8Zyoej354UGN0F_KLlCHJYwPkp9wsI_Y_nJoChzItoCB8IlLmyAERi2OOcFxld0fBOFyg-3IQ3GVXd9yN_7XjBEQMxEI0wRf0AI9un0_-Evl93rU-oABybf1RPaJVo3O12hqyhiaoDpWbqV0wif4UgVpIXAxaqet87WP-bnS6KK1zr_S4sM4fFSATk9OtGcdBhvywFjRibGebnD_G4rdPMfyM90pOzQAED76-SE-Kgl_WYJkLR7f2A',
    matchScore: 97,
    year: 2024,
    rating: 'PG-13',
    durationOrSeasons: '2h 8m',
    quality: '4K Ultra HD',
    badge: 'Recently Added',
    tags: ['Sci-Fi', 'Space Survival', 'Realistic Aerospace'],
    description: 'During emergency repairs on an orbital telemetry mirror, an astronaut becomes untethered amidst a cascading space debris storm.',
    cast: ['Elena Rostova', 'Neil Armstrong Jr.', 'Hiro Tanaka']
  },
  {
    id: 'tr-3',
    title: 'Fjord Murders',
    type: 'series',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAd9n8MaCJ2mKVpz7GybEHA_XlurKG_RwesCcyn9AYXEECNQPjCFSwoVOzOry0aALQswE7kwuSfDu26Ju7_4ZS1w9A3hhcqO6U5u955Az6VjNHmIUSEeCUNLvVcYmDxCeG-36JFAt0XtIWYqZnCS_JZZdcd32MK2k7U0dVrAnKxxRRkfGLhODhWq4e57JjofefiPgW4OFRD8zwSVgXldf8n5DsQHPT5aRSm0NKWGxq0XJNvdtq8VHpBAw',
    matchScore: 95,
    year: 2024,
    rating: 'TV-MA',
    durationOrSeasons: 'Limited Series',
    quality: '1080p HD',
    tags: ['Nordic Noir', 'Cold Case', 'Atmospheric', 'Chilling'],
    description: 'Two estranged detectives follow frozen tracks into a remote glacial ice cavern, unearthing secrets buried since the Cold War.',
    cast: ['Astrid Lind', 'Lars Mikkelsen', 'Freja Jensen']
  },
  {
    id: 'tr-4',
    title: 'Culinary Alchemy',
    type: 'series',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDT-nGgvNXxakGWW4-ITU6AB8EBvTfmMX5d5oYHFIhej6IjTDtY6nYgazc8hv4N4_IbhtbLkWEf8UwLD8vWXo1G_-Ii_k9ntqrGffDQCfk6dq9ct2UkQqc7QMjpzBakee_jZqULKj-Ld-Ep4rc2xkrSDolt511O8aqUnSkMe1LZt5_rSQMCCHmfIditSLWiNxuKxzHzHXbWueatQYGxID9238Hr96sLOv1CaYUQ1TaR97iZBjLNkg9tFA',
    matchScore: 99,
    year: 2024,
    rating: 'TV-14',
    durationOrSeasons: '3 Seasons',
    quality: '4K Ultra HD',
    badge: 'Top Rated',
    tags: ['Gastronomy', 'Docuseries', 'Artistry', 'Exquisite'],
    description: 'Go inside the world’s most daring kitchens where physics and molecular gastronomy collide to redefine sensory dining.',
    cast: ['Chef Jean-Luc Moreau', 'Chef Mei Lin', 'Chef Carlo Rossi']
  },
  {
    id: 'tr-5',
    title: 'Apex Circuit',
    type: 'series',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDd5Jn9OLVhPNUlrj9Yb96HHc-Sy-kAF-yO82LDT1BYc-79_UvGShQmcD16cxOtlKx_GBx58UOYnTiRJ0ObnDViUGZwycfUxPK45rIlNMR071UsupjAyX3LXk1RYboMEYWyc93Wpm8drAWmiVKwWX4tmpve_5bNxtX6vw-D9DYX5-pOPSUKbnCA_Qk63j5hs51zz_PK8Y7UScqiBaNM0GqXHlYKATYWnxpjiLugA8FMYozhSha-EDNtw',
    matchScore: 92,
    year: 2024,
    rating: 'TV-MA',
    durationOrSeasons: '1 Season',
    quality: 'HDR',
    tags: ['Motorsport', 'Electric Hypercars', 'Adrenaline'],
    description: 'Behind the high-roller rivalries of the inaugural Formula Zero electric Grand Prix street championship across Monaco and Singapore.',
    cast: ['Leo Leclerc', 'Sébastien Font', 'Tariq Al-Mansoor']
  }
];

export const TOP_10_MOVIES: TitleItem[] = [
  {
    id: 'top10-1',
    rank: 1,
    title: 'Stargazer: Onslaught',
    type: 'movie',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJMAB8x1nsZoo-wAOPCEOkWqxMUa01U2nq9Vihv8zr-67quWacvrO_aKQ6UR_g6382qga9C6cMcNb0P2h_q0yTvF0nPPh5UfW09S37JV1lmbENbEDx77I9zf6bpE0ZmErF_twIduar5tbhb3-0_EjBfcHGC48mI3ZoKihW9yJteBM1UnWHyF2cBQ32W287kUl8cKaeid-WfovvYMsEkXJcysLyrtXzqeSj6Iep3pbzwxSyFzn-_TJYAA',
    matchScore: 99,
    year: 2025,
    rating: 'PG-13',
    durationOrSeasons: '2h 18m',
    quality: '4K Ultra HD',
    tags: ['Blockbuster', 'Space Fleet', 'Epic Action', 'Exosuits'],
    description: 'Fleet Commander Rebecca Cole leads Earth’s last battlecruiser squadron into planetary orbit to repel an overwhelming extraterrestrial siege.',
    cast: ['Rebecca Cole', 'Julian Mercer', 'Commander Hayes']
  },
  {
    id: 'top10-2',
    rank: 2,
    title: 'Nighthawk: Tokyo Shadow',
    type: 'movie',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAW-XYZhfjKbjnoPDAknrJAKac88TZRo7WT1Yc6fgn2p1sbOF9D3-Q-jzUOlosHp5D_SOwRH-b4N6V1tjx3827C9rcOAWaWH9Za6YOcIthL0lE05Y0xgzKQiDplg-zh6920mMqGvsTP7ns6wy92kWAoGPH7eoI6s_7rctf_DJR_bUXC7GGruytR6pf2NM9j1olQUVz9ekl3YM7DbZQs2yD6mjt-xcd83T2P7ausdn_ktgFlhHU6hwb5vQ',
    matchScore: 96,
    year: 2024,
    rating: 'R',
    durationOrSeasons: '1h 56m',
    quality: '4K Ultra HD',
    tags: ['Martial Arts', 'Neo-Noir Assassin', 'Kinetic Combat'],
    description: 'A betrayed syndicate operative wages a one-man war across rain-drenched rooftops in Shinjuku against an army of suited bodyguards.',
    cast: ['Takeshi Kaneshiro', 'Michelle Yeoh-Lee', 'Gordon Liu']
  },
  {
    id: 'top10-3',
    rank: 3,
    title: 'The Whispering Manor',
    type: 'movie',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzrja_nKX8DDr90P_KKOPww0G-Z2Tbi5mvK1zCfst94MYVBFiu9ddO_jo4DSi08-fDtGqOoNNs-xeTRZPni8HivIlYIPhYPxuh9s5pZIQPeeuqkFyJ3qhJzckaAzpqjTtlUJMn0qpbov3ljMw9hAQ5y6LCTg__CY75IdFNbEgwqb6U_zid0bKL5vgkylzuxGK09jlKKw-56pO_A4N_ao-LboW7U2LoV9TQKnqSUzwH_gw_rSyF5T-Q_Q',
    matchScore: 93,
    year: 2024,
    rating: 'TV-MA',
    durationOrSeasons: '1h 48m',
    quality: '1080p HD',
    tags: ['Gothic Horror', 'Haunted Estate', 'Psychological'],
    description: 'A young conservator restructures an isolated Victorian manor, only to discover the family portraits whisper dark secrets at twilight.',
    cast: ['Charlotte Hope', 'Matthew Macfadyen', 'Fiona Shaw']
  },
  {
    id: 'top10-4',
    rank: 4,
    title: 'Skyward Odyssey',
    type: 'movie',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKXuClio1yiVlpzJwuv6lCgzRTXYxXpYFVDGsxBMKGG-7hwT0CZeoCAONQj3T6fqdRoyc3UM74UqAyor00sc8m4_X_GUcXW93fWn-uxUpYka25vWmhREyQuzzN1kYYl2foKj9kB5PsZXYUbl5NzqE8gNDquT30Yc2Eo5S0C22mbgrH-j5h0t83lxVpJAKwZMl7Oqt6HDjt8DogaW6mK1SVUJTX2-8FzGcNo-scXLO9bYk37EHjg-TjXQ',
    matchScore: 97,
    year: 2024,
    rating: 'PG',
    durationOrSeasons: '1h 42m',
    quality: '4K Ultra HD',
    tags: ['Family Adventure', 'Animation', 'Fantasy', 'Wholesome'],
    description: 'A brave young explorer and her bioluminescent flying cloud whale embark on a magnificent voyage across celestial islands in the clouds.',
    cast: ['Voiced by Hailee Steinfeld', 'Awkwafina', 'Sterling K. Brown']
  },
  {
    id: 'top10-5',
    rank: 5,
    title: 'The Gilded Boardroom',
    type: 'movie',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJr6XxxGFKwniFA7fWMpxv1Dxjs1K1tVFdtBDRx64bp6o_aNSa46z3XCe95e3oJDab17IYedv-VBsUkeeTpjtER6v4-8arkTSfPd3ng78H5irBiwRubldXD1w8earFW-yybkrgyDDjd_ZIEhXsE9GQihQOnKj0-mDfLRvbQXb52AgsNML5rkfaiM1JdIKGBtkX9rDW6r1kMvkyQazXzaIhsQ8TCM6ZY-rsqJP9bcm3hC9lSRdcUQ1t0A',
    matchScore: 94,
    year: 2024,
    rating: 'R',
    durationOrSeasons: '2h 10m',
    quality: '1080p HD',
    tags: ['Financial Drama', 'Wall Street', 'Betrayal', 'Greed'],
    description: 'During a 72-hour hostile takeover in lower Manhattan, two hedge fund partners turn corporate cutthroats with billions on the line.',
    cast: ['Damian Lewis', 'Paul Giamatti', 'Corey Stoll']
  }
];

export const SCI_FI_ACTION_TITLES: TitleItem[] = [
  {
    id: 'sci-1',
    title: 'Neon Vector 2088',
    type: 'series',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPcB7n2Us5DG1skaj8lykiJyvma49LKwcP-mKBTgUJZVSAAa1fdA74xIu7P84cZeHF-2P8gbkN_06RU76OEwANVZt1fucms6WbZV7PdWaQE-frT0VHPQGkUAu_Qr-P2zo_pAugz-1Vb2FcytnMw6qz-bIERP45PjosLFXMsiW2VhgWHDmF0c1__HZLpe0azFOebRbwacGg1xd2Rh-P2VyLZbEMe3dNZaSl--asjaHvC1WrgezsKEtDNw',
    matchScore: 99,
    year: 2024,
    rating: 'TV-MA',
    durationOrSeasons: '2 Seasons',
    quality: '4K Ultra HD',
    tags: ['Cyberpunk', 'Holographic Dystopia', 'Flying Interceptors'],
    description: 'In an electric rain megacity governed by neural algorithms, a renegade hacker discovers the simulation’s master override protocol.',
    cast: ['Aris Thorne', 'Yuki Tanaka', 'Viktor Stone']
  },
  {
    id: 'sci-2',
    title: 'The Andromeda Breach',
    type: 'movie',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVFVoGVa6NE5VsPJUlQlBaYg0VYplkiSZotiaCpWGCUw4im6J5lpEWCQU1EWp72LurSRI0hRkA9kCY0NO3DKtysvd8OmhaV04YBmch-OcOWtkxS67Hcs5W2SIT2iGQiiwSk2Abi0DkqCmmnt6OsztQC2Dlu3Hb09t69Aa-UHJMdgDPmbhbbsBEcibJp1Lkls9dVAbnL9-0rjF3GvkvuwIvIf34FQTqk_iOo0Rw1_px2-MVcjW_Ms8okw',
    matchScore: 96,
    year: 2024,
    rating: 'PG-13',
    durationOrSeasons: '2h 24m',
    quality: '4K Ultra HD',
    tags: ['Interstellar Exploration', 'First Contact', 'Three Suns'],
    description: 'An expedition crew steps onto crystalline alien soil beneath three iridescent stars, triggering an ancient terraforming countdown.',
    cast: ['Jessica Chastain', 'Oscar Isaac', 'Cillian Murphy']
  },
  {
    id: 'sci-3',
    title: 'Mach 9: Overcast',
    type: 'movie',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEz1cUulxii7wdiF8pQWnv1JByDyX0f6KgOSTIYjHfksAop0MwFly8RUmhs_XZY7IIlAJYhp0nYcilwa_0Y2V6RJP3hTh7-DIvn6qU_eIe0LLKZP46EmJjR_3mKxXwdE2XAOgBvMX7q1wjKaFi0KyJbE-BW7rRi34kaWE-RkT0LjrpqCol22e5MriJHyiDr86z0AkPp3OlBWD6NpvrwglMBF-SGqbKeK1s3jypoKAPgQEGmmkWSrJR_w',
    matchScore: 95,
    year: 2024,
    rating: 'PG-13',
    durationOrSeasons: '1h 58m',
    quality: '4K Ultra HD',
    tags: ['Hypersonic Jet', 'Dogfight Action', 'Aerial Warfare'],
    description: 'Prototype scramjet test pilots push beyond Mach 9 over stormy airspace to stop a rogue military orbital weapon platform.',
    cast: ['Miles Teller', 'Glen Powell', 'Monica Barbaro']
  },
  {
    id: 'sci-4',
    title: 'Permafrost Incident',
    type: 'movie',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA75KQiuDswvPDX2xLusVg-kt66WWE126DfZYevE_ZbWU6aXKTOckytfqO16epYLjvA1Rb-CVXiLOGYSV-10KUb65Gz0ey6By8NzX3YNkFsPJ-ZgAgnkBtWZ8Wio_r2LGkNGin_xq_8se5TiOjGb5K9FFwM9WSQ_hzVIsjUCblOo1eKJVWJS4JfXm7e4Q9fZzi2Qh-qvan5j6MIxtUgOTBUDV94kch8gZTKARB4mNKJ4upD0tWfArqKvA',
    matchScore: 93,
    year: 2023,
    rating: 'TV-MA',
    durationOrSeasons: '1h 55m',
    quality: '1080p HD',
    tags: ['Arctic Mystery', 'Cold Dread', 'Alien Vessel'],
    description: 'Heavy tracked ice rovers drill through a Siberian glacier and accidentally release a pathogen preserved since the Pleistocene.',
    cast: ['Nikolaj Coster-Waldau', 'Noomi Rapace', 'Stellan Skarsgård']
  },
  {
    id: 'sci-5',
    title: 'Singularity Core',
    type: 'series',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1vUTnuVGjKa-bCSwQQ8hMli3L2O2UCtblHmZqZ8gT_R0ce32ukdeFFqcYHbENZehFnzhWZ1ICkfk2UbhG9IybJ9VNgMoRQRVw6CkJ5lSC6XL_WHvh1sW2OFouxivqbDfg10UqpkMzi_c1XDzP0XzRVPtA9AqrqUlgiD-CF_tylA98F1UWP8NC1cydkmQRpCyGAA0gcR9N-dQ-eNBnRRJY1Q52PCoOord2eLzhoOUw7AfN2vNY0e8Sdw',
    matchScore: 98,
    year: 2025,
    rating: 'TV-MA',
    durationOrSeasons: '1 Season',
    quality: '4K Ultra HD',
    tags: ['Quantum Mechanics', 'Antigravity', 'Disaster'],
    description: 'A subterranean particle collider triggers micro-black holes, causing localized pockets of inverted gravity throughout Geneva.',
    cast: ['Alexander Skarsgård', 'Brie Larson', 'Dev Patel']
  }
];

export const MY_LIST_TITLES: TitleItem[] = [
  {
    id: 'mylist-1',
    title: "The Grandmaster's Gambit",
    type: 'series',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdAj-8G4kcbsiX_rUibiR5pkO5jm6gJN6CVWLgh4pBgBHnqbSJ92iet4x_2Ma0uEgyPtxF4UTsW-uinS2wOFVjpNshaq4Lu0-wqCBk0QiT3XE982HRzJK5syDfcXartCgu9DJXIfflGuBgKrJRUZ7djGd2AQIF3BBQ_eIdJfz7XWgZqyS23aRK_kI7AY9PiavGk_X1B0ogH1O0Us97nwXMH6-4JizwGNkH325KN-W2eCJcwkMhc4P14w',
    matchScore: 99,
    year: 2024,
    rating: 'TV-MA',
    durationOrSeasons: '7 Episodes',
    quality: '4K Ultra HD',
    tags: ['Mind Game', 'Psychological Drama', 'Master Chess'],
    description: 'An orphaned chess prodigy battles addictions and Cold War espionage on her path to challenging the reigning world champion in Moscow.',
    cast: ['Anya Taylor-Joy clone', 'Bill Camp', 'Marielle Heller']
  },
  {
    id: 'mylist-2',
    title: 'Peak of Solitude',
    type: 'movie',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKpcsap5egVaPK9xyNFSQYwjkKeB3rT4xSdZEIMKuQ8teBatI10a-C8C9dXeDrcOsyDgL6Ev7kFykGUbMQYokrdKFfIpU6v7uOcCXQzTn1m8MTm0tYycdshCYftgtfseggZtG71yiSmUTYhzplX33w6SrCqdJwzelwUQQs6tC9o6eOX5zazPSRuPxU-vv75JKLRcLcCc2Q558a7OMM_Fp0t7XyGNXsIE-QUWMpCGrV_8qajv5lGdiNdQ',
    matchScore: 94,
    year: 2024,
    rating: 'PG-13',
    durationOrSeasons: '1h 48m',
    quality: '4K Ultra HD',
    tags: ['Survival Drama', 'Himalayas', 'Extreme Mountaineering'],
    description: 'Trapped on an 8,000-meter ridge during an unexpected blizzard, an alpinist must descend without ropes or satellite comms.',
    cast: ['Jason Clarke', 'Josh Brolin', 'John Hawkes']
  },
  {
    id: 'mylist-3',
    title: 'Eclipse of the Ronin',
    type: 'movie',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoPEz3sKqW-buLOSq_3GQ_VDrEQiY_iSlJUXU-hHUU_11VpXaF34uPc6RxGziLL_s_XvYDQllvFXsed-yXECNzpFQu-LHay4qNen9Qu-UFIQZ_qzOuZ3uDdxU9lszid_5UryPIuMZqKjwIL6Q8Rp2UqfRNnJl3qCt8IwbX3wHxvsHo1QnOqiLswVp99CT-vUgGaG2d4zJ7fvoX-l6_78naz35jNM_qGJzDmCyrADdq7ISuLW8f6KxNvw',
    matchScore: 96,
    year: 2024,
    rating: 'TV-MA',
    durationOrSeasons: '2h 15m',
    quality: '4K Ultra HD',
    tags: ['Samurai Fantasy', 'Mythology', 'Dragon Legend'],
    description: 'During a blood-red solar eclipse over Mount Fuji, a masterless ronin draws his legendary ancestral blade against an ethereal sky serpent.',
    cast: ['Hiroyuki Sanada', 'Tadanobu Asano', 'Anna Sawai']
  },
  {
    id: 'mylist-4',
    title: 'Wild Earth: Secrets',
    type: 'series',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-9SrLfDKZyEgB71Udg1Oou2LgoopxnzG3XS5EElWCgZ3BiE8CYDk4908hNUf4qCBVQYkK-yM01t6W7j40cS9oEU4UVlsIeZFxcR4OtEoGuD6nfjIJvGZzTWD5yv1KRC8gA2SLJyHhLdaBcabWvX9-__GHiGlThh6s49v-uDQvejwm4ytkRV_BIYYZenOj8OxzcS3aIftbMucRXVXnKthP05Jqd6b0VmPYzHCYhbAICNa7uzhwK9yAaw',
    matchScore: 98,
    year: 2024,
    rating: 'TV-PG',
    durationOrSeasons: '6 Episodes',
    quality: '4K Ultra HD',
    tags: ['Nature Docuseries', 'Bioluminescence', 'Wildlife'],
    description: 'Groundbreaking night-vision macro cinematography captures exotic glowing creatures of the Amazon basin after midnight.',
    cast: ['Narrated by Sir David Attenborough']
  },
  {
    id: 'mylist-5',
    title: 'Crescent City Confidential',
    type: 'movie',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxS0WChSV6_SUpX8TgcE50MkhjJe2sIO0fVY7SUb1iTGYJz0d_6Y2kvAXlA4DpjG54Iqdhig_fy1TM0VvN4Me9IeNBAco9yZSs_YItd3EURLE2BOXGfL6SrGNThRy86zXI1I2vhv_OULqVRMR8EUtlX4o7Z1ZbDobiSGnSBncv1Gdz_0le2CsCfAXaZ2fXJvhodXuRhbLZIB9whvfHCkohZBkr8ErGGveBCdN35XRGXB-A6LDLguXoXQ',
    matchScore: 91,
    year: 2023,
    rating: 'TV-MA',
    durationOrSeasons: '1h 52m',
    quality: '1080p HD',
    tags: ['1950s Detective', 'New Orleans Noir', 'Jazz Club Mystery'],
    description: 'Under rain-slick French Quarter gas lamps, a cynical private eye investigates the disappearance of a wealthy sugar baroness.',
    cast: ['Mahershala Ali', 'Gugu Mbatha-Raw', 'Willem Dafoe']
  }
];

export const ALL_TITLES: TitleItem[] = [
  BILLBOARD_TITLE,
  ...CONTINUE_WATCHING_TITLES,
  ...TRENDING_TITLES,
  ...TOP_10_MOVIES,
  ...SCI_FI_ACTION_TITLES,
  ...MY_LIST_TITLES
];
