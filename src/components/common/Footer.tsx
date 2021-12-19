import {Facebook} from "@vectors/Facebook";
import {Instagram} from "@vectors/Instagram";
import {Twitter} from "@vectors/Twitter";
import {Youtube} from "@vectors/Youtube";

export const Footer = () => {
  return (
    <div className="bg-white w-full pt-10 px-8">
      <div className="flex flex-col sm:flex-row sm:items-start items-center justify-between max-w-6xl mx-auto w-full">
        <div className="flex justify-center">
          <div className="sm:text-left text-center space-y-5">
            <div className="text-[#1D3662] font-semibold">
              <h1>TRIAM UDOM ONLINE</h1>
              <h1 className="-mt-1">OPEN HOUSE 2021</h1>
            </div>
            <div className="flex space-x-3">
              <Facebook/>
              <Instagram/>
              <Twitter/>
              <Youtube/>
            </div>
            <div style={{background: "linear-gradient(97.19deg, #C898CC 0.83%, #666EAD 43.54%, #112D55 99.62%)"}}
                 className="px-8 py-2 rounded-full inline-flex font-medium">เข้าสู่ระบบ
            </div>
          </div>
        </div>
        <div className="text-[#6B7280] flex flex-col sm:flex-row justify-between w-full max-w-md ml-0 mt-6 sm:mt-0 sm:ml-20">
          <div className="flex flex-col space-y-2 text-center sm:text-right">
            <span>หน้าแรก</span>
            <span>รายการสด</span>
            <span>บทความ</span>
            <span>คลิปวิดีโอ</span>
            <span>ชมรม</span>
          </div>
          <div className="flex flex-col space-y-2 text-center sm:text-right mt-2 sm:mt-0">
            <span>สายการเรียน</span>
            <span>การสอบเข้า</span>
            <span>เกมค้นหาดวงดาวของคุณ</span>
            <span>การเดินทาง</span>
            <span>ติดต่อ</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center border-t border-gray-400 border-opacity-30 py-5 mt-10">
        <img className="h-6 sm:h-8" src="/images/logos/gray-text.jpg"/>
      </div>
    </div>
  )
}
