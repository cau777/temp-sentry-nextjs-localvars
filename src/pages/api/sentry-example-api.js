import {captureException} from "@sentry/nextjs";

const willThrow = () => {
  const hey = 12
  const value = 1
  const str = "some string"
  console.log(hey, value, str)
  throw new Error("Intentional error on Sentry reproduction 3")
}

export default function handler(_req, res) {
  try {
    willThrow()
  } catch (e) {
    captureException(e)
  }

  res.status(200).json({ name: "John Doe" });
}
