import { useEffect, useState } from "react"
import Router, { useRouter } from "next/router"

import { ArrowCircleLeftIcon } from "@heroicons/react/outline"
import Image from "next/image"
import { UserIcon } from "@heroicons/react/solid"
import { PageContainer } from "@components/account/PageContainer"

import { useAuth } from "@lib/auth"
import { IUserData } from "@ctypes/account"

import noAuth from "@pages/noAuth"

const Page = () => {
  const { user, signout } = useAuth()
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(true)
  const [accountData, setAccountData] = useState<IUserData | null>(null)

  const toAuth = () => {
    if (router) router.push("/auth")
  }

  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch(`/api/qrinfo/${user?.uid}`, {
        headers: {
          req_uid: user?.uid,
        },
      })
      if (res.status != 304) {
        setAccountData(await res.json())
        setLoading(false)
      }
    }
    if (user?.uid) fetcher()
    // else router.push({pathname: `/auth`})
  }, [router, user?.uid])

    if (user?.uid) return (
      <PageContainer>
        {accountData?.Info
        ? <div>
          {loading
            ? <div>Loading...</div>
            : <div className="flex flex-col items-center mt-14">
              <div className="flex justify-end bg-[#D9D9D9] rounded-full w-[176px] h-[176px] sm:w-[194px] sm:h-[194px]">
                <Image src={`/assets/images/profile/${accountData?.Info?.profileIcon}.png`} height={194} width={194} alt="Profile Icon"/>
              </div>
              <div className="flex flex-col items-center mt-4 text-purple">
                <span className="font-bold text-[28px] tracking-wide">{accountData?.Info?.username}</span>
                <span className="-mt-2 text-sm font-medium">
                  {accountData?.Info?.firstname} {accountData?.Info?.lastname}
                </span>
              </div>
              <div className="flex items-center mt-1 mb-12 space-x-1 text-purple">
                <UserIcon className="w-4 h-4" />
                <span className="mt-1 text-sm font-medium">{accountData?.Info?.status}</span>
              </div>
              <div className="w-full max-w-[220px] mx-auto flex flex-col space-y-4">
                <button onClick={() => {Router.push("/account/ticket")}} className="w-full py-2 bg-white rounded-full shadow-lg text-deep-turquoise">
                  <span className="text-lg font-semibold">E-Ticket</span>
                </button>
                {(user?.roles?.hasOwnProperty('tucmc') || user?.roles?.hasOwnProperty('aic')) && <button onClick={() => {Router.push("/account/scanner")}} className="w-full py-2 bg-white rounded-full shadow-lg text-deep-turquoise">
                  <span className="text-lg font-semibold">Ticket marker</span>
                </button>}
                {(user?.club && user?.roles?.hasOwnProperty('staff')) && <button onClick={() => {Router.push("/account/stamp/scanner")}} className="w-full py-2 bg-white rounded-full shadow-lg text-deep-turquoise">
                  <span className="text-lg font-semibold">สแกนแสตมป์</span>
                </button>}
                {!(user?.club || user?.roles?.hasOwnProperty('staff')) &&<button onClick={() => {Router.push("/account/stamp")}} className="w-full py-2 bg-white rounded-full shadow-lg text-deep-turquoise">
                  <span className="text-lg font-semibold">สะสมแสตมป์</span>
                </button>}
                <button onClick={signout} className="w-full py-2 bg-gray rounded-full shadow-lg text-orange">
                  <p className="text-lg font-semibold">ออกจากระบบ</p>
                </button>
              </div>
            </div>}
          </div>
        : noAuth()}
      </PageContainer>
    )

    return noAuth()
}

export default Page
