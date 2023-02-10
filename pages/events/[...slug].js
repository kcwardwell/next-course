import EventList from "@/components/events/event-list";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import React from "react";

function FilteredEventPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const numYear = +filterData[0];
  const numMonth = filterData[1];
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid Filter</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if(!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found</p>
  }

  return (
    <div>
      <EventList events={filteredEvents} />
    </div>
  );
}

export default FilteredEventPage;
