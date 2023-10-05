import { SVGProps } from "react"
const SelectArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#5A5A89"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m19 9-6.963 6.963L5.074 9"
    />
  </svg>
)
export default SelectArrow
