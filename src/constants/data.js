import GraduatedInDark from '../images/graduated(dark).png';
import GraduatedInLight from '../images/graduated(light).png';
import CodingInDark from '../images/coding(dark).png';
import CodingInLight from '../images/coding(light).png';
import VolleyballInDark from '../images/volleyball(dark).png';
import VolleyballInLight from '../images/volleyball(light).png';
import GolfInDark from '../images/golf(dark).png';
import GolfInLight from '../images/golf(light).png';
import DramaInDark from '../images/drama(dark).png';
import DramaInLight from '../images/drama(light).png';
import NCCUImage from '../images/nccu.png';
import SproutImage from '../images/25sprout.png';
import NielsenImage from '../images/nielsen.png';
import { ReactComponent as ReactImage } from '../images/react.svg';
import { ReactComponent as ReduxImage } from '../images/redux.svg';
import { ReactComponent as NightwatchImage } from '../images/nightwatch.svg';
import { ReactComponent as SassImage } from '../images/sass.svg';
import { ReactComponent as GitImage } from '../images/git.svg';
import { ReactComponent as CSSImage } from '../images/css.svg';
import { ReactComponent as FigmaImage } from '../images/figma.svg';
import { ReactComponent as JavaScriptImage } from '../images/javascript.svg';
import { ReactComponent as StyledComponentsImage } from '../images/styled-components.svg';
import { ReactComponent as HTMLImage } from '../images/html.svg';
import PersonalWebInDark from '../images/personalWeb(dark).png';
import PersonalWebInLight from '../images/personalWeb(light).png';
import WeatherInDark from '../images/weather(dark).png';
import WeatherInLight from '../images/weather(light).png';

const data = {
    en: {
        navbar: {
            about: 'ABOUT',
            career: 'CAREER',
            skills: 'SKILLs',
            projects: 'PROJECTs',
        },
        about: {
            link: {
                github: 'https://github.com/yuentung',
                email: 'mailto:jerryio1986@gmail.com',
                cv: 'https://drive.google.com/file/d/1qyuK08kemp2r4s1xG_Uzao4oA3qYpY6d/view?usp=sharing',
            },
            resumeLink: 'https://drive.google.com/file/d/1qyuK08kemp2r4s1xG_Uzao4oA3qYpY6d/view?usp=sharing',
            intro: ['Hello,', 'I am', 'YU-EN.'],
            cardList: [
                {
                    darkImage: GraduatedInDark,
                    lightImage: GraduatedInLight,
                    sentence: 'This January, I graduated from ',
                    keyword: 'NCCU',
                    title: 'Yu-En, Tung',
                    subTitle: 'Studied in Taipei',
                    description: 'Graduated from NCCU 👨🏻‍🎓',
                },
                {
                    darkImage: CodingInDark,
                    lightImage: CodingInLight,
                    sentence: 'and strived to become a ',
                    keyword: 'Web Developer',
                    title: 'Yu-En, T.',
                    subTitle: 'Nantou + er',
                    description: 'A junior web developer 👨🏻‍💻',
                },
                {
                    darkImage: VolleyballInDark,
                    lightImage: VolleyballInLight,
                    sentence: 'I love to play ',
                    keyword: 'Volleyball',
                    title: 'Yu-En',
                    subTitle: 'Live in Nantou, not mountain',
                    description: 'Love to play volleyball 🏐',
                },
                {
                    darkImage: GolfInDark,
                    lightImage: GolfInLight,
                    sentence: '',
                    keyword: 'Golf',
                    title: 'Jerry, T.',
                    subTitle: 'Born in Changhua',
                    description: 'Enjoy playing golf 🏌🏻',
                },
                {
                    darkImage: DramaInDark,
                    lightImage: DramaInLight,
                    sentence: 'and binge-watch ',
                    keyword: 'Dramas',
                    title: 'Jerry',
                    subTitle: 'Never been to Lanyu',
                    description: 'Sometimes binge-watch dramas 🎬',
                },
            ],
            welcomeText: 'Welcome to my website.',
            result: {
                title: 'Matchability with Me',
                description: [
                    {
                        icon: '🥺',
                        text: 'Sorry, it seems that you aren\'t interested in me. However, you can scroll down or see my resume to know more about me, thank you!',
                    },
                    {
                        icon: '🙂',
                        text: 'Cool, it seems that you are interested in some parts of me. You can know more about me by scrolling down or seeing my resume, thank you!',
                    },
                    {
                        icon: '🥳',
                        text: 'Wow, it seems that you are interested in most parts of me. You can know more about me by scrolling down or seeing my resume, thank you!',
                    },
                ],
            },
        },
        career: {
            title: 'MY CAREER',
            education: {
                title: 'EDUCATION',
                careerList: [
                    {
                        image: NCCUImage,
                        title: 'Business Administration',
                        subTitle: 'National Chengchi University (NCCU)',
                        jobList: [
                            'Big Data Analysis Minor Program',
                            'GPA: 3.8 / 4.3'
                        ],
                        from: new Date(2016, 9),
                        to: new Date(2021, 1),
                    },
                ],
            },
            workExperience: {
                title: 'WORK EXPERIENCE',
                careerList: [
                    {
                        image: SproutImage,
                        title: 'Web Development Intern',
                        subTitle: '25sprout Digital Consultant',
                        jobList: [
                            'Assisted in writing E2E testing scripts for SurveyCake with nightwatch.js and BrowserStack to shorten testing time after updating version every time.',
                        ],
                        from: new Date(2021, 2),
                        to: new Date(2021, 2),
                    },
                    {
                        image: SproutImage,
                        title: 'Project Management Intern',
                        subTitle: '25sprout Digital Consultant',
                        jobList: [
                            'Cooperated with internal product department and external tech department for requirements clarification.',
                            'Assisted 4 main systems operation and testing, including SurveyCake webhook API implementation.',
                            'Clarified timezone displaying obstacle and data concatenation for McDonald’s 35+ countries in Europe.',
                            'Participated in cache method implementation, optimized system data reading velocity and improved user experience.',
                            'Built API automation tool with configuration JSON files, flexibly controlling 20+ brands, 26+ languages content updating.',
                        ],
                        from: new Date(2020, 7),
                        to: new Date(2021, 1),
                    },
                    {
                        image: NielsenImage,
                        title: 'Media Research Dept. Intern',
                        subTitle: 'Nielsen Marketing Research Consultant',
                        jobList: [
                            'Generated reports for 3+ clients from the media industry with the analysis of data from Nielsen Database.',
                            'Conducted social media analysis with Python packages (Numpy and Pandas) to present marketing insights to clients.',
                            'Developed an application for web scraping through Python packages (Selenium, Requests, and BeautifulSoup4), which reduced the time of data collection by more than 90%.',
                            // 'Coordinated Operation Team’s requirement and support for the sampling process through the application and cross-function communication.',
                        ],
                        from: new Date(2019, 7),
                        to: new Date(2020, 2),
                    },
                ],
            },
        },
        skills: {
            title: 'DEVELOPMENT TOOLs',
            imageList: [
                {
                    image: <ReactImage />,
                    text: 'React',
                    color: '#61DAFB',
                    position: { top: 10, left: 17 },
                },
                {
                    image: <ReduxImage />,
                    text: 'Redux',
                    color: '#764ABC',
                    position: { top: 3, left: 42 },
                },
                {
                    image: <FigmaImage />,
                    text: 'Figma',
                    color: '#0ACF83',
                    position: { top: 9, left: 67 },
                },
                {
                    image: <SassImage />,
                    text: 'Sass',
                    color: '#CD6799',
                    position: { top: 39, left: 6 },
                },
                {
                    image: <GitImage />,
                    text: 'Git',
                    color: '#F05133',
                    position: { top: 36, left: 30 },
                },
                {
                    image: <StyledComponentsImage />,
                    text: 'styled-components',
                    color: '#E063B2',
                    position: { top: 38, left: 53 },
                },
                {
                    image: <CSSImage />,
                    text: 'CSS3',
                    color: '#2965F1',
                    position: { top: 36, left: 79 },
                },
                {
                    image: <JavaScriptImage />,
                    text: 'JavaScript',
                    color: '#F7DF1E',
                    position: { top: 68, left: 19 },
                },
                {
                    image: <NightwatchImage />,
                    text: 'nightwatch.js',
                    color: '#794422',
                    position: { top: 73, left: 43 },
                },
                {
                    image: <HTMLImage />,
                    text: 'HTML5',
                    color: '#F16529',
                    position: { top: 70, left: 68 },
                },
            ],
        },
        projects: {
            title: 'PROJECTs I MADE',
            projectList: [
                {
                    darkImage: PersonalWebInDark,
                    lightImage: PersonalWebInLight,
                    title: 'YUEN\'s Website',
                    subTitle: 'a website about me',
                    from: new Date(2021, 4),
                    to: new Date(2021, 6),
                    pageLink: 'https://yuentung.github.io/',
                    codeLink: 'https://github.com/yuentung/yuentung.github.io',
                },
                {
                    darkImage: WeatherInDark,
                    lightImage: WeatherInLight,
                    title: 'The Good Weather',
                    subTitle: 'a current weather widget',
                    from: new Date(2021, 5),
                    to: new Date(2021, 5),
                    pageLink: 'https://yuentung.github.io/weather/',
                    codeLink: 'https://github.com/yuentung/weather',
                },
            ],
        },
        footer: {
            copyright: 'Copyright © 2021 Yu-En, Tung All rights reserved',
        },
    },
    tw: {
        navbar: {
            about: '關於我',
            career: '職涯發展',
            skills: '專業技能',
            projects: '專案經驗',
        },
        about: {
            intro: ['嗨，', '我是', '董宇恩。'],
            cardList: [
                {
                    darkImage: GraduatedInDark,
                    lightImage: GraduatedInLight,
                    sentence: '今年一月，我剛畢業於 ',
                    keyword: '政治大學',
                    title: '董宇恩',
                    subTitle: '曾經在台北唸書',
                    description: '畢業於國立政治大學 👨🏻‍🎓',
                },
                {
                    darkImage: CodingInDark,
                    lightImage: CodingInLight,
                    sentence: '目前正在努力成為一名 ',
                    keyword: '前端工程師',
                    title: '宇恩董',
                    subTitle: '南投人',
                    description: '初級前端工程師 👨🏻‍💻',
                },
                {
                    darkImage: VolleyballInDark,
                    lightImage: VolleyballInLight,
                    sentence: '我喜歡運動，特別是打 ',
                    keyword: '排球',
                    title: '宇恩',
                    subTitle: '住在南投(不是山裡)',
                    description: '喜歡打排球 🏐',
                },
                {
                    darkImage: GolfInDark,
                    lightImage: GolfInLight,
                    sentence: '和 ',
                    keyword: '高爾夫',
                    title: '董傑瑞',
                    subTitle: '在彰化出生',
                    description: '熱愛高爾夫 🏌🏻',
                },
                {
                    darkImage: DramaInDark,
                    lightImage: DramaInLight,
                    sentence: '也喜歡慵懶的躺在沙發上 ',
                    keyword: '追追劇',
                    title: '傑瑞',
                    subTitle: '沒有去過蘭嶼',
                    description: '有時候追追劇 🎬',
                },
            ],
            welcomeText: '歡迎來到我的網站。',
            result: {
                title: '與我的契合度',
                description: [
                    {
                        icon: '🥺',
                        text: '非常遺憾，看起來你/妳對我不太感興趣。但是...你/妳依舊可以往下滑來更認識我，也可以查看我的履歷，謝謝！',
                    },
                    {
                        icon: '🙂',
                        text: '很開心，看起來你/妳對某一部分的我有興趣。你/妳可以繼續往下滑來更認識我，也可以查看我的履歷，謝謝！',
                    },
                    {
                        icon: '🥳',
                        text: '非常高興，看起來你/妳對大部分的我有興趣。你/妳可以繼續往下滑來更認識我，也可以查看我的履歷，謝謝！',
                    },
                ],
            },
        },
        career: {
            title: '職涯發展',
            education: {
                title: '教育學歷',
                careerList: [
                    {
                        image: NCCUImage,
                        title: '企業管理學系',
                        subTitle: '國立政治大學',
                        jobList: [
                            '巨量資料分析學程',
                            'GPA: 3.8 / 4.3',
                        ],
                        from: new Date(2016, 9),
                        to: new Date(2021, 1),
                    },
                ],
            },
            workExperience: {
                title: '工作經歷',
                careerList: [
                    {
                        image: SproutImage,
                        title: '前端實習生',
                        subTitle: '新芽網路有限公司',
                        jobList: [
                            '使用 nightwatch.js 結合 BrowserStack 為 SurveyCake 撰寫 E2E 測試腳本，以縮短每次更版後的測試時間。',
                        ],
                        from: new Date(2021, 2),
                        to: new Date(2021, 2),
                    },
                    {
                        image: SproutImage,
                        title: '專案管理實習生',
                        subTitle: '新芽網路有限公司',
                        jobList: [
                            '同時與內部產品部門、外部技術團隊協作，並溝通、確認需求。',
                            '協助維護與測試 4 個主要系統，包含 SurveyCake webhook API 的運作。',
                            '為歐洲 35 國的麥當勞釐清時區不同所造成的問題，並進行資料整合與串接。',
                            '參與規劃快取機制的設計，以加速資料讀取的速度，並優化使用者體驗。',
                            '規劃更新網頁內容的自動化工具，透過 JSON 檔案加以更新 20 個品牌與 26 種語系的相關設定。',
                        ],
                        from: new Date(2020, 7),
                        to: new Date(2021, 1),
                    },
                    {
                        image: NielsenImage,
                        title: '媒體研究部實習生',
                        subTitle: '尼爾森行銷研究顧問股份有限公司',
                        jobList: [
                            '藉由尼爾森資料庫進行數據分析，以追蹤媒體市場變化，並定期製作客製化報告。',
                            '透過 Python 套件（Numpy 與 Pandas）搜集各個數位媒體在社群網站上的貼文內容，以分析其在媒體操作上的差異，並提供客戶相關資訊。',
                            '使用 Python 套件（Selenium、Requests 以及 BeautifulSoup4）撰寫網站擷取程式，以自動化方式取代人力，蒐集台灣所有村里地址，減少近 90% 的作業時間。',
                        ],
                        from: new Date(2019, 7),
                        to: new Date(2020, 2),
                    },
                ],
            },
        },
        skills: {
            title: '專業技能',
        },
        projects: {
            title: '專案經驗',
            projectList: [
                {
                    darkImage: PersonalWebInDark,
                    lightImage: PersonalWebInLight,
                    title: 'YUEN 的網站',
                    subTitle: '一個關於我的網站',
                    from: new Date(2021, 4),
                    to: new Date(2021, 6),
                    pageLink: 'https://yuentung.github.io/personal-website/',
                    codeLink: 'https://github.com/yuentung/personal-website',
                },
                {
                    darkImage: WeatherInDark,
                    lightImage: WeatherInLight,
                    title: '天氣好棒棒',
                    subTitle: '一個觀測當前天氣的小工具',
                    from: new Date(2021, 5),
                    to: new Date(2021, 5),
                    pageLink: 'https://yuentung.github.io/weather/',
                    codeLink: 'https://github.com/yuentung/weather',
                },
            ],
        },
        footer: {
            copyright: 'Copyright © 2021 董宇恩 版權所有',
        },
    },
};

export default data;