import axios from "axios";
import React from "react";
import { withTheme } from "styled-components";
import Section from "../Section";
import PercentageBar from "./components/PercentageBar";
import { DateTime } from "luxon";
import { useState } from "react";

import { FlexBoxVerticalWrapper, Descript } from "./StyledSessions";

/*
https://github.com/dev-launchers/platform__website/blob/master/src/components/modules/UserProfile/WeeksGlance/WeeksGlance.js
*/

// import { env } from "../../../../../utils/EnvironmentVariables";
const Sessions = ({ project, calendarId }) => {
  const [ events, setEvents ] = useState([])
  console.log(calendarId)
  let key = 'AIzaSyCgXZRjXOwT6DilHJyjj5B3svz6cETj_MI'
  React.useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?orderBy=updated&showDeleted=false&key=${key}`
      )
      .then((res) => {
        let items = [...res.data.items]
        let notCancelled = items.filter(item => item.end !== undefined)
        setEvents([...notCancelled])
        console.log(events)
      })
  }, [])

  console.log(events)
  return (
    <>
      <Section
        bgColor="#3C3B3C"
        Title="Sessions"
        Content={
          <>
            <Descript>
              oh no
            </Descript>

            <FlexBoxVerticalWrapper>
              {events.length > 0 && events.map((event, index) => {
                let time = DateTime.fromISO(event.start.dateTime, {
                  zone: event.start.timeZone
                }).setZone()
                return (
                  <PercentageBar
                    key={`${event.summary}${index}`}
                    apointmentTime={time}
                    title={event.summary}
                    link={event.htmlLink}
                  />)
              })}
            </FlexBoxVerticalWrapper>
          </>
        }
      />
    </>
  )
}

export default withTheme(Sessions);
