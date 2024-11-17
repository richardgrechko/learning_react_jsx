export default function Button({ bg, color, text })
{
  // Let's go!
  return (
    <button style=`background-color: ${bg}; color: ${color}` value={`${text}`}></button>
  )
}

Button({bg: "#fff", color: "#888", "Text"})
