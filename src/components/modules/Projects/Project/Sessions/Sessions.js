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
const Sessions = ({ calendarId }) => {
  const [events, setEvents] = useState([]);
  let key = "AIzaSyCgXZRjXOwT6DilHJyjj5B3svz6cETj_MI";
  React.useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?orderBy=updated&showDeleted=false&key=${key}`
      )
      .then((res) => {
        let items = [...res.data.items];
        let notCancelled = items.filter((item) => item.end !== undefined);
        let now = DateTime.now().minus({ days: 6 });
        let currentEvents = notCancelled.filter(
          (item) => DateTime.fromISO(item.start.dateTime) > now
        );
        setEvents([...currentEvents]);
      });
  }, []);

  return (
    <>
      <Section
        bgColor="#3C3B3C"
        Title="Sessions"
        Content={
          <>
            <Descript>
              Join in on meetings going on right now or see what meetings are
              coming up.
            </Descript>

            <FlexBoxVerticalWrapper>
              {events.length > 0 &&
                events.map((event, index) => {
                  const startTime = DateTime.fromISO(
                    event.start.dateTime
                  ).toLocaleString(DateTime.TIME_SIMPLE);
                  const endTime = DateTime.fromISO(
                    event.end.dateTime
                  ).toLocaleString(DateTime.TIME_SIMPLE);
                  const date = DateTime.fromISO(
                    event.start.dateTime
                  ).toLocaleString();
                  const timeZone = DateTime.fromISO(
                    event.start.dateTime
                  ).zoneName;
                  const time = `${startTime}-${endTime} ${timeZone}`;

                  return (
                    <PercentageBar
                      key={`${event.summary}${index} ${date}`}
                      apointmentTime={time}
                      title={event.summary}
                      link={event.hangoutLink}
                      date={date}
                    />
                  );
                })}
              {events.length === 0 && (
                <h4>There are no meetings scheduled currently</h4>
              )}
            </FlexBoxVerticalWrapper>
          </>
        }
      />
    </>
  );
};

export default withTheme(Sessions);
