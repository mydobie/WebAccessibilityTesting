import React from 'react';

export const RoseImage = ({
  size = 70,
  title = 'rose',
}: {
  size?: number;
  title?: string;
}) => (
  <svg
    width={`${size}px`}
    height={`${size}px`}
    version='1.1'
    viewBox='0 0 512 512'
    xmlns='http://www.w3.org/2000/svg'
  >
    {title !== '' ? <title>rose</title> : null}
    <path d='m355.88 375.56c-11.145-7.1562-23.418-11.926-37.531-13.188-9.9023-0.88672-23.055-0.44141-34.637 2.7891 0.79297-0.57812 1.582-1.1562 2.3594-1.7852 10.363-8.3398 17.633-19.246 22.652-31.484 5.0078-12.215 7.625-25.492 7.4102-38.707-0.14453-8.8945-2.3594-17.055-4.0547-25.691-0.17969-0.91016-0.33203-1.8242-0.48047-2.7344l-0.64062-4.25-4.1406 2.7891c-9.9336 6.5859-20.219 12.617-30.199 19.184-11.117 7.3125-20.691 15.203-25.027 28.199-4.6328 13.879-3.4453 28.504-0.097657 42.844-10.715-28.906-20.156-55.578-15.961-87.098 1.7344-13.035 5.6562-26.055 10.746-38.176 2.3359-5.5586 6.6445-12.93 5.3945-19.215-0.097657-0.49219-0.76953-0.37891-0.75391 0.10938 0.21484 7.6758-6.4609 16.68-9.1758 23.648-4.3633 11.211-7.6836 23.262-9.1406 35.211-2.9805 24.535 0.64062 46.977 9.0469 70.035 9.832 26.969 21.07 53.945 25.012 82.57 1.8477 13.402 0.46484 26.809-0.42578 40.227-0.48828 7.3047-0.86719 15.699-3.4727 22.938-1.9961 0.16016-4.0234-0.12109-6.0742-0.6875 0.71875-3.0156 1.1719-6.1172 1.543-9.1602 1.418-11.703 2.0625-23.859 2.2617-35.637 0.47266-27.602-9.5859-55.09-19.055-80.609-11.004-29.648-20.957-56.793-16.664-89.008 1.7344-13.035 5.6562-26.055 10.746-38.176 1.9492-4.6484 5.2734-10.559 5.5859-16.047 1.9297-1.5039 3.8906-2.9648 5.9492-4.2656 2.0273-1.2852 4.0703-2.1602 5.9102-3.4414l2.2461 0.42578c2.0078 0.26562 4.0703 0.35156 6.1523 0.33984 0.03125 0.13672 0.10938 0.26562 0.29297 0.34375 3.5469 1.4609 6.6211 5.3242 9.6875 7.6484 3.1953 2.4219 6.4727 4.5664 9.9258 6.5938 1.4141 0.82422 2.7461 1.7266 4.0508 2.6484l2.6016 1.9141 7.0391 0.78516c8.7773 0.89063 17.562 1.3984 26.32 0.83984l1.5977-0.11719 2.6797-3.8086c2.7891-4.168 5.3438-8.5 8.0273-12.785 1.9219-3.0703 3.8906-6.1641 5.5234-9.3984l2.4375-5.9141-4.5664 3.1602c-2.6836 1.8594-5.375 3.7031-8.1211 5.4648-4.168 2.6797-8.3711 5.7227-12.918 7.6953-2.1797 0.94531-4.2383 1.3398-6.2891 1.5117-2.4492-2.2266-5.2031-4.2383-7.4023-6.5391-2.8828-3.0039-5.668-6.1328-8.418-9.2891 6.3906-3.5703 11.98-7.8711 15.98-12.41 9.957-11.32 18.52-23.922 20.059-39.238 0.8125-8.1289-0.019532-16.258-1.3789-24.277-1.1484-6.7773-1.6328-13.402-2.1406-20.082 10.684-9.8047 23.047-22.309 21.367-38.293-0.66016-6.2969-4.1719-12.043-9.5547-15.457-5.2227-3.3164-9.9414-2.9375-15.012-2.0977 0-0.003906-0.003907-0.015625-0.003907-0.019531-2.0117-5.3398-11.617-3.3281-16.805-1.9609-1.9961-3.1289-4.8242-5.6719-8.3828-7.082-6.4805-2.5703-12.473-1.668-18.34 0.34375 0.13672-5.0469-9.2109-10.117-12.852-11.48-7.0234-2.6328-13.402 3.8867-17.914 8.9453-3.9375-3.1484-8.8594-5.6562-12.852-2.2031-2.5742 2.2266-2.9297 5.8984-2.2227 9.2969-6.25-4.3828-13.441-5.8828-20.082 0.41406-8.2188 7.793-2.1094 17.09 5.8008 22.953 0.14453 10.383-0.97656 20.707-4.2305 30.676-3.3594 10.285-9.5859 18.703-14.734 28.074-6.918 12.586-7.8164 25.625-4.207 39.43 1.2695 4.8594 3.1016 9.8477 5.5547 14.484-2.2305-0.039062-4.4609-0.039062-6.5742 0.67969-5.4922 1.8789-7.9766 6.4883-14.516 7.5195-8.8594 1.4023-17.66-2.6367-25.012-7.832l-2.1719-1.6016 1.3633 5.2461c3.0352 9.168 9.6602 18.605 17.652 25.02l2.3125 1.7188 4.8594-0.40625c3.3984-0.48047 6.7891-1.3477 10.707-2.5273 12.09-3.6523 22.75-1.2344 34.781-2.082-2.6562 3.3398-4.9727 6.9375-6.8438 10.902-3.1992 6.7773-3.5312 13.762-4.4102 20.789l-0.375 2.7344 3.2305-3.2148c5.5547-5.3906 11.43-10.418 17.496-15.328 1.7578-1.4219 3.5078-2.8711 5.2852-4.2969-1.5508 6.6133-6.4609 13.727-8.6875 19.457-4.3633 11.211-7.6836 23.262-9.1406 35.211-2.9648 24.402 0.60547 46.734 8.9141 69.664-4.5195-7.2031-10.008-13.711-16.582-19.027-15.523-12.555-37.152-19.859-57.078-16l-2.5039 0.52344 0.44531 2.0586c4.4102 18.156 16.785 33.555 30.977 45.547 14.52 12.266 34.621 15.027 53.355 13.266l1.0742-0.11328c6.7031 18.477 12.77 37.207 15.457 56.699 1.8477 13.402 0.46484 26.809-0.42578 40.227-0.39453 5.9609-0.72266 12.641-2.2383 18.836l-0.52734 1.9648 3.3672 1.4492c0.98828 0.32812 1.8672 0.5625 2.3516 0.67188 1.082 0.25 2.1641 0.35156 3.25 0.38281l4.2031-0.47656c0.41797-0.10938 0.84375-0.19922 1.2656-0.34375l-0.23047-2.832c1.0156-3.6094 1.6094-7.3711 2.0547-11.055 1.418-11.703 2.0625-23.859 2.2617-35.637 0.33984-19.793-4.7461-39.52-11.137-58.512l0.12109-0.050781c0.27734-0.11719 0.54687-0.24219 0.82422-0.35938 11.902 17.121 28.32 21.617 48.855 21.039 19.328-0.54297 33.5-6.832 46.148-18.691l2.3047-2.2539zm-50.773-161.35 1.4375 1.4844 4.9062 0.12891c4.543-0.21484 8.4531-1.5703 14.391-5.0938 2.7031-1.6016 5.3711-3.293 8.0117-5.0195-1.2031 2.1719-2.457 4.3203-3.6523 6.5039-2.2422 4.1016-4.3477 8.2695-6.6562 12.312-10.641 0.84375-21.168 0.34766-31.836 0.22656-2.5391-2.0117-5.1797-3.8945-8.0195-5.5234-4.957-2.832-9.793-5.8008-14.539-8.9766-1.6172-1.082-2.9648-2.2188-4.5664-2.8711 9.5273-0.65625 19.461-3.8438 28.047-8.4336 3.9414 5.3438 7.9688 10.465 12.477 15.262zm7.332-38.414c-8.3828 11.023-17.289 18.176-30.34 22.789-8.0898 2.8633-17.73 5.8047-26.82 5.4531-0.16406-0.5-0.73047-0.88672-1.3164-0.83984-1.3164-3.9062-2.7461-7.793-3.5156-11.914-1.3359-7.1328-1.1992-14.551 0.10156-21.68 0.003906-0.03125 0.015625-0.0625 0.019531-0.09375 2.8867-3.6797 6.0312-7.1641 9.3984-10.359 3.8672-3.6758 8.0742-7.0898 12.684-9.7852 6.7422-3.9414 13.359-4.2617 20.641-6 17.664-4.2305 19.48-23.898 29.105-36.695 0.11328 2.2031 0.28516 4.4102 0.63672 6.6289 1.1758 7.4688 2.9297 14.824 3.293 22.41 0.74609 15.703-4.5352 27.781-13.887 40.086zm11.391-125.52c2.6094-0.62109 5.1797-1.1016 7.2344-0.82422 9.1797 1.2305 14.918 10.27 14.027 18.953-0.87891 8.5898-6.3086 17.164-11.996 23.434-5.5469 6.1172-12.754 10.004-17.246 17.09-4.0547 6.3984-6.1328 13.871-10.133 20.332-6.6211 10.691-15.891 9.7773-26.648 13.07-6.6602 2.0391-12.395 6.0195-17.602 10.578-3.3086 2.8945-6.3477 6.0469-9.1445 9.3906 3.8945-12.934 11.5-24.738 20.438-34.723 10.531-11.762 23.613-20.875 33.91-32.875 5.1445-5.9961 10.277-12.262 14.301-19.082 2.9805-5.0547 3.7031-10.332 6.1758-15.441 0.34766-0.71875-0.8125-1.4023-1.2305-0.69531-2.6367 4.5156-4.4336 9.2266-6.9219 13.746 0.60547-1.875 1.1328-3.7773 1.6172-5.7148 1.0938-4.3242 3.3867-11.625 3.2188-17.238zm-6.8281-3.957c7.957 2.7734-0.57422 28.391-4.5156 36.098-1.1094 1.3633-2.2422 2.707-3.3984 4.043-1.9648-5.8281-4.6641-11.352-8.6406-15.734 1.9961-3.5469 5.1875-6.1445 7.9375-9.0898 2.5391-2.7148 4.7148-5.668 6.3555-9.0078 0.21094-0.42578-0.39062-0.875-0.74219-0.55859-1.4648 1.3047-2.8633 2.6719-4.2461 4.0547-0.003906-3.1836-0.70312-6.3555-2.0156-9.2109 3.1562 0.1875 7.7109-1.1367 9.2656-0.59375zm-34.305-7.0195c13.613-2.9141 24.852 5.4844 24.188 19.695-0.77734 0.77734-1.5625 1.5508-2.3555 2.3086-2.3711 2.2578-4.625 4.4297-6.4258 7.1016-1.9922-1.7461-4.25-3.2344-6.8398-4.3984-2.3047-1.0273-4.5781-1.8594-6.832-2.6523 1.5859-1.7109 2.7383-4.6406 3.6211-6.2656 0.87891-1.6367 1.5664-3.3672 2.3125-5.0703 0.64844-1.4883 1.3984-4.4023 2.8281-5.3203 0.25781-0.16406 0.054688-0.62891-0.24219-0.55859-2.8867 0.70312-4.5195 4.5586-5.8125 6.8906-1.7617 3.1953-3.9414 6.1289-5.7812 9.2422-4.3555-1.543-8.6055-3.2109-12.727-6.1992-3.0977-2.2461-5.7734-4.8672-8.3594-7.582 7.8008-1.3672 14.652-5.5273 22.426-7.1914zm-17.82-10.742c4.9102 1.2969 10.07 5.582 12.254 10.055-5.8867 2.3008-11.703 5.3867-17.832 6.8711-1.9727-2.0938-3.9102-4.2305-5.9766-6.2773-0.96094-0.95312-2.1523-2.1211-3.4805-3.2617 4.4609-3.2656 9.6602-8.8047 15.035-7.3867zm-17.852 8.9492c2.918 2.2266 5.3008 5.125 7.75 7.8281 4.4375 4.8906 8.9336 9.8672 14.512 13.508 4.8242 3.1484 10.004 4.9102 15.504 6.5195 11.711 3.4258 20.773 10.762 21.965 23.75-3.7773 4.1875-7.7305 8.2266-11.793 12.008-4.6641 4.3398-9.4688 8.5-14.168 12.758-1.8906-10.297-6.543-18.555-12.094-26.32 1.8281-8.0352-0.53125-18.555-5.9531-24.656-0.39063-0.44141-1 0.070312-0.70313 0.55469 4.0352 6.5742 4.668 13.121 3.8047 20.234-6.0039-7.9297-12.621-15.621-17.746-24.812-2.5586-4.582-6.8828-10.578-12.027-14.891-0.25781-6.2344 4.2617-11.578 10.949-6.4805zm-29.266 20.855c-5.2539-5.7891-3.9102-10.699 4.0312-14.73 4.25-0.35156 8.0469 0.75781 11.387 3.3281 7.3945 5.207 10.441 13.992 15.148 21.316 4.6172 7.1719 11.324 12.457 16.379 19.297 0.29297 0.39453 0.55469 0.79688 0.82812 1.1992 0.003906 0.003907 0.011718 0.015625 0.015625 0.027344 5.9258 8.375 9.8828 17.762 12.406 27.68-2 1.8633-3.9531 3.7734-5.8711 5.7188-0.36719-5.0547-1.3359-10.008-4.3711-14.27-4.6641-6.5547-13.102-9.4609-16.199-17.387-2.3906-6.1172-0.75391-13.496-5.9844-18.422-4.0078-3.7695-9.9531-3.793-14.891-5.4688-4.7812-1.6328-9.7148-4.2109-12.879-8.2891zm-19.496 87.137c0.66406-15.75 12.191-26.961 18.254-40.703 5.2031-11.785 6.6094-24.488 6.0039-37.172 2.4023 1.4492 4.8242 2.5547 6.9492 3.1797 1.7617 0.51562 3.5703 0.69141 5.3516 1.1016 7.0078 1.6094 9.4922 7.332 11.652 13.59 1.1328 3.2773 1.2148 6.3633 3.1523 9.4805 2.3516 3.7695 5.7461 5.8711 9.125 8.5703 7.2969 5.8281 9.8164 11.785 11.98 20.031-3.0352 3.168-5.9453 6.4727-8.5977 10.047-7.7617 10.449-13.562 22.559-15.801 35.434-1.5273 8.7617-0.64844 16.449 1.0703 24.055-4.0742 1.25-8.3086 1.9062-12.496 1.875-0.078125-0.28125-0.44141-0.51172-0.70703-0.26953-0.097656 0.085937-0.18359 0.17578-0.28125 0.26172-8.6406-0.28125-16.961-3.5117-22.957-10.531-8.8203-10.324-13.27-25.516-12.699-38.949zm0.46875 55.254c-7.5938 1.3984-14.488 4.1875-21.836 5.7891-7.5938-5.7617-14.152-13.742-18.516-22.18 5.1562 2.8398 10.91 4.6758 16.559 5.1445 4.3828 0.36719 8.6133-0.14453 12.574-2.1289 5.1289-2.5703 10.445-4.5977 15.586-6.957 3.5078 5.9766 8.1367 11.211 14.121 14.605 3.7617 2.1367 8.0742 3.3906 12.574 3.9062-1.2031 1.2383-2.3438 2.5195-3.4453 3.8281-0.039062-0.019531-0.050781-0.066406-0.097656-0.082031-8.5586-2.4883-18.664-3.5547-27.52-1.9258zm29.984 20.492c-4.0234 3.5234-7.8633 7.1406-11.48 10.969 0.41406-4 0.90234-7.9883 2.2109-11.867 2.6094-7.6992 7.0586-14.863 12.199-21.234 5.5977 0.39062 11.402-0.31641 16.758-1.8984 0.53906 2.0703 1.1172 4.1406 1.7109 6.2422l0.60938 2.1641c-2.5586 1.7188-5.7227 3.0117-8.1211 4.6172-0.55859 0.375-1.1016 0.78516-1.6523 1.1719-0.003906-0.035156-0.011718-0.078125-0.015624-0.11328-0.097657-0.49219-0.76953-0.37891-0.75391 0.10938 0.003907 0.18359-0.011719 0.375-0.015625 0.5625-3.9805 2.8711-7.7695 6.0547-11.449 9.2773zm-28.648 114.5c7.6797 2.7461 14.273 10.082 20.543 15.129 5.3672 4.3203 11.023 10.723 17.379 13.82-18.438 0.39844-37.598-2.6523-51.508-15.148-7.1406-6.4141-14.012-13.902-19.324-21.945-3.8711-5.8672-6.3594-12.172-8.6172-18.621 8.2227 5.6797 16.793 10.844 25.035 16.488 0.54297 0.375 1.1328-0.39844 0.62109-0.82031-7.8047-6.3477-15.691-12.469-24.277-17.719 20.086-1.6641 41.051 5.7617 55.609 19.363 10.613 9.9219 17.719 22.809 22.637 36.465-5.4492-5.8203-11.34-10.797-17.816-15.602-5.9141-4.3867-12.887-9.957-20.031-11.992-0.39062-0.10938-0.63672 0.44531-0.25 0.58203zm58.918 37.391c-5.9297-20.547-11.598-42.781-4.1367-62.699 5.4688-14.602 18.395-21.914 30.867-29.812 7.1289-4.5156 14.605-8.6211 21.773-13.16 0.039063 0.22656 0.078125 0.44531 0.12109 0.67188 1.4531 7.2461 3.3828 14.27 3.8555 21.688 0.90625 14.25-2.0898 28.871-7.6445 41.965-5.125 12.078-12.66 22.184-23.086 30.188-5.5977 4.2969-11.766 7.6328-17.875 11.027 6.4727-13.102 8.2891-28.605 13.672-42.168 3.6133-9.1094 7.7305-18.043 12.156-26.793 3.6133-7.1523 6.2344-14.934 10.082-21.902 0.25-0.44922-0.42578-0.92578-0.79297-0.59766-4.4141 3.9336-6.1836 10.133-8.9531 15.242-4.5664 8.4258-8.9648 16.902-12.734 25.719-3.7422 8.75-7.1523 17.695-9.6289 26.887-2.1758 8.0938-3.6758 16.324-7.6758 23.746zm52.371 21.48c-10.055 0.44531-20.383-0.0625-29.812-3.918-7.7461-3.168-13.039-8.7227-19.047-14.184 0.60547-0.26172 1.2031-0.52734 1.8086-0.79297-0.046875 0.34375 0.3125 0.6875 0.66016 0.40625 0.80469-0.64453 1.6641-1.2539 2.5508-1.8438 2.9492-1.3398 5.8672-2.7539 8.7305-4.3516 14.027-5.3359 32.375-5.9648 45.055-4.3711 12.395 1.5508 22.621 6.0352 32.113 12.16-11.902 10.09-24.633 16.117-42.059 16.895z' />
  </svg>
);

export const DaisyImage = ({ size = 70 }: { size?: number }) => (
  <svg
    width={`${size}px`}
    height={`${size}px`}
    version='1.1'
    viewBox='0 0 512 512'
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden
  >
    <path d='m355.03 123.49c-1.3984-23.66-25.578-38.094-46.148-27.281-3.8359 2.0234-7.418 4.5195-10.855 7.2539 4.8086-13.715 6.293-28.145 3.1133-38.43-6.3164-20.465-37.996-27.25-53.996-14.895-16.754 12.934-12.84 33.465-10.648 53.242-2.1914-4.5273-4.8828-8.8164-8.3594-12.691-9.3438-10.426-27.348-15.324-40.711-10.707-15.352 5.3047-18.023 23.848-9.2227 36.402 6.5312 9.3398 17.773 12.59 28.156 17.074-12.09-4.4336-24.121-8.9805-37.238-9.5781-8.832-0.39844-16.926 0.93359-24.16 6.2344-7.4297 5.4531-7.6836 17.547-7.0352 25.684 1.6016 20.105 16.82 37.406 37.852 37.352 3.8047-0.011719 7.4102-0.56641 10.871-1.4961-3.8008 3.8516-7.418 7.7617-10.809 11.59-5.8711 6.6289-9.8086 12.676-8.6523 21.738 1.1172 8.7383 8.9844 14.504 16.562 17.496 16.43 6.4883 42.605 2.8477 53.227-12.496 5.0078-7.2188 6.1641-16.992 6.3984-26.023 6.7891 46.316-1.543 94.02 1.9414 140.8-19.316-21.355-48.148-34.848-71.617-49.992-1.125-0.72656-9.457-2.8125-8.2227 0.875 6.1836 18.477 15.254 35.211 30.422 47.801 15.242 12.652 34.648 19.461 53.176 25.707 0.078126 0.054687 0.15234 0.11328 0.23438 0.17578-0.12109 0.73047-0.24219 1.4375-0.28516 2.0742-2.5273 33.094-4.6094 66.402-2.3516 99.562 0.1875 2.8828 8.207 5.0742 9.7891 2.625 2.0625-3.1953 1.8633-2.6094 2.7148-6.5117 0.3125-1.4141-1.0273-2.668-2.8359-3.4609-1.6602-32.145-0.51172-65.465 3.7344-97.285 13.039-19.883 28.57-38.035 41.277-58.168 12.016-19.043 22.301-41.23 17.832-64.211-0.64844-3.3594-7.4844-4.4844-9.7852-2.6172-30.957 25.109-43.836 61.363-54.332 98.227-2.6055-49.746 6.7188-100.44-4.3125-149.28 4.2695 5.7539 7.9102 12.164 11.621 17.352 7.2383 10.117 15.953 19.047 28.344 22.195 16.836 4.2695 48.395-7.3047 45.211-28.688-2.2383-15.012-18.023-26.281-32.219-32.988 2.7188-0.56641 5.3203-1.1914 7.7227-1.8438 19.902-5.4062 45.016-18.941 43.598-42.82zm-33.512-24.523c11.98-5.0273 19.457 8.3828 22.43 18.152 6.168 20.297-14.352 34.34-30.383 40.867-5.2031 2.1094-12.578 4.5117-20.332 5.9297-8.8125-3.0156-19.16-4.8555-28.707-3.7227 1.1836-4.668 0.10156-9.7383-2.707-13.926 14.07-4.8008 25.793-20.438 35.789-29.926 7.1523-6.7734 14.746-13.523 23.91-17.375zm-79.969 45.578c0.9375 0.28125 1.9219 0.45703 2.832 0.50781 0.082032 0.14453 0.17578 0.27734 0.27734 0.41016-1.5664 0-4.2383 0.375-3.5625 2.2109 0.33203 0.90625 0.95703 1.6211 1.7266 2.1758-0.035156 0-0.070312-0.003906-0.097656-0.003906-0.52734 0-0.94531 0.039062-1.3164 0.10938-0.53125-1.6484-2.6992-2.5742-4.2461-2.9883 1.3906-0.97266 2.8555-1.7812 4.3867-2.4219zm9.6406 18.691c-0.47266-0.21094-0.96094-0.375-1.4727-0.49219-0.085938-0.16016-0.17969-0.30078-0.29297-0.42969 0.74219 0.078125 1.4805 0.078125 2.207-0.078125 0.15234-0.035156 0.38281-0.09375 0.63672-0.18359-0.011719 0.011719-0.015625 0.015625-0.027344 0.035157-0.32031 0.39062-0.67188 0.77734-1.0508 1.1484zm-16.035 1.2852c-0.011719-0.015625-0.03125-0.027343-0.035156-0.039062 0.47656 0.28125 0.97266 0.51562 1.5039 0.70312-0.27734 0.039062-0.56641 0.10938-0.85938 0.19531-0.20703-0.28906-0.39453-0.58203-0.60938-0.85938zm-1.9766-1.7539c0.18359 0.28125 0.40625 0.53125 0.63672 0.74609-0.27734-0.14453-0.56641-0.27734-0.87891-0.39453 0.097656-0.10547 0.17578-0.22266 0.24219-0.35156zm10.422 4.8945c-0.003906 0-0.003906 0 0 0-0.74609-0.85156-1.75-1.4844-2.8477-1.9062 0.67188-0.078125 1.5625-0.26562 2.0898-0.70312 0.49219 0.21094 0.99219 0.375 1.4531 0.49219 0.039062 0.003906 0.078125 0.015625 0.10938 0.027343 0.14844 0.51563 0.60938 0.99219 1.1016 1.3789-0.62109 0.26562-1.2539 0.5-1.9062 0.71094zm10.512-10.953c-0.98828-1.418-2.7969-2.2109-4.582-2.543-0.11328-0.84375-1.168-1.9102-2.5-2.7734 0.039062 0.011719 0.082031 0.015625 0.11719 0.027344 0.27734 0.035156 0.66406 0.0625 1.0898 0.050781 0.90234 0.875 2.2578 1.418 3.4141 1.7344 1.0859 0.29297 2.2578 0.41797 3.3828 0.26562 0.078125 1.0742 0.003906 2.1367-0.20312 3.1797-0.24219 0.003906-0.48828 0.027343-0.71875 0.058593zm-0.76562-8.7852c-0.10938-0.027344-0.21875-0.066406-0.32812-0.09375-0.13281-0.039063-0.28516-0.066406-0.42969-0.10156 0.17578-0.050781 0.36328-0.12109 0.55469-0.21094 0.070313 0.13672 0.14062 0.26953 0.20312 0.40625zm-13.031 4.332c0.070312 0.09375 0.14844 0.18359 0.23047 0.27734-0.33984-0.03125-0.6875-0.050781-1.0352-0.039062 0.27734-0.066407 0.54688-0.13672 0.80469-0.23828zm-1.8828 5.5938c0.74609 0.42578 1.5938 0.73828 2.3398 0.9375 0.92188 0.24219 1.9062 0.39453 2.8711 0.33203 0.10938 0.28516 0.25781 0.54297 0.42969 0.77344-0.73047-0.078125-1.4805-0.078125-2.1953 0.066406-0.37891 0.078125-1.1172 0.30859-1.5781 0.70312-0.48828-0.21094-0.96875-0.36328-1.3984-0.48047-0.38281-0.10156-0.78516-0.17578-1.1836-0.23438-0.097656-0.015624-0.18359-0.027343-0.27734-0.03125-0.1875-0.027343-0.36719-0.050781-0.54688-0.054687-0.72266-0.050781-1.4219-0.027344-2.0781 0.10938-0.69531 0.14453-1.5352 0.49219-1.8516 1.1992-0.011719-0.003907-0.011719-0.015625-0.015626-0.027344-0.86719-1.25-2.3555-2.0078-3.9102-2.418 0.29688-0.34375 0.58203-0.67578 0.87891-1.0195 1.5352 1.0078 3.5977 1.4297 5.2773 1.4297h0.29688c1.0391-0.003906 2.4531-0.4375 2.9414-1.2852zm-5.9258-6.8789c1.5547 1.2031 3.8594 1.7773 5.6328 1.6797h0.015625c-0.62891 0.16797-1.7812 0.60937-1.7812 1.3516v0.53125c-1.4688-0.82031-3.3086-1.168-4.832-1.168h-0.29687c-0.24609 0-0.51563 0.03125-0.78906 0.082031 0.61328-0.84766 1.3086-1.6641 2.0508-2.4766zm12.938-77.348c2.543-24.59 38.082-34.008 46.223-7.6758 3.7852 12.258-3.957 42.266-16.828 59.516-3.4648 3.5703-7.2773 7.4375-11.398 10.562-5.4688 2.9336-11.383 3.1289-17.43-0.84375-0.09375-0.41406-0.18359-0.83594-0.27734-1.2461 0.13672-0.18359 0.25781-0.39062 0.31641-0.63672 5.3672-19.27-2.6328-40.02-0.60547-59.676zm-60.383 19.891c2.4609-6.8047 10.234-9.1328 16.707-9.2969 10.492-0.26562 17.809 6.4609 22.949 14.844 7.1562 11.688 9.1641 26.09 12.191 39.367-2.3438 0.70703-4.6133 1.7148-6.7383 2.9844-0.29688-0.21484-0.66016-0.41797-1.0664-0.59766-6.8672-6.5742-15.426-10.531-24.305-14.281-14.332-6.0625-26.027-15.668-19.738-33.02zm-37.164 56.602c1.3516-38.309 52.68-12.441 74.906-5.7031 0.23047 0.26562 0.48047 0.5 0.70312 0.77734 0.1875 0.25 0.48047 0.46484 0.80469 0.67578-1.4961 1.4219-2.8633 2.9805-4.0312 4.6328-1.7266 2.457-2.6328 4.7461-2.9219 6.8359-9.3125 10.68-19.207 21.098-32.145 27.285-24.16 11.555-38.031-14.023-37.316-34.504zm82.469 69.336c-4.8828 17.016-28.871 24.293-44.297 18.207-32.184-12.707 28.207-59.672 40.266-66.785 0.078125-0.03125 0.10938-0.082032 0.16406-0.11719 1.1172 0.64062 2.2695 1.2188 3.4883 1.6836 5.7656 14.195 4.1602 33.812 0.37891 47.012zm13.707 136.05c0.74609 1.1094 1.4805 2.2422 2.1758 3.3945-9.5859-6.5547-20.988-10.496-30.137-17.434 9.1172 4.0703 17.719 9.0469 26.824 13.562 0.24219 0.11719 0.64062 0.27344 1.1367 0.47656zm-65.66-50.926c19.969 11.93 41.922 23.668 57.562 40.715-10.234-5.3203-20.383-10.562-31.789-13.91-1.3516-0.39062-7.8047-0.41406-5.4062 2.6562 9.5234 12.207 24.137 16.746 36.562 24.605-11.109-4.3125-21.879-9.4805-31.297-16.871-12.238-9.5938-20.055-22.949-25.633-37.195zm131.61-51.316c0 20.238-10.59 39.41-21.418 56.113-3.5977 5.5703-7.4531 10.977-11.375 16.328 2.6328-5.7656 5.2383-11.523 7.8555-17.297 4.1211-7.6758 7.8906-15.477 10.574-23.715 0.73828-2.2422-3.1328-4.1484-6.3438-4.2812 5.6797-9.7734 12.438-18.922 20.707-27.148zm16.035-51.074c0.66016 7.7617-6.0352 13.477-12.098 16.871-11.539 6.4766-23.121 8.2695-33.305-1.1016-12.199-11.238-18.477-28.387-31.062-38.988 0.16016-0.13281 0.29687-0.27734 0.39844-0.44922 3.5898-5.8633 8.457-9.3984 13.957-11.223 8.9766 3.5234 19.812 3.7344 29.961 2.5039 13.461 5.2383 30.812 16.594 32.148 32.387z' />
  </svg>
);

export const IrisImage = ({ size = 70 }: { size?: number }) => (
  <svg
    width={`${size}px`}
    height={`${size}px`}
    version='1.1'
    viewBox='0 0 512 512'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='m414.81 295.37c-18.363-4.0625-37.164-4.2383-54.906-1.0586 0.61719-0.53125 1.2344-1.1484 1.8555-1.6758 6.5312-5.6484 13.242-11.477 18.449-18.98 5.6484-8.1211 12.184-20.832 11.477-35.488-0.79297-17.301-12.445-34.34-29.66-43.434-6.2695-3.3555-13.328-5.6484-20.922-6.9727 6.3555-4.2383 10.68-9.7969 11.562-18.008 0.089844-1.0586-0.26562-2.207-0.97266-3-0.70703-0.79297-1.6758-1.3242-2.8242-1.4141-14.125-0.79297-26.836-0.53125-38.398 0.79297 12.711-22.688 18.715-47.582 18.098-75.301 0-1.4141-0.79297-2.7383-2.0312-3.4414-1.2344-0.70703-2.7383-0.61719-3.9727 0.089844-13.598 8.3008-25.074 18.449-34.781 30.281-0.53125-20.215-7.8555-34.074-15.801-48.816-3.707-6.8867-7.5898-14.035-11.035-22.246-0.62109-1.6797-2.207-2.6484-3.8867-2.5625-1.6758 0.089843-3.1797 1.3242-3.6211 2.9141-4.0625 15.094-11.035 25.16-17.832 34.867-7.0625 10.152-13.859 20.125-16.949 34.691-9.5352-11.387-20.832-21.098-34.164-29.133-1.2344-0.70703-2.7383-0.79297-3.9727-0.089843-1.2344 0.70703-2.0312 1.9414-2.0312 3.4414-0.61719 28.07 5.6484 53.23 18.625 76.184-13.328-2.0312-28.16-2.5586-45.109-1.6758-1.0586 0.089843-2.1172 0.53125-2.8242 1.4141-0.70703 0.79297-1.0586 1.9414-0.97266 3 0.79297 7.5898 4.5898 12.887 10.238 16.949-5.2969 1.3242-10.328 3-14.918 5.4727-17.215 9.0938-28.777 26.129-29.574 43.434-0.70703 14.566 5.9141 27.367 11.477 35.488 5.1211 7.5039 11.918 13.328 18.449 18.98 1.3242 1.1484 2.5586 2.2969 3.7969 3.3555-16.418-2.3828-33.723-1.8555-50.492 1.8555-1.9414 0.44141-3.2656 2.207-3.0898 4.1484s1.6758 3.5312 3.707 3.707c18.625 1.4141 37.43 9.8867 53.055 23.922 13.77 12.27 25.246 28.777 34.074 48.992 1.9414 4.4141 3.707 8.8281 5.4727 13.328 3.4414 8.6523 6.9727 17.566 11.652 25.953-0.35156-0.44141 4.1484 6.6211 4.1484 6.6211 0.35156 0.53125 0.61719 1.0586 0.97266 1.5898 6.9727 9.7969 18.715 19.863 32.574 22.953v17.215c0 2.207 1.7656 3.9727 3.9727 3.9727 2.207 0 3.9727-1.7656 3.9727-3.9727l0.007813-126.94c2.1172-0.53125 4.3242-0.97266 6.707-0.97266 2.2969 0 4.3242 0.35156 6.3555 0.79297v127.21c0 2.207 1.7656 3.9727 3.9727 3.9727s3.9727-1.7656 3.9727-3.9727v-16.773c15.273-2.1172 28.336-12.977 35.84-23.48 0.35156-0.53125 0.61719-1.0586 0.97266-1.5898l4.8555-7.9453c4.3242-7.9453 7.7695-16.332 11.035-24.629 1.7656-4.5039 3.5312-9.0039 5.4727-13.328 8.9141-20.215 20.391-36.723 34.074-48.992 15.625-14.035 34.516-22.512 53.055-23.922 1.9414-0.17578 3.5312-1.6758 3.707-3.707 0.35156-1.8555-0.97266-3.6211-2.9141-4.0625zm-56.41-93.574c14.742 7.7695 24.719 22.156 25.336 36.723 0.53125 12.359-5.207 23.48-10.062 30.543-4.5898 6.6211-10.68 11.918-17.125 17.48-1.7656 1.5-3.5312 3.0898-5.2969 4.5898-13.508-7.4141-25.512-19.863-32.398-33.723-6.707-13.594-9.0938-29.043-6.9727-43.961 19.508 0.61719 24.098 15.359 25.07 24.539 0.17578 2.0312 1.9414 3.6211 3.9727 3.6211h0.44141c2.207-0.17578 3.7969-2.207 3.5312-4.3242-2.1172-21.008-15.801-32.84-36.633-31.867 0 0-7.2383 0.88281-10.68 1.5898 0.61719-0.70703 0.97266-1.5898 1.0586-2.4727 5.2969-1.9414 10.418-3.6211 15.359-5.207 4.7656-1.5898 9.4453-3.0898 13.77-4.6797 9.7969 0 20.566 1.8555 30.629 7.1484zm-156.51 9.5352c4.5039 0.61719 9.0039 1.6758 13.328 3 2.2969 2.1172 4.7656 4.2383 7.3281 6.2695-21.273 28.426-36.371 62.766-14.391 99.574-4.4141-3.707-9.0039-7.1484-13.949-10.152-10.68-6.707-22.953-11.477-36.016-14.391 14.832-8.2109 27.984-21.805 35.574-37.074 7.332-14.652 10.156-31.16 8.125-47.227zm16.684-4.8555c3-0.35156 6.4453-0.44141 10.418-0.26562 1.2344 0 2.3828-0.53125 3.1797-1.4141 5.207-6.2695 12.094-11.477 20.391-15.359 8.2969 3.8828 15.184 9.0938 20.215 15.359 0.79297 0.97266 2.0312 1.4141 3.1797 1.5 4.0625-0.089844 7.5039 0 10.504 0.35156-9.0938 8.5625-18.715 16.949-33.984 16.949-15.277-0.17188-24.898-8.5586-33.902-17.121zm85.188 7.3281c-2.0312 16.066 0.79297 32.574 8.0312 47.141 7.4141 14.918 20.125 28.25 34.516 36.457-10.328 3-20.039 7.0625-28.602 12.445-7.8555 4.9453-15.008 10.77-21.539 17.215 29.219-40.344 12.27-77.949-11.211-108.58 6.0938-2.1211 12.449-3.7969 18.805-4.6797zm40.078-40.695c-3.3555 8.6523-14.477 12.625-32.309 18.449-6.4453 2.1172-13.594 4.5898-20.922 7.5039-1.4141-0.26562-2.8242-0.44141-4.4141-0.53125 7.2383-7.5898 13.508-15.449 18.891-23.57 11.477-1.7656 24.273-2.3828 38.754-1.8516zm-23.129-74.859c-0.79297 38.047-15.449 70.531-44.051 98.867-2.207-2.3828-4.6797-4.6797-7.3281-6.707 10.594-24.277 15.977-43.078 17.832-58.352 8.918-13.414 20.039-24.715 33.547-33.809zm-78.566-11.652c5.6484-8.0312 11.387-16.332 15.715-27.453 2.2969 4.7656 4.7656 9.1797 7.0625 13.594 14.391 26.66 25.777 48.109-2.3828 113.17-2.6484-1.5898-5.4727-3.0898-8.4727-4.4141-1.0586-0.44141-2.207-0.44141-3.1797 0-0.44141 0.17578-0.79297 0.44141-1.2344 0.61719-5.1211-21.891-13.152-40.695-24.363-56.586 1.9375-17.207 9.0859-27.801 16.855-38.926zm-55.789 11.652c28.07 18.891 46.078 46.961 55.172 84.746-9.7969-6.3555-20.922-10.945-33.809-13.949-13.598-21.363-20.746-44.754-21.363-70.797zm-29.133 74.859c34.781-1.5 60.469 3.7969 79.801 16.242 0.26562-0.26562-6.6211 5.3867-9.7109 8.8281-6.3555-0.089844-11.387 0.44141-15.535 1.4141-7.8555-3.2656-15.449-5.8281-22.332-8.0312-17.746-5.7422-28.867-9.8008-32.223-18.453zm-25.246 93.484c-4.9453-7.1484-10.68-18.184-10.062-30.543 0.70703-14.566 10.594-28.953 25.336-36.723 7.0625-3.707 14.477-5.6484 21.715-6.6211 5.4727 2.3828 25.336 8.9141 29.219 10.238-0.26563 0-0.79297-0.089843-0.88281-0.089843-20.922-0.97266-34.516 10.859-36.633 31.867-0.17578 2.207 1.4141 4.1484 3.5312 4.3242h0.44141c2.0312 0 3.7969-1.5 3.9727-3.6211 0.88281-9.1797 5.6484-23.922 25.07-24.539 2.1172 14.918-0.26563 30.457-6.9727 43.961-6.8867 13.949-18.891 26.395-32.398 33.723-1.7656-1.5898-3.5312-3.0898-5.2969-4.5898-6.3594-5.4688-12.449-10.766-17.039-17.387zm107.87 145.83c-3-2.6484-5.7383-5.5625-8.1211-8.9141-6.9727-9.7109-11.301-20.746-15.977-32.484-1.8555-4.5898-3.6211-9.1797-5.5625-13.594-0.88281-2.0312-3.2656-2.9141-5.2969-2.0312-2.0312 0.88281-2.9141 3.2656-2.0312 5.2969 1.9414 4.4141 3.707 8.9141 5.4727 13.328 4.5898 11.652 9.3555 23.656 16.859 34.164 4.0625 5.7383 9.1797 10.68 14.652 14.566v15.715c-10.945-3.0898-20.305-11.387-26.043-19.422-6.9727-9.7109-11.301-20.832-15.977-32.484-1.8555-4.5898-3.6211-9.0938-5.5625-13.594-9.3555-21.273-21.539-38.664-36.105-51.73-10.594-9.4453-22.512-16.598-34.957-21.008 25.07-1.2344 49.789 4.5039 68.945 16.508 23.215 14.566 40.871 37.074 49.789 62.852l0.003906 32.832zm0-52.965c-2.9141-5.5625-6.1797-10.859-9.7969-15.891 0.61719 0.089844 1.2344 0.35156 1.8555 0.35156 2.2969 0 4.5898-0.79297 6.5312-2.2969 0.53125-0.35156 0.97266-0.70703 1.5-1.0586v18.895zm14.742-31.605c-8.0312 0-14.918 2.4727-21.188 7.5898-0.88281 0.79297-2.3828 0.61719-3.2656-0.26562-32.574-33.191-33.016-66.738-0.79297-110.17 6.4453 3.707 13.949 6.3555 23.215 6.3555 10.594 0 18.891-3.4414 25.953-8.1211 33.633 44.227 33.633 78.211 0.53125 111.93-0.88281 0.88281-2.3828 0.97266-3.2656 0.26562-6.3555-5.1172-13.242-7.5898-21.188-7.5898zm29.043 13.684c-5.8281 7.7695-10.77 16.156-14.742 25.07v-26.129c0.61719 0.44141 1.1484 0.70703 1.7656 1.2344 3.7109 3.0039 9.1836 2.8242 12.977-0.17578zm72.211-20.391c-14.566 13.066-26.746 30.457-36.105 51.73-1.9414 4.5039-3.7969 9.0938-5.5625 13.594-4.6797 11.742-9.0039 22.773-15.977 32.484-6.2695 8.8281-17.039 18.008-29.309 20.125v-14.301c6.707-4.1484 13.066-9.9766 17.922-16.773 7.5039-10.504 12.27-22.512 16.859-34.164 1.7656-4.5039 3.5312-8.9141 5.4727-13.328 0.88281-2.0312 0-4.3242-2.0312-5.2969-2.0312-0.88281-4.3242 0-5.2969 2.0312-1.9414 4.5039-3.7969 9.0039-5.5625 13.594-4.6797 11.742-9.0039 22.773-15.977 32.484-3.2656 4.5039-7.1484 8.4727-11.387 11.742v-24.98c7.4141-30.191 26.66-57.027 53.055-73.535 19.156-12.004 43.785-17.742 68.945-16.508-12.535 4.5039-24.453 11.656-35.047 21.102z' />
  </svg>
);