import { FC } from "react"

export const Youtube: FC<{ fill?: string }> = ({ fill = "#6670AD" }) => {
  return (
    <svg width="39" height="41" viewBox="0 0 39 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.08203 0C1.42518 0 0.0820312 1.34314 0.0820312 3V37.5028C0.0820312 39.1596 1.42518 40.5028 3.08204 40.5028H35.9647C37.6215 40.5028 38.9647 39.1596 38.9647 37.5028V3C38.9647 1.34315 37.6215 0 35.9647 0H3.08203ZM32.8693 12.1479C33.0836 12.9593 33.176 13.7894 33.2367 14.6249C33.354 16.2473 33.4424 17.872 33.3979 19.4126C33.4354 21.5316 33.3373 23.5546 33.1286 25.57C33.0513 26.3364 32.8622 27.0837 32.5688 27.7827C32.0223 29.0771 31.0705 29.7613 29.8234 29.973C29.0327 30.1073 28.2352 30.142 27.4383 30.1766C27.2565 30.1845 27.0747 30.1924 26.8931 30.2015C25.789 30.2564 24.684 30.2812 23.579 30.3061C22.9576 30.32 22.3363 30.334 21.7153 30.3533C20.2348 30.3994 18.7558 30.37 17.2769 30.3406C16.661 30.3283 16.045 30.3161 15.429 30.3093C14.2297 30.2961 13.0307 30.239 11.8319 30.182C11.5484 30.1685 11.2649 30.1551 10.9814 30.1422C10.3256 30.1119 9.67266 30.0278 9.02799 29.8905C7.57239 29.5809 6.64958 28.6295 6.22068 27.0511C5.97145 26.1341 5.87698 25.1959 5.79952 24.2514C5.62623 22.1391 5.61696 20.0223 5.65372 17.9059C5.68273 16.2401 5.75077 14.5731 6.00987 12.9264C6.08733 12.4343 6.2263 11.9576 6.39336 11.4928C6.90261 10.0814 7.87265 9.31856 9.19399 9.08244C9.99103 8.93997 10.7975 8.9067 11.603 8.87348C11.7767 8.86631 11.9505 8.85914 12.124 8.85088C13.4119 8.78981 14.7007 8.7635 15.9894 8.7372C16.5619 8.72551 17.1344 8.71383 17.7067 8.69909C19.259 8.65915 20.8099 8.68767 22.361 8.71618C22.8599 8.72536 23.3588 8.73453 23.8578 8.74143C25.5663 8.76684 27.2728 8.8434 28.9771 8.97113C29.7141 9.02628 30.4447 9.12646 31.1113 9.53376C32.0562 10.1116 32.5739 11.0289 32.8693 12.1479ZM17.0277 23.2663C18.5928 22.3672 20.1574 21.4671 21.7218 20.5662C22.2051 20.2878 22.6878 20.0084 23.1829 19.7218C23.4635 19.5594 23.748 19.3947 24.0388 19.2266C24.0072 19.2033 23.9816 19.1837 23.9595 19.1668C23.9199 19.1365 23.8921 19.1152 23.8628 19.0981C21.5764 17.7699 19.2895 16.4431 17.0019 15.1179C16.7334 14.9624 16.7124 14.9779 16.7124 15.3321C16.713 17.9085 16.7144 20.4849 16.7165 23.0613C16.7168 23.4232 16.7347 23.435 17.0277 23.2663Z"
        fill={fill}
      />
    </svg>
  )
}
