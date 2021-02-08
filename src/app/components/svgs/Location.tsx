import React from 'react';

interface Props {
  props?: any;
}

const Location: React.FC<Props> = props => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 4.66667C14.025 4.66667 15.6667 6.30836 15.6667 8.33334C15.6667 10.3583 14.025 12 12 12C9.97503 12 8.33334 10.3583 8.33334 8.33334C8.33334 6.30836 9.97503 4.66667 12 4.66667Z" stroke="#2B2F51" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 1C16.05 1 19.3333 4.28338 19.3333 8.33333C19.3333 11.6646 14.3721 20.0178 12.6111 22.6724C12.3872 23.0098 11.9325 23.1017 11.5942 22.8778C11.5131 22.824 11.4427 22.7536 11.3889 22.6724C9.62792 20.0178 4.66667 11.6646 4.66667 8.33333C4.66667 4.28338 7.95005 1 12 1Z" stroke="#2B2F51" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

export default Location;