import { useEffect, useState, ReactNode } from "react"
import { QrReader } from "react-qr-reader"

import { useAuth } from "@lib/auth"
import { stamp } from "@lib/clientDB"

import { PageContainer } from "@components/account/PageContainer"
import getNameOfClub from "@utilities/nameENofClub"
import noAuth from "@pages/noAuth"

const FocusRing = () => {
  return (
    <svg width="200" height="200" viewBox="0 0 241 238" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M34.0939 3C20.3234 2.99999 1.38818 5.34239 3.10953 37.5487"
        stroke="white"
        strokeWidth="5.75812"
        strokeLinecap="round"
      />
      <path
        d="M204.534 3C219.325 2.99999 239.662 5.34239 237.814 37.5487"
        stroke="white"
        strokeWidth="5.75812"
        strokeLinecap="round"
      />
      <path
        d="M204.534 234.477C219.325 234.477 239.662 232.134 237.814 199.928"
        stroke="white"
        strokeWidth="5.75812"
        strokeLinecap="round"
      />
      <path
        d="M34.0939 234.477C20.3234 234.477 1.38818 232.134 3.10953 199.928"
        stroke="white"
        strokeWidth="5.75812"
        strokeLinecap="round"
      />
    </svg>
  )
}

const Page = () => {
  const { user } = useAuth()
  const [uid, setUid] = useState<string | null>(null)
  const [uidData, setUidData] = useState(null)
  const [stampPress, setStampPress] = useState<boolean>(false)
  const [buttonDisable, setButtonDisable] = useState<boolean>(true)
  const [buttonNum, setButtonNum] = useState<number>(1)

  function handleQrUid(result, error) {
    if (result) {
      setUid(result.text)
      setButtonDisable(false)
    }
  }

  function stampit() {
    if (uid) {
      setStampPress(true)
      const clubName = getNameOfClub(user?.club)
      stamp(user?.club, clubName, uid)
    }
  }

  useEffect(() => {
    const getUidData = async (uid) => {
      const res = await fetch(`/api/qrinfo/booth/${uid}`, {
        method: "POST",
        body: JSON.stringify({
          executerUid: user?.uid,
        }),
      })
      if (res) setUidData(await res.json())
    }
    if (uid) getUidData(uid)
    setButtonNum(1)
  }, [uid, user?.uid])

  useEffect(() => {
    if (uidData?.stamp?.hasOwnProperty(user?.club)) setButtonNum(3)
    if (stampPress) setButtonNum(2)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uidData, stampPress, user?.club])

  const descriptionVariants: ReactNode[] = [
    <span key="marked" className="text-[#A7ADDE] text-lg font-semibold tracking-wide">
      MARKED
    </span>,
    <div
      key="stamp"
      className="bg-bright-orange font-semibold text-white py-0.5 px-5 rounded-full"
      onClick={stampit}
    >
      <span>STAMP</span>
    </div>,
    <div key="stamped" className="bg-[#C9CCE9] font-semibold text-white py-0.5 px-5 rounded-full">
      <span className="text-[#E4E6FD]">STAMPED</span>
    </div>,
    <span key="alrgot" className="text-[#A7ADDE] text-lg font-semibold tracking-wide">
      Already got one
    </span>,
  ]

  if (user?.club && user?.roles?.hasOwnProperty('staff'))
    return (
      <PageContainer>
        <div className="flex flex-col items-center mt-10">
          <div
            style={{ background: "linear-gradient(180deg, #8087CD 0%, #E29E78 100%)" }}
            className="flex items-center justify-center h-[250px] w-[250px] rounded-[26.9px]"
          >
            <div className="h-[220px] w-[220px] bg-[#130D03] relative rounded-[25.56px]">
              <QrReader
                className="absolute w-[220px]"
                onResult={(result, error) => {
                  handleQrUid(result, error)
                }}
                constraints={{ facingMode: "environment" }}
                containerStyle={{ "border-radius": "25.56px" }}
              />
              <div className="absolute flex items-center justify-center w-full h-full">
                <FocusRing />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-4 w-[191px]">
            <div className={`mb-2 ${buttonDisable ? 'cursor-not-allowed' : 'cursor-pointer'}`} aria-disabled={buttonDisable}>{descriptionVariants[buttonNum]}</div>
            <div className="flex flex-col text-[#37498B] text-lg w-full">
              <span className="font-semibold">
                ชื่อ :{" "}
                <span className="font-light">
                  {uidData?.Info?.firstname} {uidData?.Info?.lastname}
                </span>
              </span>
              <span className="font-semibold">
                อีเมล : <span className="font-light">{uidData?.email}</span>
              </span>
            </div>
          </div>
        </div>
      </PageContainer>
    )

  return noAuth()
}

export default Page
