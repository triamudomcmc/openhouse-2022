import { FC } from "react";

const TriamUdom: FC<{
    width?:string;
    height?:string;
  classname?: string;
}> = ({ classname, width, height }) => {
  return (
    <svg
    className={classname}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 730 120"
    >
      <path
        fill="#000"
        d="M32.218 115.593c-8.286 0-15.446-2.507-21.481-7.519C3.986 102.857.61 96.259.61 88.281c0-8.184 2.915-15.498 8.746-21.942 5.626-6.24 12.53-10.127 20.714-11.661l-.614-3.376a37.262 37.262 0 01-.153-3.375c0-5.422 1.227-10.792 3.682-16.111 2.66-5.831 6.087-10.076 10.28-12.736 8.082-5.319 17.492-7.978 28.233-7.978 7.672 0 16.52 1.483 26.545 4.45 1.432.408 4.245 1.38 8.439 2.915 4.296 1.432 9.973 3.478 17.031 6.137 6.24-4.092 12.02-6.137 17.339-6.137 5.114 0 7.672 1.84 7.672 5.523 0 3.785-3.325 5.678-9.974 5.678-3.682 0-8.234-.921-13.656-2.762-6.546 6.75-12.94 17.543-19.179 32.375-6.65 15.957-15.14 28.437-25.471 37.439-3.58 3.17-7.16 5.881-10.74 8.132-3.479 2.25-6.956 4.092-10.434 5.524-3.478 1.329-7.263 2.506-11.355 3.529-4.091 1.125-8.541 1.688-13.349 1.688h-2.148zm2.302-2.302c9.308 0 18.566-3.683 27.772-11.048 3.785-2.966 7.365-6.342 10.74-10.126 3.376-3.888 6.547-8.184 9.514-12.89 1.432-2.352 3.222-5.267 5.37-8.745a901.383 901.383 0 017.518-12.275 393.933 393.933 0 017.979-11.661 442.29 442.29 0 018.899-11.662 49.936 49.936 0 014.45-4.756 66.233 66.233 0 015.064-4.296c-20.561-6.752-36.058-10.127-46.492-10.127-12.377 0-22.35 3.426-29.92 10.28-3.171 2.864-5.83 6.547-7.98 11.047-1.943 4.297-2.914 8.695-2.914 13.196v1.995c0 .614.05 1.227.153 1.841a7.11 7.11 0 011.381-.153h1.227c10.946 0 17.697 4.5 20.254 13.502 4.501-1.943 8.388-4.705 11.662-8.285 3.477-3.99 5.677-8.235 6.597-12.736l-.153-.153v-.46c0-.819.256-1.228.767-1.228.41 0 .614.256.614.767v.46c0 .205-.051.46-.154.768-2.66 10.945-9.001 18.412-19.026 22.402.102.716.154 1.432.154 2.148.102.613.153 1.278.153 1.994 0 6.342-2.506 11.713-7.518 16.111C45.823 93.6 40.197 95.8 33.752 95.8c-.716 0-1.074-.256-1.074-.767 0-.716.512-1.125 1.535-1.228 6.546-.716 11.763-2.813 15.65-6.29 4.297-3.888 6.445-9.002 6.445-15.344 0-.512-.051-.972-.154-1.381V69.56c-2.25.716-4.654 1.074-7.211 1.074-4.399 0-8.235-1.278-11.508-3.836-1.637-1.33-3.018-2.813-4.143-4.45-1.125-1.636-1.995-3.528-2.608-5.676-7.058 2.454-12.89 6.853-17.492 13.195C8.69 76.21 6.44 83.013 6.44 90.275c0 7.672 2.813 13.605 8.439 17.799 5.012 3.478 11.559 5.217 19.64 5.217zM138.55 28.44c5.626 0 8.439-1.483 8.439-4.45 0-3.17-2.148-4.756-6.444-4.756-4.91 0-9.667 2.148-14.27 6.444 5.217 1.841 9.309 2.762 12.275 2.762zM49.556 69.1c2.046 0 4.143-.357 6.291-1.073-1.125-3.887-3.375-7.007-6.75-9.36-3.376-2.25-7.059-3.375-11.048-3.375-.41 0-.92.05-1.535.153-.511 0-1.023.051-1.534.153.92 3.58 2.608 6.7 5.063 9.36 2.762 2.762 5.933 4.143 9.514 4.143zm80.104-31.626c1.375.066 3.175.131 5.401.197 2.226.065 4.419.098 6.579.098 3.077 0 6.023-.033 8.838-.098a296.53 296.53 0 015.991-.098c5.302 0 9.689.752 13.158 2.258 3.536 1.506 6.154 3.568 7.856 6.187 1.768 2.553 2.652 5.434 2.652 8.641 0 1.964-.393 4.06-1.179 6.285-.785 2.226-2.16 4.321-4.124 6.285-1.898 1.964-4.517 3.6-7.856 4.91-3.339 1.244-7.561 1.866-12.668 1.866h-9.427V72.04h8.445c4.648 0 8.184-.72 10.606-2.16 2.488-1.506 4.157-3.47 5.008-5.893.917-2.487 1.375-5.237 1.375-8.248 0-5.172-1.244-9.166-3.732-11.98-2.422-2.881-6.612-4.322-12.569-4.322-3.012 0-4.976.557-5.892 1.67-.917 1.113-1.375 3.371-1.375 6.776V96.59c0 2.357.196 4.124.589 5.303.393 1.178 1.146 1.964 2.259 2.356 1.178.393 2.88.655 5.106.786V107c-1.506-.131-3.404-.196-5.696-.196a228.557 228.557 0 00-6.775-.099c-2.554 0-4.943.033-7.169.099-2.226 0-4.026.065-5.401.196v-1.964c2.226-.131 3.895-.393 5.008-.786 1.179-.392 1.964-1.178 2.357-2.356.393-1.179.589-2.946.589-5.303V47.884c0-2.423-.196-4.19-.589-5.303-.393-1.179-1.178-1.964-2.357-2.357-1.113-.458-2.782-.72-5.008-.786v-1.964zm15.614 34.861c3.535.131 6.317.295 8.347.491 2.029.131 3.666.262 4.91.393 1.309.131 2.553.295 3.731.491 4.387.72 7.529 2.062 9.428 4.026 1.964 1.899 3.404 4.878 4.32 8.937l2.455 10.016c.655 2.88 1.31 4.975 1.964 6.285.721 1.244 1.801 1.833 3.241 1.767 1.113-.065 2.03-.425 2.75-1.08.785-.654 1.604-1.538 2.455-2.651l1.473 1.08c-1.375 2.029-2.815 3.601-4.321 4.714-1.44 1.047-3.503 1.571-6.187 1.571-2.422 0-4.55-.72-6.383-2.161-1.833-1.44-3.208-4.255-4.124-8.445l-2.161-9.82c-.589-2.815-1.276-5.237-2.062-7.267-.72-2.094-1.767-3.731-3.142-4.91-1.309-1.178-3.273-1.767-5.892-1.767H145.47l-.196-1.67zm73.104-34.86v1.963c-2.226.066-3.928.328-5.107.786-1.113.393-1.866 1.178-2.258 2.357-.393 1.113-.59 2.88-.59 5.303V96.59c0 2.357.197 4.124.59 5.303.392 1.178 1.145 1.964 2.258 2.356 1.179.393 2.881.655 5.107.786V107c-1.506-.131-3.405-.196-5.696-.196a228.624 228.624 0 00-6.776-.099c-2.553 0-4.943.033-7.168.099-2.226 0-4.027.065-5.401.196v-1.964c2.225-.131 3.895-.393 5.008-.786 1.178-.392 1.964-1.178 2.357-2.356.392-1.179.589-2.946.589-5.303V47.884c0-2.423-.197-4.19-.589-5.303-.393-1.179-1.179-1.964-2.357-2.357-1.113-.458-2.783-.72-5.008-.786v-1.964c1.374.066 3.175.131 5.401.197 2.225.065 4.615.098 7.168.098 2.292 0 4.55-.033 6.776-.098 2.291-.066 4.19-.131 5.696-.197zm35.83-.492l23.96 61.768c.982 2.488 2.095 4.157 3.339 5.008 1.244.786 2.39 1.212 3.437 1.277V107c-1.309-.131-2.913-.196-4.812-.196a163.89 163.89 0 00-5.695-.099c-2.553 0-4.943.033-7.169.099-2.226 0-4.026.065-5.401.196v-1.964c3.339-.131 5.467-.687 6.383-1.669.917-1.048.72-3.241-.589-6.58l-18.265-48.805 1.571-1.277-17.087 44.387c-1.047 2.618-1.669 4.844-1.866 6.677-.196 1.768-.032 3.175.491 4.223.59 1.047 1.539 1.8 2.848 2.258 1.375.459 3.077.721 5.107.786V107a81.421 81.421 0 00-5.794-.196 164.357 164.357 0 00-5.499-.099 77.01 77.01 0 00-4.223.099c-1.113 0-2.16.065-3.142.196v-1.964c1.309-.327 2.651-1.08 4.026-2.259 1.375-1.243 2.618-3.338 3.731-6.284l23.077-59.51h1.572zm11.98 41.735v1.964h-29.264l.982-1.964h28.282zm97.645-41.244v1.964c-2.226.066-3.928.328-5.106.786-1.113.393-1.866 1.178-2.259 2.357-.392 1.113-.589 2.88-.589 5.303V96.59c0 2.357.197 4.124.589 5.303.393 1.178 1.146 1.964 2.259 2.356 1.178.393 2.88.655 5.106.786V107c-1.505-.131-3.404-.196-5.695-.196a228.675 228.675 0 00-6.776-.099c-2.553 0-4.943.033-7.169.099-2.226 0-4.026.065-5.401.196v-1.964c2.226-.131 3.896-.393 5.009-.786 1.178-.392 1.964-1.178 2.356-2.356.393-1.179.59-2.946.59-5.303V42.58l.392.294-24.059 64.616h-1.571l-24.746-63.732v51.85c0 2.357.196 4.222.589 5.597.458 1.31 1.309 2.259 2.553 2.848 1.309.524 3.241.851 5.794.982V107c-1.178-.131-2.717-.196-4.615-.196a155.827 155.827 0 00-5.401-.099c-1.637 0-3.307.033-5.009.099-1.636 0-3.011.065-4.124.196v-1.964c2.226-.131 3.895-.458 5.008-.982 1.179-.589 1.964-1.538 2.357-2.848.393-1.375.589-3.24.589-5.597V47.884c0-2.423-.196-4.19-.589-5.303-.393-1.179-1.178-1.964-2.357-2.357-1.113-.458-2.782-.72-5.008-.786v-1.964c1.113.066 2.488.131 4.124.197 1.702.065 3.372.098 5.009.098 1.44 0 2.913-.033 4.419-.098 1.571-.066 2.88-.131 3.928-.197l22.291 58.724-1.669.786 22.095-59.215h4.615c2.291 0 4.55-.033 6.776-.098 2.291-.066 4.19-.131 5.695-.197zm118.103 81.801c-6.649 0-9.973-6.035-9.973-18.106 0-18.31 7.928-37.592 23.783-57.846-.512.41-1.586 1.688-3.222 3.836-1.637 2.148-3.785 5.166-6.445 9.053a2161.792 2161.792 0 00-7.825 11.048c-3.171 4.398-6.956 9.462-11.354 15.19-2.865 3.682-5.371 6.751-7.519 9.206-2.046 2.455-3.682 4.348-4.91 5.677-5.83 6.24-10.74 10.178-14.73 11.815-4.296 1.535-8.081 2.302-11.354 2.302-7.979 0-11.968-4.194-11.968-12.582 0-7.263 3.017-14.986 9.052-23.17a170.813 170.813 0 009.053-12.735 178.54 178.54 0 007.826-13.195c6.546-11.866 9.82-21.38 9.82-28.54 0-6.546-2.711-11.456-8.133-14.73-4.5-2.66-10.28-3.989-17.338-3.989-10.127 0-19.384 2.864-27.772 8.593-8.081 5.523-14.219 13.042-18.413 22.555-1.636 3.58-2.455 7.518-2.455 11.815 0 5.626 1.432 10.331 4.297 14.116 3.171 4.398 7.416 6.598 12.735 6.598 5.524 0 10.638-1.79 15.344-5.37 4.603-3.683 7.671-8.184 9.206-13.503v-.154c0-1.125.153-1.943.46-2.455.409-.613.716-.92.921-.92.409 0 .614.562.614 1.688 0 .716-.154 1.483-.461 2.301-1.841 5.933-5.114 10.638-9.82 14.116-4.705 3.785-10.076 5.678-16.111 5.678-6.24 0-11.303-2.455-15.19-7.365-3.478-4.399-5.217-9.82-5.217-16.265 0-12.275 5.524-22.709 16.571-31.301C401.74 4.657 413.248.668 425.932.668c9.308 0 16.98 1.943 23.015 5.83 7.263 4.399 10.894 10.997 10.894 19.794 0 5.728-1.585 11.15-4.756 16.264a347.949 347.949 0 01-5.37 8.132c-2.046 3.07-4.501 6.496-7.365 10.28l-11.048 15.038c-4.705 6.853-7.621 12.224-8.746 16.11a29.567 29.567 0 00-.92 3.837 18.796 18.796 0 00-.307 3.375c0 6.649 3.324 9.974 9.973 9.974 2.762 0 5.422-.614 7.979-1.842 8.183-3.58 24.857-23.015 50.02-58.306a604.397 604.397 0 015.371-7.518c2.148-3.07 4.756-6.496 7.825-10.28 3.273-3.786 6.496-6.547 9.667-8.286 3.273-1.74 6.444-2.609 9.513-2.609 3.682 0 5.524.716 5.524 2.148 0 1.228-1.023 1.842-3.069 1.842-.819 0-1.893-.205-3.222-.614-1.33-.307-2.404-.46-3.223-.46-1.636 0-2.864.358-3.682 1.074-9.104 6.956-17.134 18.975-24.09 36.057-6.751 16.06-10.127 30.33-10.127 42.809 0 8.695 1.944 13.043 5.831 13.043 1.227 0 2.66-.512 4.296-1.535.819-.511 1.381-.92 1.688-1.227l.614-.307c.818 0 1.227.205 1.227.614 0 .511-1.125 1.381-3.375 2.608-3.069 1.841-5.78 2.762-8.133 2.762zm54.327-81.8c11.718 0 20.425 2.945 26.121 8.837 5.695 5.827 8.543 14.207 8.543 25.14 0 7.136-1.407 13.388-4.222 18.756-2.75 5.303-6.776 9.427-12.079 12.373-5.303 2.946-11.718 4.419-19.247 4.419-.982 0-2.291-.033-3.928-.098a126.928 126.928 0 00-5.107-.098 122.267 122.267 0 00-4.713-.099c-2.291 0-4.55.033-6.776.099-2.226 0-4.026.065-5.401.196v-1.964c2.226-.131 3.895-.393 5.008-.786 1.179-.392 1.964-1.178 2.357-2.356.393-1.179.589-2.946.589-5.303V47.884c0-2.423-.196-4.19-.589-5.303-.393-1.179-1.178-1.964-2.357-2.357-1.113-.458-2.782-.72-5.008-.786v-1.964c1.375.066 3.175.164 5.401.295 2.226.066 4.419.066 6.579 0 2.292-.066 4.878-.13 7.758-.196 2.881-.066 5.238-.099 7.071-.099zm-2.455 1.767c-3.012 0-4.976.556-5.892 1.67-.917 1.112-1.375 3.37-1.375 6.775v49.1c0 3.404.458 5.663 1.375 6.776.982 1.113 2.978 1.669 5.99 1.669 7.136 0 12.668-1.276 16.596-3.829 3.928-2.62 6.677-6.416 8.248-11.392 1.572-4.975 2.357-11.03 2.357-18.167 0-7.332-.884-13.387-2.651-18.167-1.702-4.844-4.55-8.445-8.544-10.802-3.928-2.422-9.296-3.633-16.104-3.633zm78.919-3.142c6.219 0 11.653 1.407 16.301 4.222 4.714 2.815 8.347 6.874 10.9 12.177 2.619 5.237 3.928 11.62 3.928 19.149 0 7.332-1.342 13.748-4.026 19.247-2.619 5.5-6.285 9.787-10.998 12.864-4.714 3.077-10.115 4.616-16.203 4.616-6.22 0-11.686-1.408-16.4-4.223-4.648-2.815-8.281-6.874-10.9-12.177-2.553-5.302-3.83-11.685-3.83-19.149 0-7.332 1.342-13.748 4.026-19.247 2.684-5.499 6.351-9.787 10.999-12.864 4.713-3.077 10.114-4.615 16.203-4.615zm-.393 1.767c-4.255 0-7.954 1.473-11.097 4.42-3.142 2.945-5.597 7.004-7.365 12.176-1.702 5.172-2.553 11.162-2.553 17.97 0 6.94.949 12.996 2.848 18.168 1.964 5.106 4.583 9.067 7.856 11.882 3.339 2.749 7.005 4.124 10.998 4.124 4.256 0 7.955-1.473 11.097-4.419 3.142-2.946 5.565-7.005 7.267-12.177 1.767-5.237 2.651-11.227 2.651-17.97 0-7.005-.982-13.06-2.946-18.167-1.898-5.107-4.484-9.035-7.758-11.784-3.273-2.815-6.939-4.223-10.998-4.223zm117.388-.393v1.964c-2.226.066-3.928.328-5.106.786-1.113.393-1.866 1.178-2.259 2.357-.393 1.113-.589 2.88-.589 5.303V96.59c0 2.357.196 4.124.589 5.303.393 1.178 1.146 1.964 2.259 2.356 1.178.393 2.88.655 5.106.786V107c-1.506-.131-3.404-.196-5.696-.196a228.557 228.557 0 00-6.775-.099c-2.554 0-4.943.033-7.169.099-2.226 0-4.026.065-5.401.196v-1.964c2.226-.131 3.895-.393 5.008-.786 1.179-.392 1.964-1.178 2.357-2.356.393-1.179.589-2.946.589-5.303V42.58l.393.294-24.059 64.616h-1.571l-24.747-63.732v51.85c0 2.357.197 4.222.59 5.597.458 1.31 1.309 2.259 2.553 2.848 1.309.524 3.24.851 5.794.982V107c-1.179-.131-2.717-.196-4.616-.196a155.782 155.782 0 00-5.401-.099c-1.636 0-3.306.033-5.008.099-1.637 0-3.011.065-4.124.196v-1.964c2.225-.131 3.895-.458 5.008-.982 1.178-.589 1.964-1.538 2.357-2.848.392-1.375.589-3.24.589-5.597V47.884c0-2.423-.197-4.19-.589-5.303-.393-1.179-1.179-1.964-2.357-2.357-1.113-.458-2.783-.72-5.008-.786v-1.964c1.113.066 2.487.131 4.124.197 1.702.065 3.372.098 5.008.098 1.44 0 2.913-.033 4.419-.098a195.08 195.08 0 003.928-.197l22.292 58.724-1.67.786 22.095-59.215h4.616c2.291 0 4.55-.033 6.775-.098 2.292-.066 4.19-.131 5.696-.197z"
      ></path>
    </svg>
  );
}

export default TriamUdom;
