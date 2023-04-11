export default async function (event) {
  const { name, time } = event.payload
  const t = new Date(time)
  const curHr = t.getHours()
  let response = ''
  if (curHr < 12) {
    response = `Good Morning ${name}`
  } else if (curHr < 18) {
    response = `Good Afternoon ${name}`
  } else {
    response = `Good Evening ${name}`
  }
  return {
    reply: [
      {
        payload: response,
      },
    ],
  }
}
