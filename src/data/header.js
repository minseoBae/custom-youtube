import { GrDomain } from "react-icons/gr";
import { MdDeveloperMode } from "react-icons/md";
import { MdOutlineDesignServices } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { CgIfDesign } from "react-icons/cg";
import { FaRegFileWord } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { MdOutlineRecommend } from "react-icons/md";
import { CiMusicNote1 } from "react-icons/ci";
import { RiSchoolLine } from "react-icons/ri";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export const headerMenus = [
    {
        title: "메인페이지",
        icon: <GrDomain />,
        src: "/"
    },
    {
        title: "추천 영상",
        icon: <MdOutlineRecommend />,
        src: "/today"
    },
    {
        title: "추천 개발자",
        icon: <MdDeveloperMode />,
        src: "/developer"
    },
    {
        title: "웹디자인기능사",
        icon: <MdOutlineDesignServices />,
        src: "/webd"
    },
    {
        title: "웹표준 사이트",
        icon: <CgWebsite />,
        src: "/website"
    },
    {
        title: "GSAP Parallax",
        icon: <CgIfDesign />,
        src: "/gsap"
    },
    {
        title: "포트폴리오 사이트",
        icon: <FaRegFileWord />,
        src: "/port"
    },
    {
        title: "유튜브 클론 사이트",
        icon: <CiYoutube />,
        src: "/youtube"
    }, {
        title: "대진대학교 소개",
        icon: <RiSchoolLine />,
        src: "/daejin"
    }, {
        title: "추천 음악",
        icon: <CiMusicNote1 />,
        src: "/music"
    }
];

export const searchKeyword = [
    {
        title: "webstoryboy",
        src: "/search/webstoryboy"
    },
    {
        title: "HTML",
        src: "/search/html"
    },
    {
        title: "CSS",
        src: "/search/css"
    },
    {
        title: "JavaScript",
        src: "/search/javascript"
    },
    {
        title: "React.js",
        src: "/search/react.js"
    },
    {
        title: "Vue.js",
        src: "/search/vue.js"
    },
    {
        title: "Next.js",
        src: "/search/next.js"
    },
    {
        title: "Node.js",
        src: "/search/node.js"
    },
    {
        title: "SQL",
        src: "/search/sql"
    },
    {
        title: "portfolio",
        src: "/search/React Portfolio"
    },
    {
        title: "music",
        src: "/search/NewJeans"
    }
];

export const snsLink = [
    {
        title: "github",
        url: "https://github.com/minseoBae/webs-youtube",
        icon: <AiFillGithub />
    },
    {
        title: "youtube",
        url: "https://www.youtube.com/webstoryboy",
        icon: <AiFillYoutube />
    },
    {
        title: "codepen",
        url: "https://codepen.io/baeminseo",
        icon: <AiOutlineCodepen />
    },
    {
        title: "instagram",
        url: "https://www.instagram.com/",
        icon: <AiOutlineInstagram />
    },
]