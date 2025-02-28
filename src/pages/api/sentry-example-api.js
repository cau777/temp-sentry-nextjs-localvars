// A faulty API route to test Sentry's error monitoring

const willThrow = () => {
  const hey = 12
  const value = 1
  const str = "some string"
  const intermediate = hey + value
  console.log(hey, value, str)
  throw new Error("Intentional error on Sentry reproduction")
}

export default function handler(_req, res) {
  willThrow()
  res.status(200).json({ name: "John Doe" });
}
