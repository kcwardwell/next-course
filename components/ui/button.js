import Link from "next/link"
import classes from "@/styles/button.module.css"

function Button({ link, onClick, children }) {
  if (link) {
    return (
      <Link className={classes.btn} href={link}>
        {children}
      </Link>
    )
  }
  return(
    <button className={classes.btn} onClick={onClick}>{children}</button>
  )
}

export default Button
