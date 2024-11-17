export default function Button({ bg, color, text })
{
  // Let's go!
  return (
    <button style=`background-color: ${bg}; color: ${color}` value={`Background color: ${bg}, color: ${color}, Text: ${text}`}></button>
  )
}
