const createEvent = (title, date, timeZone) => {
  return JSON.stringify({
    summary: `${title}`,
    description: `- Study time tracker - ${title}`,
    start: {
      dateTime: `${date}`,
      timeZone: `${timeZone}`,
    },
    end: {
      dateTime: `${date}`,
      timeZone: `${timeZone}`,
    },
  });
};

export default createEvent;
