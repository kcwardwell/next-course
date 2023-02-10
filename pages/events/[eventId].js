import {EventContent, EventLogistics, EventSummary } from "@/components/event-detail"

import { getEventById } from "@/dummy-data"
import { useRouter } from "next/router"
import React from "react"

function EventDetailPage() {
  const router = useRouter()
  const eventId = router.query.eventId
  const event = getEventById(eventId)
  if (!event) {
    return <p>No event found</p>
  }
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.imageAlt}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  )
}

export default EventDetailPage
