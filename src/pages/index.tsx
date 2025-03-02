import Router from "next/router"
import { motion, useViewportScroll } from "framer-motion"
import { Flask, Math } from "@vectors/index/gifted"
import { AdaptiveBg } from "@components/common/AdaptiveBg"
import Image from "next/image"
import { LogoWhite } from "@vectors/Logo"
import {
  ArrowCircleRightIcon,
  ArrowLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline"
import Link from "next/link"
import { ArrowRightIcon, ClockIcon, UserIcon } from "@heroicons/react/solid"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"
import { FC, useEffect, useRef, useState } from "react"
import classnames from "classnames"
import { GetStaticProps } from "next"
import { getAllPosts } from "@lib/api"
import markdownToHtml from "@lib/markdownToHTML"
import { IAuthContext, useAuth } from "@lib/auth"
import { CountDown } from "@components/common/Countdown"
import { Programme } from "@components/programme"
import { getDb } from "@lib/firebase-admin"
import { updateLiveFeedback } from "@lib/db"
import { useToast } from "@lib/toast"
import fs from "fs"
import { shuffle } from "@utils/arrays"

const Blog = ({ data }: { data: any }) => {
  return (
    <Link passHref href={`articles/${data.slug}`}>
      <div
        style={{
          background: "linear-gradient(265.95deg, rgba(255, 255, 255, 0.3) 33.14%, rgba(255, 255, 255, 0) 100%)",
        }}
        className="border h-[375px] sm:h-[198px] border-white rounded-lg border-opacity-40 items-center flex flex-col-reverse sm:flex-row justify-between backdrop-filter backdrop-blur-lg snap-center cursor-pointer"
      >
        <div className="flex flex-col justify-between px-6 py-4">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold leading-[20px] h-[40px] overflow-hidden">{data.title}</h2>
            <span
              dangerouslySetInnerHTML={{ __html: `${data.content}...` }}
              className="font-light overflow-hidden h-[56px] pt-2"
            ></span>
          </div>
          <span className="text-sm mt-4 font-light">{data.author}</span>
        </div>
        <div className="flex-shrink-0 mt-2 sm:mt-0">
          <Image
            width={317}
            height={197}
            objectFit={"cover"}
            src={data.thumbnail}
            alt={data.title}
            className="flex-shrink-0 rounded-lg sm:rounded-r-lg"
          />
          {/* <div className="w-[317px] h-[197px] bg-gray-400 bg-opacity-25 border border-white rounded-r-lg flex-shrink-0"></div> */}
        </div>
      </div>
    </Link>
  )
}

const Video = ({ data }: any) => {
  return (
    <Link passHref href={data.path}>
      <div
        style={{
          background: "linear-gradient(241.39deg, rgba(255, 255, 255, 0.4) 18.81%, rgba(255, 255, 255, 0) 100.07%)",
        }}
        className="w-[170px] rounded-lg mt-3 cursor-pointer backdrop-blur-lg backdrop-filter pb-[10px] border border-white border-opacity-20"
      >
        <div>
          <div className="relative">
            <span className="absolute bottom-[12px] right-[6px] text-[10px] z-[2] text-gray-700 bg-white px-2 py-[0.6px] font-medium rounded-sm text-sm">
              {data.duration}
            </span>
            <Image
              src={data.thumbnail}
              alt={data.title}
              objectFit={"cover"}
              width={170}
              height={98}
              priority={true}
              className="rounded-t-lg"
            />
          </div>
          <div className="px-2">
            <p className="break-all text-[12px] h-[56px] font-light text-ellipsis">{data.title}</p>
            <div className="flex items-center space-x-1">
              <UserIcon className="w-4 h-4 flex-shrink-0" />
              <p className="text-[10px] font-light truncate">{data.author}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

const VideoRecord = ({ data }: any) => {
  return (
    <Link passHref href={data.path}>
      <div
        style={{
          background: "linear-gradient(241.39deg, rgba(255, 255, 255, 0.4) 18.81%, rgba(255, 255, 255, 0) 100.07%)",
        }}
        className="w-[170px] rounded-lg mt-3 cursor-pointer backdrop-blur-lg backdrop-filter pb-[10px] border border-white border-opacity-20"
      >
        <div>
          <div className="relative">
            <span className="absolute bottom-[12px] right-[6px] text-[10px] z-[2] text-gray-700 bg-white px-2 py-[0.6px] font-medium rounded-sm text-sm">
              {data.duration}
            </span>
            <div className="">
              <Image
                src={data.thumbnail}
                alt={data.title}
                objectFit={"cover"}
                width={170}
                height={98}
                priority={true}
                className="rounded-t-lg"
              />
            </div>
          </div>
          <div className="px-2">
            <p className="break-all text-[12px] h-[56px] font-light text-ellipsis">{data.title}</p>
            <div className="flex items-center space-x-1">
              <UserIcon className="w-4 h-4 flex-shrink-0" />
              <p className="text-[10px] font-light truncate">{data.author}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const fetchedData = getAllPosts(["slug", "title", "author", "thumbnail", "content"], "_articles")
  let cleaned = fetchedData.filter((item) => Object.keys(item).length > 1)

  const datav = fs.readFileSync("./src/_data/_maps/videoMap.json").toString()
  const datar = fs.readFileSync("./src/_data/_maps/recordMap.json").toString()

  const videoData = JSON.parse(datav)
  const recordData = JSON.parse(datar)

  if (!cleaned) {
    return {
      notFound: true,
    }
  }

  const data = await getDb().collection("schedule").doc("GSUnaiZv85XPHPWiZOzf").get()
  const schedule = data.get("15").map((e: any) => {
    return {
      name: e.name,
      start: e.start._seconds,
    }
  })

  let mapped = []

  for (let i of cleaned) {
    const e = await markdownToHtml(
      i.content
        .replace(/\!.+?\)/g, "")
        .replace(/\[.+?\)/g, "")
        .replace(new RegExp("\n> ", "g"), "")
        .replace(/\n/g, " ") || ""
    )
    mapped.push({ ...i, content: e.substr(0, 120) })
  }

  return {
    props: {
      articles: mapped,
      schedule: schedule,
      video: videoData,
      record: recordData,
    },
  }
}

const getButton = (auth: IAuthContext | null) => {
  const noAuth = auth?.user === null
  const authNoRegistered = auth?.user && !(auth?.userData?.username !== "")
  const registered = auth?.user && auth?.userData?.username !== ""
  const registeredNoGame = auth?.user && auth?.userData?.username !== "" && !auth.userData?.ticket
  const playedGame = auth?.user && auth?.userData?.username !== "" && auth.userData?.ticket

  if (noAuth) {
    return (
      <Link passHref href="/register">
        <motion.a
          whileHover={{ scale: 1.1 }}
          className="font-display text-xl font-thin px-16 rounded-full py-3 mt-[35px] md:mt-[55px]"
          style={{ background: "linear-gradient(267.68deg, #A1677D 4.3%, #EFBB8B 94.12%)" }}
        >
          ลงทะเบียน
        </motion.a>
      </Link>
    )
  } else if (authNoRegistered) {
    return (
      <Link passHref href="/register/onboard">
        <motion.a
          whileHover={{ scale: 1.1 }}
          className="font-display text-xl font-thin px-16 rounded-full py-3 mt-[35px] md:mt-[55px]"
          style={{ background: "linear-gradient(267.68deg, #A1677D 4.3%, #EFBB8B 94.12%)" }}
        >
          ลงทะเบียน
        </motion.a>
      </Link>
    )
  } else if (registeredNoGame) {
    return (
      <Link passHref href="/game">
        <motion.a
          whileHover={{ scale: 1.1 }}
          className="font-display text-xl font-thin px-16 rounded-full py-3 mt-[35px] md:mt-[55px]"
          style={{ background: "linear-gradient(267.68deg, #A1677D 4.3%, #EFBB8B 94.12%)" }}
        >
          เข้าสู่เนื้อเรื่อง
        </motion.a>
      </Link>
    )
  } else if (playedGame) {
    return (
      // <Link passHref href="/ticket">
      //   <motion.button
      //     whileHover={{ scale: 1.1 }}
      //     className="font-display text-xl font-thin px-16 rounded-full py-3 mt-[35px] md:mt-[55px]"
      //     style={{ background: "linear-gradient(267.68deg, #A1677D 4.3%, #EFBB8B 94.12%)" }}
      //   >
      //     ดูบัตรเดินทางของคุณ
      //   </motion.button>
      // </Link>
      <Link passHref href="/records">
        <motion.a
          whileHover={{ scale: 1.1 }}
          className="font-display text-xl font-thin px-16 rounded-full py-3 mt-[35px] md:mt-[55px]"
          style={{ background: "linear-gradient(267.68deg, #A1677D 4.3%, #EFBB8B 94.12%)" }}
        >
          รับชมรายการสดย้อนหลัง
        </motion.a>
      </Link>
    )
  }
}

const zeroPad = (num: number, places: number) => String(num).padStart(places, "0")

const formatTime = (timeStamp: number) => {
  const d = new Date(timeStamp)
  return `${zeroPad(d.getHours(), 2)}:${zeroPad(d.getMinutes(), 2)}`
}

const findCurrent = (sc: Array<any>) => {
  const time = new Date().getTime()
  const fil = sc.filter((e: any) => e.start * 1000 < time)
  const file = sc.filter((e: any) => e.start * 1000 > time)
  return { now: fil[fil.length - 1], next: file[0] }
}

export default function Home({ articles, schedule, video, record }: any) {
  const videoLeft = useRef(null)
  const videoRight = useRef(null)
  const [current, setCurrent] = useState(findCurrent(schedule).now)
  const auth = useAuth()
  const toast = useToast()

  const [videos, setVideos] = useState(shuffle(video))
  const [records, setRecords] = useState<any[]>(record)
  const [article, setArticle] = useState(shuffle(articles))

  const next = () => {
    if (findCurrent(schedule).now) {
      setTimeout(() => {
        setCurrent(findCurrent(schedule).now)
        next()
      }, findCurrent(schedule).now.start * 1000 - new Date().getTime())
    }
  }

  useEffect(() => {
    next()
  })

  const [question, setQuestion] = useState("")

  const { scrollY } = useViewportScroll()

  return (
    <>
      <AdaptiveBg
        primary={{ background: "/images/backgrounds/landing.jpg", height: "1024px", expandTo: "100vh" }}
        secondary={{ background: "/images/backgrounds/landing-mobile.jpg", height: "926px" }}
        mobile={{ background: "/images/backgrounds/landing-mobile-default.jpg", height: "926px" }}
        classname="flex items-center"
        element="main"
        id="main"
      >
        <div className="absolute z-[5] left-[150px]">
          <Image src="/assets/stars/Star1.gif" width={1280} height={592} alt="star" />
        </div>
        <div className="absolute z-[5] top-[200px] left-[150px]">
          <Image src="/assets/stars/Star2.gif" width={1280} height={592} alt="star" />
        </div>
        <div className="absolute z-[5] top-[265px]">
          <Image src="/assets/stars/Star3.gif" width={1280} height={592} alt="star" />
        </div>
        <div className="absolute z-[5] top-[130px]">
          <Image src="/assets/stars/Star3.gif" width={1280} height={592} alt="star" />
        </div>
        <div className="relative z-[10] font-game flex flex-col items-start sm:items-center w-full px-8">
          <h1 className="flex flex-col items-start sm:items-center">
            <span className="text-[64px] xl:text-[116px] leading-[64px] xl:leading-[156px] font-black tracking-[14px] xl:tracking-[24px]">
              TRIAM UDOM
            </span>
            <span className="text-[24px] xl:text-[50px] tracking-[8px] xl:tracking-[13px] font-light mt-[10px] xl:mt-[-26px]">
              ONLINE OPEN HOUSE 2022
            </span>
            <span className="text-[16px] md:text-[30px] font-thin tracking-[8px] md:tracking-[10px] mt-10">
              14-15 JANUARY
            </span>
            {/* {<CountDown />} */}
          </h1>
          <div className="relative z-[10] flex flex-col items-center">
            {getButton(auth)}
            <LogoWhite className="w-[174px] mt-6 md:mt-16" />
          </div>
        </div>
      </AdaptiveBg>
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(64, 78, 83, 0.1128) 0%, rgba(47, 52, 78, 0.47) 49.79%, rgba(24, 19, 66, 0.0705) 100%)",
        }}
        className="w-full h-[95px] mt-[-42px] bg-white backdrop-filter backdrop-blur-[6px] absolute"
      />
      {/* {auth?.user && auth?.userData?.username !== "" && auth.userData?.ticket && ( */}
      <AdaptiveBg
        primary={{ background: "/images/backgrounds/live.jpg", height: "1024px" }}
        secondary={{ background: "/images/backgrounds/live-mobile.jpg", height: "926px" }}
        mobile={{ background: "/images/backgrounds/live-mobile-default.jpg", height: "926px" }}
        classname="flex flex-col justify-center items-center space-y-12"
        element="section"
        id="live"
      >
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-center text-2xl font-semibold px-4">Count Down วันประกาศผลสอบ</h2>
          <p className="text-sm mt-4">12 มี.ค. 2565</p>
          <CountDown until={+new Date(2022, 2, 12, 0, 0, 0, 0)} />
        </div>
        <div id="records" className="w-full">
          <div className="flex items-center max-w-[900px] mx-auto justify-between px-4 w-full">
            <h2 className="text-center text-2xl font-semibold px-4 my-4">รายการย้อนหลัง</h2>
            <Link passHref href="/records">
              <a className="flex space-x-1 mr-10 cursor-pointer ">
                <span className="font-light">ดูทั้งหมด</span>
                <ArrowCircleRightIcon className="w-6 h-6" />
              </a>
            </Link>
          </div>
          <div className="relative max-w-[900px] mx-auto px-6">
            <Splide
              options={{
                fixedWidth: 170,
                gap: 12,
                perMove: 1,
                arrows: false,
                classes: { pagination: "splide__pagination custom-pagination", track: "splide__track z-[2]" },
              }}
              onMounted={() => {
                if (document && document.getElementsByClassName("splide__track").length >= 1) {
                  // @ts-ignore
                  document.getElementsByClassName("splide__track")[0].style["z-index"] = 2
                }
              }}
              renderControls={() => {
                return (
                  <div className="splide__arrows absolute top-0 z-[1] w-full h-full">
                    <div
                      style={{ left: "-50px" }}
                      className="splide__arrow--prev absolute h-full z-[20] flex items-center hover:bg-white hover:bg-opacity-20 rounded-md cursor-pointer"
                    >
                      <ChevronRightIcon className="w-6 h-6" />
                    </div>
                    <div
                      style={{ right: "-40px" }}
                      className="splide__arrow--next absolute h-full z-[20] flex items-center hover:bg-white hover:bg-opacity-20 rounded-md cursor-pointer"
                    >
                      <ChevronRightIcon className="w-6 h-6" />
                    </div>
                  </div>
                )
              }}
            >
              {records
                .reduce(function (result, value, index, array) {
                  if (index % 2 === 0) result.push(array.slice(index, index + 2))
                  return result
                }, [])
                .map((item: any, index: number) => {
                  return (
                    <SplideSlide key={`_slide-${index}`}>
                      <div>
                        <VideoRecord data={item[0]} />
                        {item.length > 1 && <VideoRecord data={item[1]} />}
                      </div>
                    </SplideSlide>
                  )
                })}
            </Splide>
          </div>
        </div>
        {/* <div className="flex flex-col justify-center items-center">
          <h2 className="text-center text-2xl font-semibold px-4">
            แบบสำรวจความพึงพอใจที่มีต่องาน Triam Udom Online Open House 2022
          </h2>
          <motion.a
            className="underline mt-6"
            href="https://forms.gle/Xz857WpU5CEWByBB8"
            target="_blank"
            rel="noreferrer"
          >
            ทำแบบสอบถาม <ArrowRightIcon className="w-4 h-4 inline" />
          </motion.a>
        </div> */}
        {/* <div className="flex lg:flex-row flex-col mx-auto lg:space-y-0 space-y-4 space-x-0 lg:space-x-8 pt-[30px]">
          <div className="my-auto">
            <div className="mb-4">
              <h2 className="flex items-center space-x-3">
                <span className="text-white bg-red-500 font-semibold tracking-[3px] leading-[21px] sm:text-md text-sm rounded-sm px-[3px]">
                  LIVE
                </span>{" "}
                <span className="text-2xl sm:text-3xl w-[90vw] sm:w-[82vw] lg:w-[841px]">{current?.name || ""}</span>
              </h2>
              <div>
                <span className="font-light sm:text-md text-sm">
                  {current?.by && `${current?.by} |`} {zeroPad(new Date(current.start * 1000).getHours(), 2)}:
                  {zeroPad(new Date(current.start * 1000).getMinutes(), 2)} น.
                </span>
              </div>
            </div>
            {auth?.user && auth?.userData?.username !== "" && auth.userData?.ticket ? (
              <iframe
                className="bg-black w-[90vw] h-[48vw] mx-auto sm:w-[82vw] sm:h-[46vw] lg:w-[841px] lg:h-[483px] border border-white border-opacity-50 rounded-xl"
                src="https://player.twitch.tv/?channel=TriamUdomOPH&parent=openhouse.triamudom.ac.th"
                frameBorder="0"
                allowFullScreen={true}
                scrolling="no"
                height="378"
                width="620"
              ></iframe>
            ) : (
              <div className="bg-black w-[90vw] h-[48vw] sm:w-[82vw] sm:h-[46vw] lg:w-[841px] lg:h-[483px] border border-white border-opacity-50 rounded-xl flex flex-col items-center justify-center mx-auto">
                <p className="text-white">จำเป็นต้องลงทะเบียนเพื่อเข้าดู LIVE</p>
                {getButton(auth)}
              </div>
            )}
          </div>
          <div className="xl:block md:hidden block w-full">
            <div className="text-[#C898CC] mt-[10px] mb-[20px] px-6">
              <p className="font-light text-sm">LIVE SCHEDULE</p>
              <p className="font-black text-2xl mt-[-6px]">15 JANUARY 2022</p>
            </div>
            <div className="w-full sm:max-w-[400px] sm:min-w-[380px] mx-auto">
              <div className="w-full max-h-[400px] overflow-y-auto space-y-4 px-4">
                {schedule.map((item: any, index: any) => {
                  return (
                    <div key={`e-${index}`} className="border border-white rounded-lg flex space-x-3 px-6 py-2 w-full">
                      <div className="">
                        <p className="font-semibold text-xl sm:text-2xl">
                          {zeroPad(new Date(item.start * 1000).getHours(), 2)}:
                          {zeroPad(new Date(item.start * 1000).getMinutes(), 2)}
                        </p>
                      </div>
                      <div>
                        <p className="text-md sm:text-lg">{item.name}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              <Link passHref href="/schedule">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  className="underline cursor-pointer text-md sm:text-lg border border-white rounded-lg bg-white flex justify-center space-x-3 px-6 py-4 w-full text-[#2E2D56]"
                >
                  ดูตารางรายการสดทั้งหมด
                </motion.a>
              </Link>
            </div>
          </div>
        </div> */}
      </AdaptiveBg>

      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(63, 88, 170, 0) 0%, rgba(50, 76, 146, 0.0225) 51.51%, rgba(37, 64, 123, 0) 100%)",
        }}
        className="w-full h-[95px] mt-[-42px] bg-white backdrop-filter backdrop-blur-[6px] absolute"
      />
      <AdaptiveBg
        primary={{ background: "/images/backgrounds/branches.jpg", height: "1771px" }}
        secondary={{ background: "/images/backgrounds/branches-mobile.jpg", height: "1385px" }}
        mobile={{ background: "/images/backgrounds/branches-mobile-default.jpg", height: "926px" }}
        element="section"
        id="programmes"
      >
        <div className="pl-0 sm:pl-[200px] mx-auto w-max sm:h-[680px]">
          <div className="mt-[110px] sm:mt-[300px] relative w-max">
            <h2 className="text-5xl sm:text-6xl font-semibold leading-[60px] sm:leading-[80px] z-[10] relative w-max">
              มาตามหา
              <br />
              สายการเรียน
              <br />
              ที่คุณอยากจะ
              <br />
              ทำความรู้จักกัน !
            </h2>
            <div className="w-[300px] sm:w-[394px] h-[78px] sm:h-[96px] absolute border-[5px] border-yellow-500 rounded-[50%] rotate-[-6deg] top-[50px] sm:top-[74px] left-[-34px] z-[2]" />
            <p className="font-light text-lg sm:text-xl tracking-wider mt-10 w-max">
              คลิกที่ดวงดาวเพื่ออ่านข้อมูลสายการเรียน
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center mx-auto justify-evenly max-w-[1440px] mt-10 sm:mt-0">
          <div className="flex flex-row sm:flex-col space-y-0 sm:space-y-20 flex-shrink-0 sm:space-x-0 space-x-6">
            <Programme name={"sci-math"} thainame={"วิทย์-คณิต"} />
            <Programme name={"arts-french"} thainame={"ภาษา-ภาษาฝรั่งเศส"} />
          </div>
          <div className="flex flex-row sm:flex-col space-y-0 sm:space-y-20 sm:mt-20 flex-shrink-0 sm:space-x-0 space-x-6">
            <Programme name={"arts-math"} thainame={"ภาษา-คณิต"} />
            <Programme name={"arts-chinese"} thainame={"ภาษา-ภาษาจีน"} />
          </div>
          <div className="flex flex-row sm:flex-col space-y-0 sm:space-y-20 flex-shrink-0 sm:space-x-0 space-x-6">
            <Programme name={"arts-german"} thainame={"ภาษา-ภาษาเยอรมัน"} />
            <Programme name={"arts-japanese"} thainame={"ภาษา-ภาษาญี่ปุ่น"} />
          </div>
          <div className="flex flex-row sm:flex-col space-y-0 sm:space-y-20 sm:mt-20 flex-shrink-0 sm:space-x-0 space-x-6">
            <Programme name={"arts-espanol"} thainame={"ภาษา-ภาษาสเปน"} />
            <Programme name={"arts-korean"} thainame={"ภาษา-ภาษาเกาหลี"} />
          </div>
        </div>
      </AdaptiveBg>
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(40, 67, 119, 0.15) 0%, rgba(39, 66, 116, 0) 0.01%, rgba(79, 88, 138, 0.0225) 48.74%, rgba(122, 112, 162, 0) 100%)",
        }}
        className="w-full h-[95px] mt-[-42px] bg-white backdrop-filter backdrop-blur-[6px] absolute"
      />
      <AdaptiveBg
        primary={{ background: "/images/backgrounds/gifted.jpg", height: "1124px" }}
        secondary={{ background: "/images/backgrounds/gifted-mobile.jpg", height: "926px" }}
        mobile={{ background: "/images/backgrounds/gifted-mobile-default.jpg", height: "926px" }}
        element="section"
        id="gifted"
      >
        <div className="flex lg:flex-row flex-col items-center lg:items-start justify-center space-x-2 lg:mt-[340px] mt-20">
          <div className="relative">
            <h2 className="relative z-[10] text-[48px] font-light tracking-[14px] leading-[54px]">
              Explore
              <br />
              our
              <br />
              <span className="font-semibold">Gifted</span>
              <br />
              programs.
            </h2>
            <div className="w-[214px] h-[67px] absolute border-[3.6px] border-[#DD598F] rounded-[50%] rotate-[-8deg] top-[100px] left-[-10px] z-[2]" />
          </div>
          <div className="space-y-16 lg:mt-0 mt-20">
            <div className="flex flex-row md:space-x-16 space-x-4 items-center md:items-start">
              <Link passHref href="/programmes/gifted-science">
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  className="relative bg-white w-[140px] h-[140px] sm:w-[195px] sm:h-[195px] rounded-[31.84px] shadow-md cursor-pointer"
                >
                  <div
                    className="absolute top-[-30px] right-[-30px] w-[90px] h-[90px] sm:w-[126px] sm:h-[126px] rounded-full flex justify-center items-center z-[20]"
                    style={{
                      background: "linear-gradient(214.7deg, #6EB6F8 21.34%, #3144A9 92.79%, #4C97DD 93.46%)",
                      boxShadow: "0px 3.35119px 3.35119px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <Flask className="h-[54px] w-[54px] sm:h-[80px] sm:w-[80px]" />
                  </div>
                  <h3 className="absolute bottom-[20px] left-[26px] text-[20px] sm:text-[24.67px] font-semibold text-black">
                    GIFTED-
                    <br />
                    SCIENCE
                  </h3>
                </motion.a>
              </Link>

              <Link passHref href="/programmes/gifted-math">
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  className="relative bg-white w-[140px] h-[140px] sm:w-[195px] sm:h-[195px] rounded-[31.84px] shadow-md cursor-pointer"
                >
                  <div
                    className="absolute top-[-30px] right-[-30px] w-[90px] h-[90px] sm:w-[126px] sm:h-[126px] rounded-full flex justify-center items-center"
                    style={{
                      background: "linear-gradient(147.81deg, #379E7F 6.47%, #89C9AA 58.72%, #FFE459 102.08%)",
                      boxShadow: "0px 3.35119px 3.35119px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <Math className="h-[54px] w-[54px] sm:h-[80px] sm:w-[80px]" />
                  </div>
                  <h3 className="absolute bottom-[20px] left-[26px] text-[20px] sm:text-[24.67px] font-semibold text-black">
                    GIFTED-
                    <br />
                    MATH
                  </h3>
                </motion.a>
              </Link>
            </div>
            <div className="flex flex-row md:space-x-16 space-x-4 items-center md:items-start">
              <Link passHref href="/programmes/gifted-english">
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  className="relative bg-white w-[140px] h-[140px] sm:w-[195px] sm:h-[195px] rounded-[31.84px] shadow-md cursor-pointer"
                >
                  <div
                    className="absolute top-[-30px] right-[-30px] w-[90px] h-[90px] sm:w-[126px] sm:h-[126px] rounded-full flex justify-center items-center z-[20]"
                    style={{
                      background: "linear-gradient(213.77deg, #BA3269 8.06%, #FC81B3 51.26%, #FFDB7D 88.91%)",
                      boxShadow: "0px 3.35119px 3.35119px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <span className="text-[60px] sm:text-[73px] font-black">A</span>
                  </div>
                  <h3 className="absolute bottom-[20px] left-[26px] text-[20px] sm:text-[24.67px] font-semibold text-black">
                    GIFTED-
                    <br />
                    ENGLISH
                  </h3>
                </motion.a>
              </Link>

              <Link passHref href="/programmes/gifted-thai">
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  className="relative bg-white w-[140px] h-[140px] sm:w-[195px] sm:h-[195px] rounded-[31.84px] shadow-md cursor-pointer"
                >
                  <div
                    className="absolute top-[-30px] right-[-30px] w-[90px] h-[90px] sm:w-[126px] sm:h-[126px] rounded-full flex justify-center items-center"
                    style={{
                      background: "linear-gradient(308.56deg, #B2A0F1 14.77%, #46BECE 86.58%, #8129A0 86.59%)",
                      boxShadow: "0px 3.35119px 3.35119px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <span className="text-[70px] sm:text-[88px] font-black">ก</span>
                  </div>
                  <h3 className="absolute bottom-[20px] left-[26px] text-[20px] sm:text-[24.67px] font-semibold text-black">
                    GIFTED-
                    <br />
                    THAI
                  </h3>
                </motion.a>
              </Link>
            </div>
          </div>
        </div>
      </AdaptiveBg>
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(144, 89, 136, 0) 0%, rgba(89, 78, 133, 0) 0.01%, rgba(96, 65, 125, 0.0225) 50.83%, rgba(103, 53, 118, 0) 100%)",
        }}
        className="w-full h-[95px] mt-[-42px] bg-white backdrop-filter backdrop-blur-[6px] absolute"
      />
      <AdaptiveBg
        primary={{ background: "/images/backgrounds/clubs-index.jpg", height: "1124px" }}
        secondary={{ background: "/images/backgrounds/clubs-index-mobile.jpg", height: "926px" }}
        mobile={{ background: "/images/backgrounds/clubs-index-mobile-default.jpg", height: "926px" }}
        classname="flex flex-col justify-center items-center"
        element="section"
        id="clubs"
      >
        <div className="flex items-center md:flex-row flex-col space-x-4 lg:space-x-12">
          <Link passHref href="/clubs">
            <motion.a whileHover={{ scale: 1.02 }} className="cursor-pointer relative w-max flex-shrink-0">
              <div className="w-[300px] sm:w-[381px]">
                <Image src="/images/clubs/clubs-circle.png" alt="clubs" width={381} height={381} />
              </div>
              <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center">
                <h2 className="text-[70px] sm:text-[84px] font-bold">ชมรม</h2>
              </div>
            </motion.a>
          </Link>
          <div className="flex flex-col items-center md:items-end space-y-8 mt-[30px] md:mt-[100px]">
            <p className="text-[24px] lg:text-[30px] leading-[40px] lg:leading-[48px] text-center md:text-right font-light">
              เราจะพาทุกคนไปทำความรู้จัก
              <br />
              กับชมรมของโรงเรียนเรา
              <br />
              ที่มีมากกว่า 60 ชมรมกัน !
            </p>
            <Link passHref href="/clubs">
              <motion.a
                whileHover={{ scale: 1.1 }}
                className="text-[#112D55] bg-white px-12 rounded-full text-lg py-2.5 cursor-pointer"
              >
                ดูชมรมทั้งหมด
              </motion.a>
            </Link>
          </div>
        </div>
      </AdaptiveBg>
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(144, 89, 136, 0) 0%, rgba(89, 78, 133, 0) 0.01%, rgba(96, 65, 125, 0.0225) 50.83%, rgba(103, 53, 118, 0) 100%)",
        }}
        className="w-full h-[95px] mt-[-42px] bg-white backdrop-filter backdrop-blur-[6px] absolute"
      />
      <AdaptiveBg
        primary={{ background: "/images/backgrounds/clubs.jpg", height: "2048px" }}
        secondary={{ background: "/images/backgrounds/clubs-mobile.jpg", height: "926px" }}
        mobile={{ background: "/images/backgrounds/clubs-mobile-default.jpg", height: "926px" }}
        id="content"
      >
        <div className="max-w-[900px] mx-auto px-6">
          <div className="mt-[200px] mb-8">
            <div id="videos" className="flex items-center justify-between mb-6">
              <h2 className="text-5xl">วิดีโอ</h2>
              <Link passHref href="/videos">
                <a className="flex space-x-1 mr-10 cursor-pointer ">
                  <span className="font-light">ดูทั้งหมด</span>
                  <ArrowCircleRightIcon className="w-6 h-6" />
                </a>
              </Link>
            </div>
            <p className="font-light text-lg leading-[24px]">
              วิดีโอจากรุ่นพี่สายการเรียนและชมรมต่าง ๆ <br /> ที่ทางเราจะนำมานำเสนอให้ทุกคนได้รับชมอย่างเต็มที่ !
            </p>
          </div>
          {/*<div className="flex flex-col items-center justify-center w-full h-[400px] bg-white bg-opacity-20 rounded-xl border border-white border-opacity-40">*/}
          {/*  <ClockIcon className="w-24 h-24 mb-4" />*/}
          {/*  <h1 className="text-center px-4 text-2xl">สามารถติดตามหลังจบการถ่ายทอดสด</h1>*/}
          {/*  <Link passHref href="/stream">*/}
          {/*    <div className="flex items-center space-x-2 cursor-pointer">*/}
          {/*      <p>รับชมการถ่ายทอดสด</p>*/}
          {/*      <ArrowRightIcon className="w-4 h-4" />*/}
          {/*    </div>*/}
          {/*  </Link>*/}
          {/*</div>*/}
          <div className="relative">
            <Splide
              options={{
                fixedWidth: 170,
                gap: 12,
                perMove: 1,
                arrows: false,
                classes: { pagination: "splide__pagination custom-pagination", track: "splide__track z-[2]" },
              }}
              onMounted={() => {
                if (document && document.getElementsByClassName("splide__track").length >= 1) {
                  // @ts-ignore
                  document.getElementsByClassName("splide__track")[0].style["z-index"] = 2
                }
              }}
              renderControls={() => {
                return (
                  <div className="splide__arrows absolute top-0 z-[1] w-full h-full">
                    <div
                      style={{ left: "-50px" }}
                      className="splide__arrow--prev absolute h-full z-[20] flex items-center hover:bg-white hover:bg-opacity-20 rounded-md cursor-pointer"
                    >
                      <ChevronRightIcon className="w-6 h-6" />
                    </div>
                    <div
                      style={{ right: "-40px" }}
                      className="splide__arrow--next absolute h-full z-[20] flex items-center hover:bg-white hover:bg-opacity-20 rounded-md cursor-pointer"
                    >
                      <ChevronRightIcon className="w-6 h-6" />
                    </div>
                  </div>
                )
              }}
            >
              {videos
                .reduce(function (result, value, index, array) {
                  if (index % 2 === 0) result.push(array.slice(index, index + 2))
                  return result
                }, [])
                .map((item: any, index: number) => {
                  return (
                    <SplideSlide key={`slide-${index}`}>
                      <div>
                        <Video data={item[0]} />
                        {item.length > 1 && <Video data={item[1]} />}
                      </div>
                    </SplideSlide>
                  )
                })}
            </Splide>
          </div>
          <div id="articles" className="mt-[200px] mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-5xl">บทความ</h2>
              <Link passHref href="/articles">
                <a className="flex space-x-1 mr-10 cursor-pointer ">
                  <span className="font-light">ดูทั้งหมด</span>
                  <ArrowCircleRightIcon className="w-6 h-6" />
                </a>
              </Link>
            </div>
            <p className="font-light text-lg leading-[24px]">
              บทความจากรุ่นพี่สายการเรียนและชมรมต่าง ๆ <br />
              ที่ทางเราจะนำมานำเสนอให้ทุกคนได้อ่านอย่างเต็มที่ !
            </p>
          </div>
          <div className="">
            <div className={classnames("relative space-y-6 max-h-[621px] overflow-y-scroll snap-y scroll")}>
              {article.map((data: any, index: number) => (
                <Blog key={`blog-${index}`} data={data} />
              ))}
            </div>
          </div>
        </div>
      </AdaptiveBg>
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(120, 78, 136, 0) 0%, rgba(160, 128, 179, 0.0225) 47.7%, rgba(206, 186, 228, 0) 100%)",
        }}
        className="w-full h-[95px] mt-[-42px] bg-white backdrop-filter backdrop-blur-[6px] absolute"
      />
      <AdaptiveBg
        primary={{ background: "/images/backgrounds/additional.jpg", height: "1124px" }}
        secondary={{ background: "/images/backgrounds/additional-mobile.jpg", height: "926px" }}
        mobile={{ background: "/images/backgrounds/additional-mobile-default.jpg", height: "926px" }}
        classname="flex items-center"
        element="section"
        id="info"
      >
        <div className="mx-auto px-8 sm:px-0">
          <h2 className="font-black text-[42px] md:text-[85px] text-center">ข้อมูลเพิ่มเติมน่ารู้</h2>
          <p className="text-[14px] md:text-[26px] font-light text-center mt-2 px-4">
            {/* มาดูข้อมูลและสถิติการสอบเข้าของปีก่อน ๆ
            <br />
            รวมถึงเอกสารที่ต้องใช้ในการสอบเข้ากันเถอะ
            <br />
            หรือ */}
            ถ้าใครอยากรู้จักโรงเรียนเรามากขึ้นก็คลิกเลย !
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-4 space-y-4 md:space-y-0 mt-16">
            <Link passHref href="/admission">
              <motion.a
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-full text-[#11052C] py-3 px-10 shadow-md cursor-pointer"
              >
                การสอบเข้า ม.4
              </motion.a>
            </Link>
            <Link passHref href="/directions">
              <motion.a
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-full text-[#11052C] py-3 px-10 shadow-md cursor-pointer"
              >
                การเดินทางมาโรงเรียนเตรียมฯ
              </motion.a>
            </Link>
          </div>
        </div>
      </AdaptiveBg>
    </>
  )
}
