
import classes from '@/styles/event-item.module.css'
import Button from "../ui/button"
import DateIcon from "../icons/date-icon"
import AddressIcon from '../icons/address-icon'
import ArrowRightIcon from '../icons/arrow-right-icon'

function EventItem(props) {
    const { title, image, date, location, id } = props.event
    console.log('event', props.event)
    const localDate = new Date(date).toLocaleDateString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const formattedAddress = location.replace(', ','\n')

    const eventLink = `/events/${id}`
  return (
      <li key={id} className={classes.item}>
        <img src={ '/' + image} alt={title} />
        <div className={classes.content}>
            <div className={classes.summary}>
                <h2>{title}</h2>
            </div>
            <div className={classes.date}>
                <DateIcon />
                <time>{localDate}</time>
            </div>
            <div className={classes.address}>
                <AddressIcon />
                <address>{formattedAddress}</address>
            </div>
            <div className={classes.actions}>
                <Button link={eventLink}>
                    <span>Explore Event</span>
                    <span className={classes.icon}><ArrowRightIcon /></span></Button>
            </div>
        </div>
      </li>
    
  )
}

export default EventItem
