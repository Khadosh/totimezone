const defaultData = {
  date: new Date(),
  tz: "America/New_York",
  hours: 8,
  minutes: 0,
  seconds: 0,
};

export const dateToTZ = (data = defaultData) => {
  const { date, tz, hours, minutes, seconds } = data;
  const tzString = new Date(date.setHours(hours, minutes, seconds)).toLocaleString("en-US", {
    timeZone: tz,
  });

  return new Date(tzString);
};
